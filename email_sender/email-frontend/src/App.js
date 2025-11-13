import React, { useState } from 'react';
import { Mail, Send, Plus, X, AlertCircle, CheckCircle, Loader } from 'lucide-react';

export default function EmailSender() {
  const [recipients, setRecipients] = useState(['']);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [sentEmails, setSentEmails] = useState([]);

  const addRecipient = () => {
    setRecipients([...recipients, '']);
  };

  const removeRecipient = (index) => {
    if (recipients.length > 1) {
      setRecipients(recipients.filter((_, i) => i !== index));
    }
  };

  const updateRecipient = (index, value) => {
    const updated = [...recipients];
    updated[index] = value;
    setRecipients(updated);
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSendEmails = async () => {
    // Validate inputs
    const validRecipients = recipients.filter(email => email.trim() && validateEmail(email));
    
    if (validRecipients.length === 0) {
      setStatus({ type: 'error', message: 'Please add at least one valid email address' });
      return;
    }

    if (!subject.trim()) {
      setStatus({ type: 'error', message: 'Please enter a subject' });
      return;
    }

    if (!message.trim()) {
      setStatus({ type: 'error', message: 'Please enter a message' });
      return;
    }

    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      // Simulate API call to backend
      const response = await fetch('http://localhost:3001/api/send-emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          recipients: validRecipients,
          subject,
          message,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ 
          type: 'success', 
          message: `Successfully sent ${data.successCount} email(s)!` 
        });
        setSentEmails([...sentEmails, ...data.sent]);
        // Reset form
        setRecipients(['']);
        setSubject('');
        setMessage('');
      } else {
        setStatus({ type: 'error', message: data.message || 'Failed to send emails' });
      }
    } catch (error) {
      setStatus({ 
        type: 'error', 
        message: 'Error: Could not connect to server. Make sure the backend is running on port 3001.' 
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <Mail className="w-8 h-8 text-indigo-600" />
            <h1 className="text-3xl font-bold text-gray-800">Multiple Email Sender</h1>
          </div>

          {/* Status Messages */}
          {status.message && (
            <div className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
              status.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
            }`}>
              {status.type === 'success' ? (
                <CheckCircle className="w-5 h-5" />
              ) : (
                <AlertCircle className="w-5 h-5" />
              )}
              <span>{status.message}</span>
            </div>
          )}

          {/* Recipients */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Recipients
            </label>
            {recipients.map((recipient, index) => (
              <div key={index} className="flex gap-2 mb-3">
                <input
                  type="email"
                  value={recipient}
                  onChange={(e) => updateRecipient(index, e.target.value)}
                  placeholder="recipient@example.com"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                />
                {recipients.length > 1 && (
                  <button
                    onClick={() => removeRecipient(index)}
                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>
            ))}
            <button
              onClick={addRecipient}
              className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium"
            >
              <Plus className="w-4 h-4" />
              Add Another Recipient
            </button>
          </div>

          {/* Subject */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Subject
            </label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Enter email subject"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
            />
          </div>

          {/* Message */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Message
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter your message"
              rows="8"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none resize-none"
            />
          </div>

          {/* Send Button */}
          <button
            onClick={handleSendEmails}
            disabled={loading}
            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition flex items-center justify-center gap-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <Loader className="w-5 h-5 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Send Emails
              </>
            )}
          </button>

          {/* Sent Emails History */}
          {sentEmails.length > 0 && (
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Sent History</h2>
              <div className="space-y-2">
                {sentEmails.slice(-5).reverse().map((email, index) => (
                  <div key={index} className="bg-gray-50 p-3 rounded-lg text-sm">
                    <span className="font-medium text-gray-700">{email.to}</span>
                    <span className="text-gray-500 mx-2">•</span>
                    <span className="text-gray-600">{email.subject}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Backend Instructions */}
        <div className="mt-6 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Backend Setup Instructions</h2>
          <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm space-y-4">
            <div>
              <p className="text-gray-700 mb-2">1. Create a new directory and initialize Node.js:</p>
              <code className="block bg-gray-800 text-green-400 p-3 rounded">
                mkdir email-backend && cd email-backend<br/>
                npm init -y
              </code>
            </div>
            
            <div>
              <p className="text-gray-700 mb-2">2. Install required packages:</p>
              <code className="block bg-gray-800 text-green-400 p-3 rounded">
                npm install express cors nodemailer dotenv
              </code>
            </div>
            
            <div>
              <p className="text-gray-700 mb-2">3. Create server.js file with the backend code (see below)</p>
            </div>
            
            <div>
              <p className="text-gray-700 mb-2">4. Create .env file with your email credentials:</p>
              <code className="block bg-gray-800 text-green-400 p-3 rounded">
                EMAIL_USER=your-email@gmail.com<br/>
                EMAIL_PASS=your-app-password<br/>
                PORT=3001
              </code>
            </div>
            
            <div>
              <p className="text-gray-700 mb-2">5. Start the server:</p>
              <code className="block bg-gray-800 text-green-400 p-3 rounded">
                node server.js
              </code>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}