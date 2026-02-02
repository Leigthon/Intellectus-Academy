import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Subjects from "@/pages/Subjects";
import Tutors from "@/pages/Tutors";
import Pricing from "@/pages/Pricing";
import Contact from "@/pages/Contact";
import Resources from "@/pages/Resources";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/Intellectus-Academy">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/subjects" element={<Subjects />} />
          <Route path="/tutors" element={<Tutors />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resources" element={<Resources/>}/>
        </Routes>
        <Footer />
        <Toaster position="top-center" />
      </BrowserRouter>
    </div>
  );
}

