import { useLanguage } from '../contexts/LanguageContext'
import { personalInfo, strengths } from '../data/content'
import { motion } from 'framer-motion'
import { MapPin, Phone, Calendar, Download, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Home() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-64px)] flex items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
                <span className="text-[var(--text-primary)]">{t('你好，我是', 'Hi, I\'m ')}</span>
                <br />
                <span className="gradient-text">{personalInfo.name}</span>
                <span className="text-2xl sm:text-3xl lg:text-4xl text-[var(--text-secondary)] ml-3">{personalInfo.nameEn}</span>
              </h1>

              <p className="text-xl text-[var(--text-secondary)] mb-6">
                {t(personalInfo.title, personalInfo.titleEn)}
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                  <MapPin size={16} className="text-[var(--primary)]" />
                  {t(personalInfo.location, personalInfo.locationEn)}
                </div>
                <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                  <Calendar size={16} className="text-[var(--primary)]" />
                  {t(personalInfo.experience + '工作经验', personalInfo.experienceEn + ' Experience')}
                </div>
                <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                  <Phone size={16} className="text-[var(--primary)]" />
                  {personalInfo.phone}
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn-primary">
                  {t('联系我', 'Contact Me')}
                  <ChevronRight size={16} />
                </Link>
                <a
                  href={personalInfo.resume}
                  download
                  className="btn-secondary"
                >
                  <Download size={16} />
                  {t('下载简历', 'Download Resume')}
                </a>
              </div>
            </motion.div>

            {/* Right Content - Photo */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] rounded-2xl opacity-20 blur-xl" />
                <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden glass-card">
                  <img
                    src={personalInfo.photo}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x400/0f172a/00d4aa?text=Kris'
                    }}
                  />
                </div>
                {/* Floating badges */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -top-4 -right-4 glass-card px-4 py-2"
                >
                  <span className="text-sm font-semibold text-[var(--primary)]">PMP</span>
                </motion.div>
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -bottom-4 -left-4 glass-card px-4 py-2"
                >
                  <span className="text-sm font-semibold text-[var(--secondary)]">RHCSA</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Strengths Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">
              <span className="gradient-text">{t('个人优势', 'Strengths')}</span>
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              {t('8年IT行业经验，专注于企业IT基础设施运维与项目管理', '8 years in IT, focused on enterprise infrastructure operations and project management')}
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {strengths.map((strength, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 hover:border-[var(--primary)] transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-sm">{index + 1}</span>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {t(strength.zh, strength.en)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-[var(--border-glass)]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: '8+', label: t('年工作经验', 'Years Experience') },
              { value: '5', label: t('家公司', 'Companies') },
              { value: '4', label: t('主导项目', 'Led Projects') },
              { value: '2', label: t('专业认证', 'Certifications') },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-sm text-[var(--text-secondary)]">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
