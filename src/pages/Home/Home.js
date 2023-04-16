import React, { useEffect, useState } from 'react';
import withNavbar from '../../hocs/withNavbar';
import './home.css';
import { generateData } from '../../apis/chatgpt';
import Card from '../../components/Card/Card';

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

 
// const generateResult = async () => {
//   setIsLoading(true)
//   const responses = await Promise.all(
//     inputs.map(async inp => {
//       const res = await generateData(inp.prompt)
//       return {id: inp.id, prompt: inp.prompt, value: res.data.choices[0].text}
//     })
//   );
//     setIsLoading(false)
//     setOutputs(responses)
// };


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

console.log(outputs);
  return (
    <div className='home'>
      <div>
        <h3>Web AI</h3>
      </div>
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
        {/* output  */}
        {
            isLoading && "Loading.."
        }
        {
          outputs && outputs.map(output=>{
            return <Card key={output.id} data={output} />
          })
         
        }
         
        {/* {
          isLoading ? <div>Loading..</div>
          : outputs.map(output=>{
            return <Card key={output.id} data={output} />
          })
        } */}
    </div>
  );
}

export default withNavbar(Home);
