import * as React from 'react';
import './App.css';
import StopWatch from './components/StopWatch';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Timer Task</h1>
        </header> 
        <StopWatch  start={0}  />
      </div>
    );
  }
}

export default App;
