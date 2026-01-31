import React, { useEffect } from 'react'; // Import useEffect from React
import "@/App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"; // Import only router specific hooks here
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

// Define the ScrollToTop component here
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Force scroll position to the top
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop /> {/* Add this line right after BrowserRouter */}
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

// import "@/App.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Toaster } from "@/components/ui/sonner";
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";
// import Home from "@/pages/Home";
// import About from "@/pages/About";
// import Subjects from "@/pages/Subjects";
// import Tutors from "@/pages/Tutors";
// import Pricing from "@/pages/Pricing";
// import Contact from "@/pages/Contact";
// import Resources from "@/pages/Resources";

// export default function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//         <Header />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/subjects" element={<Subjects />} />
//           <Route path="/tutors" element={<Tutors />} />
//           <Route path="/pricing" element={<Pricing />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/resources" element={<Resources/>}/>
//         </Routes>
//         <Footer />
//         <Toaster position="top-center" />
//       </BrowserRouter>
//     </div>
//   );
// }

