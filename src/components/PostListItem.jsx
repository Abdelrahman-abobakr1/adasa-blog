import { Link } from 'react-router-dom'

export default function PostListItem({ post }) {
  return (
    <div className="post-list-item">
      <div className="post-list-item-image">
        <img src={post.image} alt={post.title} />
      </div>
      
      <div className="post-list-item-content">
        <span className="category-badge category-badge-orange mb-2">
          {post.category}
        </span>
        
        <Link to={`/blog/${post.slug}`} className="post-card-title">
          {post.title}
        </Link>
        
        <p className="post-card-excerpt">{post.excerpt}</p>
        
        <div className="post-card-meta">
          <div className="post-card-author">
            <img src={post.author.avatar} alt={post.author.name} />
            <span>{post.author.name}</span>
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
    </div>
  )
}

