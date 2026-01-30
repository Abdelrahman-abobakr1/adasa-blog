import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PostCard from '../components/PostCard'

function Home() {
  const [posts, setPosts] = useState([])
  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetch('/posts.json')
      .then(response => response.json())
      .then(data => {
        setPosts(data.posts)
        setCategories(data.categories)
      })
  }, [])

  const featuredPosts = posts.filter(post => post.featured)
  const latestPosts = posts.slice(0, 6)

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <h1 className="hero-title">
            اكتشف <span className="hero-accent">فن</span>
          </h1>
          <h2 className="hero-subtitle">التصوير الفوتوغرافي</h2>
          <p className="hero-description">
            انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.
          </p>
          <div className="hero-buttons">
            <Link to="/blog" className="btn btn-primary-custom">
              استكشف المقالات <i className="fas fa-arrow-left ms-2"></i>
            </Link>
            <Link to="/about" className="btn btn-outline-custom">
              <i className="fas fa-info-circle me-2"></i> اعرف المزيد
            </Link>
          </div>
          
          {/* Stats Section */}
          <div className="hero-stats">
            <div className="hero-stat-card">
              <div className="hero-stat-icon">
                <i className="fas fa-newspaper"></i>
              </div>
              <div className="hero-stat-value">+50</div>
              <div className="hero-stat-label">مقالة</div>
            </div>
            <div className="hero-stat-card">
              <div className="hero-stat-icon">
                <i className="fas fa-users"></i>
              </div>
              <div className="hero-stat-value">+10ألف</div>
              <div className="hero-stat-label">قارئ</div>
            </div>
            <div className="hero-stat-card">
              <div className="hero-stat-icon">
                <i className="fas fa-folder-open"></i>
              </div>
              <div className="hero-stat-value">4</div>
              <div className="hero-stat-label">تصنيفات</div>
            </div>
            <div className="hero-stat-card">
              <div className="hero-stat-icon">
                <i className="fas fa-pen-fancy"></i>
              </div>
              <div className="hero-stat-value">6</div>
              <div className="hero-stat-label">كاتب</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section id="featured" className="py-5">
        <div className="container">
          <div className="d-flex justify-content-between align-items-start mb-4">
            <div className="text-end">
              <h2 className="section-title mb-2">مقالات مختارة</h2>
              <p className="text-secondary">محتوى منتقى لبدء رحلة تعلمك</p>
            </div>
            <Link to="/blog" className="btn btn-primary-custom">
              عرض الكل <i className="fas fa-angle-left ms-2"></i>
            </Link>
          </div>
          
          <div className="featured-articles-list">
            {featuredPosts.slice(0, 3).map((post) => (
              <Link key={post.id} to={`/blog/${post.slug}`} className="featured-article-link">
                <div className="featured-article">
                  <div className="featured-article-image">
                    <img src={post.image} alt={post.title} />
                    <span className="featured-star-badge">
                      <i className="fas fa-star me-1"></i>
                      مميز
                    </span>
                  </div>
                  <div className="featured-article-content">
                    <div className="featured-article-meta">
                      <span className="category-badge category-badge-orange">{post.category}</span>
                      <span className="reading-time">
                        <i className="far fa-clock me-1"></i>
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="featured-article-title">{post.title}</h3>
                    <p className="featured-article-excerpt">{post.excerpt}</p>
                    <div className="featured-article-footer">
                      <div className="featured-article-author">
                        <img src={post.author.avatar} alt={post.author.name} />
                        <div>
                          <div className="author-name">{post.author.name}</div>
                          <small className="author-date">{post.date}</small>
                        </div>
                      </div>
                      <span className="read-more">
                        اقرأ المقال <i className="fas fa-long-arrow-alt-left ms-2"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-5" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <h2 className="section-title">التصنيفات</h2>
          <div className="row g-4">
            {categories.map((category, index) => (
              <div key={index} className="col-6 col-md-4 col-lg-2">
                <Link 
                  to={`/blog?category=${category.name}`} 
                  className="text-decoration-none"
                >
                  <div 
                    className="p-4 text-center rounded-4"
                    style={{ 
                      backgroundColor: 'var(--bg-card)',
                      border: '1px solid var(--border-color)',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <div className={`category-badge category-badge-${category.color} mb-2`}>
                      {category.count}
                    </div>
                    <div style={{ fontWeight: 600 }}>{category.name}</div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Posts Section */}
      <section className="py-5">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="section-title mb-0">أحدث المقالات</h2>
            <Link to="/blog" className="btn btn-outline-custom">
              عرض الكل
            </Link>
          </div>
          
          <div className="row g-4">
            {latestPosts.map(post => (
              <div key={post.id} className="col-md-6 col-lg-4">
                <PostCard post={post} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
