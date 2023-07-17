import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ModalMovie from './ModalMovie';

function Movie({ props }) {
  const [showModal, setShowModal] = useState(false);

  const handleAddToFavorites = () => {
    setShowModal(true);
  };

  const poster_pathURL = `https://image.tmdb.org/t/p/original/${props.data.poster_path}`;

  return (
    <>
      <Card style={{ width: '18rem' ,margin:'10px'  }}  >
        <Card.Img variant="top" src={poster_pathURL} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            <p>{props.overview}</p>
          </Card.Text>
          <Button variant="dark" onClick={handleAddToFavorites}>
            Add to Favorites
          </Button>
        </Card.Body>
      </Card>
      {showModal && (
        <ModalMovie
          movie={props}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      )}
    </>
  );
}

export default Movie;


