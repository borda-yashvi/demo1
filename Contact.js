import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FaRegEyeSlash } from "react-icons/fa";
import Navbar from "./Navbar";
import axios from "axios";
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
import "./Contact.css";
import { Image } from "react-bootstrap";
import img from "./img/b2.jpg";

const Contact = ({ setUserLogin }) => {
  const Navigate = useNavigate();

  const [user, setUser] = useState({
    // name:"",
    email: "",
    password: "",
  });

  const [signuser, setSignUser] = useState({
    name: "",
    email: "",
    password: "",
    contact: "",
    address: "",
    rtype: "",
  });

  const [upuser, setupUser] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
    contact: "",
    address: "",
    rtype: "",
  });

  const [secret, setSecret] = useState("");

  const PostData = async (e) => {
    e.preventDefault();
    const { email, password, rtype } = user;
    console.log("+====user ", user);
    if (email !== "" && password !== "") {
      const result = await fetch("http://localhost:3003/form/login", {
        mode: "cors",
        crossDomain: true,
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({ email: email, password: password, type: rtype }),
      });
      const resp = await result.json();
      // console.log("===resp====", resp);
      console.log("======data type========", resp.data.type);
      if (resp.data.type === "admin") {
        alert("Admin registration");
        Navigate("/Admin");
        localStorage.setItem("token", resp.data.token);
        // localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("fname", JSON.stringify(resp.data.name));
        localStorage.setItem("localStorage", true);
        setUserLogin(resp.data.user);
        console.log("=========username======", resp.data.name);
      } else {
        if (resp.status) {
          alert("Registration success");
          Navigate("/Accordion");
          // setUserLogin={setUserLogin}
          localStorage.setItem("token", resp.data.token);
          // localStorage.setItem("user", JSON.stringify(user));
          localStorage.setItem("fname", JSON.stringify(resp.data.name));
          localStorage.setItem("localStorage", true);
          setUserLogin(resp.data.user);
          console.log("=========username======", resp.data.name);
        } else {
          alert("something you want to wrong", resp.msg);
        }
      }
    } else {
      alert("require all field of login");
    }
  };

  const sign = async (e) => {
    if (secret !== "secret" && signuser?.rtype === "admin") {
      e.preventDefault();
      alert("secrect is a wrong");
    } else {
      e.preventDefault();
      const { name, email, password, contact, address, rtype } = signuser;
      console.log("==sign=======", signuser);
      const response = await fetch("http://localhost:3003/sign", {
        mode: "cors",
        crossDomain: true,
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
          contact: contact,
          address: address,
          type: rtype,
        }),
      });
      const sign = await response.json();
      console.log("======sign in =========", sign);
      console.log("==========json.data.name=======", email);
      console.log("=======status====", sign.status);
      // .then(function(response) {
      if (sign.status === false) {
        alert("email was extist", response);
      } else {
        alert("success registration", response);
      }
      //   }).catch(function(error) {
      //     alert('Request failed', error)
      // });
    }
  };

  const update = (e) => {
    if (secret !== "secret" && signuser?.rtype === "admin") {
      e.preventDefault();
      alert("secrect is a wrong");
    } else {
      e.preventDefault();
      const { id, name, email, password, contact, address, rtype } = upuser;
      console.log("==sign=======", upuser);
      const up = fetch("http://localhost:3003/sign/:id", {
        mode: "cors",
        crossDomain: true,
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({
          id: id,
          name: name,
          email: email,
          password: password,
          contact: contact,
          address: address,
          type: rtype,
        }),
      });
      const update = up.json();
      console.log("======update in =========", update);
      console.log("==========json.data.name=======", email);
      console.log("=======status====", update.status);
      if (update.status === false) {
        alert("email was extist");
      } else {
        alert("success registration");
      }
    }
  };

  const onChange = (e, name, value) => {
    name = e.target.name;
    value = e.target.value;
    console.log("==name===", name, "=======valuie=======", value);
    setUser({ ...user, [name]: value });
  };

  const signChange = (e, name, value) => {
    name = e.target.name;
    value = e.target.value;
    console.log("==name===", name, "=======valuie=======", value);
    setSignUser({ ...signuser, [name]: value });
  };

  const UpChange = (e, name, value) => {
    name = e.target.name;
    value = e.target.value;
    console.log("==name===", name, "=======valuie=======", value);
    setupUser({ ...upuser, [name]: value });
  };

  const pwd = () => {
    var x = document.getElementById("pwds");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  };

  // const [pwds,setPwd] = useState("password")
  // const pwd=()=>{
  //   if(pwds.type==="password"){
  //     setPwd(pwds.type="text")
  //   }
  //   else{
  //     setPwd(pwds.type="password")
  //   }
  // }

  return (
    <>
      {/* <Navbar title="TextUtils"/> */}
      <div>
        {/* <div>
          <div className="pt-5" >
            <div className="py-5 text-center text-light">
              
            </div>
          </div>
        </div> */}

        <div>
          <div className="container-fluid" id="join">
            <div className="row pb-5">
              <div className="col-sm-12 text-center text-light">
                <h1 className="display-4">want to join</h1>
                <p>Be a part of bootsrap demo.</p>
                <button
                  type="button"
                  className="btn-warning"
                  data-bs-target="#myModal"
                  data-bs-toggle="modal"
                >
                  Join Now
                </button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="container">
            <div className="row">
              {/* <div className="col-sm-6">
                 <Image src={img}></Image>
            </div> */}
              <div className="col-sm-6">
                <div className="modal fade" id="myModal" role="dialog">
                  <div className="modal-dialog modal-md" id="sign">
                    <div className="modal-content" id="si">
                      <div className="modal-header">
                        <h4 className="modal-title">Sign Up</h4>
                        <hr></hr>
                        <button
                          type="button"
                          className="close"
                          data-bs-dismiss="modal"
                        >
                          &times;
                        </button>
                      </div>
                      <div className="modal-body" onSubmit={sign}>
                        <form action="/action_page.php">
                          {signuser?.rtype === "admin" ? (
                            <div>
                              <label>Secret Key :</label>
                              <br></br>
                              <input
                                className="form-group"
                                id="flexRadioDefault3"
                                placeholder="secret key"
                                type="text"
                                onChange={(e) => {
                                  setSecret(e.target.value);
                                }}
                              />
                            </div>
                          ) : null}
                          <div className="form-group">
                            <label htmlFor="name">Name :</label>
                            <br></br>
                            <input
                              type="text"
                              id="names"
                              autoComplete="off"
                              name="name"
                              onChange={signChange}
                              defaultValue={signuser?.name}
                              placeholder="enter your name"
                              required
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="email">Email Address:</label>
                            <br></br>
                            <input
                              type="email"
                              id="emails"
                              className="form-group"
                              autoComplete="off"
                              name="email"
                              onChange={signChange}
                              defaultValue={signuser?.email}
                              placeholder="enter your email"
                              required
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="pwd">Password:</label>
                            <br></br>
                            <input
                              type="password"
                              id="pwds"
                              className="form-group"
                              name="password"
                              onChange={signChange}
                              defaultValue={signuser?.password}
                              placeholder="enter your pwd"
                              required
                            />
                            <FaRegEyeSlash
                              onClick={pwd}
                              style={{ marginLeft: "-20px" }}
                            />

                            {/* <input type="checkbox" onClick={pwd} /> */}
                          </div>

                          <div className="form-group">
                            <label htmlFor="cn">Contct no :</label>
                            <br></br>
                            <input
                              type="number"
                              id="cn"
                              className="form-group"
                              name="contact"
                              onChange={signChange}
                              defaultValue={signuser?.contact}
                              placeholder="enter your contact no."
                              required
                            />
                          </div>
                          <div className="form-group">
                            <label>Address:</label>
                            <br></br>
                            <textarea
                              cols="23"
                              // rows={"34"}
                              className="form-group"
                              name="address"
                              onChange={signChange}
                              defaultValue={signuser?.address}
                              placeholder="enter your Address"
                            ></textarea>
                          </div>

                          <div className="form-check">
                            <input
                              className="p-0"
                              type="radio"
                              id="flexRadioDefault1"
                              name="rtype"
                              onChange={signChange}
                              value="user"
                            />
                            as a user
                            {/* <br/> */}
                            <input
                              className="ml-5"
                              type="radio"
                              id="flexRadioDefault2"
                              name="rtype"
                              onChange={signChange}
                              value="admin"
                            />
                            as a admin
                          </div>

                          <hr></hr>
                        </form>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="submit"
                          className="btn-primary"
                          onSubmit={sign}
                        >
                          Submit
                        </button>
                        <button
                          type="button"
                          className="btn-danger"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div id="login" className='container'>
      <div id='in'>
      <div className="container-fluid shadow-none p-1 mb-2 bg-light rounded" id="contact_Modal" style={{height:"100%",width:"470px"}}>
        <div className="modal_fade pl-3"  role="dialog">
          <div className="modal-dialog modal-md">
            <div className="modal-content" >
              <div className="modal-header">
               <h4 className="modal-title" >Contact Us</h4>
              </div><hr></hr>
              <div className="modal-body">
                <div className="w-200">
                    <form method="POST">
                    <div className="form-group">
                        <label htmlFor="email">Email :</label><br></br>
                        <input type="email" id="email" className="form-group"
                          name="email"
                          defaultValue={user?.email}
                          onChange={onChange}
                          placeholder='enter email  id '
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password :</label><br></br>
                        
                        <input type="password" id="pwd" className="form-group"
                          minLength={3}
                          name="password"
                          defaultValue={user?.password}
                          onChange={onChange}
                          placeholder='enter password'
                        />
                    </div><hr></hr>

                    <footer className="modal-footer">
                        <div><button type="button" className="btn btn-primary"
                        value="register" onClick={PostData}>Submit</button></div>
                    </footer>
                   
                </form>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
      </div> */}

      <section className="section">
        <div className="conatiner-fluid" id="login">
          <div className="row" id="cover">
            <div className="col col-xl-12 d-flex  justify-content-center py-5">
              <div
                className="d-flex align-item-right justify-content-center shadow-none bg-light rounded"
                id="contact_Modal"
                style={{ height: "100%", width: "470px" }}
              >
                <div className="modal_fade" role="dialog">
                  <div className="container mb-xxl-5" id="just">
                  
                  {/* <div class="custom-control custom-switch">
                    <input type="checkbox" class="custom-control-input" id="darkSwitch" />
                    <label class="custom-control-label"  for="darkSwitch"></label>
                  </div>
                   */}
                  </div>
                  <div className="modal-dialog modal-md">
                    <div className="modal-content pl-5">
                      <div className="modal-header">
                        <h4 className="modal-title my-2">LogIn</h4>
                      </div>
                      <hr></hr>
                      <div className="modal-body">
                        <div className="w-200">
                          <form method="POST">
                            <div className="form-group">
                              <label htmlFor="email">Email :</label>
                              <br></br>
                              <input
                                type="email"
                                id="email"
                                className="form-group"
                                name="email"
                                defaultValue={user?.email}
                                onChange={onChange}
                                placeholder="enter email  id "
                              />
                            </div>
                            <div className="form-group">
                              <label htmlFor="password">Password :</label>
                              <br></br>

                              <input
                                type="password"
                                id="pwd"
                                className="form-group"
                                minLength={3}
                                name="password"
                                defaultValue={user?.password}
                                onChange={onChange}
                                placeholder="enter password"
                              />
                            </div>
                            <hr></hr>

                            <div>
                              <button
                                type="button"
                                className="btn-primary mb-3"
                                value="register"
                                onClick={PostData}
                              >
                                Submit
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col col-xl-6 container limg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* <div id="edit">
        <div className="container-sm">
          <p style={{ fontSize: "15px" }}>Edit your form</p>
          <hr></hr>
          <button
            style={{ fontSize: "13px", marginLeft: "70px" }}
            className="btn-outline-danger"
            data-bs-target="#Update"
            data-bs-toggle="modal"
          >
            Edit <i className="far fa-edit"></i>
          </button>
        </div>
      </div> */}

      {/* <div className="container">
        <div className="modal fade" id="Update" role="dialog">
          <div className="modal-dialog modal-md">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Update yor form</h4>
                <hr></hr>
                <button type="button" className="close" data-bs-dismiss="modal">
                  &times;
                </button>
              </div>
              <div className="modal-body" onSubmit={sign}>
                <form action="/action_page.php">
                  {signuser?.rtype === "admin" ? (
                    <div>
                      <label>Secret Key :</label>
                      <br></br>
                      <input
                        className="form-group"
                        id="flexRadioDefault3"
                        placeholder="secret key"
                        type="text"
                        onChange={(e) => {
                          setSecret(e.target.value);
                        }}
                      />
                    </div>
                  ) : null}
                  <div className="form-group">
                    <label htmlFor="name">Name :</label>
                    <br></br>
                    <input
                      type="name"
                      id="names"
                      className="input-group has-validation"
                      autoComplete="off"
                      name="name"
                      onChange={UpChange}
                      defaultValue={signuser?.name}
                      placeholder="enter your name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address:</label>
                    <br></br>
                    <input
                      type="email"
                      id="emails"
                      className="form-group"
                      autoComplete="off"
                      name="email"
                      onChange={UpChange}
                      defaultValue={signuser?.email}
                      placeholder="enter your email"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="pwd">Password:</label>
                    <br></br>
                    <input
                      type="password"
                      id="pwds"
                      className="form-group"
                      name="password"
                      onChange={UpChange}
                      defaultValue={signuser?.password}
                      placeholder="enter your pwd"
                      required
                    />
                    <input type="checkbox" onClick={pwd} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="cn">Contct no :</label>
                    <br></br>
                    <input
                      type="number"
                      id="cn"
                      className="form-group"
                      name="contact"
                      onChange={UpChange}
                      defaultValue={signuser?.contact}
                      placeholder="enter your contact no."
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Address:</label>
                    <br></br>
                    <textarea
                      cols="40"
                      className="form-group"
                      name="address"
                      onChange={UpChange}
                      defaultValue={signuser?.address}
                      placeholder="enter your Address"
                    ></textarea>
                  </div>

                  <div className="form-check">
                    <input
                      className=""
                      type="radio"
                      id="flexRadioDefault1"
                      name="rtype"
                      onChange={UpChange}
                      value="user"
                    />
                    as a user
                    <input
                      className=""
                      type="radio"
                      id="flexRadioDefault2"
                      name="rtype"
                      onChange={UpChange}
                      value="admin"
                    />
                    as a admin
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <div>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onSubmit={update}
                  >
                    Update form
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Contact;
// axios.post('http://localhost:3003/form/login', {
//   firstName: 'Finn',
//   lastName: 'Williams'
// })
// .then((response) => {
//   console.log(response);
// }, (error) => {
//   console.log(error);
// });
//       const json = await response.json()
//       console.log(json);
//       if(json.status===422||!json){
//        console.log("user was not found");
//       }
//       else{
//         console.log("invaild password");
//       }
// const Navigate=useNavigate
// const login=()=>{
//   Navigate("../form/Router/login")
// }
//   const [user,setUser] = useState({
//     name:"",email:"",password:""
//   })
//   let name,value
//   const handleInputs=(e)=>{
//     console.log(e);
//     name=e.target.name
//     value=e.target.value
//     setUser({...user,[name]:value})
//   }

//    const resp = await res.json()
//    if(resp.status===422||!resp){
//       window.alert("invaild Registration")
//       console.log("invaild Registration");
//    }
//    else{
//     window.alert("Registration success")
//     console.log("Registration success");

//     Navigate.push(router())
//    }
//   }
