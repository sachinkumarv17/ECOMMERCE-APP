import Spinner from "react-bootstrap/Spinner";

import React from 'react'

export default function LoadingBox() {
  return (
    <Spinner animation="border" role="status">
        <span className="visually-hiden">Loading...</span>
    </Spinner>
  )
}
