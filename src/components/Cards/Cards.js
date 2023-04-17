import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./cards.css"

function Card({data:{prompt,value}}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const shortPrompt = prompt.split(" ").slice(0,10).join(" ")
  const shortValue = value.split(" ").slice(0,20).join(" ")

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    handleClose()
    toast.success("Copied! "+ prompt.split(" ").slice(0,3).join(" ")+"...")
  }
  return value && (
    <>
      <div className='mycard' onClick={handleShow}>
        <div className='s-prompt'>{shortPrompt}</div>
        <div className='s-value'>{shortValue}</div>
      </div>
      <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header className='modal-header' closeButton>
          {prompt}
        </Modal.Header>
        <Modal.Body>{value} </Modal.Body>
        <Modal.Footer>
          
          <button onClick={handleCopy}>
            Copy text
          </button>
        </Modal.Footer>
      </Modal>
    </>
  )
}



export default function Cards({data}){
  return (
    <div className='cards'>
     {
       data && data.map((output, id)=><Card key={id} data={output} />)
     }
     <ToastContainer autoClose={2000} theme='dark' />
    </div>
  )
}



  
  