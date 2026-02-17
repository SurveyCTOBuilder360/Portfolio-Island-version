import React, { useState } from 'react';
import { animated, useSpring } from '@react-spring/web';

// Sample projects data - you can customize this
const projectsData = [
  {
    id: 1,
    title: 'Fantasy Cottage',
    description: 'Interactive 3D cottage model with smooth animations and camera controls. Built with model-viewer for seamless web integration.',
    fullDescription: 'This project showcases a detailed fantasy cottage rendered entirely in the browser using Google\'s model-viewer web component. The model features high-quality textures, realistic lighting, and smooth camera controls for an immersive viewing experience.',
    category: '3D',
    tech: ['model-viewer', 'GLB', 'WebGL'],
    modelPath: '/models/fantasy-cottage.glb',
    image: null,
    github: '#',
    demo: '#'
  },
  {
    id: 2,
    title: 'E-Commerce Dashboard',
    description: 'Full-featured admin dashboard with real-time analytics, order management, and inventory tracking.',
    fullDescription: 'A comprehensive e-commerce dashboard built with React, Tailwind CSS, and Chart.js. Features include real-time sales analytics, order management, inventory tracking, and customer insights. Fully responsive with dark mode support.',
    category: 'Web',
    tech: ['React', 'Tailwind', 'Chart.js', 'Node.js'],
    modelPath: null,
    image: null,
    github: '#',
    demo: '#'
  },
  {
    id: 3,
    title: 'Mobile Fitness App',
    description: 'Cross-platform fitness tracking app with workout plans, nutrition logging, and progress analytics.',
    fullDescription: 'A React Native mobile application for fitness enthusiasts. Includes workout tracking, nutrition logging, progress charts, and social features. Integrated with Apple Health and Google Fit for seamless data synchronization.',
    category: 'Mobile',
    tech: ['React Native', 'Redux', 'Firebase', 'Health API'],
    modelPath: null,
    image: null,
    github: '#',
    demo: '#'
  },
  {
    id: 4,
    title: 'AI Chat Assistant',
    description: 'Intelligent chatbot powered by OpenAI API with custom fine-tuning for customer support.',
    fullDescription: 'An AI-powered customer support chatbot built with OpenAI API and custom fine-tuning. Features natural language processing, context awareness, sentiment analysis, and seamless handoff to human agents.',
    category: 'AI',
    tech: ['OpenAI API', 'Node.js', 'WebSocket', 'React'],
    modelPath: null,
    image: null,
    github: '#',
    demo: '#'
  },
  {
    id: 5,
    title: '3D Product Configurator',
    description: 'Interactive product customization tool with real-time 3D preview, color selection, and pricing.',
    fullDescription: 'A product configurator that allows customers to customize products in real-time with 3D visualization. Features include color/material selection, component swapping, real-time pricing updates, and AR preview.',
    category: '3D',
    tech: ['Three.js', 'React Three Fiber', 'GSAP', ' Stripe API'],
    modelPath: null,
    image: null,
    github: '#',
    demo: '#'
  },
  {
    id: 6,
    title: 'Blockchain Wallet',
    description: 'Secure cryptocurrency wallet with multi-chain support, token swaps, and NFT gallery.',
    fullDescription: 'A decentralized cryptocurrency wallet supporting multiple blockchains. Features include secure key management, token swaps via DEX aggregation, NFT gallery with 3D previews, and DeFi integration.',
    category: 'Web3',
    tech: ['Web3.js', 'React', 'Solidity', 'IPFS'],
    modelPath: null,
    image: null,
    github: '#',
    demo: '#'
  }
];

const categories = ['All', 'Web', '3D', 'Mobile', 'AI', 'Web3'];

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = filter === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === filter);

  // Modal spring animations
  const modalSpring = useSpring({
    opacity: selectedProject ? 1 : 0,
    transform: selectedProject ? 'scale(1)' : 'scale(0.9)',
    config: { tension: 300, friction: 30 }
  });

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
            My Projects
          </animated.h1>
          <animated.p
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            A collection of work showcasing expertise in web development, 3D graphics, and interactive experiences.
          </animated.p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  filter === cat
                    ? 'bg-gray-900 text-white shadow-lg'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map(project => (
              <div
                key={project.id}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-2xl transition-all cursor-pointer group"
                onClick={() => setSelectedProject(project)}
              >
                {/* 3D Preview or Placeholder */}
                <div className="h-56 bg-gradient-to-br from-cyan-100 to-purple-100 relative overflow-hidden">
                  {project.modelPath ? (
                    <model-viewer
                      src={project.modelPath}
                      camera-controls
                      auto-rotate
                      shadow-intensity="1"
                      className="w-full h-full"
                      style={{ position: 'absolute', top: 0, left: 0 }}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-6xl">
                      🖥️
                    </div>
                  )}
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-sm font-medium text-gray-800">
                    {project.category}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-cyan-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                        {t}
                      </span>
                    ))}
                  </div>
                  <button className="text-cyan-600 font-semibold hover:text-cyan-700">
                    View Details →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <animated.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          style={modalSpring}
          onClick={() => setSelectedProject(null)}
        >
          <animated.div
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-3xl font-bold text-gray-900">{selectedProject.title}</h2>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-500 hover:text-gray-700 text-4xl leading-none"
                >
                  ×
                </button>
              </div>

              {/* Project Image/Model Preview */}
              <div className="h-80 bg-gradient-to-br from-cyan-100 to-purple-100 rounded-xl mb-6 relative overflow-hidden">
                {selectedProject.modelPath && (
                  <model-viewer
                    src={selectedProject.modelPath}
                    camera-controls
                    auto-rotate
                    shadow-intensity="1"
                    className="w-full h-full"
                    style={{ position: 'absolute', top: 0, left: 0 }}
                  />
                )}
              </div>

              <div className="mb-6">
                <p className="text-lg text-gray-700 leading-relaxed">{selectedProject.fullDescription}</p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t, i) => (
                    <span key={i} className="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <a
                  href={selectedProject.github}
                  className="px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
                >
                  View Code
                </a>
                <a
                  href={selectedProject.demo}
                  className="px-6 py-3 bg-cyan-600 text-white font-semibold rounded-lg hover:bg-cyan-700 transition-colors"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </animated.div>
        </animated.div>
      )}
    </div>
  );
};

export default Projects;
