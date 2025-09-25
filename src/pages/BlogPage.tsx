import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowRight, Search, Tag } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
}

const sampleBlogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Essential Tips for Writing Outstanding Business Essays',
    excerpt: 'Learn the key strategies and techniques that will help you craft compelling business essays that impress your professors.',
    content: `Writing a business essay requires a structured approach that combines analytical thinking with clear communication. Here are the essential tips to help you excel:

**1. Understanding the Assignment**
Before you begin writing, thoroughly analyze the assignment requirements. Identify the key question or problem you need to address, and ensure you understand the scope and expectations.

**2. Research and Data Collection**
Gather credible sources from academic journals, industry reports, and reputable business publications. Use both primary and secondary sources to support your arguments.

**3. Structure Your Essay**
- Introduction: Present your thesis statement clearly
- Body paragraphs: Develop each argument with supporting evidence
- Conclusion: Summarize key points and provide insights

**4. Use Business Terminology**
Incorporate relevant business concepts and terminology to demonstrate your understanding of the subject matter.

**5. Critical Analysis**
Don't just describe; analyze and evaluate different perspectives. Show your ability to think critically about business issues.`,
    author: 'Dr. Sarah Johnson',
    date: '2024-01-15',
    readTime: '5 min read',
    category: 'Business Writing',
    tags: ['Essay Writing', 'Business', 'Academic Tips'],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800'
  },
  {
    id: '2',
    title: 'How to Master Academic Research for Finance Papers',
    excerpt: 'Discover the best practices for conducting thorough research when writing finance assignments and reports.',
    content: `Academic research in finance requires precision, attention to detail, and access to the right resources. Here's your comprehensive guide:

**Financial Data Sources**
- Bloomberg Terminal for market data
- Yahoo Finance for historical data
- Federal Reserve Economic Data (FRED)
- Company annual reports and 10-K filings

**Research Methodology**
1. Define your research question clearly
2. Choose appropriate analytical methods
3. Gather relevant financial data
4. Apply statistical analysis where needed
5. Interpret results in business context

**Key Areas to Focus On**
- Market trends and analysis
- Financial ratios and performance metrics
- Risk assessment and management
- Investment strategies and portfolio theory

**Citation and References**
Always cite your sources properly using the required academic style (APA, Harvard, etc.). Financial research requires transparency in data sources.`,
    author: 'Prof. Michael Chen',
    date: '2024-01-10',
    readTime: '7 min read',
    category: 'Finance',
    tags: ['Research', 'Finance', 'Data Analysis'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800'
  },
  {
    id: '3',
    title: 'Tourism Industry Analysis: A Step-by-Step Guide',
    excerpt: 'Learn how to analyze tourism industry trends and write compelling reports about the hospitality sector.',
    content: `Tourism industry analysis requires understanding of multiple factors including economic, social, and environmental impacts:

**Key Components of Tourism Analysis**

**Market Analysis**
- Tourist arrival statistics
- Revenue and economic impact
- Seasonal patterns and trends
- Competitive landscape

**Stakeholder Analysis**
- Government policies and regulations
- Tourism boards and marketing
- Hotels and accommodation providers
- Transportation companies
- Local communities

**Sustainability Factors**
- Environmental impact assessment
- Cultural heritage preservation
- Economic sustainability
- Social responsibility

**Research Methods**
- Primary data: Surveys, interviews
- Secondary data: Government statistics, industry reports
- Case studies of successful destinations
- SWOT analysis framework

**Writing Your Tourism Report**
Structure your analysis with clear sections, use visual aids like charts and graphs, and provide actionable recommendations based on your findings.`,
    author: 'Dr. Emma Williams',
    date: '2024-01-05',
    readTime: '6 min read',
    category: 'Tourism',
    tags: ['Tourism', 'Industry Analysis', 'Research Methods'],
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800'
  },
  {
  id: '4',
  title: 'Overtourism: Causes, Impacts, and Sustainable Travel Solutions',
  excerpt: 'Learn about overtourism, its environmental and social impacts, and practical ways to travel responsibly for a sustainable future.',
  content: `Overtourism is one of the most pressing challenges facing global travel today. It happens when popular destinations attract more visitors than they can sustainably handle, leading to environmental damage, cultural erosion, and negative social impacts. As travel continues to grow, understanding overtourism and adopting responsible travel practices has become essential for preserving the world’s most beloved destinations.

**What is Overtourism?**

Overtourism occurs when tourism exceeds a location's capacity to maintain its environmental, cultural, and social integrity. This phenomenon is particularly visible in iconic cities, historic landmarks, and natural attractions. Destinations such as Venice, Bali, and Barcelona have become symbols of overtourism due to overcrowding, rising property prices, and environmental stress.

**Causes of Overtourism**

Several factors contribute to the rapid increase in tourist numbers worldwide. First, the rise of low-cost airlines and affordable travel options has made international tourism more accessible than ever. Social media and travel influencers also play a significant role, encouraging travelers to visit specific “Instagram-worthy” spots. Moreover, lack of proper tourism management policies, inadequate infrastructure, and limited community involvement amplify the negative consequences of mass tourism. Seasonal travel patterns often worsen the problem, concentrating large numbers of tourists in short periods, which strains local services and ecosystems.

**Environmental Impacts of Overtourism**

Overtourism can severely harm the natural environment. Popular destinations experience pollution from litter, increased greenhouse gas emissions from transport, and degradation of local ecosystems. Fragile habitats, including coral reefs, forests, and coastal areas, face irreversible damage from excessive foot traffic, irresponsible waste disposal, and construction to accommodate tourists. Water shortages, deforestation, and loss of biodiversity are common side effects, threatening not only wildlife but also the communities that rely on these resources.

**Cultural and Social Consequences**

The social impact of overtourism is equally concerning. Local residents often face higher living costs, crowded streets, and a decline in public services. In some destinations, traditional practices and cultural heritage are commercialized to cater to tourists, eroding authentic local experiences. Communities may feel alienated from their own neighborhoods as rental prices and tourism-focused businesses dominate the area. These changes can lead to social tension between residents and visitors, reducing the quality of life for those who live in heavily visited destinations.

**Economic Implications**

While tourism is an important economic driver, overtourism can create long-term economic challenges. Overreliance on seasonal tourism makes destinations vulnerable to sudden drops in visitor numbers, as seen during global crises like the COVID-19 pandemic. Additionally, when tourism overwhelms local infrastructure, governments and businesses must invest heavily in maintenance and crowd management, diverting resources from other essential services.

**Solutions for Sustainable Tourism**

Sustainable tourism is the key to addressing overtourism. Governments and tourism boards can implement visitor caps, timed entry systems, and quotas at popular sites to reduce overcrowding. Encouraging travel during off-peak seasons helps distribute visitor numbers more evenly throughout the year. Promoting lesser-known destinations not only reduces pressure on iconic sites but also supports local economies. Travelers can contribute by adopting eco-friendly practices, respecting local customs, and choosing accommodations with sustainable policies.

Community-based tourism initiatives are also effective. By involving local residents in tourism planning and decision-making, destinations can balance economic benefits with cultural and social preservation. Education campaigns targeting both visitors and locals help raise awareness about responsible travel behaviors, minimizing the negative impact of tourism.

**Tips for Responsible Travelers**

Travelers can play a significant role in preventing overtourism. Some practical tips include:
- Visiting popular destinations during off-peak times
- Exploring alternative destinations beyond mainstream tourist hotspots
- Supporting local businesses and artisans
- Reducing waste and conserving resources while traveling
- Respecting local customs, traditions, and rules

By adopting these habits, travelers help ensure that destinations remain enjoyable, safe, and sustainable for generations to come.

**Frequently Asked Questions (FAQs)**

**Q: What destinations are most affected by overtourism?** 
A: Cities like Venice, Barcelona, and Amsterdam, as well as natural wonders like Bali’s beaches and Machu Picchu, are frequently affected due to their popularity and limited capacity.

**Q: How does overtourism affect local communities?**  
A: It can lead to higher living costs, overcrowded public spaces, commercialization of cultural heritage, and social tensions between residents and visitors.

**Q: Can overtourism be completely prevented?**  
A: While it may not be possible to eliminate overtourism entirely, implementing sustainable tourism practices, regulations, and responsible travel behaviors can significantly reduce its negative impact.

**Q: What can travelers do to help combat overtourism?**  
A: Travelers can visit destinations during off-peak periods, explore lesser-known areas, support local businesses, minimize environmental impact, and respect local culture.

## Conclusion

Overtourism is a growing global challenge that affects the environment, society, and economy of popular destinations. Addressing it requires cooperation among governments, businesses, communities, and travelers. Sustainable tourism practices, responsible travel behavior, and careful management of visitor numbers are essential to preserve the world’s natural and cultural treasures. By making conscious choices, both tourists and destination managers can help create a balance that allows travel to remain enjoyable while protecting destinations for the future.

`,
  author: 'Emma Thompson',
  date: '2025-09-25',
  readTime: '10 min read',
  category: 'Travel',
  tags: ['Overtourism', 'Sustainable Travel', 'Responsible Tourism', 'Travel Tips', 'Eco-Friendly Travel', 'Tourism Management', 'Travel Guide'],
  image: 'https://wildlandtrekking.com/content/uploads/2021/10/levi-van-leeuwen-HmwyUWpVGNk-unsplash-1200x901.jpg'
}

];

