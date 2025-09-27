import '../../styles/CoreProducts.css';

function CoreProducts() {
  return (
    <div className="products-wrapper">
      <h2>🩺 Apria’s Core Products</h2>

      {/* Product 1: CPAP vs BiPAP */}
      <div className="product-block">
        <h3>💤 CPAP vs BiPAP</h3>
        <table className="comparison-table">
          <thead>
            <tr>
              <th>CPAP</th>
              <th>BIPAP</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Used for Obstructive Sleep Apnea (OSA)</td>
              <td>Used for Central Sleep Apnea (CSA)</td>
            </tr>
            <tr>
              <td>Constant pressure</td>
              <td>Two-way pressure (inhale & exhale)</td>
            </tr>
            <tr>
              <td>Level 1</td>
              <td>Level 2</td>
            </tr>
          </tbody>
        </table>

        <div className="sub-block">
          <h4>PAP Supplies</h4>
          <p>Supplementary tools used with PAP machines:</p>
          <ul>
            <li>Tubing</li>
            <li>Headgear</li>
            <li>Humidifier</li>
            <li>Cleaning kit</li>
          </ul>
        </div>
      </div>

      {/* Product 2: Oxygen Types */}
      <div className="product-block">
        <h3>🫁 Oxygen Therapy</h3>
        <table className="comparison-table">
          <thead>
            <tr>
              <th>Portable Oxygen</th>
              <th>Stationary Oxygen</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Compact</td>
              <td>Large</td>
            </tr>
            <tr>
              <td>Low quantity of O₂</td>
              <td>High quantity of O₂</td>
            </tr>
            <tr>
              <td>Not continuous</td>
              <td>Continuous flow</td>
            </tr>
            <tr>
              <td>Travel use</td>
              <td>Home use</td>
            </tr>
            <tr>
              <td>Rechargeable battery</td>
              <td>Requires plug-in power</td>
            </tr>
            <tr>
              <td>Costlier</td>
              <td>More affordable</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Product 3: NPWT */}
      <div className="product-block">
        <h3>🩹 NPWT – Negative Pressure Wound Therapy</h3>
        <p>Also known as “VAC” (Vacuum-Assisted Closure)</p>
        <ul>
          <li>Used for critical wounds to accelerate healing</li>
          <li>Reduces bacterial load and improves blood flow</li>
          <li>Example: diabetic wound care</li>
        </ul>
      </div>

      {/* Product 4: NIV */}
      <div className="product-block">
        <h3>🫨 NIV – Non-Invasive Ventilator</h3>
        <ul>
          <li>No inner tube</li>
          <li>Used externally only</li>
        </ul>
      </div>
    </div>
  );
}

export default CoreProducts;
