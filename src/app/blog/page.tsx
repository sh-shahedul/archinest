'use client';

import React, { useState } from 'react';
import { Calendar, User, ArrowRight, Search, Filter, Heart } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  category: string;
  readTime: number;
  likes: number;
}

export default function BlogPage(): JSX.Element {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [likedPosts, setLikedPosts] = useState<number[]>([]);

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'Modern Architecture Trends in 2024',
      excerpt: 'Explore the latest architectural trends shaping the future of building design.',
      content: 'Full article content here...',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab',
      author: 'Sarah Chen',
      date: 'January 15, 2024',
      category: 'trends',
      readTime: 5,
      likes: 234
    },
    {
      id: 2,
      title: 'Sustainable Design: Building a Better Future',
      excerpt: 'Learn how sustainable architecture is revolutionizing the construction industry.',
      content: 'Full article content here...',
      image: 'https://images.unsplash.com/photo-1486184858669-81f53e8ba8c9',
      author: 'James Wilson',
      date: 'January 12, 2024',
      category: 'sustainability',
      readTime: 8,
      likes: 456
    },
    {
      id: 3,
      title: 'Interior Design Tips for Small Spaces',
      excerpt: 'Maximize your space with these clever interior design strategies.',
      content: 'Full article content here...',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945',
      author: 'Emily Rodriguez',
      date: 'January 10, 2024',
      category: 'interior',
      readTime: 6,
      likes: 312
    },
    {
      id: 4,
      title: 'The Rise of Smart Buildings',
      excerpt: 'How technology is transforming modern office spaces and residences.',
      content: 'Full article content here...',
      image: 'https://images.unsplash.com/photo-1487407633774-2f3d0f6f50ca',
      author: 'Michael Park',
      date: 'January 8, 2024',
      category: 'technology',
      readTime: 7,
      likes: 389
    },
    {
      id: 5,
      title: 'Commercial Design Excellence',
      excerpt: 'Best practices in creating functional and aesthetically pleasing commercial spaces.',
      content: 'Full article content here...',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40',
      author: 'Lisa Anderson',
      date: 'January 5, 2024',
      category: 'commercial',
      readTime: 9,
      likes: 567
    },
    {
      id: 6,
      title: 'Residential Architecture Masterclass',
      excerpt: 'Essential principles for designing beautiful and functional homes.',
      content: 'Full article content here...',
      image: 'https://images.unsplash.com/photo-1512207736139-757ea26b4591',
      author: 'David Thompson',
      date: 'January 2, 2024',
      category: 'residential',
      readTime: 10,
      likes: 678
    }
  ];

  const categories = ['all', 'trends', 'sustainability', 'interior', 'technology', 'commercial', 'residential'];

  const filteredPosts = blogPosts.filter(post => {
    const matchCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  const toggleLike = (postId: number): void => {
    setLikedPosts(prev =>
      prev.includes(postId)
        ? prev.filter(id => id !== postId)
        : [...prev, postId]
    );
  };

  const getCategoryLabel = (cat: string): string => {
    const labels: { [key: string]: string } = {
      all: 'All Posts',
      trends: 'Trends',
      sustainability: 'Sustainability',
      interior: 'Interior Design',
      technology: 'Technology',
      commercial: 'Commercial',
      residential: 'Residential'
    };
    return labels[cat] || cat;
  };

  return (
    <div className="min-h-screen bg-[#FFFAF5] text-[#131313]">
      {/* Hero Section */}
      <section className="px-4 pt-20 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-orange-100 border border-orange-300 text-[#FF900E] text-sm font-semibold mb-6">
              Architecture & Design Insights
            </span>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-[#131313] mb-4 leading-tight">
              Our Blog
              <br />
              <span className="text-[#FF900E]">& Resources</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#727272] max-w-3xl mx-auto leading-relaxed">
              Discover inspiring stories, expert tips, and latest trends in architecture and design.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="space-y-6">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-[#727272] w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-14 pr-6 py-4 bg-white border border-orange-200 rounded-xl focus:outline-none focus:border-[#FF900E] focus:ring-2 focus:ring-orange-200 text-[#131313] placeholder-[#727272] transition-all text-lg"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-6 py-2 rounded-full font-semibold transition-all ${
                    selectedCategory === cat
                      ? 'bg-[#FF900E] text-white shadow-lg'
                      : 'bg-white border border-orange-200 text-[#131313] hover:border-[#FF900E]'
                  }`}
                >
                  {getCategoryLabel(cat)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, idx) => (
                <div
                  key={post.id}
                  className="group bg-white rounded-2xl border border-orange-200 overflow-hidden hover:border-[#FF900E] hover:shadow-xl transition-all duration-300"
                  style={{
                    animation: `slideUp 0.6s ease-out ${idx * 100}ms forwards`,
                    opacity: 0
                  }}
                >
                  {/* Image Container */}
                  <div className="relative overflow-hidden h-64 bg-gray-200">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-[#FF900E] text-white px-4 py-2 rounded-full text-sm font-semibold">
                      {post.readTime} min read
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col h-full">
                    {/* Category Tag */}
                    <span className="inline-block w-fit px-3 py-1 bg-orange-100 text-[#FF900E] text-xs font-bold rounded-full mb-4 capitalize">
                      {post.category}
                    </span>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-[#131313] mb-3 line-clamp-2 group-hover:text-[#FF900E] transition-colors">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-[#727272] mb-4 line-clamp-2 flex-grow">
                      {post.excerpt}
                    </p>

                    {/* Meta Info */}
                    <div className="space-y-4 border-t border-orange-200 pt-4">
                      <div className="flex items-center gap-4 text-sm text-[#727272]">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{post.date}</span>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex items-center justify-between">
                        <button
                          onClick={() => toggleLike(post.id)}
                          className="flex items-center gap-2 text-[#727272] hover:text-[#FF900E] transition-colors"
                        >
                          <Heart
                            className={`w-5 h-5 ${
                              likedPosts.includes(post.id)
                                ? 'fill-[#FF900E] text-[#FF900E]'
                                : ''
                            }`}
                          />
                          <span className="text-sm">{post.likes}</span>
                        </button>
                        <button className="flex items-center gap-2 text-[#FF900E] font-semibold hover:gap-3 transition-all group/btn">
                          Read More
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-2xl text-[#727272] mb-4">No articles found</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="px-6 py-3 bg-[#FF900E] text-white font-semibold rounded-xl hover:bg-orange-600 transition-all"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="px-4 py-20 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#131313] mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-xl text-[#727272] mb-8">
            Get the latest articles and insights delivered straight to your inbox.
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 bg-[#FFFAF5] border border-orange-200 rounded-xl focus:outline-none focus:border-[#FF900E] focus:ring-2 focus:ring-orange-200 text-[#131313] placeholder-[#727272] transition-all"
            />
            <button className="px-8 py-4 bg-[#FF900E] text-white font-bold rounded-xl hover:bg-orange-600 hover:shadow-xl transition-all whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}