import axios from "axios";
import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Button, CardBody, CardSubtitle, CardText, Container, Card } from "reactstrap";
import base_url from "../api/Bootapi";
import AddCourse from "./AddCourse";
import UpdateCourse from "./UpdateCourse";

function Course({course, update}){

    const navigate = useNavigate();

    const deleteCourse = (id) => {
        axios.delete(`${base_url}/courses/${id}`).then(
            (response) => {
                console.log(response)
                update(id);
            },(error) => {
                console.log(error)
                toast.success("Something went wrong",{position: "bottom-center"});
            }
        )
    }

    const updateCourse = (id) => {
        axios.get(`${base_url}/courses/${id}`).then(
            (response) => {
                // console.log(response)
                navigate('/update-course',{state: response.data} );
            },(error) => {
                console.log(error)
            }
        )
    }

    return (
        <Card className="text-center">
            <CardBody>
                <CardSubtitle className="font-weight-bold">{course.name} - <a href={course.link}>Link Here</a></CardSubtitle>
                <CardText>{course.description}</CardText>
                <Container className="text-center">
                    <Button onClick={() => {
                        deleteCourse(course.id);
                    }} color="danger">Delete</Button>
                    <Button onClick={() => {
                        updateCourse(course.id);
                    }} color="info ml-3">Update</Button>
                </Container>
            </CardBody>
        </Card>
    );
}

export default Course;