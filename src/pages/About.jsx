export default function About() {
  const stats = [
    { icon: 'fa-eye', value: '+2مليون', label: 'قارئ سنوياً' },
    { icon: 'fa-file-alt', value: '+500', label: 'مقالة متخصصة' },
    { icon: 'fa-feather-alt', value: '+50', label: 'كاتب خبير' },
    { icon: 'fa-award', value: '+15', label: 'سنة خبرة' }
  ]

  const values = [
    {
      icon: 'fa-gem',
      title: 'الجودة أولاً',
      description: 'نلتزم بتقديم محتوى عالي الجودة ومدروس بعناية لضمان استفادتك القصوى'
    },
    {
      icon: 'fa-crosshairs',
      title: 'تركيز عملي',
      description: 'نركز على النصائح العملية التي يمكنك تطبيقها مباشرة لتحسين تصويرك'
    },
    {
      icon: 'fa-heart',
      title: 'المجتمع',
      description: 'نؤمن ببناء مجتمع داعم من المصورين يتشاركون الخبرات والإلهام'
    },
    {
      icon: 'fa-redo',
      title: 'دائماً محدث',
      description: 'نواكب أحدث التقنيات والاتجاهات في عالم التصوير الفوتوغرافي'
    }
  ]

  return (
    <div>
      <section className="about-hero">
        <div className="container">
          <div className="text-center">
            <span className="hero-badge">
              <span className="badge-dot"></span>
              من نحن
              <span className="badge-dot"></span>
            </span>
            <h1 className="about-hero-title">
              مهمتنا هي <span className="hero-accent">الإعلام</span> و<span className="hero-accent">الإلهام</span>
            </h1>
            <p className="about-hero-desc">
              مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين ونصائح عملية
              لتطوير مهاراتكم. نحن شغوفون بمشاركة المعرفة ومساعدة المصورين على تنمية مهاراتهم من
              خلال محتوى عالي الجودة.
            </p>
          </div>

          <div className="row g-4 mt-5">
            {stats.map((stat, index) => (
              <div key={index} className="col-6 col-md-3">
                <div className="stat-card">
                  <div className="stat-icon">
                    <i className={`fas ${stat.icon}`}></i>
                  </div>
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">قيمنا</h2>
            <p className="text-secondary">المبادئ التي توجه عملنا وتشكل هويتنا</p>
          </div>

          <div className="row g-4">
            {values.map((value, index) => (
              <div key={index} className="col-md-6 col-lg-3">
                <div className="value-card">
                  <div className="value-icon">
                    <i className={`fas ${value.icon}`}></i>
                  </div>
                  <h4 className="value-title">{value.title}</h4>
                  <p className="value-desc">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">تواصل معنا</h2>
            <p className="text-secondary mb-4">
              نحب أن نسمع منك! راسلنا على
            </p>
            <a 
              href="mailto:hello@adasah.com" 
              className="btn btn-primary-custom"
            >
              <i className="fas fa-envelope me-2"></i>
              hello@adasah.com
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

