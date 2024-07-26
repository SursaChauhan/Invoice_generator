import logo from './logo.svg';
import './App.css';
import MainComponent from './Components/MainComponent.jsx';
import InvoiceSummary from './Components/InvoiceSummary.jsx';
function App() {
  return (
    <div className="App">
     <MainComponent/>
     <InvoiceSummary/>
    </div>
  );
}

export default App;
