import React from "react";
import axios from "axios";
import "./InvoiceDownload.css";

const InvoiceDownload = () => {

  const handleDownload = async () => {
    const response = await axios.get("http://localhost:5000/download-invoice", {
      responseType: "blob",
    });

    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "invoice.pdf");
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <div className="invoice-container">
      <h1>Invoice Generator</h1>
      <p>Click the button below to download your styled invoice as a PDF.</p>
      <button className="download-btn" onClick={handleDownload}>
        Download Invoice PDF
      </button>
    </div>
  );
};

export default InvoiceDownload;