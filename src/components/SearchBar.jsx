import React from 'react';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      term: ''
    }
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onTermChange(term);
  }

  render() {
    return (
      <form>
        <FormGroup controlId="search">
          <ControlLabel>Search for customer name</ControlLabel>
          <FormControl type="text" value={this.state.term} placeholder="Search..." onChange={event => this.onInputChange(event.target.value)}/>
        </FormGroup>
      </form>
    )
  }
}

export default SearchBar;
