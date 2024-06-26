import React from "react";
import "./AdminSidebar.css";
import { FaHome } from "react-icons/fa";
import { FaListUl } from "react-icons/fa";
import { FaPeopleArrows } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaUserAstronaut } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { Link } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <div className="sidebar" id="sidebar">
      <div className="sidebar-inner slimscroll">
        <div id="sidebar-menu" className="sidebar-menu">
          <ul>
            <li className="menu-title">
              <span>Main</span>
            </li>
            <li className="active">
              <Link to={"/admin/dashboard"}>
                <FaHome /> <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link to={"/admin/appointments"}>
                <FaListUl /> <span>Appointments</span>
              </Link>
            </li>
            <li>
              <Link to={"/admin/doctors"}>
                <FaUserAstronaut /> <span>Doctors</span>
              </Link>
            </li>
            <li>
              <Link to={"/admin/patients"}>
                <FaRegUser /> <span>Patients</span>
              </Link>
            </li>
            <li>
              <Link to={"/admin/reviews"}>
                <FaRegStar /> <span>Reviews</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
