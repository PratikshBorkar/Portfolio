import React from 'react';
import { ChevronDown, Download } from 'lucide-react';
import TypeWriter from './TypeWriter';

function Home() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
              Pratiksh Borkar
            </span>
          </h1>
          
          <div className="text-2xl md:text-3xl lg:text-4xl text-gray-300 mb-8 h-16 flex items-center justify-center">
            <TypeWriter 
              text="Full Stack Developer" 
              delay={150} 
              infinite={true}
            />
          </div>
          
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Passionate about creating beautiful, functional, and user-centered digital experiences. 
            I specialize in modern web technologies and love bringing ideas to life through code.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-600/25">
              View My Work
            </button>
            <button className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
              <Download className="h-5 w-5" />
              Download CV
            </button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center items-center gap-6 mb-16">
            <a
              href="https://github.com/pratikshborkar"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/10 backdrop-blur-sm p-4 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
            >
              <img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" 
                alt="GitHub" 
                className="w-6 h-6 filter invert group-hover:scale-110 transition-transform duration-300"
              />
            </a>
            <a
              href="https://linkedin.com/in/pratikshborkar"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/10 backdrop-blur-sm p-4 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
            >
              <img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" 
                alt="LinkedIn" 
                className="w-6 h-6 group-hover:scale-110 transition-transform duration-300"
              />
            </a>
            <a
              href="mailto:pratiksh.borkar@example.com"
              className="group bg-white/10 backdrop-blur-sm p-4 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
            >
              <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
            </a>
            <a
              href="https://twitter.com/pratikshborkar"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/10 backdrop-blur-sm p-4 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
            >
              <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-gray-400" />
        </div>
      </div>
      
      {/* Background Animation */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
    </section>
  );
}

export default Home;