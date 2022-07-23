import logo from './logo.svg';
import './App.css';
import { Container, Row, Col } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import Home from './components/Home';
import UpdateCourse from './components/UpdateCourse';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import AddCourse from './components/AddCourse';
import Header from './components/Header';
import Menus from './components/Menus';
import Courses from './components/Courses';
function App() {
  const btnhandle = () => {
    toast('Daily Bonus', { position: "top-center" });
  };
  return (
    <div className="back">
      <Router>
        <ToastContainer />
        <Container>
          <Header></Header>
          <Row>
            <Col md={4}>
              <Menus></Menus>
            </Col>
            <Col md={8}>
              <Routes>
                <Route exact path="/welcome" element={<Home></Home>} />
                <Route exact path="/update-course" element={<UpdateCourse />} />
                <Route exact path="/add-course" element={<AddCourse />} />
                <Route exact path="/view-courses" element={<Courses />} />
              </Routes>
            </Col>
          </Row>


        </Container>
      </Router>
    </div>
  );
}

export default App;
