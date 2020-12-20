import React from 'react';
import { Button, Form, FormControl, Card, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import Toggle from './toggle';

function Search() {
    return (
        <div className='search-div'>
            <Toggle />
        </div>
    )
}

export default Search;