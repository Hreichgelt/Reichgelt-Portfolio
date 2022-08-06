import React from "react";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Project from "./routes/Project";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;

// const [currentPage, setCurrentPage] = useState('about');

//   let SelectedPage = About;

//   switch (currentPage) {
//     case 'about':
//     SelectedPage = About;
//       break;
//     case 'contact':
//     SelectedPage = Contact;
//     break;
//     case 'portfolio':
//     SelectedPage = Portfolio;
//     break;
//     case 'resume':
//     SelectedPage = Resume;
//     break;

//     default:
//       break;
//   };

//   const handlePageChange = (page) => setCurrentPage(page)

//   return (
//     <div>
//       <Header currentPage={currentPage} handlePageChange={handlePageChange}  />
//       <SelectedPage currentPage={currentPage} handlePageChange={handlePageChange} />
//       <Footer />
//     </div>
//   )
// }
