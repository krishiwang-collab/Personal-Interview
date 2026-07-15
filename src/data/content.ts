import { Globe, Home, User, Briefcase, Award, Mail, FileText } from 'lucide-react'

export const navItems = [
  { path: '/', labelZh: '首页', labelEn: 'Home', icon: Home },
  { path: '/about', labelZh: '关于', labelEn: 'About', icon: User },
  { path: '/experience', labelZh: '经历', labelEn: 'Experience', icon: Briefcase },
  { path: '/certificates', labelZh: '证书', labelEn: 'Certificates', icon: Award },
  { path: '/contact', labelZh: '联系', labelEn: 'Contact', icon: Mail },
]

export const personalInfo = {
  name: '王辉',
  nameEn: 'Kris Wang',
  title: 'IT技术支持 / IT Operations Engineer',
  titleEn: 'IT Operations Engineer',
  age: 28,
  phone: '15195963951',
  email: 'kris.hi.wang@gmail.com',
  emailCn: 'kris.hi.wang@qq.com',
  location: '深圳',
  locationEn: 'Shenzhen',
  experience: '8年',
  experienceEn: '8 Years',
  salary: '16-20K',
  photo: '/Personal-Interview/images/photo.png',
  resume: '/Personal-Interview/images/resume.pdf',
}

export const strengths = [
  {
    zh: '积极主动，具备出色的沟通与逻辑分析技能，能够高效地解决技术问题，优化工作流程。',
    en: 'Proactive with excellent communication and analytical skills, efficiently solving technical issues and optimizing workflows.',
  },
  {
    zh: '强执行力与高度责任心相结合，确保任务准确无误地完成，有效推动项目进展。',
    en: 'Strong execution combined with high responsibility, ensuring accurate task completion and effective project progress.',
  },
  {
    zh: '卓越的团队协作能力，擅长跨部门沟通，通过协作达成团队目标，提升整体工作效率。',
    en: 'Exceptional teamwork ability, skilled in cross-department communication, achieving team goals through collaboration.',
  },
  {
    zh: '具备出色的人际交往和协调技巧，能够在多元文化背景下工作，适应各种工作环境与出差要求。',
    en: 'Excellent interpersonal and coordination skills, capable of working in multicultural environments and adapting to various work settings.',
  },
]

