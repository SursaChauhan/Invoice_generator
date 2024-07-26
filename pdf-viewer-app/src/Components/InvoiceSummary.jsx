// InvoiceSummary.js
import React from 'react';
import './InvoiceSummary.css';


let data ={
    currency: 'INR',
        invBasicAmt : 15000.00,
        basicTaxAmt : 1000.00,
        invTotalAmt:16000.00,
        tdsAmt:15.00,
        netPayableAmt:16000.00,
        basicAmtDiff:'NA'
}
const InvoiceSummary = () => {

    return (
        <div className="invoice-summary">
            <div className="invoice-item">
                <span className="label">Currency:</span>
                <span className="value">{data.currency}</span>
            </div>
            <div className="invoice-item">
                <span className="label">Inv Basic Amt:</span>
                <span className="value">{data.invBasicAmt.toFixed(2)}</span>
            </div>
            <div className="invoice-item">
                <span className="label">Basic Tax Amt:</span>
                <span className="value">{data.basicTaxAmt.toFixed(2)}</span>
            </div>
            <div className="invoice-item">
                <span className="label">Inv Total Amt:</span>
                <span className="value">{data.invTotalAmt.toFixed(2)}</span>
            </div>
            <div className="invoice-item">
                <span className="label">TDS Amt:</span>
                <span className="value">{data.tdsAmt.toFixed(2)}</span>
            </div>
            <div className="invoice-item">
                <span className="label">Net Payable Amt:</span>
                <span className="value">{data.netPayableAmt.toFixed(2)}</span>
            </div>
            <div className="invoice-item">
                <span className="label">Basic Amt Diff:</span>
                <span className="value">{data.basicAmtDiff}</span>
            </div>
            <div className="invoice-actions">
                <select className="action-select">
                    <option value="">Select Action</option>
                    <option value="approve">Approve</option>
                    <option value="reject">Reject</option>
                </select>
                <button className="approve-btn">Approve</button>
                <button className="reject-btn">Reject</button>
            </div>
        </div>
    );
};

export default InvoiceSummary;
