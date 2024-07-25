import React from 'react';
import { useForm } from 'react-hook-form';
import './FormComponent.css';

const FormComponent = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission logic here
  };

  return (
    <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
      {/* Form Fields */}
      <div className="form-section">
        <label>Currency:</label>
        <input {...register('currency')} />
      </div>
      <div className="form-section">
        <label>Inv Basic Amt:</label>
        <input type="number" {...register('invBasicAmt')} />
      </div>
      <div className="form-section">
        <label>Inv Tax Amt:</label>
        <input type="number" {...register('invTaxAmt')} />
      </div>
      <div className="form-section">
        <label>Advance Paid:</label>
        <input type="number" {...register('advancePaid')} />
      </div>
      <div className="form-section">
        <label>TCS Applicable:</label>
        <label><input type="radio" value="Yes" {...register('tcsApplicable')} /> Yes</label>
        <label><input type="radio" value="No" {...register('tcsApplicable')} /> No</label>
      </div>
      <div className="form-section">
        <label>Net Payable Amt:</label>
        <input type="number" {...register('netPayableAmt')} />
      </div>

      {/* Alternate Payee Details */}
      <div className="form-section">
        <label>Alternate Payee 1:</label>
        <input {...register('alternatePayee1')} />
      </div>
      <div className="form-section">
        <label>Alternate Payee 2:</label>
        <input {...register('alternatePayee2')} />
      </div>
      <div className="form-section">
        <label>City:</label>
        <input {...register('city')} />
      </div>
      <div className="form-section">
        <label>Street:</label>
        <input {...register('street')} />
      </div>
      <div className="form-section">
        <label>Country:</label>
        <input {...register('country')} />
      </div>
      <div className="form-section">
        <label>Bank Key / IFSC Code:</label>
        <input {...register('bankKey')} />
      </div>
      <div className="form-section">
        <label>Bank Acc No:</label>
        <input {...register('bankAccNo')} />
      </div>
      <div className="form-section">
        <label>Reference:</label>
        <input {...register('reference')} />
      </div>

      {/* Line Item Details */}
      <div className="line-item-container">
        <div className="form-section">
          <label>Select Debit:</label>
          <select {...register('selectDebit')}>
            <option value="debit">Debit</option>
            <option value="credit">Credit</option>
          </select>
        </div>
        <div className="form-section">
          <label>GL Desc:</label>
          <input {...register('glDesc')} />
        </div>
        <div className="form-section">
          <label>GL Code:</label>
          <input {...register('glCode')} />
        </div>
        <div className="form-section">
          <label>Text:</label>
          <input {...register('text')} />
        </div>
        <button type="button">Calculate</button>
        <button type="button">Add</button>
      </div>

      {/* Bottom Actions */}
      <div className="form-actions">
        <button type="submit">Save to Draft</button>
        <button type="button">Reject</button>
        <button type="button">Approve</button>
      </div>
    </form>
  );
};

export default FormComponent;
