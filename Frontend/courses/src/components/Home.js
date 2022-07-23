import {React, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Jumbotron, Button, Container } from 'reactstrap';

function Home(){

    const navigate = useNavigate();

    useEffect(()=>{
        document.title = "All Courses";
    },[]);

    const btalert = () => {
        navigate('/view-courses')
        toast("Daily Bonus  +1");
    }
    return(
        <div className="jumbotron home-page" >
            <Container className="text-center" >
                <h1>Course Manager</h1>
                <br></br>
                <Container>
                    <p1>Manage and view your courses purchased across various websites click on this button to start using.</p1>
                </Container>
                
                <Container>
                    <Button className="mt-5" color="primary" outline onClick={btalert}>Start Using</Button>
                </Container>
            </Container>
        </div>
    );
}

export default Home;