export const workExperience = [
  {
    company: '华港咨询（深圳）有限公司',
    companyEn: 'Huagang Consulting (Shenzhen) Co., Ltd.',
    position: 'IT技术支持',
    positionEn: 'IT Technical Support',
    period: '2026.06 - 至今',
    periodEn: 'Jun 2026 - Present',
    location: '深圳',
    locationEn: 'Shenzhen',
    highlights: [
      {
        zh: '暂无',
        en: 'N/A',
      },
    ],
    achievements: [],
  },
  {
    company: '深圳市微源半导体股份有限公司',
    companyEn: 'Shenzhen Vpower Semiconductor Co., Ltd.',
    position: 'IT运维工程师',
    positionEn: 'IT Operations Engineer',
    period: '2026.02 - 2026.05',
    periodEn: 'Feb 2026 - May 2026',
    location: '深圳',
    locationEn: 'Shenzhen',
    highlights: [
      {
        zh: '独立搭建AD域控服务器，成功对接企业微信、纷享销客CRM等应用系统，实现组织架构同步及统一身份认证',
        en: 'Independently built AD domain controller, integrated with WeChat Work and CRM systems, achieving unified identity authentication.',
      },
      {
        zh: '负责Windows Server日常运维及策略配置；熟练管理ESXi虚拟化平台，负责虚拟机的创建、分发与资源调配',
        en: 'Managed Windows Server operations and ESXi virtualization platform, responsible for VM creation and resource allocation.',
      },
      {
        zh: '负责IPG数据防泄漏系统后台运维，精细化管理邮箱白名单策略、文件加解密及终端行为审计',
        en: 'Managed IPG DLP system backend, including whitelist policies, file encryption, and terminal behavior auditing.',
      },
      {
        zh: '撰写并输出服务器运维、故障处理等SOP标准文档，推动运维工作的流程化与规范化',
        en: 'Authored SOP documents for server operations and troubleshooting, standardizing operational workflows.',
      },
      {
        zh: '负责企微OA流程搭建、测试、运维及纷享销客CRM系统运维',
        en: 'Built and maintained WeChat Work OA processes and CRM system operations.',
      },
    ],
    achievements: [
      {
        zh: '主导AD域架构搭建与全生命周期管理，深度集成第三方应用系统，实现组织架构自动同步与单点登录（SSO）',
        en: 'Led AD domain architecture and lifecycle management, integrated third-party apps for auto-sync and SSO.',
      },
      {
        zh: '运维ESXi服务器虚拟化集群，支持300+员工远程办公并发需求',
        en: 'Managed ESXi virtualization cluster supporting 300+ concurrent remote employees.',
      },
      {
        zh: '优化纷享销客CRM审批流程，缩短多种审批流周期',
        en: 'Optimized CRM approval workflows, significantly reducing approval cycle times.',
      },
      {
        zh: '主导纷享销客工作圈OA迁移至企微OA，完善业务模块分割',
        en: 'Led migration from CRM OA to WeChat Work OA, improving business module segmentation.',
      },
      {
        zh: '撰写SOP标准文档17份，推动运维工作的流程化与规范化',
        en: 'Authored 17 SOP documents, standardizing operations and maintenance workflows.',
      },
    ],
  },
  {
    company: '东莞光茂科技有限公司',
    companyEn: 'Dongguang Guangmao Technology Co., Ltd.',
    position: 'IT技术支持',
    positionEn: 'IT Technical Support',
    period: '2023.12 - 2026.01',
    periodEn: 'Dec 2023 - Jan 2026',
    location: '东莞',
    locationEn: 'Dongguan',
    highlights: [
      {
        zh: '负责公司电脑、外设设备的软硬件维护，配合集团进行网络、服务器及电话系统的日常维护与故障处理',
        en: 'Maintained computer hardware and software, managed network, server, and phone system operations.',
      },
      {
        zh: '参与公司各类IT相关项目的实施与技术支持，确保项目顺利推进',
        en: 'Participated in IT project implementation and technical support, ensuring smooth project delivery.',
      },
      {
        zh: '负责IT相关设备与软件的采购、租赁及管理，确保资源合理配置',
        en: 'Managed IT equipment and software procurement, leasing, and resource allocation.',
      },
      {
        zh: '管理公司资产、License授权、应用软件及用户权限系统',
        en: 'Managed company assets, software licenses, applications, and user permission systems.',
      },
      {
        zh: '负责文印系统选型采购、部署，与idata对接方案编写与实施',
        en: 'Led printing system selection, deployment, and iData integration implementation.',
      },
    ],
    achievements: [
      {
        zh: '独立处理日均30+技术支持请求，首次联系解决率达90%，用户满意度持续保持在98%以上',
        en: 'Handled 30+ daily support requests with 90% first-contact resolution and 98%+ satisfaction.',
      },
      {
        zh: '使用idaas为750+名新员工高效配置账户、安全组和文件权限',
        en: 'Configured accounts and permissions for 750+ new employees using IDaaS.',
      },
      {
        zh: '主导编写36篇IT知识库文档和FAQ，使同类问题咨询量减少70%',
        en: 'Authored 36 IT knowledge base articles, reducing similar inquiries by 70%.',
      },
      {
        zh: '独立负责文印系统升级切换项目，完成18台企业级打印机标准化部署',
        en: 'Led printing system upgrade, deploying 18 enterprise printers with zero errors.',
      },
      {
        zh: '独立完成新员工NEO大型培训会议保障，荣获COO感谢信',
        en: 'Successfully supported new employee NEO training events, received COO thank-you letter.',
      },
    ],
  },
  {
    company: '上海艾为电子技术股份有限公司',
    companyEn: 'Shanghai Awinic Electronic Technology Co., Ltd.',
    position: 'IT工程师',
    positionEn: 'IT Engineer',
    period: '2019.11 - 2022.03',
    periodEn: 'Nov 2019 - Mar 2022',
    location: '上海',
    locationEn: 'Shanghai',
    highlights: [
      {
        zh: '提供企业内部IT技术支持，确保系统稳定运行和高效运作',
        en: 'Provided internal IT technical support, ensuring stable system operations.',
      },
      {
        zh: '负责资产信息更新与盘点，维护资产完整性及安全性',
        en: 'Managed asset inventory and updates, maintaining asset integrity and security.',
      },
      {
        zh: '管理云桌面终端（VDI），优化性能，确保终端用户满意度',
        en: 'Managed VDI terminals, optimizing performance and ensuring user satisfaction.',
      },
      {
        zh: '为新入职员工分配权限，并提供全面入职培训',
        en: 'Configured permissions for new employees and provided comprehensive onboarding training.',
      },
      {
        zh: '协助部门制定IT项目实施计划，推动项目组按计划进行项目实施',
        en: 'Assisted in IT project planning and drove project team execution.',
      },
    ],
    achievements: [],
  },
  {
    company: '思爱普（中国）有限公司',
    companyEn: 'SAP (China) Co., Ltd.',
    position: 'IT技术支持',
    positionEn: 'IT Technical Support',
    period: '2018.10 - 2019.10',
    periodEn: 'Oct 2018 - Oct 2019',
    location: '上海',
    locationEn: 'Shanghai',
    highlights: [
      {
        zh: '使用公司内部平台系统IT Direct为客户提供双语支持',
        en: 'Provided bilingual support to clients using internal IT Direct platform.',
      },
      {
        zh: '收集客户各类问题，为公司用户提供Meeting Support服务',
        en: 'Collected client issues and provided Meeting Support services.',
      },
      {
        zh: '熟悉PC/Windows系统和Office365等常用客户端软件，有基本的网络知识',
        en: 'Proficient in PC/Windows systems and Office 365, with basic networking knowledge.',
      },
    ],
    achievements: [],
  },
]

