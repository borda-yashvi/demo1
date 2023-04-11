import React, { Component } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Admin.css";
import Img from "./img/1.png";
import Img1 from "./img/3.png";
import Img2 from "./img/4.png";
import { Image } from "react-bootstrap";
import { MdOutlineDashboard } from "react-icons/md";

const Admin = () => {
  const navigate = useNavigate();
  const logIn = () => {
    navigate("/Contact");
  };

  let location = useLocation();
  React.useEffect(() => {
    console.log(location.pathname);
  }, [location]);
  return (
    <>
      <h1>welcome {localStorage.getItem("user.name")}</h1>
      <div className="container my-5">
        <div className="row">
          <div className="col-xl-12">
            <button className="btn btn-outline-success float-right">
              <a
                className={`nav-link ${
                  location.pathname === "/" ? "active" : " "
                } `}
                href="/"
                onClick={() => {
                  localStorage.removeItem("token");
                  localStorage.removeItem("user");
                  localStorage.removeItem("localStorage");
                  logIn();
                }}
              >
                Log Out
              </a>
            </button>
            <h1>Admin page</h1>
            <div className="container-fluid pb-5">
              <hr />
              <div className="card-group mb-3 my-5">
                <div className="card">
                  <div className="card-body text-center ">
                    <Image src={Img}></Image>
                    <p className="card-text display-4">Web Developer</p>
                    <h6>
                      some example text.. Lorem ipsum, dolor consectetu nt
                      corrupti ad autem ipsum dignissimos a porro. Quo
                      temporibus magni vitae dolore. Necessitatibus,
                    </h6>
                    <button className="btn-warning">See Profile</button>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body text-center ">
                    <Image src={Img1}></Image>
                    <p className="card-text display-4">App Developer</p>
                    <h6>
                      some example text.. Lorem ipsum dolor sit amet
                      consectetur,Architecto, dolor molestias impedit, ea fugit
                      quos pr accusamu Architecto, dolor molestias impedit, ea
                      fugits reprehenderit perferendis dignissimos ipsa harum
                      voluptatum, quod, sequi, magni ea ratione quas mollitia
                      velit ipsum maxime eius recusandae laboriosam.
                    </h6>
                    <button className="btn-primary">See Profile</button>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body text-center ">
                    <Image src={Img1} id="img"></Image>
                    <p className="card-text display-4">App Developer</p>
                    <h6>
                      some example text.. Lorem ipsum dolor sit amet
                      consectetur, Architecto, dolor molestias impedit, ea fugit
                      quos pr accusamus Architecto, dolor molestias impedit, ea
                      fugit reprehenderit perferendis dignissimos ipsa harum
                      voluptatum, quod, sequi, magni ea ratione quas mollitia
                      velit ipsum maxime eius recusandae laboriosam.
                    </h6>
                    <button className="btn-secondary">See Profile</button>
                  </div>
                </div>
              </div>
            </div>

            <button className="btn btn-outline-dark float-right">recharge </button>

            <h2 className="ml-5">
              <MdOutlineDashboard />
           Dashboard 
            </h2>
            <div className="card-group mb-5 my-6 mx-5">
              <div className="card me-3 c1">
                <div className="card-body text-center ">
                  <h6>some example text</h6>
                </div>
              </div>
              <div className="card me-3 c2">
                <div className="card-body text-center ">
                  <h6>some example text</h6>
                </div>
              </div>
              <div className="card me-3 c3">
                <div className="card-body text-center ">
                  <h6>some example text</h6>
                </div>
              </div>
              <div className="card c4">
                <div className="card-body text-center ">
                  <h6>some example text</h6>
                </div>
              </div>
            </div>
            <div className="container">
             

              <section>
                <div className="container">
                  <div className="row ml-4">
                      <div className="col col-lg-9 bg-light pb-xl-5  mb-5">
                       <h2>Transaction</h2>
                        <table className="table table-hover">
                          <thead className="tab">
                            <tr>
                              <th scope="col">Added by</th>
                              <th scope="col">Balance</th>
                              <th scope="col">Type</th>
                              <th scope="col">Description</th>
                              <th scope="col">Created date</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>xyz</td>
                              <td>23</td>
                              <td>hyjyjytjyj</td>
                              <td>tht</td>
                              <td>12-3-2023</td>
                            </tr>
                            <tr>
                              <td>xyz</td>
                              <td>23</td>
                              <td>hyjyjytjyj</td>
                              <td>tht</td>
                              <td>12-3-2023</td>
                            </tr>
                            <tr>
                              <td>xyz</td>
                              <td>23</td>
                              <td>hyjyjytjyj</td>
                              <td>tht</td>
                              <td>12-3-2023</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <div className="col col-lg-2 ml-2 ms-5 mb-5">
                      <div class="d-flex flex-column">
                        <div class="p-2 bg-white p-lg-5 mb-3">product</div>
                        <div class="p-2 bg-white p-5 mb-3">item</div>
                        <div class="p-2 bg-white p-5 mb-3">Total</div>
                        <div class="p-2 bg-white p-5">other</div>
                      </div>
                      </div>
                      </div>
                      
                      </div>
              
              </section>
            </div>
          </div>
        </div>
      </div>
      {/* <a>name : {localStorage.getItem('user')}</a> */}
    </>
  );
};

export default Admin;
