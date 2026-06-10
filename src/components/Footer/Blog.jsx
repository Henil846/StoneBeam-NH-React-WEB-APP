import "./Blog.component.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import blogImage from "../../assets/blog.png";
import blog1Image from "../../assets/blog2.png";
import blog2Image from "../../assets/Aiblog2.png";
import blog3Image from "../../assets/blo3.png";
import { IoIosSearch } from "react-icons/io";
import { FiEye, FiHeart, FiMessageCircle } from "react-icons/fi";

const Blog = () => {
  return (
    <>
      <Header />

      <div className="blog-page">

        <section className="blog-hero">
          <h1>Construction Industry Insights</h1>
          <p>
            Stay updated with the latest trends, tips, and innovations in construction management
          </p>

          <div className="blog-search">
            <input type="text" placeholder="Search articles..." />
            <button>
              <IoIosSearch size={20} />
            </button>
          </div>
        </section>

        
        <div className="blog-container">

          {/* LEFT SIDE */}
          <div className="blog-left">

            {/* Write Post + Filters */}
            <div className="blog-top">
              <div className="write-post">
                <a href="#">✏ Write Post</a></div>

              <div className="filters">
                <button className="active">All Posts</button>
                <button>Technology</button>
                <button>Safety</button>
                <button>Management</button>
                <button>Tips & Tricks</button>
              </div>
            </div>

            {/* BLOG CARD */}
            <div className="blog-card">

              <div className="card-image">
                <img src={blogImage}
                                alt="Construction"
                              />
                <span className="badge">Technology</span>
              </div>

              <div className="card-content">
                <div className="meta">
                  <span>Jan 15, 2025</span>
                  <span>StoneBeam Team</span>
                  <span>5 min read</span>
                </div>

                <h2>
                  How Digital Quotations Are Revolutionizing Construction
                </h2>

                <p>
                  Discover how our digital quotation system is streamlining the construction bidding process and reducing project delays by up to 40%.
                </p>

                <div className="card-footer">
                  <a href="#">Read Full Article →</a>

                  <div className="stats">
                    <span><FiEye /> 1.2k</span>
                    <span><FiHeart /> 89</span>
                    <span><FiMessageCircle /> 23</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE (SIDEBAR) */}
          <div className="blog-right">

            {/* Popular Posts */}
            <div className="sidebar-card">
              <h3>Popular Posts</h3>

              <div className="popular-item">
               <img src={blog1Image}
                                alt="Construction"
                              />
                <div>
                  <h4>Digital Quotations Revolution</h4>
                  <span>1.2k views</span>
                </div>
              </div>

              <div className="popular-item">
               <img src={blog2Image}
                                alt="Construction"
                              />
                <div>
                  <h4>AI in Construction</h4>
                  <span>2.1k views</span>
                </div>
              </div>

              <div className="popular-item">
                <img src={blog3Image}
                                alt="Construction"
                              />
                <div>
                  <h4>Premium ROI Benefits</h4>
                  <span>1.5k views</span>
                </div>
              </div>
            </div>

            {/* Categories */}
            <div className="sidebar-card">
              <h3>Categories</h3>

              <ul className="categories">
                <li>Technology <span>(12)</span></li>
                <li>Safety <span>(8)</span></li>
                <li>Management <span>(15)</span></li>
                <li>Tips & Tricks <span>(10)</span></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="newsletter">
              <h3>📩 Newsletter</h3>
              <p>Get weekly construction insights delivered to your inbox.</p>

              <input type="email" placeholder="Your email address" />
              <button>Subscribe</button>
            </div>

          </div>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default Blog;