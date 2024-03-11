
import './App.css';
import React from 'react';
import QrComponent from './component/Qr';

function App() {
  return (
    <div className="App flex justify-center w-full h-screen ">
      {/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>*/}

      <div className=" bg-gray-100 p-4 my-auto md:sw-2/5">
        <h1 className="text-3xl font-bold">Convert Text to QR-code </h1>
        <QrComponent />
      </div>
    </div>
  );
}

export default App;
