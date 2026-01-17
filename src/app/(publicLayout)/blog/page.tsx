'use client';

import React, { useState } from 'react';
import { Calendar, User, ArrowRight, Search, Heart } from 'lucide-react';

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

export default function BlogPage() {
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
      likes: 234,
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
      likes: 456,
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
      likes: 312,
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
      likes: 389,
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
      likes: 567,
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
      likes: 678,
    },
  ];

  const categories = [
    'all',
    'trends',
    'sustainability',
    'interior',
    'technology',
    'commercial',
    'residential',
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchCategory =
      selectedCategory === 'all' || post.category === selectedCategory;

    const matchSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());

    return matchCategory && matchSearch;
  });

  const toggleLike = (postId: number) => {
    setLikedPosts((prev) =>
      prev.includes(postId)
        ? prev.filter((id) => id !== postId)
        : [...prev, postId]
    );
  };

  const getCategoryLabel = (cat: string) => {
    const labels: Record<string, string> = {
      all: 'All Posts',
      trends: 'Trends',
      sustainability: 'Sustainability',
      interior: 'Interior Design',
      technology: 'Technology',
      commercial: 'Commercial',
      residential: 'Residential',
    };
    return labels[cat] || cat;
  };

  return (
    <div className="min-h-screen bg-[#FFFAF5] text-[#131313]">
      {/* Hero */}
      <section className="px-4 pt-20 pb-16">
        <div className="max-w-6xl mx-auto text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-orange-100 border border-orange-300 text-[#FF900E] text-sm font-semibold mb-6">
            Architecture & Design Insights
          </span>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-4">
            Our Blog <br />
            <span className="text-[#FF900E]">& Resources</span>
          </h1>

          <p className="text-xl text-[#727272] max-w-3xl mx-auto">
            Discover inspiring stories, expert tips, and latest trends in architecture and design.
          </p>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="px-4 pb-10">
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="relative">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-[#727272]" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-14 pr-6 py-4 border border-orange-200 rounded-xl focus:outline-none focus:border-[#FF900E]"
            />
          </div>

          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2 rounded-full font-semibold ${
                  selectedCategory === cat
                    ? 'bg-[#FF900E] text-white'
                    : 'bg-white border border-orange-200'
                }`}
              >
                {getCategoryLabel(cat)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="px-4 pb-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-2xl border border-orange-200 overflow-hidden hover:border-[#FF900E] transition"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-60 object-cover"
              />

              <div className="p-6">
                <span className="text-xs font-bold text-[#FF900E] capitalize">
                  {post.category}
                </span>

                <h3 className="text-xl font-bold mt-2 mb-3">
                  {post.title}
                </h3>

                <p className="text-[#727272] mb-4">{post.excerpt}</p>

                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {post.author}
                  </div>

                  <button
                    onClick={() => toggleLike(post.id)}
                    className="flex items-center gap-1"
                  >
                    <Heart
                      className={`w-5 h-5 ${
                        likedPosts.includes(post.id)
                          ? 'fill-[#FF900E] text-[#FF900E]'
                          : ''
                      }`}
                    />
                    {post.likes}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