export const projects = [
  {
    name: 'AD域搭建与集成对接',
    nameEn: 'AD Domain Setup & Integration',
    role: '负责人',
    roleEn: 'Lead',
    period: '2026.02 - 2026.03',
    periodEn: 'Feb 2026 - Mar 2026',
    description: [
      {
        zh: '针对公司长期缺乏统一身份认证与集中化管理的现状，主导实施了从零搭建Active Directory域控环境的项目',
        en: 'Led the implementation of Active Directory domain controller from scratch to address lack of unified identity management.',
      },
      {
        zh: '独立完成AD服务器的规划与搭建，建立了统一的身份认证中心',
        en: 'Independently planned and built AD server, establishing a unified identity authentication center.',
      },
      {
        zh: '利用API接口开发同步机制，实现AD服务器与企业微信的双向自动同步',
        en: 'Developed API-based sync mechanism for bidirectional auto-sync between AD and WeChat Work.',
      },
      {
        zh: '基于AD域控对接公司各核心应用系统，通过集成SSO方案统一了登录入口',
        en: 'Integrated core applications with AD via SSO, unifying login portals.',
      },
    ],
    achievements: [
      {
        zh: '将用户生命周期管理从手工操作转变为自动化流程，显著降低IT重复性工作量',
        en: 'Transformed user lifecycle management from manual to automated, significantly reducing IT workload.',
      },
      {
        zh: '将全公司300+办公笔记本电脑加域纳管，建立基于组策略的标准化管控机制',
        en: 'Onboarded 300+ laptops to domain with standardized group policy management.',
      },
      {
        zh: '实现各应用系统单点登录，解决了多套系统密码不一致导致的登录繁琐问题',
        en: 'Implemented SSO across applications, eliminating password management complexity.',
      },
    ],
  },
  {
    name: '红区IM部署实施',
    nameEn: 'Red Zone IM Deployment',
    role: '主导人',
    roleEn: 'Lead',
    period: '2025.05 - 2025.08',
    periodEn: 'May 2025 - Aug 2025',
    description: [
      {
        zh: '为解决Fab厂核心生产数据安全风险，构建符合网络安全等级的"红黄区"隔离架构',
        en: 'Built "Red-Yellow Zone" isolation architecture to address core production data security risks.',
      },
      {
        zh: '在生产环境与测试环境中同步部署蓝信即时通讯系统，实现红区服务的完全本地化私有部署',
        en: 'Deployed Lanxin IM in both production and test environments with fully localized private deployment.',
      },
      {
        zh: '编写覆盖全面的测试用例，在测试环境中完成56项功能模块的测试',
        en: 'Authored comprehensive test cases and completed 56 functional module tests.',
      },
      {
        zh: '实现红区与黄区在通讯链路、网络边界、逻辑权限及物理设备四个层面的全方位安全隔离',
        en: 'Achieved four-layer security isolation: communication, network, logic, and physical.',
      },
    ],
    achievements: [
      {
        zh: '完成红区100%本地化私有部署，构建四层安全隔离体系，将信息泄露风险降低70%以上',
        en: 'Achieved 100% localized private deployment with four-layer isolation, reducing data leak risk by 70%+.',
      },
      {
        zh: '通过严格测试流程确保系统高质量交付，实现生产系统一次性成功上线，重大故障率为零',
        en: 'Ensured high-quality delivery through rigorous testing, achieving zero major failures at launch.',
      },
      {
        zh: '建立标准化部署与测试流程，为后续项目提供范本',
        en: 'Established standardized deployment and testing processes as templates for future projects.',
      },
    ],
  },
  {
    name: '文印系统部署实施',
    nameEn: 'Printing System Deployment',
    role: '负责人',
    roleEn: 'Lead',
    period: '2025.03 - 2025.07',
    periodEn: 'Mar 2025 - Jul 2025',
    description: [
      {
        zh: '淘汰原有不支持定制服务的文印系统，重新选型并部署理光"理享印"文印系统',
        en: 'Replaced legacy printing system with Ricoh "Lixiangyin" solution.',
      },
      {
        zh: '设计并部署以负载均衡、文印服务器、数据库及OCR服务器为核心的高可用集群架构',
        en: 'Designed and deployed high-availability cluster with load balancing, print servers, database, and OCR.',
      },
      {
        zh: '主导完成与现有OA系统、iData系统的集成对接，实现组织架构自动同步与统一身份认证',
        en: 'Led integration with OA and iData systems for auto-sync and unified authentication.',
      },
      {
        zh: '设计并实施基于部门与角色的分级管控策略，实现文印权限与成本的精细化管理',
        en: 'Implemented role-based access control for fine-grained printing permission and cost management.',
      },
    ],
    achievements: [
      {
        zh: '完成新系统选型与100%高可用部署，系统可用性提升至99.9%',
        en: 'Completed system selection and 100% HA deployment, achieving 99.9% availability.',
      },
      {
        zh: '通过自动化集成实现账号信息全生命周期管理，节省约80%的人工运维工作量',
        en: 'Automated account lifecycle management, saving ~80% manual operations.',
      },
      {
        zh: '建立分级管控体系有效降低20%以上的文印耗材浪费，实现成本可视化管理',
        en: 'Established tiered control reducing printing costs by 20%+ with visible cost management.',
      },
      {
        zh: '引入OCR等智能功能并加强文印审计，全面降低数据安全风险',
        en: 'Introduced OCR and enhanced printing audit, significantly reducing data security risks.',
      },
    ],
  },
  {
    name: '安全手机部署实施',
    nameEn: 'Secure Mobile Device Deployment',
    role: '主导人',
    roleEn: 'Lead',
    period: '2024.11 - 2025.01',
    periodEn: 'Nov 2024 - Jan 2025',
    description: [
      {
        zh: '通过部署企业级MDM解决方案，实现对全厂移动设备的集中管控、安全策略实施及合规性审计',
        en: 'Deployed enterprise MDM solution for centralized mobile device management and compliance auditing.',
      },
      {
        zh: '全流程主导与供应商（指掌易）深度技术对接到最终落地实施',
        en: 'Led full lifecycle from technical negotiation with vendor (Zhangzhiyi) to final implementation.',
      },
      {
        zh: '牵头完成内部需求调研与分析，制定分阶段部署上线计划及应急预案',
        en: 'Led requirement analysis and phased deployment planning with emergency protocols.',
      },
      {
        zh: '主导MDM系统部署安装、策略配置与测试验证，包括安全基线、应用黑白名单、网络区域安全访问策略',
        en: 'Led MDM deployment, policy configuration, and testing including security baselines and app whitelisting.',
      },
    ],
    achievements: [
      {
        zh: '项目成功上线并稳定管理超3000台Android终端，实现移动设备100%规范化纳管',
        en: 'Successfully managed 3000+ Android devices with 100% standardized compliance.',
      },
      {
        zh: '设备策略合规率显著提升，安全违规事件半年度环比下降70%',
        en: 'Significantly improved policy compliance, reducing security incidents by 70% half-over-half.',
      },
      {
        zh: '变分散管理为集中管控，大幅提升管理效率，节省大量人工检查与处置成本',
        en: 'Transformed decentralized to centralized management, greatly improving efficiency and reducing costs.',
      },
      {
        zh: '完全满足Fab厂信安规定，消除了因个人设备使用带来的数据泄露风险',
        en: 'Fully met Fab security requirements, eliminating data leak risks from personal devices.',
      },
    ],
  },
]

