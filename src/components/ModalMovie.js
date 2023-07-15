import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

function ModalMovie(props) {
  const [comment, setComment] = useState('');

  const handleAddToFavorite = () => {
    const serverURL = `${process.env.REACT_APP_serverURL}/movie/addMovie`;
    const releaseDate = Date.parse(props.movie.release_date);
    const movieData = {
      title: props.movie.title,
      release_date: releaseDate,
      overview: props.movie.overview,
    };

    axios
      .post(serverURL, movieData)
      .then((response) => {
        console.log(response.data);

      })
      .catch((error) => {
        console.log(error);

      });


    setComment('');// Reset comment 
    props.setShowModal(false);
  };

  const handleCloseModal = () => {
    props.setShowModal(false);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };
  const poster_pathURL = "http://image.tmdb.org/t/p/w500/"

  return (
    <Modal show={props.showModal} onHide={handleCloseModal}>
      <Modal.Navbar closeButton>
        <Modal.Title>{props.movie.title}</Modal.Title>
      </Modal.Navbar>
      <Modal.Body>
        <img src={poster_pathURL+props.movie.poster_path} alt={props.movie.title} width='100%' />
        <p>{props.movie.overview}</p>
        <Form.Group controlId="comment">
          <Form.Label>Comment</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={comment}
            onChange={handleCommentChange}
          />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal}>
          Close
        </Button>
        <Button variant="dark" onClick={handleAddToFavorite}>
          Add to Favorites
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalMovie;