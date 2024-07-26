import React, { useState } from 'react';
import axios from 'axios';
import './Invoice.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Invoice = () => {
    const [currency, setCurrency] = useState("INR");
    const [invBasicAmt, setInvBasicAmt] = useState(15000.00);
    const [invTaxAmt, setInvTaxAmt] = useState(1000.00);
    const [totalInvAmt, setTotalInvAmt] = useState(16000.00);
    const [advancePaid, setAdvancePaid] = useState(0.00);
    const [tcsApplicable, setTcsApplicable] = useState(false);
    const [netPayableAmt, setNetPayableAmt] = useState(16000.00);
    const [alternatePayee1, setAlternatePayee1] = useState("");
    const [alternatePayee2, setAlternatePayee2] = useState("");
    const [city, setCity] = useState("");
    const [street, setStreet] = useState("");
    const [country, setCountry] = useState("");
    const [bankKey, setBankKey] = useState("");
    const [bankAccNo, setBankAccNo] = useState("");
    const [reference, setReference] = useState("");

    const handleAdd = async () => {
        console.log(currency,invBasicAmt,invTaxAmt,advancePaid,netPayableAmt,alternatePayee1,alternatePayee2,city,street,country,bankAccNo,bankKey,reference)

        try {
            await axios.post('https://invoice-backend-6.onrender.com/form/submit', {
                currency,
                basicamt: invBasicAmt,
                taxamt: invTaxAmt,
                advancepaid: advancePaid,
                netpayable: netPayableAmt,
                alternatepayee1: alternatePayee1,
                alternatepayee2: alternatePayee2,
                city,
                street,
                country,
                ifsccode: bankKey,
                accno: bankAccNo,
                reference,
            });
            toast.success('Data submitted successfully!');
        } catch (error) {
            console.error('Error submitting data:', error);
            toast.error("Failed to submit data");
           
        }
    };

    return (
        <div className='Invoice-container'>
            <h2>Invoice Details</h2>
            <div className='invoice-amount-details'>
                <div>
                    <label htmlFor="currency">Currency *:</label>
                    <p id="currency">{currency}</p>
                </div>

                <div>
                    <label htmlFor="invBasicAmt">Inv Basic Amt *:</label>
                    <p id="invBasicAmt">{invBasicAmt.toFixed(2)}</p>
                </div>

                <div>
                    <label htmlFor="invTaxAmt">Inv Tax Amt *:</label>
                    <p id="invTaxAmt">{invTaxAmt.toFixed(2)}</p>
                </div>

                <div>
                    <label htmlFor="totalInvAmt">Total Inv Amt [Inclu. of tax] *:</label>
                    <p id="totalInvAmt">{totalInvAmt.toFixed(2)}</p>
                </div>

                <div>
                    <label htmlFor="advancePaid">Advance Paid *:</label>
                    <input
                        type="number"
                        id="advancePaid"
                        value={advancePaid}
                        onChange={(e) => setAdvancePaid(parseFloat(e.target.value))}
                    />
                </div>

                <div className='tcs-applicable'>
                    <label>TCS Applicable *:</label>
                    <div className="radio-group">
                        <input
                            type="radio"
                            id="tcsYes"
                            name="tcsApplicable"
                            checked={tcsApplicable}
                            onChange={() => setTcsApplicable(true)}
                        />
                        <label htmlFor="tcsYes">Yes</label>
                        
                        <input
                            type="radio"
                            id="tcsNo"
                            name="tcsApplicable"
                            checked={!tcsApplicable}
                            onChange={() => setTcsApplicable(false)}
                        />
                        <label htmlFor="tcsNo">No</label>
                    </div>
                </div>

                <div>
                    <label htmlFor="netPayableAmt">
                        Net Payable Amt [Exclu. of TDS] *
                    </label>
                    <p id="netPayableAmt">{netPayableAmt.toFixed(2)}</p>
                </div>
            </div>

            <h2>Alternate Payee Details</h2>
            <div className="alternate-payee-details">
                <div>
                    <label htmlFor="alternatePayee1">Alternate Payee 1:</label>
                    <input
                        type="text"
                        id="alternatePayee1"
                        value={alternatePayee1}
                        onChange={(e) => setAlternatePayee1(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="alternatePayee2">Alternate Payee 2:</label>
                    <input
                        type="text"
                        id="alternatePayee2"
                        value={alternatePayee2}
                        onChange={(e) => setAlternatePayee2(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="city">City:</label>
                    <input
                        type="text"
                        id="city"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="street">Street:</label>
                    <input
                        type="text"
                        id="street"
                        value={street}
                        onChange={(e) => setStreet(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="country">Country:</label>
                    <input
                        type="text"
                        id="country"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="bankKey">Bank Key / IFSC Code:</label>
                    <input
                        type="text"
                        id="bankKey"
                        value={bankKey}
                        onChange={(e) => setBankKey(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="bankAccNo">Bank Acc No:</label>
                    <input
                        type="text"
                        id="bankAccNo"
                        value={bankAccNo}
                        onChange={(e) => setBankAccNo(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="reference">Reference:</label>
                    <input
                        type="text"
                        id="reference"
                        value={reference}
                        onChange={(e) => setReference(e.target.value)}
                    />
                </div>
            </div>

            <div className="line-item-details">
                <h2 className="section-header">LINE ITEM DETAILS</h2>
                <div className="table-container">
                    <div className="table-header">
                        <input type="checkbox" />
                        <button className="icon-button">&#9998;</button>
                        <button className="icon-button">&#x21bb;</button>
                        <span className="column-title">Select Debit</span>
                        <span className="column-title">GL Desc</span>
                        <span className="column-title">GL Code</span>
                        <span className="column-title">Text (Do not enter special character)</span>
                    </div>

                    <div className="table-row">
                        <input type="checkbox" />
                        <button className="icon-button">&#x1f5d1;</button>
                        <select className="select">
                            <option>Debit</option>
                            <option>Credit</option>
                        </select>
                        <select className="select">
                            <option>Original cost-Plant & Machinery</option>
                            <option>Maintenance</option>
                        </select>
                        <span className="gl-code">0020200000</span>
                        <input type="text" className="text-input" />
                    </div>
                </div>

                <div className="pagination-container">
                    <button className="pagination-button">&#8249;</button>
                    <span className="page-number">1</span>
                    <button className="pagination-button">&#8250;</button>
                    <select className="select">
                        <option>200 / page</option>
                        <option>100 / page</option>
                    </select>
                </div>

                <div className="action-buttons">
                    <button className="calculate-button">Calculate</button>
                    <button className="add-button" onClick={handleAdd}>Add</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Invoice;
