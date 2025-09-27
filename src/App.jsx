import HomePage from './components/common/HomePage';
import CoreServices from './components/topics/CoreServices';
import CustomerGroups from './components/topics/CustomerGroups';
import CoreProducts from './components/topics/CoreProducts';
import EquipmentClassification from './components/topics/EquipmentClassification';
import RevenueCycle from './components/topics/RevenueCycle';

// import ThankYou from './components/topics/ThankYou';
import './styles/AppLayout.css';

function App() {
  return (
    <div className="outer-bg">
      <div className="content-sheet">
        <section className="homepage-section">
          <HomePage />
        </section>
        <section className="topic-section">
          <CoreServices />
          <CustomerGroups />
           <CoreProducts />
           <EquipmentClassification />
           <RevenueCycle />

          {/* <ThankYou /> */}
        </section>
      </div>
    </div>
  );
}

export default App;
