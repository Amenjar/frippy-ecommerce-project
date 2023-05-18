import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { getCurrent } from "../../redux/actions/auth";

function PrivateRouteAdmin({ children }) {
  const dispatch = useDispatch();

  useEffect(()=>{
  dispatch(getCurrent());
  },[dispatch])
  const token = localStorage.getItem("token");
  const user = useSelector((state) => state.AuthReducer.user);
  const auth = useSelector((state) => state.AuthReducer.auth);
  return (
    <div>
      { (token || auth) && (user && user.role === "admin") ? (
        children
      ) :(token || auth) ? (
        <Navigate to="/admin"></Navigate>
      ): <Navigate to="/"></Navigate>}
    </div>
  );
}

export default PrivateRouteAdmin;