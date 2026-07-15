import { useLanguage } from '../contexts/LanguageContext'
import { personalInfo, education, strengths } from '../data/content'
import { motion } from 'framer-motion'
import { GraduationCap, Award, User, Target, Zap, Users, Globe } from 'lucide-react'

export default function About() {
  const { t } = useLanguage()

  const skillCategories = [
    {
      icon: Target,
      title: t('系统运维', 'System Operations'),
      titleEn: 'System Operations',
      skills: ['Windows Server', 'Active Directory', 'ESXi / vSphere', 'Linux (RHEL)', 'Group Policy'],
    },
    {
      icon: Zap,
      title: t('网络与安全', 'Network & Security'),
      titleEn: 'Network & Security',
      skills: ['Network Management', 'DLP / IPG', 'Firewall', 'VPN', 'Security Audit'],
    },
    {
      icon: Users,
      title: t('应用系统', 'Application Systems'),
      titleEn: 'Application Systems',
      skills: ['CRM (纷享销客)', 'OA (企微)', 'SSO / IDaaS', 'VDI / Cloud Desktop', 'iData'],
    },
    {
      icon: Globe,
      title: t('项目管理', 'Project Management'),
      titleEn: 'Project Management',
      skills: ['PMP Methodology', 'ITIL / ITSM', 'Agile', 'SOP Documentation', 'Vendor Management'],
    },
  ]

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
            <span className="gradient-text">{t('关于我', 'About Me')}</span>
          </h1>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
            {t('了解我的背景、技能和职业理念', 'Learn about my background, skills, and professional philosophy')}
          </p>
        </motion.div>

        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass-card p-8 mb-12"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center">
                  <User size={24} className="text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-[var(--text-primary)]">{personalInfo.name}</h2>
                  <p className="text-[var(--text-secondary)]">{t(personalInfo.title, personalInfo.titleEn)}</p>
                </div>
              </div>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
                {t(
                  '我是一名拥有8年工作经验的IT技术支持专家，专注于企业IT基础设施运维、系统架构设计和项目管理。在金融科技和半导体行业积累了丰富的实战经验，擅长从零搭建企业级IT系统，并推动运维工作的流程化与标准化。持有PMP项目管理认证和RHCSA红帽认证系统管理员资格。',
                  'An IT operations specialist with 8 years of experience, focused on enterprise infrastructure, system architecture, and project management. Rich practical experience in fintech and semiconductor industries, skilled in building enterprise IT systems from scratch and standardizing operations. Holds PMP and RHCSA certifications.'
                )}
              </p>
              <div className="flex flex-wrap gap-3">
                {['Windows Server', 'Active Directory', 'ESXi', 'Linux', 'PMP', 'RHCSA'].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-[var(--bg-glass)] text-[var(--primary)] border border-[var(--border-glass)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] rounded-2xl opacity-20 blur-xl" />
                <div className="relative w-64 h-64 rounded-2xl overflow-hidden glass-card">
                  <img
                    src={personalInfo.photo}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x400/0f172a/00d4aa?text=Kris'
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-8 text-center">
            <span className="gradient-text">{t('技能专长', 'Skills & Expertise')}</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card p-6 hover:border-[var(--primary)] transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center mb-4">
                    <Icon size={20} className="text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-[var(--text-primary)]">
                    {t(category.title, category.titleEn)}
                  </h3>
                  <ul className="space-y-2">
                    {category.skills.map((skill, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="glass-card p-8 mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center">
              <GraduationCap size={20} className="text-white" />
            </div>
            <h2 className="text-2xl font-bold text-[var(--text-primary)]">{t('教育背景', 'Education')}</h2>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-[var(--text-primary)]">{t(education.school, education.schoolEn)}</h3>
              <p className="text-[var(--text-secondary)]">{t(education.major, education.majorEn)} · {t(education.degree, education.degreeEn)}</p>
              <p className="text-sm text-[var(--text-muted)] mt-1">{education.period}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {education.highlights.map((highlight, index) => (
                <span
                  key={index}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-[var(--bg-glass)] text-[var(--primary)] border border-[var(--border-glass)]"
                >
                  {t(highlight.zh, highlight.en)}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Strengths */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold mb-8 text-center">
            <span className="gradient-text">{t('核心优势', 'Core Strengths')}</span>
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {strengths.map((strength, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 flex items-start gap-4"
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center flex-shrink-0">
                  <Award size={16} className="text-white" />
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {t(strength.zh, strength.en)}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
