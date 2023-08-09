import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import BlogLanding from "../pages/blogLanding/BlogLanding";


function Navigation() {

    return (
        <div className="App">
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<BlogLanding />} />
                    <Route path="/aboutus" element={<div className="not-found">Page not found</div>} />
                    <Route path="/products" element={<div className="not-found">Page not found</div>} />
                    <Route path="/people" element={<div className="not-found">Page not found</div>} />
                    <Route path="/verticles" element={<div className="not-found">Page not found</div>} />
                    <Route path="/blog" element={<div className="not-found">Page not found</div>} />
                    <Route path="/contactus" element={<div className="not-found">Page not found</div>} />
                    <Route path="/contact" element={<div className="not-found">Page not found</div>} />
                </Routes>
                <Footer />
            </Router>
        </div>

    )
}

export default Navigation;