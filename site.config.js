const CONFIG = {
  // profile setting (required)
  profile: {
    name: "peony",
    image: "/peony1.png", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "EN > KR Translator",
    bio: "I create happy user experience.",
    email: "translatorhoyeon@gmail.com",
    linkedin: "translatorhoyeon",
    github: "Peony-lab",
    instagram: "",
  },
    projects: [
    {
      name: `Peony`,
      href: "https://sore-artichoke-14e.notion.site/Hoyeon-4d25178b244d49e8b2373ad3c21b8ddb?pvs=4",
    },
  ],
  // blog setting (required)
  blog: {
    title: "peony-log",
    description: "welcome to peony-log!",
    scheme: "light", // 'light' | 'dark' | 'system'
    followSystemTheme: false, // If true, the appearance will be changed according to the system theme on first visit your blog.
  },

  // CONFIG configration (required)
  link: "https://peony-blog.vercel.app",
  since: 2024, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "Peony-lab/peony-blog",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
