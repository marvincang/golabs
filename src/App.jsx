import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, Row, Col, DropdownButton, MenuItem } from 'react-bootstrap';
import SearchBar from './components/SearchBar';
import CustomerList from './components/CustomerList';
import CustomNavbar from './components/CustomNavbar';
import customers from './CustomerList.json';
import './styles/App.css';

class App extends React.Component {
  constructor() {
    super();
		this.handleTermChange = this.handleTermChange.bind(this);
		this.state = customers;
    // console.log(this);
    // this.state = {
		// 	customers: []
		// };
  }

  handleTermChange(term) {
		const data = customers.customers;
		const filtered = data.filter((cust) => {
			let names = cust.name.split(' ');
			let b = false;
			names.forEach((name) => {b = name.toLowerCase().startsWith(term) ? true : b;})
			return b;
		})
    // console.log(this);
    // console.log(filtered);
		this.setState({
			customers: filtered
		});
  }

  handleSelect(evtKey) {
    let desc = evtKey % 2 == 0;
    let key = "";
  }

  render() {
    let count = this.state.customers.length + " customer";
    count += this.state.customers.length > 1 ? "s found." : " found.";
    return (
			<div>
	      <CustomNavbar/>
	      <Grid>
	        <Row>
	          <Col xs={12} md={8}>
	            <SearchBar onTermChange={this.handleTermChange}/>
	          </Col>
            <Col xs={6} md={4}>
              <DropdownButton title="Order by" key={1} id="dropdown-basic-1" onSelect={event => this.handleSelect(event)}>
                <MenuItem eventKey={3}>First Name (A-Z)</MenuItem>
                <MenuItem eventKey={4}>First Name (Z-A)</MenuItem>
                <MenuItem eventKey={5}>Last Name (A-Z)</MenuItem>
                <MenuItem eventKey={6}>Last Name (Z-A)</MenuItem>
              </DropdownButton>
            </Col>
	        </Row>
          <Row>
            <Col xs={12} md={12}>
              <CustomerList customers={this.state.customers}/>
            </Col>
          </Row>
          <Row>
            <p className="count">
              {count}
            </p>
          </Row>
	      </Grid>
    	</div>
		)
  }
}

export default App;
