import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import {
  Collapse,
  Popover,
  Toast,
  Tooltip,
  Alert,
  Modal,
  Dropdown,
  dataDismiss,
} from "bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import { User } from "@auth0/auth0-react";
import UserData from "./UserData";
import img from "./img/1.png";
import img2 from "./img/22.png";
import img3 from "./img/23.png";
import img4 from "./img/24.png";
import img5 from "./img/3.png";
import img6 from "./img/4.png";
import { Image } from "react-bootstrap";
import "./Accordion.css"

const Accordion = (props) => {
  const [style, setStyle] = useState({
    color: "white",
    backgroundColor: "black",
  });

  const [btn, setBtn] = useState("enable dark mode");

  const toggle = () => {
    if (style.color === "white") {
      setStyle({
        color: "black",
        backgroundColor: "white",
      });
      setBtn("enable dark mode");
    } else {
      setStyle({
        color: "white",
        backgroundColor: "black",
        borderStyle: "solid",
        borderColor: "black",
        borderWidth: "200px",
      });
      setBtn("enable light mode");
    }
  };

  const navigate = useNavigate();
  const logIn = () => {
    navigate("/Contact");
  };

  let location = useLocation();
  React.useEffect(() => {
    console.log(location.pathname);
  }, [location]);

  const [user, setUser] = useState([]);

  const API = "http://localhost:3003/sign";
  const User = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.length > 0) {
        setUser(data);
      }
      console.log("========data========", data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    User(API);
  }, []);

  return (
    <>
      {/* <Navbar title="TextUtils" mod={props.mod} toggleMode={props.toggleMode}/> */}

      <h2 className="text-center mb-5">
        Welcom {localStorage.getItem("fname")}
      </h2>
      <div className="container">
        <button className="btn-outline-danger float-right mb-5">
          <a
            className={`nav-link ${location.pathname === "/" ? "active" : " "}`}
            href="/"
            onClick={() => {
              localStorage.removeItem("token");
              localStorage.removeItem("user");
              localStorage.removeItem("localStorage");
              localStorage.removeItem("fname")
              logIn();
            }}
          >
            Log Out
          </a>
        </button>
      </div>

      <div className={`${props.mode}`}>
        <div className="accordion container" style={style}>
          <h1>Accordionn</h1>
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Accordion Item #1
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <strong>This is the first item's accordion body.</strong> It
                  is shown by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the{" "}
                  <code>.accordion- body</code>, though the transition does
                  limit overflow.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Accordion Item #2
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <strong>This is the second item's accordion body.</strong> It
                  is hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the{" "}
                  <code>.accordion -body</code>, though the transition does
                  limit overflow.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Accordion Item #3
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <strong>This is the third item's accordion body.</strong> It
                  is hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the{" "}
                  <code>.accordion -body</code>, though the transition does
                  limit overflow.
                </div>
              </div>
            </div>
          </div>
          <div className=" my-3">
            <button onClick={toggle} className="btn">
              {btn}
            </button>
          </div>
        </div>
      </div>

      <div className="container">
        <span class="border border-light">
          <table className="table table-hover" style={{ border: "2px" }}>
            <thead className="tab">
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Contact</th>
                <th scope="col">Type</th>
                <th scope="col">Address</th>
              </tr>
            </thead>
            <tbody>
              <UserData user={user} />
            </tbody>
          </table>
        </span>
      </div>
      <hr></hr>
      <div className="container pt-5 mb-3" style={{ backgroundColor: "lightblue" }}>
        <div className="col d-non-flex my-5">
          <button style={{ marginLeft: "185px",paddingLeft:"15px",paddingRight:"15px"}} className="btn-warning">
            BreakFast{" "}
          </button>
          <button style={{ marginLeft: "185px",paddingLeft:"15px",paddingRight:"15px"}} className="btn-warning">
            Lunch{" "}
          </button>
          <button style={{ marginLeft: "185px",paddingLeft:"15px",paddingRight:"15px"}} className="btn-warning">
            Dinner{" "}
          </button>
          <button style={{ marginLeft: "185px",paddingLeft:"15px",paddingRight:"15px"}} className="btn-warning">
            All{" "}
          </button>
        </div>

        <div class="row">
          <div class="col-sm-4">
           <div class="card">
            <div class="row">
              <div class="col-sm-4">
                <div>
                  <Image src={img} className="img-fluid rounded-start" />
                </div>
              </div>
              <div class="col-sm-8">
               
                  <div class="card-body">
                    <h5 class="card-title">Lorem.</h5>
                    <p class="card-text">
                      magnam modi obcaecati et totam a deserunt, aliquam placeat
                      quisquam ipsa commodi dicta!
                    </p>
                    <p className="text-info">22$<button class="btn-info float-right">Click Me</button></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
       
          <div class="col-sm-4 mb-5">
           <div class="card">
            <div class="row">
              <div class="col-sm-4">
                <div>
                  <Image src={img2} className="img-fluid rounded-start" />
                </div>
              </div>
              <div class="col-sm-8">
               
                  <div class="card-body">
                    <h5 class="card-title">Lorem.</h5>
                    <p class="card-text">
                      magnam modi obcaecati et totam a deserunt, aliquam placeat
                      quisquam ipsa commodi dicta!
                    </p>
                    <p className="text-info">21$ <button class="btn-info float-right">Click Me</button></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
      
          <div class="col-sm-4 mb-5">
           <div class="card">
            <div class="row">
              <div class="col-sm-4">
                <div>
                  <Image src={img3} className="img-fluid rounded-start" />
                </div>
              </div>
              <div class="col-sm-8">
               
                  <div class="card-body">
                    <h5 class="card-title">Lorem.</h5>
                    <p class="card-text">
                      magnam modi obcaecati et totam a deserunt, aliquam placeat
                      quisquam ipsa commodi dicta!
                    </p>
                    <p className="text-info">54$ <button class="btn-info float-right">Click Me</button></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
          
         
       
        <div class="row">
        <div class="col-sm-4 mb-5">
           <div class="card">
            <div class="row">
              <div class="col-sm-4">
                <div>
                  <Image src={img4} className="img-fluid rounded-start" />
                </div>
              </div>
              <div class="col-sm-8">
               
                  <div class="card-body">
                    <h5 class="card-title">Lorem.</h5>
                    <p class="card-text">
                      magnam modi obcaecati et totam a deserunt, aliquam placeat
                      quisquam ipsa commodi dicta!
                    </p>
                    <p className="text-info">56$ <button class="btn-info float-right">Click Me</button></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-4 mb-5">
           <div class="card">
            <div class="row">
              <div class="col-sm-4">
                <div>
                  <Image src={img5} className="img-fluid rounded-start" />
                </div>
              </div>
              <div class="col-sm-8">
               
                  <div class="card-body">
                    <h5 class="card-title">Lorem.</h5>
                    <p class="card-text">
                      magnam modi obcaecati et totam a deserunt, aliquam placeat
                      quisquam ipsa commodi dicta!
                    </p>
                    <p className="text-info">89$ <button class="btn-info float-right">Click Me</button></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-4 mb-5">
           <div class="card">
            <div class="row">
              <div class="col-sm-4">
                <div>
                  <Image src={img6} className="img-fluid rounded-start" />
                </div>
              </div>
              <div class="col-sm-8">
               
                  <div class="card-body">
                    <h5 class="card-title">Lorem.</h5>
                    <p class="card-text">
                      magnam modi obcaecati et totam a deserunt, aliquam placeat
                      quisquam ipsa commodi dicta!
                    </p>
                    <p className="text-info">21$ <button class="btn-info float-right">Click Me</button></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </>
  );
};

export default Accordion;
