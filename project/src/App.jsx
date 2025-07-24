import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'projects':
        return <Projects />;
      case 'skills':
        return <Skills />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="transition-all duration-500 ease-in-out">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;