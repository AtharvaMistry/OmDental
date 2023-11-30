import { UilBars } from "@iconscout/react-unicons";
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Reusables/Button";
import "../App.css";
import "./Style.css";
import { Drawer } from "antd";
function Header() {
  const [Menu, setMenu] = useState("Home");
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
        <p className="font-semibold text-[#8774d9]">OmDentalCare</p>
      </div>
      <div className="hidden sm:grid place-items-end md:order-3">
        <div>
          <a href="tel:+916353846481">
            <Button Name="Call Us" />
          </a>
        </div>
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
