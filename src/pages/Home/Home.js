import React, { useState } from 'react';
import withNavbar from '../../hocs/withNavbar';
import './home.css';

function Home() {
  const [inputs, setInputs] = useState([{ id: 0, prompt: '' }]);
  const [output, setOutput] = useState([{ id: 0, prompt: '' }]);
  const addInputField = () => {
    const newInput = { id: inputs.length, prompt: '' };
    setInputs([...inputs, newInput]);
  };

  const handleInputChange = (e, id) => {
    const updatedInputs = inputs.map(input =>
      input.id === id ? { ...input, prompt: e.target.value } : input
    );
    setInputs(updatedInputs);
  };

 
const generateResult = async () => {
  const responses = await Promise.all(
    inputs.map(async inp => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${inp.id+1}`
      ); 
      const result = await res.json()
      return {id: inp.id, prompt: inp.prompt, value: result.title}
    })
  );
  
    setOutput(responses)
};

  return (
    <div className='home'>
      <div>
        <h3>Web AI</h3>
      </div>
      <div>
        <div>
          <h6>Prompt</h6>
          <small>Surprise me</small>
        </div>
        <div className='d-flex'>
          <div>
            {inputs.map(input => (
              <div key={input.id}>
                <input
                  type='text'
                  placeholder='type..'
                  value={input.prompt}
                  onChange={e => handleInputChange(e, input.id)}
                />
              </div>
            ))}
          </div>
          <div>
          <button onClick={addInputField}>+</button>
          </div>
        </div>
        <div>
          <button onClick={generateResult}>Generate</button>
        </div>
      </div>
    </div>
  );
}

export default withNavbar(Home);
