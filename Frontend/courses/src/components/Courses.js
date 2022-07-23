import React, { useEffect, useState } from "react";
import base_url from "./../api/Bootapi.js";
import Course from "./Course";
import axios from "axios";
import { toast } from "react-toastify";
import { Button, Container } from "reactstrap";
import { useNavigate } from "react-router-dom";

function  Courses(){

    const navigate = useNavigate();

    useEffect(()=>{
        document.title = "All Courses";
    },[]);

    // function to get all courses
    const getAllCourseFromServer=()=>{
        axios.get(`${base_url}/courses`).then(
            (response) => {
                console.log(response);
                setCourses(response.data);
            },
            (error)=>{
                console.log(error);
                toast.error("Something went wrong",{position: "top-right"});
            }
        )
    };

    const updateCourseById = (id) => {
        setCourses(courses.filter((item) => item.id != id));
    }

    //calling loading course function
    useEffect(()=>{
        getAllCourseFromServer();
    },[]);

    const [courses,setCourses] = useState([]);

    const handleAddCourse = () =>{
        navigate('/add-course');
    }

    return (
        <div>
            {/* <h2 className="text-center my-4">All Course</h2> */}
            <div className="course-list overflow-auto">
                
                {
                    courses.length>0 ?  courses.map
                    ((item)=> <Course key={item.id} course={item} update={updateCourseById}/> ) : 
                    <Container className="jumbotron d-flex justify-content-center align-item-center">
                        <h3 className="fw-7">Start Adding Courses</h3> &nbsp; &nbsp;
                        <Button onClick={handleAddCourse}>Add Course</Button>
                    </Container>
                }
                
            </div>
        </div>
    );
}

export default Courses;