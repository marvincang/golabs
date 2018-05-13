import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, Row, Col } from 'react-bootstrap';
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

  render() {
    return (
			<div>
	      <CustomNavbar/>
	      <Grid>
	        <Row>
	          <Col xs={12} md={8}>
	            <SearchBar onTermChange={this.handleTermChange}/>
	          </Col>
	        </Row>
          <Row>
            <Col xs={12} md={12}>
              <CustomerList customers={this.state.customers}/>
            </Col>
          </Row>
	      </Grid>
    	</div>
		)
  }
}

export default App;
