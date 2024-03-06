import React from 'react'
import ReactStars from 'react-stars'
import { Button, Card } from 'react-bootstrap'

const MovieCard = ({movie}) => {
return (
    <div>
            <Card style={{ width: '18rem',backgroundColor:"black",borderColor:"#650076",margin:"20px"}}>
            <Card.Img variant="top" src={movie.posterUrl}/>
            <Card.Body style={{ fontFamily: "Times New Roman, Times, serif",color:"white"}}>
        <Card.Title style={{ textAlign:"center",textDecoration:"underline"}}>{movie.title}</Card.Title>
        <Card.Text>{movie.description} </Card.Text>

        <ReactStars count={5} value={movie.rate} size={24} color2={'#ffd700'} />
        
        <Button variant="primary" style={{backgroundColor:"#650076",border:"black"}}>Watch now</Button>
        <Button variant="primary" style={{marginLeft:"50px",backgroundColor:"#650076",border:"black"}}>Trailer</Button>
        </Card.Body>
    </Card>
    </div>
)
}

export default MovieCard