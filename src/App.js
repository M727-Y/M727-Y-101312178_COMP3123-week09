import logo from './logo.svg';
import './App.css';
import Student from './student';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

      </header>
      
      <Student course="Full Stack Development - l" week="09" sid="101312178" fnm="Mikhail" lnm="Yugay" college="George Brown College" city="Toronto"></Student>
      
    </div>
  );
}

export default App;
