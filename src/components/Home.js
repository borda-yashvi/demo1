import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Collapse,
  Popover,
  Toast,
  Tooltip,
  Modal,
  Dropdown,
  dataDismiss,
} from "bootstrap";
import "./home.css"
import {useNavigate} from "react-router-dom"
  
const Home =()=>{
  const Navigate = useNavigate()
  

    return (
     <>
        <div>
            <div className="up container-fluid text-white pb-4">
                <div className="rox ps-lg-5 pb-5">
                    <h3 className='pb-5'>Booking Website</h3>
                     <button className='btn-light  p-1 me-5 float-end'>Login</button>
                    <button className='btn-light p-1 me-3 float-end'>Register</button>
                    <div className='btno'>
                    <button class="btnu fas fa-chair text-white"> Stay</button>
                   <button class="btnu fas fa-chair text-white"> flight</button>
                   <button class="btnu fas fa-car text-white"> Car rentals</button>
                   <button class="btnu  fab fa-500px text-white"> Attractions</button>
                   <button class="btnu fab fa-avianex text-white"> Airport taxis</button>
                    </div>
                   
                 <h1 className='mt-5 mb-4'>Lorem ipsu uptatum maiores laboriosam</h1>
                <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt eos fuga culpa consequuntur doloremque. Expedita, nemo! Explicabo, nisi sunt</h5>
                <button className='btn-light  p-1 me-5 mt-3'>Login</button>
                </div>

                


            </div><button className='md btn-light  p-1 me-5'>
                <form className="form-inline my-2 my-lg-0 d-flex">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
   
    <label for="date" className="col-1 col-form-label">Date</label>
    <div className="col-5">
      <div className="input-group date" id="datepicker">
        <input type="text" className="form-control" id="date"/>
        <span className="input-group-append">
          <span className="input-group-text">
            <i className="fa fa-calendar"></i>
          </span>
        </span>
      </div>
    </div>
  </form>
           
                 </button>
        </div>

        <div className="container second py-5 mt-5">
        <div className="card-group me-3">
           <div className='card me-3'>
            <div className="card-body">
 
                <div className="card-text">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum praesentium rerum nulla aperiam ratione nihil ut perferendis sed officia expedita nisi ullam, consequatur commodi assumenda facere, mollitia fugiat sequi repellendus!
                </div>
              </div>
            </div>

            <div className='card me-3'>
            <div className="card-body">
 
                <div className="card-text">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum praesentium rerum nulla aperiam ratione nihil ut perferendis sed officia expedita nisi ullam, consequatur commodi assumenda facere, mollitia fugiat sequi repellendus!
                </div>
              </div>
            </div>

            <div className='card me-3'>
            <div className="card-body">
 
                <div className="card-text">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum praesentium rerum nulla aperiam ratione nihil ut perferendis sed officia expedita nisi ullam, consequatur commodi assumenda facere, mollitia fugiat sequi repellendus!
                </div>
              </div>
            </div>

            </div>
            </div>

        <div className="container-fluid my-5">
        <footer
          className="text-center text-lg-start text-white"
          style={{backgroundColor: "#45526e"}}
        >
          <div className="container p-4 pb-0">
            <section className="">
              <div className="row">
                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">Company name</h6>
                  <p>
                   Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, quisquam. Obcaecati inventore debitis amet nostrum reprehenderit necessitatibus cum soluta perspiciatis officiis atque! Nemo ducimus excepturi repellat exercitationem minus laborum dolor!
                  </p>
                </div>

                <hr className="w-100 clearfix d-md-none" />

                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">
                    Products
                  </h6>
                  <p>
                    <a className="text-white">lorem..</a>
                  </p>
                  <p>
                    <a className="text-white">react...</a>
                  </p>
                  <p>
                    <a className="text-white">bootstrap..</a>
                  </p>
                  <p>
                    <a className="text-white">nodejs....</a>
                  </p>
                </div>

                <hr className="w-100 clearfix d-md-none" />

                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">
                    Useful links
                  </h6>
                  <p>
                    <a className="text-white">Your Account</a>
                  </p>
                  <p>
                    <a className="text-white">Become an Affiliate</a>
                  </p>
                  <p>
                    <a className="text-white">Shipping Rates</a>
                  </p>
                  <p>
                    <a className="text-white">Help</a>
                  </p>
                </div>

                <hr className="w-100 clearfix d-md-none" />

                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">
                    Contact
                  </h6>
                  <p>
                    <i className="fas fa-home mr-3"></i> lorem lorem lorem
                  </p>
                  <p>
                    <i className="fas fa-envelope mr-3"></i>react@gmail.com
                  </p>
                  <p>
                    <i className="fas fa-phone mr-3"></i> + 37685749
                  </p>
                  <p>
                    <i className="fas fa-print mr-3"></i> + 497958476
                  </p>
                </div>
              </div>
            </section>

            <hr className="my-3" />

            <section className="p-3 pt-0">
              <div className="row d-flex align-items-center">
                <div className="col-md-7 col-lg-8 text-center text-md-start">
                  <div className="p-3">
                    © 2023 Copyright :
                    <a className="text-white" href="#">
                      ReactFooter.com
                    </a>
                  </div>
                </div>

                <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end text-white">
                  <a
                    className="btn btn-outline-light btn-floating m-1"
                    role="button"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>

                  <a
                    className="btn btn-outline-light btn-floating m-1 text-white"
                    role="button"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>

                  <a
                    className="btn btn-outline-light btn-floating m-1 text-white"
                    role="button"
                  >
                    <i className="fab fa-google"></i>
                  </a>

                  <a
                    className="btn btn-outline-light btn-floating m-1 text-white"
                    role="button"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </section>
          </div>
        </footer>
      </div>
     </>
    )
}
export default Home