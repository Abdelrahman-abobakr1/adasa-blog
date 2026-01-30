import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'

function BlogDetails() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/posts.json')
      .then(response => response.json())
      .then(data => {
        const foundPost = data.posts.find(p => p.slug === slug)
        if (foundPost) {
          setPost(foundPost)
        } else {
          navigate('/404')
        }
        setLoading(false)
      })
  }, [slug, navigate])

  if (loading) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border text-warning" role="status">
          <span className="visually-hidden">جاري التحميل...</span>
        </div>
      </div>
    )
  }

  if (!post) {
    return null
  }

  const renderContent = (content) => {
    const lines = content.split('\n')
    return lines.map((line, index) => {
      if (line.startsWith('## ')) {
        return <h2 key={index}>{line.replace('## ', '')}</h2>
      }
      if (line.trim() === '') {
        return <br key={index} />
      }
      return <p key={index}>{line}</p>
    })
  }

  return (
    <div className="blog-details">
      <div className="container">
        {/* Breadcrumb */}
        <nav className="mb-4">
          <ol className="breadcrumb" style={{ backgroundColor: 'transparent' }}>
            <li className="breadcrumb-item">
              <Link to="/" className="text-secondary text-decoration-none">
                <i className="fas fa-home me-1"></i>الرئيسية
              </Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/blog" className="text-secondary text-decoration-none">المدونة</Link>
            </li>
            <li className="breadcrumb-item active" style={{ color: 'var(--accent-color)' }}>
              {post.category}
            </li>
          </ol>
        </nav>

        {/* Header */}
        <div className="blog-details-header">
          <span className="blog-details-category">{post.category}</span>
          <h1 className="blog-details-title">{post.title}</h1>
          
          <div className="blog-details-meta">
            <div className="d-flex align-items-center gap-2">
              <img 
                src={post.author.avatar} 
                alt={post.author.name}
                style={{ width: 45, height: 45, borderRadius: '50%' }}
              />
              <div className="text-start">
                <div style={{ fontWeight: 600, color: 'var(--text-primary)' }}>
                  {post.author.name}
                </div>
                <small>{post.author.role}</small>
              </div>
            </div>
            <span>
              <i className="far fa-calendar me-1"></i>
              {post.date}
            </span>
            <span>
              <i className="far fa-clock me-1"></i>
              {post.readTime}
            </span>
          </div>
        </div>

        {/* Featured Image */}
        <div className="blog-details-image">
          <img src={post.image} alt={post.title} />
        </div>

        {/* Content */}
        <div className="blog-details-content">
          {renderContent(post.content)}
        </div>

        {/* Tags */}
        <div className="mt-5 pt-4" style={{ borderTop: '1px solid var(--border-color)' }}>
          <h5 className="mb-3">
            <i className="fas fa-tags me-2"></i>
            الوسوم:
          </h5>
          <div className="d-flex flex-wrap gap-2">
            {post.tags.map((tag, index) => (
              <span 
                key={index} 
                className="category-badge category-badge-orange"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-5 text-center">
          <Link to="/blog" className="btn btn-outline-custom">
            <i className="fas fa-long-arrow-alt-right me-2"></i>
            العودة للمدونة
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BlogDetails
