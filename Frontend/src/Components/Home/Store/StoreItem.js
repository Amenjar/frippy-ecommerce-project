import React from 'react'
import { Card } from 'react-bootstrap';

const StoreItem = ({id , price , name , imgUrl}) => {
  return (
   <Card>
    <Card.Img src={imgUrl} variant="top" style={{height:"200px", objectFit:"cover"}}/>
   </Card>
  )
}

export default StoreItem;