import React, {Component} from 'react';

import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'



class AddSong extends Component {

  constructor(props) {
    super(props)
    this.state = {
      show: (false),
      newSong: [
        {
          playlistId: '',
          newSong: '',
          artistName: ''
        }
      ]
    }
  }
  
  handleShow = () => {
    this.setState({show: (true)});
    console.log(this.state.show);
  };

  handleClose = () => {
    this.setState({show: (false)});
    console.log(this.state.show);
  };

  onChange = (input) => {
    this.setState({ newSong: {
      playlistId: this.props.songKey,
      newSong: input.target.value,
      artistName: "Ryan Paul"
    } });

    console.log(this.state.newSong.playlistId);
  };

  onClick = (e) => {
    e.preventDefault();
    // console.log(this.props);
    // console.log("output of search: "+ this.state.newSong.newSong);
    this.props.AddSong(this.state.newSong);
    // this.setState = ({ newSong: null});
    this.handleClose();
  };

  render() {
    const {show} = this.state;
    // const {id} = this.props.songKey;

    return(
      <>
        <Button variant="primary" onClick={this.handleShow}>Add Song</Button>
        <Modal show={show} onHide={this.handleClose} 
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered>
          <Modal.Header closeButton>
            <Modal.Title>
              Add New Music
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <InputGroup name="newSong" onChange={this.onChange}>
              <FormControl placeholder="Song/Artist name" />
              <InputGroup.Append>
                <Button onClick={this.onClick}>Search</Button>
              </InputGroup.Append>
            </InputGroup>
          </Modal.Body>
          <Modal.Footer>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default AddSong;