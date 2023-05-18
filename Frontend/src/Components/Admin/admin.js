import React,{useEffect, useState} from  'react'
import { useDispatch,useSelector } from 'react-redux';
import { getCurrent, modifierUser } from '../../redux/actions/auth';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import "../Profile/Profile.css";
import ModelProfile from '../Profile/ModelProfile';

function Admin() {
    const dispatch = useDispatch();
    
  useEffect(()=>{
  dispatch(getCurrent());
  },[dispatch])
    const token = localStorage.getItem('token');
    const user = useSelector((state) => state.AuthReducer.user);
  return (
   <div>
    {user && token ? <div class="container emp-profile" style={{marginTop:"40px;",padding:"100px"}}>
       <div>     
                <div class="row">
                    <div class="col-md-4">
                        <div class="profile-img">
                            <img src={user.picture} alt=""/>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="profile-head">
                                    <h5>
                                        { user.name}
                                    </h5>
                                    <h6>
                                        {user.role}
                                    </h6>
                                    <p class="proile-rating">RANKINGS : <span>8/10</span></p>
                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                <ModelProfile user={user} />
                </div>
                <div class="row">
                    <div class="col-md-4">                      
                    </div>
                    <div class="col-md-8">
                        <div class="tab-content profile-tab" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>User Id</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{user._id}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Name</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{user.name}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Email</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{user.email}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Phone</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{user.phone}</p>
                                            </div>
                                        </div>
                                        
                            </div>
                           
                        </div>
                    </div>
                </div>
                </div>
    
        </div>:null}
   </div>

    
  )
}

export default Admin;