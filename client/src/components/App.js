import './App.css';
import React, { useState } from 'react';
import { Row } from 'react-bootstrap';
import UserInputForm from './UserInputForm';
import { getInputInfoFromDB, submitToDB } from './services/service'

function App() {
  const [input, setInput] = useState('');
  const [resp, setResp] = useState('');

  const handleSubmit = (data) => {
    setInput(data);
  };

  // get result on Submit
  const getResult = async () => {
    const infoExist = await getInputInfoFromDB(input);
    if (infoExist && infoExist[0]) {
      console.log('saved before input')
      setResp(infoExist[0].response);
    } else {
      console.log('adding new input to DB')
      const responese = await submitToDB(input);
      setResp(responese);
    }
  };

  return (
    <div className='App'>
      <UserInputForm handleSubmit={handleSubmit} getResult={getResult} disabled={!input.length} />
      <Row className='response-container'>
        <h5>Response: {resp}</h5>
      </Row>
    </div>
  );
}

export default App;
