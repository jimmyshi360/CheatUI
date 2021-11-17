import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/clike/clike';
import 'codemirror/addon/edit/closebrackets';

function App() {
  const [code,  setCode] = useState("");
  return (
    <div className="App">
      <header className="App-header">
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

        <CodeMirror
          value={this.state.code}
          className="codemirror-container"
          options={{
            lineNumbers: true,
            mode: "text/x-java",
            lineWrapping: true,
            theme: 'monokai',
            tabMode: 'indent',
            autoMatchParens: true,
            smartIndent: true,
            tabSize: 4,
            indentUnit: 4,
            matchBrackets: true,
            autoCloseBrackets: true,
            autoRefresh: {force: true},
          }}
        />

      </header>
    </div>
  );
}

export default App;
