// config.js - Central configuration for Space
const SPACE_CONFIG = {
    // ===== META & HEAD CONFIG =====
    meta: {
        title: "Kouzen Ryzishin - Space",
        description: "Space - Developer",
        author: "Kouzen Ryzishin",
        
        // Favicon
        favicon: {
            url: "https://i.imgur.com/IBslu0o.jpeg",
            type: "image/jpeg"
        },
        
        // Open Graph
        og: {
            title: "Kouzen Ryzishin - Portfolio",
            description: "Portfolio - Developer & Designer",
            image: "https://i.imgur.com/IBslu0o.jpeg",
            type: "website",
            url: "https://koudex.github.io/myspace" // Replace with actual URL
        },
        
        // Twitter Card
        twitter: {
            card: "summary_large_image",
            title: "Kouzen Ryzishin - Portfolio",
            description: "Space - Developer",
            image: "https://i.imgur.com/IBslu0o.jpeg"
        }
    },
    
    // ===== PROFILE CONFIG =====
    profile: {
        name: "Kouzen Ryzishin",
        showVerifiedBadge: true,
        subtitle: "ABOUT ME",
        betaLabel: "",
        
        // Profile Image
        image: {
            url: "https://i.imgur.com/IBslu0o.jpeg",
            alt: "Profile Picture",
            width: 115,
            height: 115
        },
        
        // Typing Quotes (Typewriter Effect)
        quotes: [
            "Hello, I'm Kouzen Ryzishin",
            "Welcome to my personal space",
            "Get to know me better",
            "Never beg for someone to stay, cuz to beg is water",
            "Walang kwentang tao sa buong kalawakan"
        ],
        
        // Typing speed settings (in milliseconds)
        typing: {
            typeSpeed: 80,
            deleteSpeed: 40,
            pauseDuration: 2500
        }
    },
    
    // ===== STATS CONFIG =====
    stats: [
        { value: "2009", label: "Born" },
        { value: "Gaming", label: "Hobby" },
        { value: "Philippines", label: "Location" },
        /*
        { value: "Night Owl", label: "Chronotype" },
        { value: "INFJ", label: "MBTI Type" },
        { value: "Perfectionist", label: "Tendency" },
        { value: "Ikigai", label: "Life Purpose" },
        { value: "Introverted", label: "Social Battery" },
        { value: "Professional Procrastinator", label: "Skill" },
        */
    ],
    
    // ===== TIME & BATTERY CONFIG =====
    time: {
        timezone: "GMT+8",
        timezoneLabel: "PHT (GMT+8)",
        timezoneCode: "Asia/Manila"
    },
    
    // ===== SOCIAL MEDIA CONFIG =====
    social: [
        {
            name: "GitHub",
            url: "https://github.com/koudex",
            icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>`,
            enabled: true
        },
        {
            name: "Facebook",
            url: "https://www.facebook.com/rhyzh.z",
            icon: `<svg width="24px" height="24px" viewBox="0 0 24 24" fill="currentColor" role="img" xmlns="http://www.w3.org/2000/svg"><title>Facebook icon</title><path d="M23.9981 11.9991C23.9981 5.37216 18.626 0 11.9991 0C5.37216 0 0 5.37216 0 11.9991C0 17.9882 4.38789 22.9522 10.1242 23.8524V15.4676H7.07758V11.9991H10.1242V9.35553C10.1242 6.34826 11.9156 4.68714 14.6564 4.68714C15.9692 4.68714 17.3424 4.92149 17.3424 4.92149V7.87439H15.8294C14.3388 7.87439 13.8739 8.79933 13.8739 9.74824V11.9991H17.2018L16.6698 15.4676H13.8739V23.8524C19.6103 22.9522 23.9981 17.9882 23.9981 11.9991Z"/></svg>`,
            enabled: true
        },
        {
            name: "Tiktok",
            url: "https://tiktok.com/@ryzishin",
            icon: `<svg width="512px" height="512px" viewBox="0 0 512 512" fill="currentColor" id="icons" xmlns="http://www.w3.org/2000/svg"><path d="M412.19,118.66a109.27,109.27,0,0,1-9.45-5.5,132.87,132.87,0,0,1-24.27-20.62c-18.1-20.71-24.86-41.72-27.35-56.43h.1C349.14,23.9,350,16,350.13,16H267.69V334.78c0,4.28,0,8.51-.18,12.69,0,.52-.05,1-.08,1.56,0,.23,0,.47-.05.71,0,.06,0,.12,0,.18a70,70,0,0,1-35.22,55.56,68.8,68.8,0,0,1-34.11,9c-38.41,0-69.54-31.32-69.54-70s31.13-70,69.54-70a68.9,68.9,0,0,1,21.41,3.39l.1-83.94a153.14,153.14,0,0,0-118,34.52,161.79,161.79,0,0,0-35.3,43.53c-3.48,6-16.61,30.11-18.2,69.24-1,22.21,5.67,45.22,8.85,54.73v.2c2,5.6,9.75,24.71,22.38,40.82A167.53,167.53,0,0,0,115,470.66v-.2l.2.2C155.11,497.78,199.36,496,199.36,496c7.66-.31,33.32,0,62.46-13.81,32.32-15.31,50.72-38.12,50.72-38.12a158.46,158.46,0,0,0,27.64-45.93c7.46-19.61,9.95-43.13,9.95-52.53V176.49c1,.6,14.32,9.41,14.32,9.41s19.19,12.3,49.13,20.31c21.48,5.7,50.42,6.9,50.42,6.9V131.27C453.86,132.37,433.27,129.17,412.19,118.66Z"/></svg>`,
            enabled: true
        }
    ],
    
    // ===== BACKGROUND MUSIC CONFIG =====
    music: {
        enabled: true,
        autoplay: false,
        volume: 0.5,
        tracks: [
            {
                url: "https://files.catbox.moe/ohqbir.mp3",
                type: "audio/mpeg",
                title: "I Wanna Be Yours"
            }
        ]
    },
    
    // ===== MENU ITEMS CONFIG =====
    menu: [
        {
            title: "Background Music",
            description: "Toggle background music",
            action: "toggleMusic",
            enabled: true
        },
        {
            title: "Visit GitHub",
            description: "Check out my projects",
            url: "https://github.com/koudex",
            icon: "",
            enabled: true
        },
        {
            title: "Send Email",
            description: "Get in touch",
            url: "mailto:koudexz@gmail.com",
            icon: "",
            enabled: true
        }
    ],
    
    // ===== FOOTER CONFIG =====
    footer: {
        text: `© ${new Date().getFullYear()} | Kouzen Ryzishin | All Rights Reserved`,
        showCopyright: true,
        showYear: true,
        gradientAnimation: true
    },
    
    // ===== THEME SYSTEM CONFIG =====
    theme: {
        // Theme options: "light", "dark", "hacker", "sunset", "ocean", "forest", "cyberpunk"
        activeTheme: "dark", // Default theme
        accentColor: "#ff1744",
        enableTransitions: true,
        
        // Theme-specific configurations
        themes: {
            light: {
                name: "Light",
                icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 9c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3zM12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"/></svg>`,
                background: "#ffffff",
                textPrimary: "#2c3e50",
                textSecondary: "#95a5a6",
                accent: "#ff1744",
                accentGlow: "rgba(255, 23, 68, 0.3)",
                border: "rgba(0, 0, 0, 0.08)",
                menuHover: "rgba(255, 23, 68, 0.04)",
                statsBg: "transparent"
            },
            dark: {
                name: "Dark",
                icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M9.37 5.51c-.18.64-.27 1.31-.27 1.99 0 4.08 3.32 7.4 7.4 7.4.68 0 1.35-.09 1.99-.27C17.45 17.19 14.93 19 12 19c-3.86 0-7-3.14-7-7 0-2.93 1.81-5.45 4.37-6.49zM12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z"/></svg>`,
                background: "#0f0f0f",
                textPrimary: "#ffffff",
                textSecondary: "#808080",
                accent: "#ff1744",
                accentGlow: "rgba(255, 23, 68, 0.4)",
                border: "rgba(255, 255, 255, 0.1)",
                menuHover: "rgba(255, 23, 68, 0.08)",
                statsBg: "rgba(255, 255, 255, 0.03)"
            },
            hacker: {
                name: "Hacker",
                icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3L4.5 20.25 12 16.5l7.5 3.75L12 3z"/></svg>`,
                background: "#0a0a0a",
                textPrimary: "#00ff41",
                textSecondary: "#008f11",
                accent: "#00ff41",
                accentGlow: "rgba(0, 255, 65, 0.3)",
                border: "rgba(0, 255, 65, 0.2)",
                menuHover: "rgba(0, 255, 65, 0.05)",
                statsBg: "rgba(0, 255, 65, 0.02)",
                fontFamily: "'Courier New', monospace"
            },
            sunset: {
                name: "Sunset",
                icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 15.31l2.6-2.6c.39-.39.39-1.02 0-1.41L20 8.69V5c0-.55-.45-1-1-1h-3.69l-2.6-2.6a.9959.9959 0 0 0-1.41 0L8.69 4H5c-.55 0-1 .45-1 1v3.69l-2.6 2.6c-.39.39-.39 1.02 0 1.41L4 15.3V19c0 .55.45 1 1 1h3.69l2.6 2.6c.39.39 1.02.39 1.41 0l2.6-2.6H19c.55 0 1-.45 1-1v-3.69zm-8 1.59V7.1c0-.61.55-1.11 1.15-.99C15.91 6.65 18 9.08 18 12s-2.09 5.35-4.85 5.89c-.6.12-1.15-.38-1.15-.99z"/></svg>`,
                background: "#1a1a2e",
                textPrimary: "#ff9a76",
                textSecondary: "#ffb8a2",
                accent: "#ff6b6b",
                accentGlow: "rgba(255, 107, 107, 0.3)",
                border: "rgba(255, 154, 118, 0.15)",
                menuHover: "rgba(255, 107, 107, 0.08)",
                statsBg: "rgba(255, 154, 118, 0.03)"
            },
            ocean: {
                name: "Ocean",
                icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tsunami" viewBox="0 0 16 16">
  <path d="M.036 12.314a.5.5 0 0 1 .65-.278l1.757.703a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.757-.703a.5.5 0 1 1 .372.928l-1.758.703a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.757-.703a.5.5 0 0 1-.278-.65m0 2a.5.5 0 0 1 .65-.278l1.757.703a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.757-.703a.5.5 0 1 1 .372.928l-1.758.703a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.757-.703a.5.5 0 0 1-.278-.65M2.662 8.08c-.456 1.063-.994 2.098-1.842 2.804a.5.5 0 0 1-.64-.768c.652-.544 1.114-1.384 1.564-2.43.14-.328.281-.68.427-1.044.302-.754.624-1.559 1.01-2.308C3.763 3.2 4.528 2.105 5.7 1.299 6.877.49 8.418 0 10.5 0c1.463 0 2.511.4 3.179 1.058.67.66.893 1.518.819 2.302-.074.771-.441 1.516-1.02 1.965a1.88 1.88 0 0 1-1.904.27c-.65.642-.907 1.679-.71 2.614C11.076 9.215 11.784 10 13 10h2.5a.5.5 0 0 1 0 1H13c-1.784 0-2.826-1.215-3.114-2.585-.232-1.1.005-2.373.758-3.284L10.5 5.06l-.777.388a.5.5 0 0 1-.447 0l-1-.5a.5.5 0 0 1 .447-.894l.777.388.776-.388a.5.5 0 0 1 .447 0l1 .5.034.018c.44.264.81.195 1.108-.036.328-.255.586-.729.637-1.27.05-.529-.1-1.076-.525-1.495s-1.19-.77-2.477-.77c-1.918 0-3.252.448-4.232 1.123C5.283 2.8 4.61 3.738 4.07 4.79c-.365.71-.655 1.433-.945 2.16-.15.376-.301.753-.463 1.13"/>
</svg>`,
                background: "#0d1b2a",
                textPrimary: "#e0fbfc",
                textSecondary: "#8ecae6",
                accent: "#3a86ff",
                accentGlow: "rgba(58, 134, 255, 0.3)",
                border: "rgba(224, 251, 252, 0.1)",
                menuHover: "rgba(58, 134, 255, 0.08)",
                statsBg: "rgba(142, 202, 230, 0.03)"
            },
            forest: {
                name: "Forest",
                icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tree" viewBox="0 0 16 16">
  <path d="M8.416.223a.5.5 0 0 0-.832 0l-3 4.5A.5.5 0 0 0 5 5.5h.098L3.076 8.735A.5.5 0 0 0 3.5 9.5h.191l-1.638 3.276a.5.5 0 0 0 .447.724H7V16h2v-2.5h4.5a.5.5 0 0 0 .447-.724L12.31 9.5h.191a.5.5 0 0 0 .424-.765L10.902 5.5H11a.5.5 0 0 0 .416-.777zM6.437 4.758A.5.5 0 0 0 6 4.5h-.066L8 1.401 10.066 4.5H10a.5.5 0 0 0-.424.765L11.598 8.5H11.5a.5.5 0 0 0-.447.724L12.69 12.5H3.309l1.638-3.276A.5.5 0 0 0 4.5 8.5h-.098l2.022-3.235a.5.5 0 0 0 .013-.507"/>
</svg>`,
                background: "#1a1f16",
                textPrimary: "#a7d129",
                textSecondary: "#7da453",
                accent: "#6a994e",
                accentGlow: "rgba(106, 153, 78, 0.3)",
                border: "rgba(167, 209, 41, 0.15)",
                menuHover: "rgba(106, 153, 78, 0.08)",
                statsBg: "rgba(125, 164, 83, 0.03)"
            },
            cyberpunk: {
                name: "Cyberpunk",
                icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cpu" viewBox="0 0 16 16">
  <path d="M5 0a.5.5 0 0 1 .5.5V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2A2.5 2.5 0 0 1 14 4.5h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14a2.5 2.5 0 0 1-2.5 2.5v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14A2.5 2.5 0 0 1 2 11.5H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2A2.5 2.5 0 0 1 4.5 2V.5A.5.5 0 0 1 5 0m-.5 3A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 11.5 3zM5 6.5A1.5 1.5 0 0 1 6.5 5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5zM6.5 6a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5z"/>
</svg>`,
                background: "#0a0e14",
                textPrimary: "#ff2a6d",
                textSecondary: "#d1f7ff",
                accent: "#05d9e8",
                accentGlow: "rgba(5, 217, 232, 0.3)",
                border: "rgba(255, 42, 109, 0.2)",
                menuHover: "rgba(5, 217, 232, 0.08)",
                statsBg: "rgba(255, 42, 109, 0.03)",
                fontFamily: "'Orbitron', sans-serif"
            },
            retro: {
    name: "Retro",
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 10H3V8h18v8zM6 15h2v-2h2v-2H8V9H6v2H4v2h2z"/><circle cx="14.5" cy="12.5" r="1.5"/><circle cx="18.5" cy="12.5" r="1.5"/></svg>`,
    background: "#2d3047",
    textPrimary: "#ffd166",
    textSecondary: "#ff9b54",
    accent: "#ef476f",
    accentGlow: "rgba(239, 71, 111, 0.4)",
    border: "rgba(255, 209, 102, 0.2)",
    menuHover: "rgba(239, 71, 111, 0.1)",
    statsBg: "rgba(255, 209, 102, 0.05)",
    fontFamily: "'Press Start 2P'"
}
        }
    },
    
    // ===== ANIMATION CONFIG =====
    animations: {
        enableAll: true,
        profileImageFloat: true,
        socialIconsBreathe: true,
        statsPopIn: true,
        batteryPulse: true,
        typingEffect: true,
        themeSwitchEffect: true
    },
    
    // ===== ADVANCED CONFIG =====
    advanced: {
        enableServiceWorker: false,
        enableAnalytics: false,
        analyticsId: "",
        enableConsoleLog: false
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SPACE_CONFIG;
}
