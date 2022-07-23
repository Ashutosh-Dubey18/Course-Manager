import React from "react";  
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";

function Menus(){
    return (
        <ListGroup>
            <ListGroupItem><Link className="list-inline-item llink" tag="a" to="/welcome" action >Home</Link></ListGroupItem>
            <ListGroupItem><Link className="list-inline-item llink" tag="a" to="/add-course" action>Add Course</Link></ListGroupItem>
            <ListGroupItem><Link className="list-inline-item llink" tag="a" to="/view-courses" action>Get Courses</Link></ListGroupItem>
        </ListGroup>
    );
}

export default Menus;