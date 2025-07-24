import React from 'react';

function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', level: 90 },
        { name: 'Vue.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg', level: 85 },
        { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', level: 95 },
        { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', level: 88 },
        { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', level: 95 },
        { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', level: 90 },
        { name: 'Tailwind CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg', level: 92 },
        { name: 'Sass', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg', level: 85 }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', level: 88 },
        { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', level: 85 },
        { name: 'Express.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', level: 90 },
        { name: 'Django', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg', level: 80 },
        { name: 'PHP', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg', level: 75 },
        { name: 'REST APIs', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg', level: 92 },
        { name: 'GraphQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg', level: 78 }
      ]
    },
    {
      title: 'Database',
      skills: [
        { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', level: 88 },
        { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', level: 85 },
        { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', level: 82 },
        { name: 'Redis', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg', level: 75 },
        { name: 'Firebase', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg', level: 80 }
      ]
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', level: 92 },
        { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', level: 80 },
        { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg', level: 75 },
        { name: 'Webpack', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg', level: 85 },
        { name: 'Jest', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg', level: 88 },
        { name: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', level: 82 }
      ]
    }
  ];

  return (
    <section className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 w-8 h-8 rounded-lg flex items-center justify-center text-white text-lg mr-3">
                  {categoryIndex + 1}
                </span>
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <img src={skill.logo} alt={skill.name} className="w-8 h-8" />
                        <h4 className="text-white font-medium">{skill.name}</h4>
                      </div>
                      <span className="text-gray-400 text-sm font-medium">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-1000 ease-out transform origin-left group-hover:scale-x-105"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-purple-600/20 to-pink-600/20 p-8 rounded-2xl backdrop-blur-sm border border-white/10">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Always Learning</h3>
            <p className="text-gray-300 text-lg mb-6 max-w-3xl mx-auto">
              The tech world evolves rapidly, and I'm committed to staying current with the latest technologies, 
              frameworks, and best practices. Currently exploring AI/ML integration and advanced cloud architectures.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['AI/ML', 'Kubernetes', 'Microservices', 'Blockchain', 'WebAssembly', 'Edge Computing'].map((tech, index) => (
                <span key={index} className="bg-white/10 text-purple-300 px-4 py-2 rounded-full text-sm border border-purple-400/30 hover:bg-purple-400/20 transition-colors duration-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;