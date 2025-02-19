import { defineConfig } from "vitepress";

export default defineConfig({
    lang: "zh-Hans",
    title: "TouchControllerWiki",
    description: "TouchController 的官方 Wiki",
    themeConfig: {
        nav: [
            { text: "首页", link: "/" },
        ],

        sidebar: [
            {
                text: "设置",
                items: [
                    { text: "进入", link: "/设置/进入" },
                ]
            },
            {
                text: "游玩须知",
                items: [
                    { text: "开始", link: "/游玩须知/开始" },
                ]
            }
        ],

        socialLinks: [
            { icon: "github", link: "https://github.com/TouchController/TouchControllerWiki" }
        ],

        docFooter: {
            prev: "上一页",
            next: "下一页",
        },

        outline: {
            label: "页面导航",
        },
        
        returnToTopLabel: "回到顶部",
        sidebarMenuLabel: "菜单",
        darkModeSwitchLabel: "主题",
        lightModeSwitchTitle: "切换到浅色模式",
        darkModeSwitchTitle: "切换到深色模式",
        skipToContentLabel: "跳转到内容",
    }
});
