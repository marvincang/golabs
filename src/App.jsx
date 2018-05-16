import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, Row, Col, DropdownButton, MenuItem } from 'react-bootstrap';
import SearchBar from './components/SearchBar';
import CustomerList from './components/CustomerList';
import CustomNavbar from './components/CustomNavbar';
import OrderDropdown from './components/OrderDropdown';
import customers from './CustomerList.json';
import './styles/App.css';

class App extends React.Component {
  constructor() {
    super();
		this.handleTermChange = this.handleTermChange.bind(this);
		this.handleSelect = this.handleSelect.bind(this);
		this.state = customers;
    // console.log(this);
    // this.state = {
		// 	customers: []
		// };
  }

  handleTermChange(term) {
		const data = customers.customers;
		const filtered = data.filter((cust) => {
			let names = [cust.firstname, cust.lastname]
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
    if (evtKey == 3 || evtKey == 4) {
      key = "firstname";
    } else if (evtKey == 5 || evtKey == 6) {
      key = "lastname";
    } else if (evtKey == 7 || evtKey == 8) {
      key = "age";
    } else if (evtKey == 9 || evtKey == 10) {
      key = "status";
    }

    let sorted = this.state.customers;

    // SORT
    sorted.sort((a, b) => {
      if (desc) {
        if (typeof a[key] == "string") {
          return b[key].localeCompare(a[key]);
        } else {
          return b[key] - a[key];
        }
      } else {
        if (typeof a[key] == "string") {
          return a[key].localeCompare(b[key]);
        } else {
          return a[key] - b[key];
        }
      }
    })

    this.setState({
      customers: sorted
    })

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
              <OrderDropdown className="order" onSelectChange={this.handleSelect}/>
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
