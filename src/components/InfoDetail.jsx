import React from 'react';
import { Button } from 'react-bootstrap';
import './../styles/InfoDetail.css';

const InfoDetail = (props) => {

  let detail = "";
  const cust = props.clicked;

  if (cust) {
    detail =
      <div>
        <h3>{cust.name}</h3>
        <p>
          ID: {cust.id}<br/>
          Gender: {cust.gender}<br/>
          Phone Number: {cust.phone}<br/>
          Age: {cust.age}<br/>
          Address: {cust.address}<br/>
          Status: {cust.status}<br/>
          {/* {cust.id}<br/>
          {cust.id}<br/> */}
        </p>
      </div>
  }
  return (
    <div style={props.style} className="info-detail">
      {detail}
    </div>
  )
}

export default InfoDetail;
