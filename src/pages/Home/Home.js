import React, { useEffect, useState } from 'react';
import withNavbar from '../../hocs/withNavbar';
import './home.css';
import { generateData } from '../../apis/chatgpt';
import Card from '../../components/Card/Card';
import GeneratePdf from '../../components/GeneratePdf/GeneratePdf';
import { PDFDownloadLink } from '@react-pdf/renderer';
import ReactDOM from 'react-dom/client';
function Home() {
  const [inputs, setInputs] = useState([{ id: 0, prompt: '' }]);
  const [outputs, setOutputs] = useState([]);
  const [output, setOutput] = useState({});
  const  [isLoading, setIsLoading] = useState(false)

  useEffect(()=>{
    setOutputs([...outputs, output])
    if(outputs.length+1 == inputs.length){
      setIsLoading(false)
    }
  },[output])

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
  setIsLoading(true)
  setOutputs([])
  inputs.forEach( inp => {
    generateData(inp.prompt)
    .then(res=>{
      setOutput({id: inp.id, prompt: inp.prompt, value: res.data.choices[0].text})
    })
  })
};


  return (
    <div className='home'>
      <div>
        <h3>Web AI</h3>
      </div>
        <div className='prompt'>
          <h6>Prompt</h6>
          <small className='surprise'>Surprise me</small>
        </div>
        <div className='inputs-cont'>
          <div className='inputs'>
            {inputs.map(input => (
              <div key={input.id} className='input'>
                <input
                  type='text'
                  placeholder='Send a message...'
                  value={input.prompt}
                  onChange={e => handleInputChange(e, input.id)}
                />
              </div>
            ))}
          </div>
          <div >
            <button className="plus-btn" onClick={addInputField}>+</button>
          </div>
        </div>
        <div>
          <button onClick={generateResult}>Generate</button>
        </div>
        {/* output  */}
        {
            isLoading && "Loading.."
        }
        {
          outputs && outputs.map(output=>{
            return <Card key={output.id} data={output} />
          })
         
        }
         
    
        
    </div>
  );
}

export default withNavbar(Home);
