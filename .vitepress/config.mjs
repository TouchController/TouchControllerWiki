import { defineConfig } from "vitepress";

export default defineConfig({
    lang: "zh-Hans",
    title: "TouchControllerWiki",
    head: [["link", { rel: "icon", href: "/icon.png" }]],
    description: "TouchController 的官方 Wiki",
    lastUpdated: true,
    themeConfig: {
        search: {
            provider: "local"
        },

        nav: [
            { text: "首页", link: "/" },
        ],

        logo: "/icon.png",

        sidebar: [
            {
                text: "玩家手册",
                collapsed: false,
                items: [
                    { text: "游玩须知", link: "/manual/readme" },
                    { text: "常见问题", link: "/manual/faq" },
                    { text: "报告 bug", link: "/manual/reporting-bugs" },
                ]
            },
            {
                text: "机制",
                collapsed: false,
                items: [
                    { text: "锚点机制", link: "/mechanism/anchor-mechanism" },
                    { text: "静默转头", link: "/mechanism/slient-turning-head" },
                    { text: "输入适配", link: "/mechanism/input-support" },
                    { text: "自定义控件", link: "/mechanism/custom-widget" },
                    {
                        text: "自定义布局",
                        collapsed: true,
                        items: [
                            { text: "预设系统", link: "/mechanism/custom-layout/preset-system" },
                            { text: "图层系统", link: "/mechanism/custom-layout/layer-system" },
                            { text: "切换模式", link: "/mechanism/custom-layout/mode-switch" },
                        ]
                    },
                ]
            },
            {
                text: "特性",
                collapsed: false,
                items: [
                    { text: "触控圈", link: "/feature/touch-ring" },
                    { text: "自定义布局", link: "/feature/custom-layout" },
                ]
            },
            {
                text: "GUI",
                collapsed: false,
                items: [
                    {
                        text: "设置界面",
                        collapsed: true,
                        items: [
                            { text: "界面框架", link: "/gui/config-screen/interface-frame" },
                            {
                                text: "标签页",
                                collapsed: true,
                                items: [
                                    { text: "关于", link: "/gui/config-screen/tab/about" },
                                    {
                                        text: "通用",
                                        collapsed: true,
                                        items: [
                                            { text: "常规", link: "/gui/config-screen/tab/general/general" },
                                            { text: "控制", link: "/gui/config-screen/tab/general/control" },
                                            { text: "触控圈", link: "/gui/config-screen/tab/general/touch-ring" },
                                            { text: "调试", link: "/gui/config-screen/tab/general/debug" },
                                        ]
                                    },
                                    {
                                        text: "物品",
                                        collapsed: true,
                                        items: [
                                            { text: "可长按使用的物品", link: "/gui/config-screen/tab/item/items-usable-by-long-press" },
                                            { text: "手持时显示准星的物品", link: "/gui/config-screen/tab/item/items-show-crosshair-when-holding" },
                                            { text: "需要修正使用方向的物品", link: "/gui/config-screen/tab/item/items-need-to-fix-use-direction" },
                                        ]
                                    },
                                ]
                            },
                            {
                                text: "子页面",
                                collapsed: true,
                                items: [
                                    {
                                        text: "布局",
                                        collapsed: true,
                                        items: [
                                            { text: "管理控件预设", link: "/gui/config-screen/sub-pages/layout/manage-widget-preset" },
                                            { text: "自定义控件布局", link: "/gui/config-screen/sub-pages/layout/custom-widget-layout" },
                                            { text: "GUI 控件布局", link: "/gui/config-screen/sub-pages/layout/gui-widget-layout" },
                                        ]
                                    },
                                    { text: "物品列表", link: "/gui/config-screen/sub-pages/items-list" },
                                    { text: "组件列表", link: "/gui/config-screen/sub-pages/widget-list" },
                                ]
                            },
                        ]
                    },
                    { text: "聊天界面", link: "/gui/chat-screen" },
                ]
            },
            {
                text: "控件",
                collapsed: false,
                items: [
                    { text: "控件样式", link: "/widget/widget-style" },
                    { text: "游戏内控件", link: "/widget/in-game-widget" },
                    { text: "GUI 控件", link: "/widget/gui-widget" },
                ]
            },
        ],

        socialLinks: [
            { icon: "github", link: "https://github.com/TouchController" }
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
        lastUpdated: {
            text: "最后更新于",
        },
        editLink: {
            pattern: "https://github.com/TouchController/TouchControllerWiki/edit/main/:path",
            text: "在 GitHub 上编辑此页面"
        }
    },
});
