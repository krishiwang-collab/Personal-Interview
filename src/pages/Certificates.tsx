import { useLanguage } from '../contexts/LanguageContext'
import { certificates, skills } from '../data/content'
import { motion } from 'framer-motion'
import { Award, ExternalLink, CheckCircle } from 'lucide-react'

export default function Certificates() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">
            <span className="gradient-text">{t('技能与证书', 'Skills & Certificates')}</span>
          </h1>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
            {t('专业认证与技能展示，持续学习与成长', 'Professional certifications and skills, continuous learning and growth')}
          </p>
        </motion.div>

        {/* Certificates */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center">
              <Award size={20} className="text-white" />
            </div>
            <span className="gradient-text">{t('专业认证', 'Professional Certifications')}</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="glass-card overflow-hidden hover:border-[var(--primary)] transition-all duration-300 group"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Certificate Image */}
                  <div className="relative h-64 md:h-auto overflow-hidden">
                    <img
                      src={cert.image}
                      alt={t(cert.name, cert.nameEn)}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x300/0f172a/00d4aa?text=Certificate'
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-dark)] via-transparent to-transparent md:bg-gradient-to-r" />
                  </div>

                  {/* Certificate Info */}
                  <div className="p-6 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-3">
                      <Award size={20} className="text-[var(--primary)]" />
                      <h3 className="text-xl font-bold text-[var(--text-primary)]">{t(cert.name, cert.nameEn)}</h3>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] mb-4">{t(cert.description.zh, cert.description.en)}</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-[var(--text-muted)]">{t('颁发机构', 'Issuer')}</span>
                        <span className="text-[var(--text-primary)] font-medium">{cert.issuer}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[var(--text-muted)]">{t('获得日期', 'Date')}</span>
                        <span className="text-[var(--text-primary)]">{t(cert.date, cert.dateEn)}</span>
                      </div>
                      {cert.expiry && (
                        <div className="flex items-center justify-between">
                          <span className="text-[var(--text-muted)]">{t('有效期至', 'Valid Until')}</span>
                          <span className="text-[var(--text-primary)]">{t(cert.expiry, cert.expiryEn)}</span>
                        </div>
                      )}
                      <div className="flex items-center justify-between">
                        <span className="text-[var(--text-muted)]">{t('证书编号', 'Number')}</span>
                        <span className="text-[var(--text-primary)] font-mono text-xs">{cert.number}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center">
              <CheckCircle size={20} className="text-white" />
            </div>
            <span className="gradient-text">{t('技能水平', 'Skill Proficiency')}</span>
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="glass-card p-5"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-medium text-[var(--text-primary)]">{skill.name}</span>
                  <span className="text-sm text-[var(--primary)] font-semibold">{skill.level}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-[var(--bg-dark)] overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
                    className="h-full rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
