import Footer from "./Footer";
import Blog1 from "./Reusables/Blog1";
import Blog2 from "./Reusables/Blog2";
import Blog3 from "./Reusables/Blog3";
import Contact from "./Reusables/Contact";
import "./Style.css";

function Blog() {

  return (
    <>
      <div className="px-4 md:px-20 py-10">
        <div>
          <Contact />
        </div>
        <div className="border-b-2 border-dotted border-gray-600 mb-5">
          <Blog1 />
        </div>

        <div className="border-b-2 border-dotted border-gray-600 mb-5">
          <Blog2 />
        </div>

        <div>
          <Blog3 />
        </div>

        <div className="border-t border-dashed border-gray-700">
          <Contact />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Blog;
