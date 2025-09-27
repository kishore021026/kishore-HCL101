import '../../styles/CustomerGroups.css';

function CustomerGroups() {
  return (
    <div className="groups-wrapper">
      <h2>👥 Apria’s Customer Groups</h2>

      <div className="group-card">
        <h3>👨‍👩‍👧‍👦 Caregivers</h3>
        <ul>
          <li>Family (unpaid, personal connection)</li>
          <li>Professionals (certified, paid)</li>
          <li>Volunteers (service-based, organizational)</li>
          <li>Specialized care (targeted treatment)</li>
        </ul>
      </div>

      <div className="group-card">
        <h3>🏥 Patients</h3>
        <ul>
          <li>Inpatients (hospital stay &gt; 24 hrs)</li>
          <li>Outpatients (treated at home)</li>
          <li>Emergency cases (priority diagnosis)</li>
        </ul>
      </div>

      <div className="group-card">
        <h3>🧑‍⚕️ Physicians (PCPs)</h3>
        <ul>
          <li>Licensed professionals</li>
          <li>Handle general care, refer to specialists</li>
          <li>First point of contact</li>
        </ul>
      </div>

      <div className="group-card">
        <h3>🔁 Referrals</h3>
        <ul>
          <li>Referring to specialists, tools, or treatment methods</li>
        </ul>
      </div>

      <div className="group-card">
        <h3>💳 Payors</h3>
        <ul>
          <li>Insurance companies</li>
          <li>Reimbursement-based payment model</li>
        </ul>
      </div>
    </div>
  );
}

export default CustomerGroups;
