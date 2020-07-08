import React from 'react';

import { authEndpoint, clientId, redirectUri, formattedScope } from '../spotifyWebAPI/spotify_config';
import Modal from 'react-bootstrap/Modal';

const auth_uri = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${formattedScope}&response_type=token&show_dialog=true`; // template strings used to login to Spotify

function Login(props) {
  const show = true;

  return(
    <>
      <Modal show={show}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        >

        <Modal.Body>
          <center><a style={{color: '#1DB954'}} href={auth_uri} role="button">Login to Spotify</a> to access website features</center>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Login;