import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { workExperience, projects } from '../data/content'
import { motion } from 'framer-motion'
import { Briefcase, FolderKanban, MapPin, Calendar, ChevronDown, ChevronUp } from 'lucide-react'

export default function Experience() {
  const { t } = useLanguage()
  const [activeTab, setActiveTab] = useState<'work' | 'projects'>('work')
  const [expandedId, setExpandedId] = useState<number | null>(0)

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">
            <span className="gradient-text">{t('工作经历', 'Experience')}</span>
          </h1>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
            {t('8年IT行业经验，跨足金融科技、半导体等多个领域', '8 years in IT across fintech, semiconductor, and other industries')}
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center mb-12"
        >
          <div className="glass-card p-1 flex gap-1">
            <button
              onClick={() => setActiveTab('work')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeTab === 'work'
                  ? 'bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              <Briefcase size={16} />
              {t('工作经历', 'Work')}
            </button>
            <button
              onClick={() => setActiveTab('projects')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeTab === 'projects'
                  ? 'bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              <FolderKanban size={16} />
              {t('项目经历', 'Projects')}
            </button>
          </div>
        </motion.div>

        {/* Timeline */}
        {activeTab === 'work' && (
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--primary)] via-[var(--secondary)] to-transparent" />
            <div className="space-y-8">
              {workExperience.map((work, index) => {
                const isExpanded = expandedId === index
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`relative flex flex-col md:flex-row gap-4 md:gap-8 ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] border-4 border-[var(--bg-dark)] z-10 mt-6" />

                    {/* Card */}
                    <div className={`flex-1 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                      <div className="glass-card p-6 hover:border-[var(--primary)] transition-all duration-300">
                        {/* Header */}
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                          <div>
                            <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-1">
                              {t(work.position, work.positionEn)}
                            </h3>
                            <p className="text-[var(--primary)] font-medium">{t(work.company, work.companyEn)}</p>
                          </div>
                          <div className="flex flex-col items-start sm:items-end gap-1 text-sm text-[var(--text-secondary)]">
                            <div className="flex items-center gap-1.5">
                              <Calendar size={14} />
                              <span>{t(work.period, work.periodEn)}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <MapPin size={14} />
                              <span>{t(work.location, work.locationEn)}</span>
                            </div>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="space-y-3 mb-4">
                          {(isExpanded ? work.highlights : work.highlights.slice(0, 2)).map((highlight, i) => (
                            <div key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                              <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] mt-2 flex-shrink-0" />
                              <span className="leading-relaxed">{t(highlight.zh, highlight.en)}</span>
                            </div>
                          ))}
                        </div>

                        {/* Achievements */}
                        {work.achievements.length > 0 && (
                          <div className="pt-4 border-t border-[var(--border-glass)]">
                            <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-3">
                              {t('主要业绩', 'Key Achievements')}
                            </h4>
                            <div className="space-y-2">
                              {(isExpanded ? work.achievements : work.achievements.slice(0, 2)).map((achievement, i) => (
                                <div key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--secondary)] mt-2 flex-shrink-0" />
                                  <span className="leading-relaxed">{t(achievement.zh, achievement.en)}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Expand Button */}
                        {(work.highlights.length > 2 || work.achievements.length > 2) && (
                          <button
                            onClick={() => setExpandedId(isExpanded ? null : index)}
                            className="mt-4 flex items-center gap-1 text-sm text-[var(--primary)] hover:text-[var(--primary-light)] transition-colors"
                          >
                            {isExpanded ? (
                              <>
                                {t('收起', 'Show Less')}
                                <ChevronUp size={16} />
                              </>
                            ) : (
                              <>
                                {t('查看更多', 'Show More')}
                                <ChevronDown size={16} />
                              </>
                            )}
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Empty column for alternating layout */}
                    <div className="hidden md:block flex-1" />
                  </motion.div>
                )
              })}
            </div>
          </div>
        )}

        {/* Projects */}
        {activeTab === 'projects' && (
          <div className="grid lg:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 hover:border-[var(--primary)] transition-all duration-300 group"
              >
                {/* Header */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-1 group-hover:text-[var(--primary)] transition-colors">
                      {t(project.name, project.nameEn)}
                    </h3>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="px-2 py-0.5 rounded-md bg-[var(--bg-glass)] text-[var(--primary)] border border-[var(--border-glass)]">
                        {t(project.role, project.roleEn)}
                      </span>
                      <span className="text-[var(--text-muted)] flex items-center gap-1">
                        <Calendar size={12} />
                        {t(project.period, project.periodEn)}
                      </span>
                    </div>
                  </div>
                  <FolderKanban size={24} className="text-[var(--primary)] flex-shrink-0" />
                </div>

                {/* Description */}
                <div className="space-y-2 mb-4">
                  {project.description.map((desc, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] mt-2 flex-shrink-0" />
                      <span className="leading-relaxed">{t(desc.zh, desc.en)}</span>
                    </div>
                  ))}
                </div>

                {/* Achievements */}
                <div className="pt-4 border-t border-[var(--border-glass)]">
                  <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-3">
                    {t('项目成果', 'Outcomes')}
                  </h4>
                  <div className="space-y-2">
                    {project.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--secondary)] mt-2 flex-shrink-0" />
                        <span className="leading-relaxed">{t(achievement.zh, achievement.en)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
