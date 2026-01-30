import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import PostCard from '../components/PostCard'
import PostListItem from '../components/PostListItem'

export default function Blog() {
  const [searchParams] = useSearchParams()
  const [posts, setPosts] = useState([])
  const [categories, setCategories] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || '')
  const [viewMode, setViewMode] = useState('grid')
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 6

  useEffect(() => {
    fetch('/posts.json')
      .then(response => response.json())
      .then(data => {
        setPosts(data.posts)
        setCategories(data.categories)
      })
  }, [])

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.includes(searchTerm) || 
                          post.excerpt.includes(searchTerm) ||
                          post.content.includes(searchTerm)
    const matchesCategory = selectedCategory === '' || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage)
  const startIndex = (currentPage - 1) * postsPerPage
  const paginatedPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage)

  useEffect(() => {
    setCurrentPage(1)
  }, [searchTerm, selectedCategory])

  useEffect(() => {
    const categoryFromUrl = searchParams.get('category')
    if (categoryFromUrl) {
      setSelectedCategory(categoryFromUrl)
    }
  }, [searchParams])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleCategoryClick = (categoryName) => {
    if (selectedCategory === categoryName) {
      setSelectedCategory('')
    } else {
      setSelectedCategory(categoryName)
    }
  }

  return (
    <div className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="section-title">المدونة</h1>
          <p className="text-secondary">اكتشف مقالاتنا في عالم التصوير الفوتوغرافي</p>
        </div>

        <div className="blog-controls">
          <div className="row g-3 align-items-center">
            <div className="col-lg-4">
              <div className="search-wrapper">
                <i className="fas fa-search search-icon"></i>
                <input
                  type="text"
                  className="search-input"
                  placeholder="ابحث عن مقال..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="d-flex flex-wrap gap-2">
                <button
                  className={`category-badge ${selectedCategory === '' ? 'active' : ''}`}
                  style={{ 
                    backgroundColor: selectedCategory === '' ? 'var(--accent-color)' : 'rgba(249, 115, 22, 0.2)',
                    color: selectedCategory === '' ? 'white' : 'var(--accent-color)',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                  onClick={() => setSelectedCategory('')}
                >
                  الكل
                </button>
                {categories.map((category, index) => (
                  <button
                    key={index}
                    className={`category-badge category-badge-${category.color} ${selectedCategory === category.name ? 'active' : ''}`}
                    style={{ border: 'none', cursor: 'pointer' }}
                    onClick={() => handleCategoryClick(category.name)}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="col-lg-2">
              <div className="view-toggle d-flex justify-content-end">
                <button
                  className={`view-toggle-btn ${viewMode === 'grid' ? 'active' : ''}`}
                  onClick={() => setViewMode('grid')}
                  title="عرض شبكي"
                >
                  <i className="fas fa-th-large"></i>
                </button>
                <button
                  className={`view-toggle-btn ${viewMode === 'list' ? 'active' : ''}`}
                  onClick={() => setViewMode('list')}
                  title="عرض قائمة"
                >
                  <i className="fas fa-list"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-4 text-secondary">
          عرض {paginatedPosts.length} من {filteredPosts.length} مقال
        </div>

        {filteredPosts.length === 0 ? (
          <div className="text-center py-5">
            <i className="fas fa-search fa-3x text-secondary mb-3"></i>
            <h3 className="text-secondary">لا توجد نتائج</h3>
            <p className="text-secondary">جرب البحث بكلمات مختلفة أو تغيير التصنيف</p>
          </div>
        ) : viewMode === 'grid' ? (
          <div className="row g-4">
            {paginatedPosts.map(post => (
              <div key={post.id} className="col-md-6 col-lg-4">
                <PostCard post={post} />
              </div>
            ))}
          </div>
        ) : (
          <div>
            {paginatedPosts.map(post => (
              <PostListItem key={post.id} post={post} />
            ))}
          </div>
        )}

        {totalPages > 1 && (
          <div className="pagination-custom">
            <button
              className="page-btn"
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              <i className="fas fa-angle-right"></i>
            </button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button
                key={page}
                className={`page-btn ${currentPage === page ? 'active' : ''}`}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            ))}
            
            <button
              className="page-btn"
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              <i className="fas fa-angle-left"></i>
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