export const education = {
  school: '南京工程学院',
  schoolEn: 'Nanjing Institute of Technology',
  degree: '本科',
  degreeEn: 'Bachelor\'s Degree',
  major: '通信工程',
  majorEn: 'Communication Engineering',
  period: '2015 - 2019',
  periodEn: '2015 - 2019',
  highlights: [
    { zh: '任职班长四年', en: 'Class Monitor for 4 years' },
    { zh: '任职学生会纪检部干事一年、部长一年', en: 'Student Union Discipline Department member for 1 year, Minister for 1 year' },
  ],
}

export const certificates = [
  {
    name: 'PMP项目管理认证',
    nameEn: 'PMP Project Management Professional',
    issuer: 'Project Management Institute (PMI)',
    date: '2021.06',
    dateEn: 'Jun 2021',
    expiry: '2027.06',
    expiryEn: 'Jun 2027',
    number: '3098361 (CITEF)',
    image: '/Personal-Interview/images/pmp.jpg',
    description: {
      zh: '全球公认的项目管理专业认证，证明具备领导和管理项目的能力。',
      en: 'Globally recognized project management certification demonstrating ability to lead and direct projects.',
    },
  },
  {
    name: 'RHCSA红帽认证系统管理员',
    nameEn: 'Red Hat Certified System Administrator',
    issuer: 'Red Hat, Inc.',
    date: '2018.09',
    dateEn: 'Sep 2018',
    expiry: '',
    expiryEn: '',
    number: '180-214-637',
    image: '/Personal-Interview/images/rhcsa.jpg',
    description: {
      zh: '红帽企业Linux系统管理认证，证明具备Linux系统管理核心技能。',
      en: 'Red Hat Enterprise Linux system administration certification proving core Linux administration skills.',
    },
  },
]

export const skills = [
  { name: 'Windows Server', level: 95 },
  { name: 'Active Directory', level: 92 },
  { name: 'ESXi / vSphere', level: 88 },
  { name: 'Linux (RHEL/CentOS)', level: 85 },
  { name: 'Network Management', level: 82 },
  { name: 'ITIL / ITSM', level: 80 },
  { name: 'Project Management', level: 90 },
  { name: 'CRM / OA Systems', level: 85 },
  { name: 'DLP / Security', level: 78 },
  { name: 'VDI / Cloud Desktop', level: 75 },
]

export const socialLinks = [
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: Globe },
  { name: 'GitHub', url: 'https://github.com', icon: Globe },
  { name: 'Resume', url: '/Personal-Interview/images/resume.pdf', icon: FileText },
]

export const contactInfo = {
  emails: [
    { label: 'Gmail', address: 'kris.hi.wang@gmail.com' },
    { label: 'QQ Mail', address: 'kris.hi.wang@qq.com' },
  ],
  phone: '15195963951',
  location: {
    zh: '上海',
    en: 'Shanghai',
  },
  availability: {
    zh: '随时可联系',
    en: 'Available anytime',
  },
}
