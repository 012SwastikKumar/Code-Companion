import "./Header.css";
import { React, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../redux/userSlice";
import { Avatar } from "@mui/material";
import toast from "react-hot-toast";
import axios from "axios";

const LogoStyle = {
  fontSize: "3rem",
  color: "rgb(20, 4, 125)",
  cursor: "pointer",
};

const brandNameStyle = {
  cursor: "pointer",
};

const Header = () => {
  const { user } = useSelector((state) => state.user);
  const [activePage, setActivePage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let location = useLocation();
  let token = localStorage.getItem("token");
  const logoutHandler = async () => {
    localStorage.removeItem("token");
    token = null;
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/v1/logout`,
        {
          withCredentials: true,
        }
      );
      if (response.data.success) {
        dispatch(setUser(null));
        toast.success("Logged out successfully");
        navigate("/login");
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    if (
      location.pathname === "/discover" ||
      location.pathname === "/my-profile"
    ) {
      if (!user) {
        navigate("/login");
      }
      if (location.pathname === "/my-profile") setActivePage("My Profile");
      else setActivePage("Explore");
    } else if (location.pathname === "/faq") setActivePage("FAQs");
    else if (location.pathname === "/doubts") setActivePage("Doubts");
    else if (location.pathname === "/about") setActivePage("About");
    else if (location.pathname === "/") setActivePage("Home");
  }, [location.pathname, navigate, dispatch, user]);

  return (
    <div className="header">
      <div
        className="d-flex"
        onClick={(e) => {
          navigate("/");
        }}
      >
        <IntegrationInstructionsIcon style={LogoStyle} />
        <h2 className="brand__name" style={brandNameStyle}>
          &nbsp; Code Companion
        </h2>
      </div>
      <ul className="nav__menu">
        <Link
          to="/"
          className={`${
            activePage === "Home" ? "active--underline" : " "
          } nav__link`}
        >
          <li className="nav__item ">Home</li>
        </Link>
        <Link
          to="/discover"
          className={`${
            activePage === "Explore" ? "active--underline" : " "
          } nav__link`}
        >
          <li className="nav__item">Explore</li>
        </Link>
        <Link
          to="/faq"
          className={`${
            activePage === "FAQs" ? "active--underline" : " "
          } nav__link`}
        >
          <li className="nav__item">FAQs</li>
        </Link>
        <Link
          to="/doubts"
          className={`${
            activePage === "Doubts" ? "active--underline" : " "
          } nav__link`}
        >
          <li className="nav__item">Doubts</li>
        </Link>
        <Link
          to="/about"
          className={`${
            activePage === "About" ? "active--underline" : " "
          } nav__link`}
        >
          <li className="nav__item">About</li>
        </Link>
      </ul>

      {user && token ? (
        <div className="my__profile__btn">
          <div
            style={{ cursor: "pointer" }}
            className="d-flex"
            onClick={() => navigate("/my-profile")}
          >
            <Avatar
              sx={{ width: 32, height: 32 }}
              alt="dp"
              src={user?.avatar?.url}
            />
            <div className="user__name"> {user?.name}</div>
          </div>

          <button className="cta-header--logout" onClick={logoutHandler}>
            Logout
          </button>
        </div>
      ) : (
        <button className="cta-header" onClick={() => navigate("/login")}>
          Login or SignUp
        </button>
      )}
    </div>
  );
};

export default Header;
