import React from 'react';
import { ListGroupItem, Button, Grid, Row, Col } from 'react-bootstrap';
import './../styles/Customer.css';

class Customer extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.cust = props;
  }

  handleClick() {
    console.log("clicked");
    this.props.onDetailClicked(this);
  }

  render() {
    return (
      <ListGroupItem>
        <Grid>
          <Row>
            <Col xs={6} md={4}>
              <h4>
                <strong>{this.cust.name}</strong>
              </h4>
              <div>
                id: {this.cust.id}, {this.cust.age} years old, {this.cust.phone}
                <br/>
                Address: {this.cust.address}
                <br/>
                {this.cust.status} for promotion
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
