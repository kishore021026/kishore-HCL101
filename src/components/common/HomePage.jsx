import '../../styles/HomePage.css';

function HomePage() {
  return (
    <div className="homepage-wrapper">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="typing-banner">
          <span className="typing-text">HCL 101 Kishore</span>
        </div>
        <nav className="navbar">
          <select className="dropdown">
            <option>Main Topics</option>
            <option>Intro to HCL & Apria</option>
            <option>Process Execution</option>
            <option>Client Support</option>
            <option>Training Modules</option>
            <option>Final Summary</option>
          </select>
        </nav>
      </div>

      {/* Centered Title */}
      <div className="center-title">
        <h1 className="aspira-title">Apira Healthcare</h1>
      </div>

      {/* Bottom Info Section */}
      <div className="info-section-horizontal">
        <div className="info-card">
          <div className="info-icon">📍</div>
          <div className="info-text">Lake Forest, California</div>
        </div>
        <div className="info-card">
          <div className="info-icon">🏥</div>
          <div className="info-text">410 branches across 240+ locations</div>
        </div>
        <div className="info-card">
          <div className="info-icon">👥</div>
          <div className="info-text">Serves around 2 million patients annually</div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
