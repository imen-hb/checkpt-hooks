import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';

const AddMovie = ({add}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const[title,setTitle]=useState("")
    const[description,setDescription]=useState("")
    const[rate,setRate]=useState("")
    const[posterUrl,setPosterUrl]=useState("")

    const handleTitle = (e) =>{
        setTitle(e.target.value)
    }

    const handleDescription = (e) =>{
        setDescription(e.target.value)
    }

    const handleRate = (e) =>{
        setRate(e.target.value)
    }

    const handlePosterUrl= (e) =>{
        setPosterUrl(e.target.value)
    }

    const handleAdd = () => {
        let newMovie={id:Math.random(), title,description,rate,posterUrl}
        add(newMovie)
        handleClose()
    }
  
return (
    <div>
        <Button variant="primary" style={{backgroundColor:"#650076",border:"black",marginLeft:"45%"}} onClick={handleShow}>
        Add new movie
        </Button>

        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form.Label>Title:</Form.Label>
            <Form.Control onChange={handleTitle} placeholder="Enter the movie title here"/>

            <Form.Label>Description:</Form.Label>
            <Form.Control onChange={handleDescription} placeholder="Enter the movie description here"/>

            <Form.Label>Rate:</Form.Label>
            <Form.Control onChange={handleRate} placeholder="Enter the movie rate here"/>

            <Form.Label>PosterUrl:</Form.Label>
            <Form.Control onChange={handlePosterUrl} placeholder="Enter the movie posterUrl here"/>

            
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
            Close
        </Button>
        <Button variant="primary" onClick={handleAdd}>
            Add
        </Button>
        </Modal.Footer>
    </Modal>
    </div>
)
}

export default AddMovie
