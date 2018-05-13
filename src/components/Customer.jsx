import React from 'react';
import { ListGroupItem, Button, Grid, Row, Col } from 'react-bootstrap';
import './../styles/Customer.css';

class Customer extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log("clicked");
    console.log(this);
    this.props.onDetailClicked(this);
  }

  render() {
    const cust = this.props;

    return (
      <ListGroupItem>
        <Grid>
          <Row>
            <Col xs={6} md={4}>
              <h4>
                <strong>{cust.name}</strong>
              </h4>
              <div>
                id: {cust.id}, {cust.age} years old, {cust.phone}
                <br/>
                Address: {cust.address}
                <br/>
                {cust.status} for promotion
              </div>
            </Col>
            <Col xs={6} md={4}>
              <br/>
              <br/>
              <br/>
              <Button className="button-details" bsStyle="primary" bsSize="small" onClick={this.handleClick}>{'Show details'}</Button>
            </Col>
          </Row>
      </Grid>
    </ListGroupItem>
    )
  }
}

export default Customer;
