import React from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';

export default class OrderDropdown extends React.Component {
  handleSelect(key) {
    this.props.onSelectChange(key);
  }

  render() {
    return (
      <DropdownButton title="Order by" key={1} id="dropdown-basic-1" onSelect={event => this.handleSelect(event)}>
        <MenuItem eventKey={3}>First Name (ASC)</MenuItem>
        <MenuItem eventKey={4}>First Name (DESC)</MenuItem>
        <MenuItem eventKey={5}>Last Name (ASC)</MenuItem>
        <MenuItem eventKey={6}>Last Name (DESC)</MenuItem>
        <MenuItem eventKey={7}>Age (ASC)</MenuItem>
        <MenuItem eventKey={8}>Age (DESC)</MenuItem>
        <MenuItem eventKey={9}>Status (Eligible)</MenuItem>
        <MenuItem eventKey={10}>Status (Not eligible)</MenuItem>
      </DropdownButton>
    )
  }
}
