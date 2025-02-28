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
                text: "玩家手册",
                collapsed: false,
                items: [
                    { text: "游玩须知", link: "/玩家手册/游玩须知" },
                    { text: "常见问题", link: "/玩家手册/常见问题" },
                    { text: "报告 bug", link: "/玩家手册/报告BUG" },
                ]
            },
            {
                text: "机制",
                collapsed: false,
                items: [
                    { text: "锚点机制", link: "/机制/锚点机制" },
                ]
            },
            {
                text: "特性",
                collapsed: false,
                items: [
                    { text: "触控圈", link: "/特性/触控圈" },
                    { text: "自定义布局", link: "/特性/自定义布局" },
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
                            { text: "界面框架", link: "/GUI/设置界面/界面框架" },
                            {
                                text: "标签页",
                                collapsed: false,
                                items: [
                                    { text: "关于", link: "/GUI/设置界面/标签页/关于" },
                                    {
                                        text: "通用",
                                        collapsed: true,
                                        items: [
                                            { text: "常规", link: "/GUI/设置界面/标签页/通用/常规" },
                                            { text: "控制", link: "/GUI/设置界面/标签页/通用/控制" },
                                            { text: "触控圈", link: "/GUI/设置界面/标签页/通用/触控圈" },
                                            { text: "调试", link: "/GUI/设置界面/标签页/通用/调试" },
                                        ]
                                    },
                                    {
                                        text: "物品",
                                        collapsed: true,
                                        items: [
                                            { text: "可长按使用的物品", link: "/GUI/设置界面/标签页/物品/可长按使用的物品" },
                                            { text: "手持时显示准星的物品", link: "/GUI/设置界面/标签页/物品/手持时显示准星的物品" },
                                            { text: "需要修正使用方向的物品", link: "/GUI/设置界面/标签页/物品/需要修正使用方向的物品" },
                                        ]
                                    },
                                ]
                            },
                            {
                                text: "子页面",
                                collapsed: false,
                                items: [
                                    {
                                        text: "布局",
                                        collapsed: true,
                                        items: [
                                            { text: "管理控件预设", link: "/GUI/设置界面/子页面/布局/管理控件预设" },
                                            { text: "自定义控件布局", link: "/GUI/设置界面/子页面/布局/自定义控件布局" },
                                            { text: "GUI 控件布局", link: "/GUI/设置界面/子页面/布局/GUI控件布局" },
                                        ]
                                    },
                                    { text: "物品列表", link: "/GUI/设置界面/子页面/物品列表" },
                                    { text: "组件列表", link: "/GUI/设置界面/子页面/组件列表" },
                                ]
                            },
                        ]
                    },
                ]
            },
            {
                text: "控件",
                collapsed: false,
                items: [
                    { text: "控件样式", link: "/控件/控件样式" },
                    { text: "游戏内控件", link: "/控件/游戏内控件" },
                    { text: "GUI 控件", link: "/控件/GUI控件" },
                ]
            },
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
