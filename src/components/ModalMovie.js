// import React, { useState } from 'react';
// import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import axios from 'axios';

// function ModalMovie(props) {
//   const [comment, setComment] = useState('');

//   const handleAddToFavorite = () => {
//     const serverURL = process.env.REACT_APP_serverURL;
//     const releaseDate = Date.parse(props.movie.release_date);
//     const movieData = {
//       title: props.title,
//       release_date: releaseDate,
//       overview: props.overview,
//     };

//     // axios
//     //   .post(serverURL, movieData)
//     //   .then((response) => {
//     //     console.log(response.data);

//     //   })
//     //   .catch((error) => {
//     //     console.log(error);

//     //   });

//     try{
//       const url = process.env.REACT_APP_serverURL;
//       const response = await fetch(`${url}/addMovie`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(movieData),
//       });

//       if (response.ok) {
//         console.log("Movie added to favorites:", movieData);
//         handleClose();
//       } else {
//         console.log("Failed to add movie to favorites");
//       }
//     } catch (error) {
//       console.log("Error:", error);
//     }
//   };


//   //   setComment('');// Reset comment 
//   //   props.setShowModal(false);
//   // };

//   // const handleCloseModal = () => {
//   //   props.setShowModal(false);
//   // };

//   const handleCommentChange = (event) => {
//     setComment(event.target.value);
//   };
  
//   const poster_pathURL = "http://image.tmdb.org/t/p/w500/"

//   return (
//     <Modal show={props.showModal} onHide={handleCloseModal}>
//       <Modal.Navbar closeButton>
//         <Modal.Title>{props.movie.title}</Modal.Title>
//       </Modal.Navbar>
//       <Modal.Body>
//         <img src={poster_pathURL+props.movie.poster_path} alt={props.movie.title} width='100%' />
//         <p>{props.movie.overview}</p>
//         <Form.Group controlId="comment">
//           <Form.Label>Comment</Form.Label>
//           <Form.Control
//             as="textarea"
//             rows={3}
//             value={comment}
//             onChange={handleCommentChange}
//           />
//         </Form.Group>
//       </Modal.Body>
//       <Modal.Footer>
//         <Button variant="secondary" onClick={handleCloseModal}>
//           Close
//         </Button>
//         <Button variant="dark" onClick={handleAddToFavorite}>
//           Add to Favorites
//         </Button>
//       </Modal.Footer>
//     </Modal>
//   );
// }

// export default ModalMovie;




import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

export default function ModalMovie({ handleShow, handleClose, show, modalData }) {
  const [comment, setComment] = useState("");

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };
  
  const handleAddToFavorite = async () => {
  const movieData = {
    t: modalData.title,
    y: parseInt(modalData.release_date),
    c: comment,
  };

    try{
      const url = process.env.REACT_APP_MOVIES_URL;
      const response = await fetch(`${url}/addMovie`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(movieData),
      });

      if (response.ok) {
        console.log("Movie added to favorites:", movieData);
        handleClose();
      } else {
        console.log("Failed to add movie to favorites");
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>{modalData.title} {modalData.release_date}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{modalData.overview}</p>
          <Form.Group>
            <Form.Label>Add a Comment:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter comment"
              value={comment}
              onChange={handleCommentChange}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddToFavorite}>
            Add to Favorites
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}