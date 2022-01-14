import logo from './logo.svg';
import './App.css';
import expenses from './data';
import Expenses from './components/Expenses/Expenses';


function App() {
  return (
    <div>
      <div className='App-header'>
        <img src={logo} className='App-logo' />
      </div>
      <div className='App-body'>
        <Expenses items={expenses} />
      </div>
    </div>
  );
}

export default App;