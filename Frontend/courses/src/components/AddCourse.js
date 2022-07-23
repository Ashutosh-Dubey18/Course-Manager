import axios from "axios";
import React, { useEffect, Fragment, useState } from "react";
import { toast } from "react-toastify";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import base_url from "../api/Bootapi";
import courses from "./Courses";


function AddCourse({items}){


    useEffect(()=>{
        document.title = "All Courses";
    },[]);

    // Form handler function
    const handleForm=(e)=>{
        addCourseToServer(course);
        e.preventDefault();
    }

    //Creating function to post data on server
    const addCourseToServer = (data) => {
        
        axios.post(`${base_url}/courses`,data).then(
            (response) => {
                console.log(response)
                toast.success("Courses Successfully loaded",{position: "bottom-center"});
            },(error) => {
                console.log(error)
                toast.error("Something went wrong",{position: "bottom-center"});
            }
        )
    }

    const handleIdInput = (e) =>{
        setCourse({...course, id: e.target.value });
    }

    const[course,setCourse] = useState([]);

    return (
        <Fragment className="add-course">
            <h1 className="text-center my-3">Fill Course Details</h1>
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <Label for="userId">Course Id</Label>
                    <Input type="text" 
                    placeholder="Enter here" 
                    name="userId" 
                    id="userId" 
                    onChange={(e)=> handleIdInput(e)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="userId">Course Title</Label>
                    <Input type="text" 
                    placeholder="Enter Title here" 
                    name="title" 
                    id="title" 
                    onChange={(e)=> {setCourse({...course, name: e.target.value });
                    }}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="link">Course Link</Label>
                    <Input type="text" 
                    placeholder="Enter course link" 
                    name="link" 
                    id="link"
                    onChange={(e)=> {setCourse({...course, link: e.target.value });
                    }}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="description">Course Description</Label>
                    <Input type="textarea" 
                    placeholder="Enter Description here" 
                    name="description" 
                    id="description" style={{height:150}}
                    onChange={(e)=> {setCourse({...course, description: e.target.value });
                    }}
                    />
                </FormGroup>
                <Container className="text-center">
                    <Button type="submit" color="success">Add Course</Button>
                    <Button type="reset" color="warning ml-3">Clear</Button>
                </Container>
            </Form>
        </Fragment>
    );
}

export default AddCourse;