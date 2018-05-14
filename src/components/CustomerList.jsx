import React from 'react';
import { ListGroup, Grid, Col, Row, Button } from 'react-bootstrap';
import Customer from './Customer';
import InfoDetail from './InfoDetail';
import './../styles/CustomerList.css';

class CustomerList extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      clicked: false
    }

    this.infoStyle = {
      display: "none"
    }
  }

  handleClick(term) {
    this.infoStyle = {
      display: "block"
    }
    this.setState({
      clicked: term.props,
    });
  }

  handleClose() {
    this.infoStyle = {
      display: "none"
    }
    this.setState({
      clicked: false
    })
  }

  render() {
    const customer = this.props.customers.map((cust) => {
      return <Customer key={cust.id} fullname={cust.firstname + " " + cust.lastname} id={cust.id} gender={cust.gender} age={cust.age} address={cust.address} phone={cust.phone} status={cust.status} onDetailClicked={this.handleClick}/>
    })

    return (
      <Row>
        <Col xs={6} md={8}>
          <ListGroup>
            {customer}
          </ListGroup>
        </Col>
        <Col xs={6} md={4}>
          <Button style={this.infoStyle} bsSize="sm" className=".button-close" bsStyle="primary" onClick={this.handleClose}>{"< Back"}</Button><br/>
          <InfoDetail style={this.infoStyle} clicked={this.state.clicked} />
        </Col>
      </Row>
    );
  }
};

export default CustomerList;
