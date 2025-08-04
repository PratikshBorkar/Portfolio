import React from 'react';
import { Code, Palette, Zap, Heart } from 'lucide-react';
function About() {
  const highlights = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code is my passion.'
    },
    {
      icon: Palette,
      title: 'Design Focused',
      description: 'I believe great functionality deserves beautiful design.'
    },
    {
      icon: Zap,
      title: 'Fast Learner',
      description: 'Always excited to learn new technologies and tackle challenges.'
    },
    {
      icon: Heart,
      title: 'User Centered',
      description: 'Creating experiences that users love is at the core of what I do.'
    }
  ];

  return (
    <section className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
              Hello! I'm Pratiksh Borkar
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a passionate Full Stack Developer with a love for creating digital experiences 
              that make a difference. My journey in software development started with curiosity 
              and has evolved into a career dedicated to crafting beautiful, functional applications.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to 
              open-source projects, or sharing knowledge with the developer community. I believe 
              in the power of clean code, user-centered design, and continuous learning.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              My goal is to create solutions that not only work flawlessly but also provide 
              delightful user experiences. I'm always excited to take on new challenges and 
              collaborate with teams that share the same passion for excellence.
            </p>
          </div>
          
          <div className="relative">
            <div className="relative mb-8">
              <div className="w-80 h-80 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full blur-xl opacity-30"></div>
                <img 
                  src="/img/Pratiksh.jpg" 
                  alt="Pratiksh Borkar" 
                  className="relative w-full h-full object-cover rounded-full border-4 border-white/20 shadow-2xl"
                />
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 p-8 rounded-2xl backdrop-blur-sm border border-white/10">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <h4 className="text-3xl font-bold text-purple-400 mb-2">50+</h4>
                  <p className="text-gray-300">Projects Completed</p>
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-pink-400 mb-2">3+</h4>
                  <p className="text-gray-300">Years Experience</p>
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-blue-400 mb-2">15+</h4>
                  <p className="text-gray-300">Technologies</p>
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-green-400 mb-2">100%</h4>
                  <p className="text-gray-300">Client Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <IconComponent className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-3">{item.title}</h4>
                <p className="text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default About;