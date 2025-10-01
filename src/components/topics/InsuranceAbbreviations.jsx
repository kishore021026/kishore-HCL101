import '../../styles/InsuranceAbbreviations.css';

function InsuranceAbbreviations() {
  return (
    <div className="abbreviation-wrapper">
      <h2>🔤 Insurance Abbreviations</h2>

      <div className="abbreviation-list">
        <div className="abbreviation-card">
          <h3>NPI – National Provider Identification</h3>
          <ul>
            <li>Unique 10-digit number</li>
            <li>Issued by CMS (Centers for Medicare & Medicaid Services)</li>
            <li>Used for financial transactions</li>
            <li>Required for doctors, nurses, DME providers, etc.</li>
          </ul>
        </div>

        <div className="abbreviation-card">
          <h3>SSN – Social Security Number</h3>
          <ul>
            <li>Unique 9-digit number</li>
            <li>Identifies U.S. citizens</li>
            <li>Required to work in the U.S.</li>
          </ul>
        </div>

        <div className="abbreviation-card">
          <h3>OOP – Out of Pocket</h3>
          <ul>
            <li>Optional patient payment</li>
            <li>If met, insurance pays 100%</li>
            <li>If not, standard split (e.g., 80–20) applies</li>
          </ul>
        </div>

        <div className="abbreviation-card">
          <h3>COB – Coordination of Benefits</h3>
          <ul>
            <li>Used when patient has ≥ 2 insurances</li>
            <li>Determines primary and secondary payers</li>
            <li>Patient must inform unknown primary</li>
            <li>Prevents duplicate billing</li>
          </ul>
        </div>

        <div className="abbreviation-card">
          <h3>EOB – Explanation of Benefits</h3>
          <ul>
            <li>Document sent to patient</li>
            <li>Explains what’s covered and denied</li>
            <li>Sent after billing the insurance</li>
          </ul>
        </div>

        <div className="abbreviation-card">
          <h3>ERA – Electronic Remittance Advice</h3>
          <ul>
            <li>Digital version of EOB</li>
            <li>Sent to providers</li>
            <li>Includes claim status and denial reasons</li>
          </ul>
        </div>

        <div className="abbreviation-card">
          <h3>EFT – Electronic Fund Transfer</h3>
          <ul>
            <li>Fast, secure payment method</li>
            <li>Available 24/7</li>
            <li>Transparent and traceable</li>
          </ul>
        </div>

        <div className="abbreviation-card">
          <h3>Billed Amount vs Allowed Amount</h3>
          <ul>
            <li>Billed: Total amount charged</li>
            <li>Allowed: Portion covered by insurance</li>
          </ul>
        </div>

        <div className="abbreviation-card">
          <h3>Authorization</h3>
          <ul>
            <li><strong>Prior Auth:</strong> Before service or equipment</li>
            <li><strong>Retro Auth:</strong> After emergency service</li>
          </ul>
        </div>

        <div className="abbreviation-card">
          <h3>HIPAA – Health Insurance Portability and Accountability Act</h3>
          <ul>
            <li>Protects patient health information</li>
            <li>Ensures privacy and data security</li>
            <li>Applies to all healthcare entities</li>
          </ul>
        </div>

        <div className="abbreviation-card">
          <h3>PHI Breach – Patient Health Information</h3>
          <ul>
            <li>Must notify HHS and patient within 60 days</li>
            <li>Penalties range from $100 to $50,000</li>
            <li>Violates patient trust</li>
          </ul>
        </div>

        <div className="abbreviation-card">
          <h3>ABN – Advance Beneficiary Notice</h3>
          <ul>
            <li>Form CMS-R131</li>
            <li>Only for Medicare patients</li>
            <li>Lists non-covered services</li>
          </ul>
        </div>

        <div className="abbreviation-card">
          <h3>AOB – Assignment of Benefits</h3>
          <ul>
            <li>Signed consent by patient</li>
            <li>Allows direct billing to insurance</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default InsuranceAbbreviations;
