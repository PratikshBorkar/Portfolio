import React from 'react';
import { ExternalLink, Github, Calendar } from 'lucide-react';

function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      githubUrl: 'https://github.com/pratikshborkar/ecommerce-platform',
      liveUrl: 'https://ecommerce-demo.com',
      date: '2024'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Socket.io', 'Express', 'PostgreSQL'],
      githubUrl: 'https://github.com/pratikshborkar/task-manager',
      liveUrl: 'https://taskmanager-demo.com',
      date: '2024'
    },
    {
      title: 'Weather Dashboard',
      description: 'A responsive weather application with location-based forecasts, interactive maps, and beautiful data visualizations.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'D3.js', 'OpenWeather API', 'Tailwind'],
      githubUrl: 'https://github.com/pratikshborkar/weather-dashboard',
      liveUrl: 'https://weather-demo.com',
      date: '2023'
    },
    {
      title: 'Social Media Analytics',
      description: 'A comprehensive analytics dashboard for social media metrics with real-time data processing and custom reporting features.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Vue.js', 'Python', 'Django', 'Chart.js'],
      githubUrl: 'https://github.com/pratikshborkar/social-analytics',
      liveUrl: 'https://analytics-demo.com',
      date: '2023'
    },
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website showcasing projects and skills with smooth animations and interactive elements.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
      githubUrl: 'https://github.com/pratikshborkar/portfolio',
      liveUrl: 'https://pratikshborkar.dev',
      date: '2023'
    },
    {
      title: 'Chat Application',
      description: 'Real-time chat application with group messaging, file sharing, and user presence indicators built with modern web technologies.',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Socket.io', 'Node.js', 'Redis'],
      githubUrl: 'https://github.com/pratikshborkar/chat-app',
      liveUrl: 'https://chat-demo.com',
      date: '2023'
    }
  ];

  return (
    <section className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Here are some of my favorite projects that showcase my skills and passion for development
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 group">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    {project.date}
                  </div>
                </div>
                
                <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-600/30">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <Github className="h-5 w-5" />
                    Code
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors duration-300"
                  >
                    <ExternalLink className="h-5 w-5" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;