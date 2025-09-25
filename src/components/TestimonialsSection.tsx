import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const title = 'What Our Students Say';
  const [isHovered, setIsHovered] = useState(false);
  
  const testimonials = [
    {
      id: 1,
      name: 'Emma Thompson',
      role: 'Business Student',
      university: 'University of Manchester',
      content: 'Excellent work on my business strategy assignment! The analysis was thorough and the writing quality exceptional. Delivered on time with zero plagiarism.',
      rating: 5,
      subject: 'Business Strategy',
      avatar: 'ET',
      gradient: 'from-amber-400 to-orange-500',
    },
    {
      id: 2,
      name: 'James Wilson',
      role: 'Finance Masters',
      university: 'London School of Economics',
      content: 'Outstanding financial modeling work. The calculations were accurate and the report was professionally structured. Highly recommend for finance assignments.',
      rating: 5,
      subject: 'Financial Analysis',
      avatar: 'JW',
      gradient: 'from-blue-400 to-indigo-500',
    },
    {
      id: 3,
      name: 'Sarah Mitchell',
      role: 'Tourism Student',
      university: 'University of Surrey',
      content: 'Amazing tourism management essay! The writer clearly understood the industry and provided excellent insights. Will definitely use this service again.',
      rating: 5,
      subject: 'Tourism Management',
      avatar: 'SM',
      gradient: 'from-emerald-400 to-teal-500',
    },
    {
      id: 4,
      name: 'David Chen',
      role: 'MBA Student',
      university: 'Warwick Business School',
      content: 'Perfect case study analysis for my MBA program. The depth of research and quality of writing exceeded my expectations. Truly professional service.',
      rating: 5,
      subject: 'Case Study',
      avatar: 'DC',
      gradient: 'from-purple-400 to-pink-500',
    },
    {
      id: 5,
      name: 'Lisa Rodriguez',
      role: 'Accounting Student',
      university: 'University of Edinburgh',
      content: 'Comprehensive accounting report with perfect calculations. The explanations were clear and helped me understand complex concepts better.',
      rating: 5,
      subject: 'Management Accounting',
      avatar: 'LR',
      gradient: 'from-rose-400 to-red-500',
    },
    {
      id: 6,
      name: 'Michael Brown',
      role: 'Marketing Student',
      university: 'University of Bath',
      content: 'Brilliant marketing research paper! The market analysis was spot-on and the recommendations were practical and well-justified.',
      rating: 5,
      subject: 'Marketing Research',
      avatar: 'MB',
      gradient: 'from-cyan-400 to-blue-500',
    },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true });

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`w-4 h-4 ${i < rating ? 'text-amber-400 fill-amber-400' : 'text-stone-300'}`} 
      />
    ));
  };

  return (
    <section
      ref={containerRef}
      className="py-24 px-6 bg-gradient-to-br from-slate-50 via-stone-50 to-slate-100 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-amber-200/30 to-orange-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-indigo-300/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header - Asymmetrical Design */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-stone-900">What Our</span>
              <br />
              <span className="bg-gradient-to-r from-stone-700 to-slate-600 bg-clip-text text-transparent font-light">
                Students Say
              </span>
            </motion.h2>
          </motion.div>
          
          <motion.div
            className="lg:col-span-5 flex items-end"
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="space-y-6">
              <p className="text-xl text-stone-600 leading-relaxed font-light">
                Join hundreds of satisfied students who achieved academic excellence with our expert writing services
              </p>
              
              {/* Mini Stats */}
              <div className="flex gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-stone-900">4.9/5</div>
                  <div className="text-sm text-stone-600">Average Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-stone-900">500+</div>
                  <div className="text-sm text-stone-600">Happy Students</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Testimonials Marquee */}
        <motion.div 
          className="relative"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div 
            className="overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
              maskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)',
            }}
          >
            <motion.div
              className="flex gap-8"
              animate={isHovered ? {} : {
                x: [0, -100 * testimonials.length],
              }}
              transition={isHovered ? {} : {
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 60,
                  ease: "linear",
                },
              }}
              style={{
                width: `${120 * testimonials.length}%`,
              }}
            >
              {/* First set of testimonials */}
              {testimonials.map((testimonial) => (
                <motion.div
                  key={testimonial.id}
                  className="group flex-shrink-0 w-96 bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500"
                  whileHover={{ y: -12, scale: 1.02 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-white/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative">
                    {/* Quote Icon & Rating */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center">
                        <Quote className="w-6 h-6 text-stone-400 mr-3" />
                        <div className="flex">
                          {renderStars(testimonial.rating)}
                        </div>
                      </div>
                      <div className="text-xs font-medium text-stone-500 bg-stone-100 px-3 py-1 rounded-full">
                        {testimonial.subject}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <blockquote className="text-stone-800 leading-relaxed mb-6 font-medium">
                      "{testimonial.content}"
                    </blockquote>
                    
                    {/* Author Info */}
                    <div className="flex items-center">
                      <div className={`w-12 h-12 bg-gradient-to-br ${testimonial.gradient} text-white rounded-full flex items-center justify-center font-bold text-sm mr-4 shadow-lg`}>
                        {testimonial.avatar}
                      </div>
                      <div>
                        <div className="font-bold text-stone-900">
                          {testimonial.name}
                        </div>
                        <div className="text-stone-600 text-sm">
                          {testimonial.role}
                        </div>
                        <div className="text-stone-500 text-xs">
                          {testimonial.university}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {/* Duplicate set for seamless loop */}
              {testimonials.map((testimonial) => (
                <motion.div
                  key={`duplicate-${testimonial.id}`}
                  className="group flex-shrink-0 w-96 bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500"
                  whileHover={{ y: -12, scale: 1.02 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-white/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative">
                    {/* Quote Icon & Rating */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center">
                        <Quote className="w-6 h-6 text-stone-400 mr-3" />
                        <div className="flex">
                          {renderStars(testimonial.rating)}
                        </div>
                      </div>
                      <div className="text-xs font-medium text-stone-500 bg-stone-100 px-3 py-1 rounded-full">
                        {testimonial.subject}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <blockquote className="text-stone-800 leading-relaxed mb-6 font-medium">
                      "{testimonial.content}"
                    </blockquote>
                    
                    {/* Author Info */}
                    <div className="flex items-center">
                      <div className={`w-12 h-12 bg-gradient-to-br ${testimonial.gradient} text-white rounded-full flex items-center justify-center font-bold text-sm mr-4 shadow-lg`}>
                        {testimonial.avatar}
                      </div>
                      <div>
                        <div className="font-bold text-stone-900">
                          {testimonial.name}
                        </div>
                        <div className="text-stone-600 text-sm">
                          {testimonial.role}
                        </div>
                        <div className="text-stone-500 text-xs">
                          {testimonial.university}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <div className="bg-white/60 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/50 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { number: '500+', label: 'Satisfied Students', icon: '👥' },
                { number: '100%', label: 'On-Time Delivery', icon: '⏰' },
                { number: '4.9/5', label: 'Average Rating', icon: '⭐' },
              ].map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="text-center group"
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                >
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-200">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-bold text-stone-900 mb-2">{stat.number}</div>
                  <div className="text-stone-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};