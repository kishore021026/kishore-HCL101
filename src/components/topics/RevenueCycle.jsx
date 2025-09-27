import '../../styles/RevenueCycle.css';


function RevenueCycle() {
  return (
    <div className="rcm-wrapper">
      <h2>📊 Revenue Cycle Management</h2>

      {/* Linear Steps */}
      <div className="rcm-flow">
        <div className="rcm-step">
          <h3>Step 1: Appointment Scheduling</h3>
          <ul>
            <li>Demographic info (name, age, address)</li>
            <li>Insurance info</li>
            <li>Patient ID creation</li>
          </ul>
        </div>
        <div className="rcm-arrow">↓</div>

        <div className="rcm-step">
          <h3>Step 2: Eligibility Check & Benefit Verification</h3>
          <ul>
            <li>Portal & on-call verification</li>
            <li>Check coverage & treatment eligibility</li>
            <li>Authorize if valid</li>
          </ul>
        </div>
        <div className="rcm-arrow">↓</div>

        <div className="rcm-step">
          <h3>Step 3: Encounter (Face-to-Face)</h3>
          <ul>
            <li>Diagnostic discussion</li>
            <li>Audio recording with consent</li>
            <li>Documentation & legal compliance</li>
          </ul>
          <div className="rcm-note">
            ROI = signed consent letter for data sharing
          </div>
        </div>
        <div className="rcm-arrow">↓</div>

        <div className="rcm-step">
          <h3>Step 4: Medical Transcription</h3>
          <ul>
            <li>Clean and cluster data</li>
            <li>Convert to text document</li>
          </ul>
        </div>
        <div className="rcm-arrow">↓</div>

        <div className="rcm-step">
          <h3>Step 5: Medical Coding</h3>
          <ul>
            <li>Replace diagnosis, services, equipment with global codes</li>
          </ul>
          <table className="rcm-table">
            <thead>
              <tr>
                <th>Type</th>
                <th>Format</th>
                <th>Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ICD (Disease)</td>
                <td>1 letter + 3 digits + decimal</td>
                <td>G47.33 (OSA), F41.1 (Anxiety)</td>
              </tr>
              <tr>
                <td>CPT (Service)</td>
                <td>5-digit number</td>
                <td>ECG 93000, X-ray 71020</td>
              </tr>
              <tr>
                <td>HCPCS (Equipment)</td>
                <td>1 letter + 4 digits</td>
                <td>E0601 (CPAP), A0428 (Supply)</td>
              </tr>
            </tbody>
          </table>
          <div className="rcm-note">
            Only main equipment is billed. ‘E’ = main, ‘A’ = supply, ‘K’ = wheelchair (main)
          </div>
        </div>
        <div className="rcm-arrow">↓</div>

        <div className="rcm-step">
          <h3>Step 6: Demo / Charge Entry</h3>
          <ul>
            <li>Bill creation using CMS 1500</li>
            <li>Includes demographics and services</li>
          </ul>
        </div>
        <div className="rcm-arrow">↓</div>

        <div className="rcm-step">
          <h3>Step 7: Claim Submission</h3>
          <ul>
            <li>Invoice sent to insurance</li>
            <li>Methods: EDI, Clearing House, Manual</li>
          </ul>
        </div>
        <div className="rcm-arrow">↓</div>

        <div className="rcm-step">
          <h3>Step 8: Insurance Adjudication</h3>
          <ul>
            <li>Insurer decides to approve or deny</li>
            <li>Errors sent back to claim team (7-day cycle)</li>
            <li>Clearing House reduces to 1-day</li>
          </ul>
        </div>
      </div>

      {/* Branching Paths */}
      <div className="rcm-branch">
        <div className="rcm-column">
          <h3>✅ Clean Claim</h3>
          <div className="rcm-step">
            <h4>Step 9: Payment Posting</h4>
          </div>
          <div className="rcm-arrow">↓</div>
          <div className="rcm-step">
            <h4>Step 12: Credit Balance</h4>
            <p>If excess amount is paid</p>
          </div>
        </div>

        <div className="rcm-column">
          <h3>❌ Denied Claim</h3>
          <div className="rcm-step">
            <h4>Step 11: Denial Management</h4>
          </div>
          <div className="rcm-arrow">↓</div>
          <div className="rcm-step">
            <h4>Step 10: AR (Accounts Receivable)</h4>
            <p>Investigates unclear denial reasons</p>
          </div>
          <div className="rcm-arrow">↓</div>
          <div className="rcm-step">
            <h4>→ Back to Insurance Adjudication</h4>
          </div>
        </div>
      </div>

      {/* Final Step */}
      <div className="rcm-arrow">↓</div>
      <div className="rcm-step">
        <h3>Step 13: Patient Collection</h3>
        <ul>
          <li>Final billing and collection from patient</li>
        </ul>
      </div>
    </div>
  );
}

export default RevenueCycle;
