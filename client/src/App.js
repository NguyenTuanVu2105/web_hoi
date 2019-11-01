import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {test} from "./api/base/test"

function App() {
  const [greeting, setGreeting] = useState('')
  const getApi = async () => {
    const {data} = await test();
    setGreeting(data) 
  }

  useEffect(() => {
    getApi()
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Server return is {greeting}
        </p>
      </header>
    </div>
  );
}

export default App;
