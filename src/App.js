import React, {useState} from 'react';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import 'bootstrap/dist/css/bootstrap.min.css';

// import GithubCards from "./components/GitHubCards";

import Resume from './components/Resume';
// import Nav from './components/Nav';

function App() {
  const [currentPage, setCurrentPage] = useState('about');

  let SelectedPage = About;

  switch (currentPage) {
    case 'about': 
    SelectedPage = About;
      break;
    case 'contact':
    SelectedPage = Contact;
    break;
    case 'portfolio':
    SelectedPage = Portfolio;
    break;
    case 'resume':
    SelectedPage = Resume;
    break;
    
    default:
      break;
  };

  const handlePageChange = (page) => setCurrentPage(page)

  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange}  />
      <SelectedPage currentPage={currentPage} handlePageChange={handlePageChange} />
      <Footer />
      
    </div>
  )
}

export default App;
