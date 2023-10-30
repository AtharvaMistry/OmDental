import { UilBars, UilPhone } from "@iconscout/react-unicons";
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Reusables/Button";
import "../App.css";
import "./Style.css";
import { Drawer } from "antd";
// import TeethImg from '../assets/tooth_2035058.png';
function Header() {
  const [Menu, setMenu] = useState("");
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <div className="grid grid-cols-2 py-3 px-4 bgServiceHome sm:grid-cols-3 md:px-20">
      <div className="flex justify-start items-center gap-2">
        {/* <div className="bg-[#8774d9] rounded-full  p-1">
          <img src={TeethImg} alt="" className="min-w-10 max-w-10"/>
        </div> */}
        <p className="font-semibold text-[#8774d9]">OmDentalClinic</p>
      </div>
      <div className="hidden sm:grid place-items-end md:order-3">
        <div>
          <a href="tel:+916353846481">
            <Button Name="Call Us" />
          </a>
        </div>
        {/* <div className="flex justify-center items-center gap-1 bg-[#8774d9] w-fit text-white px-3 py-1 rounded-full">
          <UilPhone className="w-4" />
          <p>Call Us</p>
        </div> */}
      </div>
      <div className="flex justify-end items-center md:hidden">
        <UilBars className="text-[#8774D9]" onClick={showDrawer} />
        <Drawer
          placement="right"
          onClose={onClose}
          open={open}
          className="BackgroundColorDrawer"
        >
          <div className="grid gap-y-3 text-lg">
            <Link
              to="/"
              onClick={() => {
                setMenu("Home");
                setOpen(false);
              }}
            >
              <p
                className={`${
                  Menu === "Home" ? "text-[#8774D9]" : "text-gray-600"
                }`}
              >
                Home
              </p>
            </Link>
            <Link
              to="/about"
              onClick={() => {
                setMenu("About");
                setOpen(false);
              }}
            >
              <p
                className={`${
                  Menu === "About" ? "text-[#8774D9]" : "text-gray-600"
                }`}
              >
                About
              </p>
            </Link>
            <Link
              to="/service"
              onClick={() => {
                setMenu("Service");
                setOpen(false);
              }}
            >
              <p
                className={`${
                  Menu === "Service" ? "text-[#8774D9]" : "text-gray-600"
                }`}
              >
                Services
              </p>
            </Link>
            <Link
              to="/blog"
              onClick={() => {
                setMenu("Blog");
                setOpen(false);
              }}
            >
              <p
                className={`${
                  Menu === "Blog" ? "text-[#8774D9]" : "text-gray-600"
                }`}
              >
                Blog
              </p>
            </Link>
          </div>
        </Drawer>
      </div>
      <div className="hidden md:flex justify-end items-center gap-9 font-medium">
        <Link to="/" onClick={() => setMenu("Home")}>
          <p
            className={`${
              Menu === "Home" ? "text-[#8774D9]" : "text-gray-600"
            }`}
          >
            Home
          </p>
        </Link>
        <Link to="/about" onClick={() => setMenu("About")}>
          <p
            className={`${
              Menu === "About" ? "text-[#8774D9]" : "text-gray-600"
            }`}
          >
            About
          </p>
        </Link>
        <Link to="/service" onClick={() => setMenu("Service")}>
          <p
            className={`${
              Menu === "Service" ? "text-[#8774D9]" : "text-gray-600"
            }`}
          >
            Services
          </p>
        </Link>
        <Link to="/blog" onClick={() => setMenu("Blog")}>
          <p
            className={`${
              Menu === "Blog" ? "text-[#8774D9]" : "text-gray-600"
            }`}
          >
            Blog
          </p>
        </Link>
      </div>
    </div>
  );
}

export default Header;