export const BlogPage: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Business Writing', 'Finance', 'Tourism', 'Academic Tips'];

  const filteredPosts = sampleBlogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  if (selectedPost) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-stone-50 via-slate-50 to-stone-100 pt-20">
        <div className="container mx-auto px-6 py-12">
          <motion.button
            onClick={() => setSelectedPost(null)}
            className="mb-8 flex items-center text-stone-600 hover:text-stone-900 transition-colors duration-200"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ x: -4 }}
          >
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            Back to Blog
          </motion.button>

          <motion.article
            className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative h-64 md:h-96">
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>

            <div className="p-8 md:p-12">
              <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-stone-600">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {new Date(selectedPost.date).toLocaleDateString()}
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  {selectedPost.readTime}
                </div>
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  {selectedPost.author}
                </div>
                <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-medium">
                  {selectedPost.category}
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-stone-900 mb-6 leading-tight">
                {selectedPost.title}
              </h1>

              <div className="prose max-w-none">
                {selectedPost.content.split('\n').map((paragraph, index) => {
                  if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                    return (
                      <h3 key={index} className="text-xl font-bold text-stone-900 mt-8 mb-4">
                        {paragraph.slice(2, -2)}
                      </h3>
                    );
                  }
                  if (paragraph.startsWith('- ')) {
                    return (
                      <li key={index} className="text-stone-700 leading-relaxed mb-2">
                        {paragraph.slice(2)}
                      </li>
                    );
                  }
                  if (paragraph.trim()) {
                    return (
                      <p key={index} className="text-stone-700 leading-relaxed mb-4">
                        {paragraph}
                      </p>
                    );
                  }
                  return null;
                })}
              </div>

              <div className="flex flex-wrap gap-2 mt-8 pt-8 border-t border-stone-200">
                {selectedPost.tags.map((tag) => (
                  <span
                    key={tag}
                    className="flex items-center px-3 py-1 bg-stone-100 text-stone-700 rounded-full text-sm"
                  >
                    <Tag className="w-3 h-3 mr-1" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-slate-50 to-stone-100 pt-20">
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4">
            Academia Help Blog
          </h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Expert insights, writing tips, and academic guidance to help you excel in your studies
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          className="mb-12 space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-stone-400" />
            </div>
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 pr-3 py-3 border border-stone-200 rounded-2xl leading-5 bg-white placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-stone-400 focus:border-transparent"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-stone-900 text-white shadow-lg'
                    : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              onClick={() => setSelectedPost(post)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-stone-800 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 mb-3 text-sm text-stone-500">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-stone-900 mb-3 group-hover:text-stone-700 transition-colors duration-200">
                  {post.title}
                </h3>

                <p className="text-stone-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-stone-500">{post.author}</span>
                  <div className="flex items-center text-stone-400 group-hover:text-stone-600 transition-colors duration-200">
                    <span className="text-sm mr-2">Read more</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-stone-900 mb-2">No articles found</h3>
            <p className="text-stone-600">Try adjusting your search or filter criteria</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};