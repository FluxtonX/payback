'use client';

import React, { useState, useMemo } from 'react';
import { BlogArticle, BLOG_CATEGORIES, BlogCategory } from '@/data/blogArticles';
import { BlogArticleCard } from './BlogArticleCard';

interface BlogIndexClientProps {
  articles: BlogArticle[];
}

const ITEMS_PER_PAGE = 6;

export const BlogIndexClient: React.FC<BlogIndexClientProps> = ({ articles }) => {
  const [selectedCategory, setSelectedCategory] = useState<BlogCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  // Filter articles based on Category and Search Query
  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchesCategory =
        selectedCategory === 'All' ||
        article.category.toLowerCase() === selectedCategory.toLowerCase() ||
        article.tags?.some((t) => t.toLowerCase() === selectedCategory.toLowerCase());

      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        article.title.toLowerCase().includes(query) ||
        article.excerpt.toLowerCase().includes(query) ||
        article.category.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [articles, selectedCategory, searchQuery]);

  // Pagination calculation
  const totalPages = Math.max(1, Math.ceil(filteredArticles.length / ITEMS_PER_PAGE));
  const currentArticles = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredArticles.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredArticles, currentPage]);

  const handleCategoryChange = (category: BlogCategory) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    setMobileDropdownOpen(false);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  return (
    <section className="py-12 lg:py-16 bg-white" id="articles-by-topic">
      <div className="container max-w-[1208px] mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="text-[28px] sm:text-[34px] font-bold text-[var(--brand-deep)] font-poppins mb-2">
              Articles By Topic
            </h2>
            <p className="text-[#616267] text-sm sm:text-base">
              Explore threat research, recovery playbooks, and scam breakdown guides.
            </p>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search guides & topics..."
              className="w-full pl-10 pr-4 py-2.5 bg-[#f4f7f5] rounded-xl border border-[#a0a6ba]/30 text-sm text-[#112152] placeholder-[#a0a6ba] focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary)] focus:bg-white transition-all"
            />
            <svg
              className="absolute left-3.5 top-3 w-4 h-4 text-[#a0a6ba]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="8" strokeWidth="2" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" strokeWidth="2" />
            </svg>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-2.5 text-xs text-[#a0a6ba] hover:text-[#112152]"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Desktop Category Filters */}
        <div className="hidden md:flex flex-wrap items-center gap-2.5 mb-10 pb-4 border-b border-[#a0a6ba]/20">
          {BLOG_CATEGORIES.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-[var(--brand-primary)] text-white shadow-md'
                    : 'bg-[#f4f7f5] text-[#616267] hover:bg-[var(--brand-soft)] hover:text-[var(--brand-primary)]'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Mobile Category Dropdown */}
        <div className="md:hidden relative mb-8">
          <button
            onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
            className="w-full flex items-center justify-between px-4 py-3 bg-[#f4f7f5] rounded-xl border border-[#a0a6ba]/30 text-sm font-semibold text-[#112152]"
          >
            <span>Category: {selectedCategory}</span>
            <svg
              className={`w-4 h-4 transition-transform duration-200 ${mobileDropdownOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19 9l-7 7-7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {mobileDropdownOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-[#a0a6ba]/30 py-2 z-30">
              {BLOG_CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
                    selectedCategory === category
                      ? 'bg-[var(--brand-soft)] text-[var(--brand-primary)] font-semibold'
                      : 'text-[#616267] hover:bg-[#f4f7f5]'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-[#616267] mb-6">
          <span>
            Showing <strong className="text-[#112152]">{filteredArticles.length}</strong>{' '}
            {filteredArticles.length === 1 ? 'article' : 'articles'}
            {selectedCategory !== 'All' && ` in "${selectedCategory}"`}
            {searchQuery && ` matching "${searchQuery}"`}
          </span>
          {filteredArticles.length > 0 && (
            <span>
              Page {currentPage} of {totalPages}
            </span>
          )}
        </div>

        {/* Article Grid */}
        {currentArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {currentArticles.map((article) => (
              <BlogArticleCard key={article.slug} article={article} />
            ))}
          </div>
        ) : (
          <div className="py-16 text-center bg-[#f4f7f5] rounded-2xl border border-dashed border-[#a0a6ba]/40 p-8">
            <svg
              className="w-12 h-12 text-[#a0a6ba] mx-auto mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="8" strokeWidth="1.5" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" strokeWidth="1.5" />
            </svg>
            <h3 className="text-lg font-bold text-[#112152] mb-2 font-poppins">
              No articles found
            </h3>
            <p className="text-sm text-[#616267] mb-6 max-w-md mx-auto">
              We couldn&apos;t find any articles matching your search query. Try searching for a different keyword or resetting filters.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="px-6 py-2.5 bg-[var(--brand-primary)] text-white text-xs font-semibold rounded-full hover:bg-[var(--brand-deep)] transition-colors"
            >
              Reset all filters
            </button>
          </div>
        )}

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="mt-12 flex items-center justify-center gap-2">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-lg border border-[#a0a6ba]/30 text-xs font-semibold text-[#112152] hover:bg-[#f4f7f5] disabled:opacity-40 disabled:cursor-not-allowed transition-colors flex items-center gap-1"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>Prev</span>
            </button>

            {Array.from({ length: totalPages }).map((_, idx) => {
              const pageNum = idx + 1;
              const isActive = pageNum === currentPage;
              return (
                <button
                  key={pageNum}
                  onClick={() => setCurrentPage(pageNum)}
                  className={`w-9 h-9 rounded-lg text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-[var(--brand-primary)] text-white shadow-sm'
                      : 'border border-[#a0a6ba]/30 text-[#112152] hover:bg-[#f4f7f5]'
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}

            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-lg border border-[#a0a6ba]/30 text-xs font-semibold text-[#112152] hover:bg-[#f4f7f5] disabled:opacity-40 disabled:cursor-not-allowed transition-colors flex items-center gap-1"
            >
              <span>Next</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
