import React from 'react';
import Movie from './Movie';
import { Row } from 'react-bootstrap';
// import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import { Card, Button } from "react-bootstrap";
import ModalM from './ModalMovie';

export default function MovieList({props}) {


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    // <div>
    //     {/* <h1>hi</h1> */}
    //   {props && props.data.map((movie) => (
    //     <Movie key={movie.id} movie={movie} />
    //   ))}
    // </div>

<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original/${props.data.poster_path}`} />
      <Card.Body>
        <Card.Title>{props.data.title}</Card.Title>
        <Card.Text>{props.data.overview}</Card.Text>
        <Button onClick={handleShow} variant="primary"  >More Details</Button>
      </Card.Body>
      <ModalM data={props.data} handleClose={handleClose} handleShow={handleShow} show={show}/>
    </Card>

      
      );
}




