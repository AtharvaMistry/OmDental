import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Blog from "./Blog";
import Services from "./Services";

function Layout() {
  return (
    <div className="">
      <div className="fixed top-0 right-0 left-0 z-[999] ">
       
        <Header />
      </div>
      <div className="mt-[70px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} />
          <Route path="service" element={<Services />} />
        </Routes>
      </div>
    </div>
  );
}

export default Layout;
