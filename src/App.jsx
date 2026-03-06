import React from 'react'
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from './pages/Home';
import HomeTwo from './pages/HomeTwo';
import HomeThree from './pages/HomeThree';
import About from './pages/About';
import AgentsList from './pages/AgentsList';
import AgentSingle from './pages/AgentSingle';
import NotFound from './pages/NotFound';
import Faq from './pages/Faq';
import Contact from './pages/Contact';
import BlogList from './pages/BlogList';
import BlogSingle from './pages/BlogSingle';
import AgencyList from './pages/AgencyList';
import AgencySingle from './pages/AgencySingle';
import PgSingle from './pages/PgSingle';
import PostAnAds from './pages/PostAnAds';
import PropertyList from './pages/PropertyList';
import PropertyListMap from './pages/PropertyListMap';
function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home-2" element={<HomeTwo />} />
        <Route path="/home-3" element={<HomeThree />} />
        <Route path="/about" element={<About />} />
        <Route path="/agents-list" element={<AgentsList />} />
        <Route path="/agent-single" element={<AgentSingle />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog-list" element={<BlogList />} />
        <Route path="/blog-single" element={<BlogSingle />} />
        <Route path="/agency-list" element={<AgencyList />} />
        <Route path="/agency-single" element={<AgencySingle />} />
        <Route path="/pg-single" element={<PgSingle />} />
        <Route path="/add-post" element={<PostAnAds />} />
        <Route path="/property-list" element={<PropertyList />} />
        <Route path="/property-list-map" element={<PropertyListMap />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
