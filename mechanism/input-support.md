# TouchController 对文本输入的适配

## 介绍

TouchController 能够在您选中输入框*（注：目前仅限于 TouchController 的 GUI，将在未来支持原版 GUI）*时自动弹出触摸键盘。还能让弹出键盘时输入框移动到键盘顶部，在输入时为输入法提供文本框内容，就像在其他应用程序中那样。

## 机制

### Windows 系统

> [!TIP]
> Windows 系统中仅实现了自动弹出键盘。

在 Windows 系统中，弹出键盘存在诸多条件。首先，Windows 需要能识别到触摸屏。此外，还需要在设置中启用相关功能。以Windows 11 为例，您需要打开设置，找到`时间和语言 -> 输入`，展开`触摸键盘`选项，将`显示触摸键盘`设为**未连接键盘时**或**始终**。此时，找到一个输入框，选中它，触摸键盘应该能自动弹出。在游戏内，触摸键盘也会以同样的方式弹出。

### Linux 系统

TouchController 在 Wayland 下实现了 [text_input_v3](https://wayland.app/protocols/text-input-unstable-v3) 协议，在输入法获得焦点时会由合成器决定是否弹出键盘。

### Android 系统

> [!IMPORTANT]
> Android 系统中的相关功能需要启动器的支持
