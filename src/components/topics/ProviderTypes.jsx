import '../../styles/ProviderTypes.css';

function ProviderTypes() {
  return (
    <div className="provider-wrapper">
      <h2>🏥 Provider Types</h2>

      {/* ✅ Horizontal layout for provider types */}
      <div className="provider-row">
        <div className="provider-card">
          <h3>Individual Providers</h3>
          <ul>
            <li>Physicians and other practitioners</li>
            <li>Nurses</li>
            <li>Dentists</li>
            <li>Podiatrists</li>
            <li>Medical Doctors (MDs)</li>
          </ul>
        </div>

        <div className="provider-card">
          <h3>Organizational Providers</h3>
          <ul>
            <li>Hospitals</li>
            <li>Skilled Nursing Facilities</li>
            <li>Home Health Agencies</li>
            <li>Hospice – for end-of-life care</li>
          </ul>
        </div>
      </div>

      <h2>📝 Things to Remember for Patients</h2>

      <div className="patient-section">
        <ul>
          <li><strong>SSN:</strong> Identifies U.S. citizens and verifies eligibility</li>
          <li><strong>Insurance Policy Number:</strong> Unique ID for the patient’s coverage</li>
          <li><strong>Group Number:</strong> Identifies employer or group plan</li>
          <li><strong>Medicaid Number:</strong> ID for government assistance programs</li>
          <li><strong>Medicare Number:</strong> For patients aged 65+ or with disabilities</li>
          <li><strong>Provider Name:</strong> Attending physician or medical professional</li>
          <li><strong>Date of Service:</strong> When care was provided</li>
          <li><strong>Diagnosis Code:</strong> Used for billing and insurance claims</li>
        </ul>
      </div>
    </div>
  );
}

export default ProviderTypes;
