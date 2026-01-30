import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  const [categories, setCategories] = useState([])
  const [siteInfo, setSiteInfo] = useState({})

  useEffect(() => {
    fetch('/posts.json')
      .then(response => response.json())
      .then(data => {
        setCategories(data.categories)
        setSiteInfo(data.siteInfo)
      })
  }, [])

  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-4">
            <div className="footer-brand">
              <i className="fas fa-camera me-2"></i>
              {siteInfo.name || 'عَدَسَة'}
            </div>
            <p className="footer-text">
              {siteInfo.description || 'مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم.'}
            </p>
            <div className="social-links mt-3">
              {siteInfo.social && (
                <>
                  <a href={siteInfo.social.twitter} className="social-link" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href={siteInfo.social.github} className="social-link" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href={siteInfo.social.youtube} className="social-link" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-youtube"></i>
                  </a>
                  <a href={siteInfo.social.linkedin} className="social-link" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </>
              )}
            </div>
          </div>
          
          <div className="col-lg-2 col-md-4 mb-4">
            <div className="footer-links">
              <h5>روابط سريعة</h5>
              <Link to="/"><i className="fas fa-angle-left me-2"></i>الرئيسية</Link>
              <Link to="/blog"><i className="fas fa-angle-left me-2"></i>المدونة</Link>
              <Link to="/about"><i className="fas fa-angle-left me-2"></i>من نحن</Link>
            </div>
          </div>
          
          <div className="col-lg-2 col-md-4 mb-4">
            <div className="footer-links">
              <h5>التصنيفات</h5>
              {categories.map((category, index) => (
                <Link key={index} to={`/blog?category=${category.name}`}>
                  <i className="fas fa-angle-left me-2"></i>{category.name}
                </Link>
              ))}
            </div>
          </div>
          
          <div className="col-lg-4 col-md-4 mb-4">
            <div className="footer-links">
              <h5>تواصل معنا</h5>
              <p className="footer-text">
                <i className="fas fa-envelope me-2"></i>
                {siteInfo.email || 'hello@adasah.com'}
              </p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} {siteInfo.name || 'عدسة'}. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  )
}

