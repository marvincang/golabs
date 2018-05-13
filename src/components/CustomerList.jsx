import React from 'react';
import { ListGroup, Grid, Col, Row, Button } from 'react-bootstrap';
import Customer from './Customer';
import InfoDetail from './InfoDetail';
// import './../styles/CustomerList.css';

class CustomerList extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.customer = this.props.customers.map((cust) => {
      return <Customer key={cust.id} name={cust.name} id={cust.id} gender={cust.gender} age={cust.age} address={cust.address} phone={cust.phone} status={cust.status} onDetailClicked={this.handleClick}/>
    })

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
      clicked: term.cust,
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
    return (
      <Row>
        <Col xs={6} md={8}>
          <ListGroup>
            {this.customer}
          </ListGroup>
        </Col>
        <Col xs={6} md={1}>
          <Button style={this.infoStyle} bsSize="sm" className="close" onClick={this.handleClose}>{"<"}</Button>
        </Col>
        <Col xs={6} md={3}>
          <InfoDetail style={this.infoStyle} clicked={this.state.clicked} />
        </Col>
      </Row>
    );
  }
};

export default CustomerList;
