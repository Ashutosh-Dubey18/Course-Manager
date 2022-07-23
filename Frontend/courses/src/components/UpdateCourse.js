import axios from "axios";
import React, { useEffect, Fragment, useState } from "react";
import { toast } from "react-toastify";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import base_url from "../api/Bootapi";
import { useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import Course from "./Course";


function UpdateCourse({items}){

    const location = useLocation();
    const reset = useForm()

    // // useEffect(() => {
    // //     console.log(location.state);
    // // },[]);

    // // useEffect(()=>{
    // //     document.title = "All Courses";
    // // },[]);

    // // const handleClick = () => {
    // //     reset(location);
    // // };

    // // Form handler function
    // const handleForm=(e)=>{
    //     console.log(course);
    //     addCourseToServer(course);
    //     e.preventDefault();
    // }

    // //Creating function to post data on server
    // const addCourseToServer = (data) => {
        
    //     axios.post(`${base_url}/courses`,data).then(
    //         (response) => {
    //             console.log(response)
    //             toast.success("Courses Updated loaded",{position: "bottom-center"});
    //         },(error) => {
    //             console.log(error)
    //             toast.success("Something went wrong",{position: "bottom-center"});
    //         }
    //     )
    // }

    // const[course,setCourse] = useState([]);

    // return (
    //     <Fragment>
    //         <h1 className="text-center my-3">Update Course</h1>
    //         <Form onSubmit={handleForm}>
    //             <FormGroup>
    //                 <Label for="userId">Course Id</Label>
    //                 <Input  type="text" value={location.state.id}
    //                 name="userId" 
    //                 id="userId" 
    //                 onChange={(e)=> {setCourse({...course, id: e.target.value });
    //                 }}
    //                 />
    //             </FormGroup>
    //             <FormGroup>
    //                 <Label for="userId">Course Title</Label>
    //                 <Input value={location.state.name} type="text" 
    //                 name="title" 
    //                 id="title" 
    //                 onChange={(e)=> {setCourse({...course, name: e.target.value });
    //                 }}
    //                 />
    //             </FormGroup>
    //             <FormGroup>
    //                 <Label for="link">Course Link</Label>
    //                 <Input type="text" value={location.state.link}
    //                 name="link" 
    //                 id="link"
    //                 onChange={(e)=> {setCourse({...course, link: e.target.value });
    //                 }}
    //                 />
    //             </FormGroup>
    //             <FormGroup>
    //                 <Label for="description">Course Description</Label>
    //                 <Input type="textarea" value={location.state.description}
    //                 name="description" 
    //                 id="description" style={{height:150}}
    //                 onChange={(e)=> {setCourse({...course, description: e.target.value });
    //                 }}
    //                 />
    //             </FormGroup>
    //             <Container className="text-center">
    //                 <Button type="submit" color="success">Update Course</Button>
    //                 <Button type="reset" color="warning ml-3">Clear</Button>
    //             </Container>
    //         </Form>
    //     </Fragment>
    // );

    useEffect(()=>{
        document.title = "All Courses";
        console.log(location.state);
        setCourse(location.state);
    },[]);

    // useEffect(()=>{
    //     reset(location);
    // });

    const handleClick = () => {
        reset(location);
    };

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

    const[course,setCourse] = useState({id: "",name: "",description:"",link:""});

    return (
        <div className="update-course">
            <h1 className="text-center my-3">Update Course Details</h1>
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <Label for="userId">Course Id</Label>
                    <Input type="text" 
                    value={course.id}
                    name="userId" 
                    id="userId" 
                    onChange={(e)=> handleIdInput(e)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="userId">Course Title</Label>
                    <Input type="text" 
                     value={course.name}
                    name="title" 
                    id="title" 
                    onChange={(e)=> {setCourse({...course, name: e.target.value });
                    }}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="link">Course Link</Label>
                    <Input type="text" 
                    value={course.link}
                    name="link" 
                    id="link"
                    onChange={(e)=> {setCourse({...course, link: e.target.value });
                    }}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="description">Course Description</Label>
                    <Input type="textarea" 
                    value={course.description}
                    name="description" 
                    id="description" style={{height:150}}
                    onChange={(e)=> {setCourse({...course, description: e.target.value });
                    }}
                    />
                </FormGroup>
                <Container className="text-center">
                    <Button type="submit" color="success">Update Course</Button>
                    <Button onClick={handleClick} type="reset" color="warning ml-3">Clear</Button>
                </Container>
            </Form>
        </div>
    );
}

export default UpdateCourse;