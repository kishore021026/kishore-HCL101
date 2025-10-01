import '../../styles/DMEandAppeals.css';

function DMEandAppeals() {
  return (
    <div className="dme-wrapper">
      <h2>📋 Appeals & Durable Medical Equipment</h2>

      <div className="dme-box">
        <h3>✅ Approval</h3>
        <ul>
          <li>Reconsideration of a denied claim.</li>
          <li>Triggered when denial was incorrect or lacked justification.</li>
        </ul>

        <h3>🔁 Re-Submission</h3>
        <ul>
          <li>Review for missing attachments or incorrect patient/provider info.</li>
          <li>Ensure proper HCPCS modifiers are included.</li>
        </ul>

        <h3>🛠️ DME – Durable Medical Equipment</h3>
        <p>Medical equipment prescribed for long-term use. Standard coverage is 3 years, but CPAP machines are covered for up to 5 years.</p>

        <ul>
          <li><strong>Repair:</strong> Covered by insurance if medically necessary and cost-effective.</li>
          <li><strong>Maintenance:</strong> Includes patch-ups and wear & tear. Not covered unless medically justified.</li>
          <li><strong>Replacement:</strong> Allowed when equipment is lost, stolen, or no longer functional due to wear, and a new prescription is provided. Coverage depends on payer policy and medical necessity.</li>
        </ul>
      </div>
    </div>
  );
}

export default DMEandAppeals;
