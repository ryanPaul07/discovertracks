import React, { Component } from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';



const newPlaylist = {
  id: 0,
  title: '',
  description: '',
  songs: []
};

class AddPlaylist extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      show: false,
      validated: false,
      pId: 0,
      pName: '',
      pDescription: ''
    }
  }
  
  handleShow = () => {

    this.setState({show: true});

  }

  handleClose = () => {

    this.setState({show: false});

  }

  handleSubmit = (e) => {

    const form = e.currentTarget;

    e.preventDefault();

    if (form.checkValidity() === false) {
      e.stopPropagation()
    }

    this.setState({ validated: true });

    if(form.checkValidity() === true) {
      this.setState({ 
        pId: this.props.playlist.length + 1 
      },
      () => {
          newPlaylist.id = this.state.pId;
          newPlaylist.title = this.state.pName;
          newPlaylist.description = this.state.pDescription;
          console.log(newPlaylist.id);
          console.log(newPlaylist.title);
          console.log(newPlaylist.description);
          this.props.AddPlaylist(newPlaylist);
          this.handleClose();
      });
    }

  }

  onChange = (input) => {

    this.setState({ [input.target.name]: input.target.value });

  }

  render () {
    const validated = this.state.validated;

    return (
      <>
        <Button onClick={this.handleShow}>Create Playlist</Button>

        <Modal show={this.state.show} onHide={this.handleClose}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered>
        
          <Modal.Header closeButton>
            <Modal.Title>
              Create Playlist
            </Modal.Title>      
          </Modal.Header>
          <Modal.Body>
            <Form noValidate validated={validated} onSubmit={this.handleSubmit}>
              <Form.Group controlId="playlistName">
                <Form.Label>Name</Form.Label>
                <Form.Control required type="text" placeholder="Playlist name" name="pName" onChange={this.onChange} />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="playlistDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control required as="textarea" rows="3" placeholder="Give your playlist a unique description." name="pDescription" onChange={this.onChange} />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group> 
              <Button variant="primary" type="submit">Create</Button>
            </Form>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default AddPlaylist;