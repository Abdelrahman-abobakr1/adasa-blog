import { Link, NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-custom sticky-top">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
          <div className="brand-icon">
            <i className="fas fa-camera fa-2x" style={{ color: '#f97316' }}></i>
          </div>
          <div className="brand-text">
            <div className="brand-name">عدسة</div>
            <div className="brand-tagline">عالم التصوير الفوتوغرافي</div>
          </div>
        </Link>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto nav-pills-custom">
            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => `nav-link nav-link-pill ${isActive ? 'active' : ''}`} 
                to="/"
              >
                الرئيسية
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => `nav-link nav-link-pill ${isActive ? 'active' : ''}`} 
                to="/blog"
              >
                المدونة
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => `nav-link nav-link-pill ${isActive ? 'active' : ''}`} 
                to="/about"
              >
                من نحن
              </NavLink>
            </li>
          </ul>
          
          <div className="d-flex align-items-center gap-3">
            <button className="btn btn-link nav-search-btn">
              <i className="fas fa-search"></i>
            </button>
            <Link to="/blog" className="btn btn-primary-custom">
              ابدأ القراءة
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

