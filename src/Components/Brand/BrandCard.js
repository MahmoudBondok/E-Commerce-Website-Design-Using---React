import React, { useEffect } from 'react'
import { Col, Card } from 'react-bootstrap'
import axios from 'axios'

const BrandCard = ({ img }) => {
  const get = async () => {
    const res = await axios.get("http://localhost:3009/book")
    console.log(res.data)
  }
  useEffect(() => {
    get();
  }, [])
  return (
    <Col
      xs="6"
      sm="6"
      md="4"
      lg="2"
      className="my-1 d-flex justify-content-center">
      <Card
        className="my-1"
        style={{
          width: "100%",
          height: "151px",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#FFFFFF",
        }}>
        <Card.Img style={{ width: "130px" }} src={img} />
      </Card>
    </Col>
  )
}

export default BrandCard
