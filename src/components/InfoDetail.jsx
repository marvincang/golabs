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
        <p className="text-details">
          ID: {cust.id}<br/>
          Gender: {cust.gender}<br/>
          Phone Number: {cust.phone}<br/>
          Age: {cust.age}<br/>
          Home Address: {cust.address}<br/>
          Upgrade Status: {cust.status}<br/><br/>
          {/* {cust.id}<br/>
          {cust.id}<br/> */}
          More details here ...
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
