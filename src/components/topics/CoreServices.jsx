import '../../styles/CoreServices.css';

function CoreServices() {
  return (
    <div className="core-wrapper">
      {/* Left Panel – Core Services */}
      <div className="core-left">
        <h2>Core Services at a Glance</h2>

        <div className="service-block">
          <h3>💨 Home Respiratory Therapy</h3>
          <ul>
            <li>Oxygen therapy</li>
            <li>Nebulizers</li>
            <li>Ventilators</li>
          </ul>
        </div>

        <div className="service-block">
          <h3>😴 Sleep Apnea Solutions</h3>
          <ul>
            <li>CPAP/BiPAP devices</li>
            <li>Patient education</li>
          </ul>
        </div>

        <div className="service-block">
          <h3>♿ Durable Medical Equipment (DME)</h3>
          <ul>
            <li>Wheelchairs</li>
            <li>Hospital beds</li>
            <li>Mobility aids</li>
          </ul>
        </div>
      </div>

      {/* Right Panel – Focus Areas */}
      <div className="core-right">
        <h2>Apria Focuses On</h2>
        <ul className="focus-list">
          <li>💨 Home Respiratory Care</li>
          <li>😴 Sleep Apnea Management</li>
          <li>🩹 Wound Care</li>
          <li>🫁 Non-Invasive Ventilation (NIV)</li>
        </ul>
      </div>
    </div>
  );
}

export default CoreServices;
