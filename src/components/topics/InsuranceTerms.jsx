import '../../styles/InsuranceTerms.css';

function InsuranceTerms() {
  return (
    <div className="terms-wrapper">
      <h2>💡 Key Insurance Terms</h2>

      <div className="terms-grid">
        {/* Insurance Premium */}
        <div className="term-card">
          <h3>Insurance Premium</h3>
          <p>The fixed amount you pay regularly (monthly/yearly) to keep your insurance active.</p>
        </div>

        {/* Co-payment */}
        <div className="term-card">
          <h3>Co-payment</h3>
          <p>A small fixed fee you pay at the time of service (e.g., ₹500 for a doctor visit).</p>
        </div>

        {/* Deductible */}
        <div className="term-card">
          <h3>Deductible</h3>
          <p>The amount you must pay out-of-pocket before insurance starts covering costs.</p>
        </div>

        {/* Co-insurance */}
        <div className="term-card">
          <h3>Co-insurance</h3>
          <p>A percentage of the cost you share with the insurer after meeting your deductible.</p>
        </div>
      </div>
    </div>
  );
}

export default InsuranceTerms;
