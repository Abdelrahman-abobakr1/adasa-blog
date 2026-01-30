import { Link } from 'react-router-dom'

export default function PostCard({ post }) {
  return (
    <Link to={`/blog/${post.slug}`} className="post-card-link">
      <div className="post-card">
        <div className="post-card-image">
          <img src={post.image} alt={post.title} />
          <span className="post-card-category">{post.category}</span>
        </div>
        
        <div className="post-card-body">
          <h3 className="post-card-title">
            {post.title}
          </h3>
          
          <p className="post-card-excerpt">{post.excerpt}</p>
          
          <div className="post-card-meta">
            <div className="post-card-author">
              <img src={post.author.avatar} alt={post.author.name} />
              <span>{post.author.name}</span>
            </div>
            <span>
              <i className="far fa-clock me-1"></i>
              {post.readTime}
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}

