import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';

function ExpiredToken(props) {
  const show = true;

  return(
    <>
      <Modal show={show}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
      >
        <Modal.Header>
          <Modal.Title>
            Token has expired
          </Modal.Title>      
        </Modal.Header>
        <Modal.Body>
          Please click the    
          <a style={{color:'#1DB954'}} href="http://localhost:3000/" target="_blank" rel="noopener noreferrer" role="button"> link </a>
          to access the website again.
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ExpiredToken;