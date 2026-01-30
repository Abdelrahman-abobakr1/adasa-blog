import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found-code">404</div>
      <h1 className="not-found-title">الصفحة غير موجودة</h1>
      <p className="not-found-text">
        عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها.
      </p>
      <Link to="/" className="btn btn-primary-custom">
        العودة للرئيسية
      </Link>
    </div>
  )
}

export default NotFound
