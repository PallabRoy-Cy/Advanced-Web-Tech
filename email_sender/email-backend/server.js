// server.js
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Create reusable transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail', // You can change this to other services
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
};

// Test email configuration endpoint
app.get('/api/test', (req, res) => {
  const transporter = createTransporter();
  transporter.verify((error, success) => {
    if (error) {
      res.status(500).json({ 
        message: 'Email configuration error', 
        error: error.message 
      });
    } else {
      res.json({ 
        message: 'Server is ready to send emails',
        configured: true 
      });
    }
  });
});

// Send multiple emails endpoint
app.post('/api/send-emails', async (req, res) => {
  const { recipients, subject, message } = req.body;

  // Validate input
  if (!recipients || !Array.isArray(recipients) || recipients.length === 0) {
    return res.status(400).json({ 
      message: 'Please provide at least one recipient' 
    });
  }

  if (!subject || !message) {
    return res.status(400).json({ 
      message: 'Subject and message are required' 
    });
  }

  const transporter = createTransporter();
  const results = {
    sent: [],
    failed: [],
    successCount: 0,
    failedCount: 0
  };

  // Send emails one by one
  for (const recipient of recipients) {
    try {
      const mailOptions = {
        from: `"Email Sender" <${process.env.EMAIL_USER}>`,
        to: recipient,
        subject: subject,
        text: message,
        html: `
          <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #4F46E5; border-bottom: 2px solid #4F46E5; padding-bottom: 10px;">
              ${subject}
            </h2>
            <div style="margin-top: 20px; line-height: 1.6; color: #333;">
              ${message.replace(/\n/g, '<br>')}
            </div>
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
              <p>This email was sent via Multiple Email Sender System</p>
            </div>
          </div>
        `
      };

      await transporter.sendMail(mailOptions);
      results.sent.push({ to: recipient, subject, status: 'success' });
      results.successCount++;
      
      console.log(`✓ Email sent successfully to ${recipient}`);
    } catch (error) {
      results.failed.push({ 
        to: recipient, 
        error: error.message 
      });
      results.failedCount++;
      
      console.error(`✗ Failed to send email to ${recipient}:`, error.message);
    }
  }

  // Determine response status
  if (results.successCount === 0) {
    return res.status(500).json({
      message: 'Failed to send all emails',
      ...results
    });
  }

  res.json({
    message: `Successfully sent ${results.successCount} out of ${recipients.length} emails`,
    ...results
  });
});

// Send single email endpoint
app.post('/api/send-email', async (req, res) => {
  const { to, subject, message } = req.body;

  if (!to || !subject || !message) {
    return res.status(400).json({ 
      message: 'Recipient, subject, and message are required' 
    });
  }

  const transporter = createTransporter();

  try {
    const mailOptions = {
      from: `"Email Sender" <${process.env.EMAIL_USER}>`,
      to: to,
      subject: subject,
      text: message,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2>${subject}</h2>
          <p>${message.replace(/\n/g, '<br>')}</p>
        </div>
      `
    };

    const info = await transporter.sendMail(mailOptions);
    
    res.json({
      message: 'Email sent successfully',
      messageId: info.messageId,
      recipient: to
    });
  } catch (error) {
    res.status(500).json({
      message: 'Failed to send email',
      error: error.message
    });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString() 
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`
╔════════════════════════════════════════╗
║  Email Sender Backend Server          ║
║  Running on http://localhost:${PORT}    ║
╚════════════════════════════════════════╝

Available endpoints:
  GET  /health            - Health check
  GET  /api/test          - Test email configuration
  POST /api/send-email    - Send single email
  POST /api/send-emails   - Send multiple emails

Make sure to configure your .env file with:
  EMAIL_USER=your-email@gmail.com
  EMAIL_PASS=your-app-password
  PORT=3001
  `);
});