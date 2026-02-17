import React from 'react';
import { Link } from 'react-router-dom';
import { animated } from '@react-spring/web';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 md:px-8 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <animated.h1
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About Me
          </animated.h1>
          <animated.p
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Passionate full-stack developer specializing in immersive web experiences and cutting-edge 3D technologies.
          </animated.p>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Who I Am</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                I'm a creative developer with a passion for building beautiful, interactive web experiences that push the boundaries of what's possible in a browser. With expertise in React, Three.js, and modern web technologies, I craft digital products that are both visually stunning and highly performant.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                My journey began with a curiosity for how things work in the digital world, which evolved into a deep love for creating immersive 3D experiences and smooth animations that captivate users and tell compelling stories.
              </p>
              <Link
                to="/contact"
                className="inline-block px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-semibold"
              >
                Let's Work Together
              </Link>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/profile.jpg"
                alt="Bijoy Khiang"
                className="w-full h-auto max-h-[30rem] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Skills & Expertise</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: 'React/Next.js', level: 95 },
              { name: 'Three.js/R3F', level: 90 },
              { name: 'TypeScript', level: 88 },
              { name: 'Tailwind CSS', level: 92 },
              { name: 'Node.js', level: 85 },
              { name: 'GSAP/Framer Motion', level: 90 },
              { name: 'WebGL/Shaders', level: 80 },
              { name: 'UI/UX Design', level: 85 }
            ].map((skill, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-gray-900 mb-3">{skill.name}</h3>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 h-2.5 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <span className="text-sm text-gray-500 mt-1">{skill.level}%</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Experience</h2>
          <div className="space-y-8">
            {[
              { role: 'Senior Full-Stack Developer', company: 'Tech Innovation Labs', period: '2022 - Present', desc: 'Leading development of immersive web experiences using React, Three.js, and WebGL. Mentoring junior developers and architecting scalable solutions.' },
              { role: 'Frontend Developer', company: 'Digital Agency X', period: '2020 - 2022', desc: 'Built interactive websites and applications for Fortune 500 clients. Specialized in React animations and performance optimization.' },
              { role: 'Junior Developer', company: 'StartUp Inc.', period: '2018 - 2020', desc: 'Started career building responsive web applications. Learned fundamentals of JavaScript, React, and modern web development.' }
            ].map((exp, idx) => (
              <div key={idx} className="flex flex-col md:flex-row gap-6 items-start md:items-center bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="md:w-1/4">
                  <span className="text-cyan-600 font-semibold">{exp.period}</span>
                </div>
                <div className="md:w-1/3">
                  <h3 className="text-xl font-bold text-gray-900">{exp.role}</h3>
                  <p className="text-gray-600">{exp.company}</p>
                </div>
                <div className="md:w-2/4">
                  <p className="text-gray-700">{exp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 px-4 md:px-8 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Tech Stack</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'React', 'Vite', 'TypeScript', 'Three.js', 'React Three Fiber',
              'GSAP', 'Framer Motion', 'Tailwind CSS', 'Node.js', 'Express',
              'MongoDB', 'PostgreSQL', 'Docker', 'Git', 'WebGL'
            ].map((tech, idx) => (
              <span
                key={idx}
                className="px-6 py-3 bg-gray-800 rounded-full text-lg font-medium hover:bg-gray-700 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900">Latest Blog Posts</h2>
            <button className="text-cyan-600 hover:text-cyan-700 font-semibold">View All →</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Building 3D Experiences with React Three Fiber',
                excerpt: 'Learn how to create stunning 3D visualizations in React using the power of Three.js and React Three Fiber.',
                date: 'Feb 2026',
                readTime: '5 min read'
              },
              {
                title: 'Optimizing Performance in Animated Web Apps',
                excerpt: 'Discover techniques to maintain 60fps animations even with complex 3D scenes and heavy interactions.',
                date: 'Jan 2026',
                readTime: '8 min read'
              },
              {
                title: 'Introduction to model-viewer for Web 3D',
                excerpt: 'A beginner-friendly guide to embedding interactive 3D models using Google\'s model-viewer web component.',
                date: 'Dec 2025',
                readTime: '6 min read'
              }
            ].map((post, idx) => (
              <article key={idx} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-cyan-400 to-purple-500"></div>
                <div className="p-6">
                  <div className="flex justify-between text-sm text-gray-500 mb-3">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-cyan-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <button className="text-cyan-600 hover:text-cyan-700 font-semibold">Read More →</button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-cyan-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start a Project?</h2>
          <p className="text-xl mb-8 opacity-90">Let's collaborate to bring your vision to life with cutting-edge web technology.</p>
          <Link
            to="/contact"
            className="inline-block px-10 py-4 bg-white text-gray-900 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
