import { useLanguage } from '../contexts/LanguageContext'
import { contactInfo, personalInfo } from '../data/content'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Copy, Check } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const { t } = useLanguage()
  const [copied, setCopied] = useState<string | null>(null)

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text)
    setCopied(label)
    setTimeout(() => setCopied(null), 2000)
  }

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
            <span className="gradient-text">{t('联系我', 'Contact Me')}</span>
          </h1>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
            {t('期待与您交流，欢迎通过以下方式联系我', 'Looking forward to connecting with you. Feel free to reach out')}
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="glass-card p-8">
              <h2 className="text-xl font-bold mb-6 text-[var(--text-primary)]">
                {t('联系信息', 'Contact Information')}
              </h2>
              <div className="space-y-6">
                {/* Emails */}
                {contactInfo.emails.map((email, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center flex-shrink-0">
                      <Mail size={18} className="text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-[var(--text-muted)] mb-1">{email.label}</p>
                      <div className="flex items-center gap-2">
                        <a
                          href={`mailto:${email.address}`}
                          className="text-[var(--text-primary)] hover:text-[var(--primary)] transition-colors truncate"
                        >
                          {email.address}
                        </a>
                        <button
                          onClick={() => handleCopy(email.address, email.label)}
                          className="p-1.5 rounded-md hover:bg-[var(--bg-glass)] text-[var(--text-muted)] hover:text-[var(--primary)] transition-all flex-shrink-0"
                          title={t('复制邮箱', 'Copy email')}
                        >
                          {copied === email.label ? <Check size={14} className="text-[var(--primary)]" /> : <Copy size={14} />}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center flex-shrink-0">
                    <Phone size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-[var(--text-muted)] mb-1">{t('电话', 'Phone')}</p>
                    <a
                      href={`tel:${contactInfo.phone}`}
                      className="text-[var(--text-primary)] hover:text-[var(--primary)] transition-colors"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-[var(--text-muted)] mb-1">{t('所在地', 'Location')}</p>
                    <p className="text-[var(--text-primary)]">{t('深圳', 'Shenzhen')}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
