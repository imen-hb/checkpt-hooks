import React from 'react'
import { Form } from 'react-bootstrap'
import ReactStars from 'react-stars'


const Filter = ({inputSearch,setInputSearch,newRate,setNewRate }) => {
  return (
    <div style={{marginTop:"2%",width:"400px"}}>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control value={inputSearch} onChange={(e) => setInputSearch(e.target.value)} type="text" placeholder="Search movie..." />
        <ReactStars value={newRate} onChange={(rate)=>setNewRate(rate)} count={5}  size={24} color2={'#ffd700'} />

      </Form.Group>
    </Form>
    </div>
  )
}

export default Filter