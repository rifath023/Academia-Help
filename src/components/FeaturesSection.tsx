import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { BookOpen, Users, FileText, TrendingUp, DollarSign, Plane, Calculator, Briefcase } from 'lucide-react';

export const FeaturesSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { 
    once: true, 
    margin: "-100px 0px -100px 0px"
  });
  
  const title = 'Our Expertise Areas';
  const description = 'Professional academic writing services across multiple disciplines with expert writers specialized in each field.';
  
  const services = [
    {
      icon: <Briefcase className="w-7 h-7" />,
      title: 'Business Essays',
      description: 'Comprehensive business analysis, strategy papers, and case studies written by industry experts.',
      color: 'from-amber-100 to-orange-100',
      iconColor: 'from-amber-500 to-orange-600',
    },
    {
      icon: <DollarSign className="w-7 h-7" />,
      title: 'Finance & Accounting',
      description: 'Complex financial reports, accounting assignments, and economic analysis with accurate calculations.',
      color: 'from-emerald-100 to-teal-100',
      iconColor: 'from-emerald-500 to-teal-600',
    },
    {
      icon: <Plane className="w-7 h-7" />,
      title: 'Tourism & Hospitality',
      description: 'Industry-focused papers on travel, hospitality management, and tourism development.',
      color: 'from-blue-100 to-indigo-100',
      iconColor: 'from-blue-500 to-indigo-600',
    },
    {
      icon: <TrendingUp className="w-7 h-7" />,
      title: 'Marketing Analysis',
      description: 'Strategic marketing plans, consumer behavior studies, and market research reports.',
      color: 'from-purple-100 to-pink-100',
      iconColor: 'from-purple-500 to-pink-600',
    },
    {
      icon: <Users className="w-7 h-7" />,
      title: 'Human Resources',
      description: 'HR management papers, organizational behavior analysis, and workforce planning studies.',
      color: 'from-rose-100 to-red-100',
      iconColor: 'from-rose-500 to-red-600',
    },
    {
      icon: <FileText className="w-7 h-7" />,
      title: 'Management Reports',
      description: 'Executive summaries, project management case studies, and organizational analysis.',
      color: 'from-slate-100 to-stone-100',
      iconColor: 'from-slate-500 to-stone-600',
    },
  ];

  const guarantees = [
    { title: '0% AI Content', description: 'Human-written papers only', icon: '🤖' },
    { title: '<10% Plagiarism', description: 'Original work guaranteed', icon: '✅' },
    { title: 'Unlimited Revisions', description: 'Until you\'re satisfied', icon: '🔄' },
    { title: 'On-Time Delivery', description: 'Never miss your deadline', icon: '⏰' },
  ];

  return (
    <section 
      ref={containerRef}
      id="services" 
      className="py-24 px-6 bg-gradient-to-br from-stone-50 via-slate-50 to-stone-100 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(120,119,198,0.1) 0%, transparent 50%),
                           radial-gradient(circle at 80% 20%, rgba(255,183,77,0.1) 0%, transparent 50%),
                           radial-gradient(circle at 40% 80%, rgba(168,162,158,0.1) 0%, transparent 50%)`
        }}></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header with Asymmetrical Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          <motion.div
            className="lg:col-span-8"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h2 
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-stone-900 mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="block">Our</span>
              <span className="bg-gradient-to-r from-stone-700 to-slate-600 bg-clip-text text-transparent font-light">
                Expertise Areas
              </span>
            </motion.h2>
          </motion.div>
          
          <motion.div
            className="lg:col-span-4 flex items-end"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className="text-xl text-stone-600 leading-relaxed font-light">
              {description}
            </p>
          </motion.div>
        </div>

        {/* Services Grid - Asymmetrical */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`group relative bg-gradient-to-br ${service.color} p-8 rounded-3xl border border-white/50 hover:border-white/70 transition-all duration-500 backdrop-blur-sm ${
                index === 1 ? 'md:translate-y-8' : ''
              } ${
                index === 4 ? 'lg:translate-y-12' : ''
              }`}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: index === 1 ? 32 : index === 4 ? 48 : 0, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: 1.0 + index * 0.15 }}
              whileHover={{ y: (index === 1 ? 32 : index === 4 ? 48 : 0) - 12, scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.iconColor} text-white mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-stone-900 mb-4 group-hover:text-stone-800 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-stone-700 leading-relaxed font-medium">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Quality Guarantees - Modern Card Design */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/50 shadow-2xl">
            <div className="text-center mb-10">
              <motion.h3 
                className="text-3xl md:text-4xl font-bold text-stone-900 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.7 }}
              >
                Our Quality Guarantees
              </motion.h3>
              <motion.p
                className="text-stone-600 text-lg font-light"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.9 }}
              >
                Committed to excellence in every assignment
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {guarantees.map((guarantee, index) => (
                <motion.div 
                  key={index} 
                  className="group text-center p-6 rounded-2xl bg-gradient-to-br from-stone-50/80 to-slate-100/60 hover:from-stone-100/90 hover:to-slate-200/70 transition-all duration-300 border border-stone-200/50"
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 2.0 + index * 0.1 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                >
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-200">
                    {guarantee.icon}
                  </div>
                  <div className="text-lg font-bold text-stone-800 mb-2">{guarantee.title}</div>
                  <div className="text-sm text-stone-600 font-medium">{guarantee.description}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};