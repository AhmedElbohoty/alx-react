import logo from './assets/holberton_logo.jpg';

import { getFooterCopy, getFullYear } from 'src/utils';

import './App.css';

function App() {
  return (
    <div className="App">
      {/* App header */}
      <div className="App-header">
        <img className="App-header-img" src={logo} alt="logo" />
        <h1>School dashboard</h1>
      </div>

      {/* App body */}
      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>

      {/* App footer */}
      <div className="App-footer">
        <p>
          Copyright {getFullYear()} - {getFooterCopy(true)}
        </p>
      </div>
    </div>
  );
}

export default App;
