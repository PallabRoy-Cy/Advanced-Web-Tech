// server.js
const express = require("express");
const puppeteer = require("puppeteer");
const fs = require("fs");
const path = require("path");
const app = express();
const cors = require("cors");

app.use(cors());


app.get("/download-invoice", async (req, res) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const html = fs.readFileSync(path.join(__dirname, "invoice.html"), "utf8");
  await page.setContent(html, { waitUntil: "networkidle0" });

  const pdfBuffer = await page.pdf({ format: "A4", printBackground: true });
  await browser.close();

  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", "attachment; filename=invoice.pdf");
  res.send(pdfBuffer);
});

app.listen(5000, () => console.log("Backend running on http://localhost:5000"));