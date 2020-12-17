import React from 'react'
import { Button, Form, FormControl, Card, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import Toggle from './toggle';

function Search(){
    return (
        <div className='search-div'>
            <Toggle/>
           {/* <Form className="form-hp">
                <FormControl
                    as="textarea"
                    className="form-control form-hp "
                    id=''
                    rows={2}
                    placeholder='Search Pets...'>
                </FormControl>
                <a href="/searchresults" className="btn btn-warning w-100" >Basic Search</a>
                <a href="/search" className="btn btn-warning w-100 mt-2" >To The Search Page</a>
            </Form> */}
        </div>
    )
}

export default Search;