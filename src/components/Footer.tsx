import { useLanguage } from '../contexts/LanguageContext'
import { Heart } from 'lucide-react'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="relative z-10 py-8 px-4 border-t border-[var(--border-glass)]">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[var(--text-muted)]">
          {t(' 2026 王辉. 保留所有权利.', ' 2026 Kris Wang. All rights reserved.')}
        </p>
        <p className="flex items-center gap-1 text-sm text-[var(--text-muted)]">
          {t('用', 'Made with')}
          <Heart size={14} className="text-[var(--primary)]" />
          {t('和 React 构建', 'and React')}
        </p>
      </div>
    </footer>
  )
}
