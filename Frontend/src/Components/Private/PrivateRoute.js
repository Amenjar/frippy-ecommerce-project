import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { getCurrent } from "../../redux/actions/auth";

function PrivateRoute({ children }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(()=>{
  dispatch(getCurrent(navigate));
  },[dispatch])
  const token = localStorage.getItem("token");
  
  const auth = useSelector((state) => state.AuthReducer.auth);
 const found = localStorage.getItem("user");
 
  const user = useSelector(state => state.AuthReducer.user);
  return (
    <div>{ (token || auth) ? children : <Navigate to="/login"></Navigate>}</div>
  );
}

export default PrivateRoute;