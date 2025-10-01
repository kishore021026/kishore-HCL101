import '../../styles/InsuranceTypes.css';

function InsuranceTypes() {
  return (
    <div className="insurance-wrapper">
      <h2>🛡️ Types of Insurance</h2>
       {/* Federal Section Heading */}
      <div className="section-label">Federal Insurance</div>
      
      <div className="insurance-row">
        <div className="insurance-card">
          <h3>Medicare</h3>
          <ul>
            <li>Age ≥ 65</li>
            <li>Disabled &lt; 65</li>
            <li>ESRD (Kidney Disease)</li>
            <li>FECA (Federal Compensation)</li>
          </ul>
          <p><strong>Parts:</strong></p>
          <ul className="sub-list">
            <li>A – Inpatient</li>
            <li>B – Outpatient</li>
            <li>C – Combo of A & B</li>
            <li>D – Prescribed Drugs</li>
          </ul>
        </div>

        <div className="insurance-card">
          <h3>Medicaid</h3>
          <ul>
            <li>Low-income families</li>
            <li>Pregnant women</li>
          </ul>
          <p><strong>Types:</strong></p>
          <ul className="sub-list">
            <li>QMB – Qualified Beneficiary</li>
            <li>SLMB – Low-Income Beneficiary</li>
          </ul>
          <div className="note">
            Must not bill the patient. Poverty level varies by state.
          </div>
        </div>

        <div className="insurance-card">
          <h3>Tricare</h3>
          <ul>
            <li>Military & Veterans (family-dependent)</li>
          </ul>
          <p><strong>Types:</strong></p>
          <ul className="sub-list">
            <li>CHAMPVA – Veterans Affairs</li>
            <li>CHAMPUS – Uniformed Services</li>
          </ul>
        </div>
      </div>

      {/* Commercial Insurance */}
      <div className="insurance-row">
        <div className="insurance-card commercial-header">
          <h3>Commercial Insurance</h3>
          <p>Privately managed plans for individuals and employers.</p>
        </div>

        <div className="insurance-card">
          <h3>Workers Compensation</h3>
          <p>Coverage for injuries or damages sustained during work-related activities.</p>
          <ul>
            <li>Employer-funded insurance</li>
            <li>Protects employees during job-related incidents</li>
            <li>Mandatory in most U.S. states</li>
          </ul>
        </div>

        <div className="insurance-card">
          <h3>Auto Insurance</h3>
          <p>Contract between the insured party and the insurance company for vehicle-related risks.</p>
          <ul>
            <li>Covers accidents, theft, and liability</li>
            <li>Required for vehicle registration</li>
            <li>Policy terms vary by provider</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default InsuranceTypes;
