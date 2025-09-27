import '../../styles/EquipmentClassification.css';

function EquipmentClassification() {
  return (
    <div className="equip-wrapper">
      <h2>🧰 Apria Equipment Classification</h2>

      {/* Complex Equipment */}
      <div className="equip-card">
        <h3>⚠️ Complex Equipment</h3>
        <ul>
          <li>Life-saving equipment</li>
          <li>Exception: Breast Pump (not life-saving but still classified)</li>
          <li><strong>Example:</strong> Oxygen concentrators</li>
        </ul>
      </div>

      {/* Non-Complex Equipment */}
      <div className="equip-card">
        <h3>🛏️ Non-Complex Equipment</h3>
        <ul>
          <li>Can survive without it</li>
          <li><strong>Example:</strong> Hospital beds, wheelchairs</li>
        </ul>
      </div>

      {/* Rental & CTS Info */}
      <div className="equip-note">
        <h4>Rental & Conversion Rules</h4>
        <ul>
          <li>All equipment starts as rental in initial phase</li>
          <li><strong>Complex Equipment:</strong> Cannot be sold, only rented</li>
          <li><strong>Non-Complex Equipment:</strong> Can be Converted To Sale (CTS)</li>
          <li>CTS typically initiated after 13 payment periods</li>
        </ul>
      </div>
    </div>
  );
}

export default EquipmentClassification;
