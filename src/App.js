import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Dashboard/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
