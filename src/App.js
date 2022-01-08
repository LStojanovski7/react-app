import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem/ExpenseItem';
import { mockData } from './data';

function App() {
  return (
    <div>
      <div className='App-header'>
        <img src={logo} className='App-logo' />
      </div>
      <div className='App-body'>
        <div className='App-content'>
          {
            mockData.map(item => { return (
              <ExpenseItem
                Title={item.Title}
                Date={item.Date.toLocaleDateString("en-US", {year: 'numeric', day: 'numeric', month: 'long'})}
                Price={item.Price}>
              </ExpenseItem>)
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;