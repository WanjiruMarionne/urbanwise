import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Buy from "./components/Buy";
import Rent from "./components/Rent";
import ListProperty from "./components/ListProperty";
import PropertyManagement from "./components/PropertyManagement";
import InfoHub from "./components/InfoHub";
import Footer from "./components/Footer";
import Discover from './components/Discover';
import Search from './components/Search';
import Investment from './components/Investment';
import QuickLinks from './components/QuickLinks';
import Company from './components/Company';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Team from './components/Team';
import './App.css';

function App() {
  return (
    <Router>
      <div className='appcontainer'>
        <div className="navbar">
          <NavBar />
        </div>  
        <div className='appbody'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/buy" element={<Buy />} />
            <Route path="/rent" element={<Rent />} />
            <Route path="/listproperty" element={<ListProperty />} />
            <Route path="/propertymanagement" element={<PropertyManagement />} />
            <Route path="/infohub" element={<InfoHub />} />
            <Route path="/discover" element={<Discover />} />
            <Route path="/search" element={<Search />} />
            <Route path="/investment" element={<Investment />} />
            <Route path="/company/*" element={<Company />} >
              <Route path="aboutus" element={<AboutUs />} />
              <Route path="team" element={<Team />} />
              <Route path="contactus" element={<ContactUs />} />
            </Route>
            <Route path="/quicklinks/*" element={<QuickLinks />} >
              <Route path="buy" element={<Buy />} />
              <Route path="rent" element={<Rent />} />
              <Route path="listproperty" element={<ListProperty />} />
              <Route path="propertymanagement" element={<PropertyManagement />} />
              <Route path="infohub" element={<InfoHub />} />
            </Route>
          </Routes>
        </div>
        <div className="footer">
            <Footer />
        </div> 
      </div>
    </Router>
  )
}

export default App;