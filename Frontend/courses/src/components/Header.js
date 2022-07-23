import React from "react";
import { CardBody, Card } from "reactstrap";

function Header(){
    return (
            <div className=" fw-bolder text-warning  my-5 header header-body">
                {/* <Card className="my-3 header-body"> */}
                    {/* <CardBody> */}
                        <u><h2 className="text- text-center my-2">Welcome To Course Application</h2></u>
                    {/* </CardBody> */}
                {/* </Card> */}
            </div>
    );
}

export default Header;