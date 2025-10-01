import '../../styles/BasicDenials.css';

function BasicDenials() {
  return (
    <div className="denial-wrapper">
      <h2>🚫 Basic Denials</h2>

      <div className="denial-box">
        <ul>
          <li><strong>Insufficient Information:</strong> Missing patient details, diagnosis codes, or documentation required for claim processing.</li>

          <li><strong>Excluded/Non-Coverable Charges:</strong> Services or items not covered under the patient’s insurance policy.</li>

          <li><strong>Patient Eligibility:</strong> Patient not eligible for coverage on the date of service, or deductible not yet met.</li>

          <li><strong>Duplicate Bill Submission:</strong> Same claim submitted more than once without correction or justification.</li>

          <li><strong>TFL – Timely Filing Limit:</strong> Claim submitted after the allowed time window defined by the payer.</li>

          <li><strong>Out-of-Network Provider:</strong> Provider is not contracted with the patient’s insurance plan.</li>

          <li><strong>Authorization Denial:</strong> Service or equipment was not pre-approved by the insurance company.</li>

          <li><strong>Modifier Denial:</strong> Incorrect or missing HCPCS modifiers used to describe equipment or service details (e.g., <code>LT</code> – Left, <code>RT</code> – Right, <code>RR</code> – Rented, <code>NU</code> – New, <code>UE</code> – Used Equipment).</li>
        </ul>
      </div>
    </div>
  );
}

export default BasicDenials;
