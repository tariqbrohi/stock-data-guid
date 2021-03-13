import React, { Component } from 'react';
import "../../css/Home/Header.css";
import { InputGroup, DropdownButton, Dropdown, Item, FormControl } from 'react-bootstrap';
class GlobalSearch extends Component {
    render() {
        return (
            <div className="global-search">
                <InputGroup className="mb-3">
                    <DropdownButton
                        as={InputGroup.Prepend}
                        title="Ticker"
                        id="input-group-dropdown-1"
                    >
                        <Dropdown.Item href="#">Country</Dropdown.Item>
                        <Dropdown.Item href="#">Exchange</Dropdown.Item>
                        <Dropdown.Item href="#">Company</Dropdown.Item>
                    </DropdownButton>
                    <FormControl placeholder="Search..." aria-describedby="basic-addon1" id="search-field"/>
                </InputGroup>
            </div>
        );
    }
}

export default GlobalSearch;