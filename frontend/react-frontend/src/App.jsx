import { useState, useRef } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import axios from 'axios';

function App() {
  const [data, setData] = useState('');
  const inputText = useRef();
  function postRequest() {
    const response = axios
      .put('http://127.0.0.1:8000/argument/', '', {
        params: {
          argument: data
        },
        headers: {
          accept: 'application/json'
        }
      })
      .then((response) => {
        console.log(response.data);
      });
    setData('');
    inputText.current.focus();
  }
  function getRequest() {
    const response = axios
      .get('http://127.0.0.1:8000/', {
        headers: {
          accept: 'application/json'
        }
      })
      .then((resp) => {
        console.log(resp.data);
      });
  }
  return (
    <div className="App">
      <button
        onClick={() => {
          getRequest();
        }}
      >
        Get request to API
      </button>
      <input
        type="text"
        className="text-field w-input"
        maxLength="256"
        name="name"
        data-name="Name"
        placeholder="Write your prompt here"
        id="name"
        required=""
        onChange={(e) => {
          setData(e.target.value);
        }}
        value={data}
        ref={inputText}
        autoFocus
      />
      <button
        onClick={() => {
          postRequest();
        }}
      >
        POST request to API
      </button>
    </div>
  );
}

export default App;
