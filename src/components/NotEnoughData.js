import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';

function NotEnoughData(props) {
  const show = true;

  return(
    <>
      <Modal show={show}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
      >
        <Modal.Header>
          <Modal.Title>
            Not Enough Data
          </Modal.Title>      
        </Modal.Header>
        <Modal.Body>
          Looks like there is not enough data to create a playlist. Listen to some songs at 
          <a style={{color:'#1DB954'}} href="https://www.spotify.com" target="_blank" rel="noopener noreferrer" role="button"> Spotify </a>
          and come back to find a curated playlist for you. 
        </Modal.Body>
      </Modal>
    </>
  );
}

export default NotEnoughData;