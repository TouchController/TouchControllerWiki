# TouchController 的静默转头机制

## 介绍

这个机制起源于 [#148](https://github.com/TouchController/TouchController/discussions/148) 和 [#153](https://github.com/TouchController/TouchController/discussions/153)，其主要内容是 TouchController 无法在正确的地方进行一些交互，其典型例子便是放水。

众所周知，只要不开启分离控制，那么你点击屏幕的位置便是交互的位置。但是在手持水桶放置时，点击屏幕后水却放置在准星所对准的位置，就像基岩版中的末影珍珠一样。这是因为 Minecraft 的服务端（其实单人游戏也有一个内置服务端）没有使用 TouchController 提供的目标，为什么不使用呢？

我们先讲一下 Minecraft 寻找目标的机制，Minecraft 的默认机制是在客户端处理的，所以 TouchController 可以通过修改客户端直接给服务器提供正确的目标。但是这个默认机制会忽略掉流体，因此这种机制下流体永远不能成为目标，那我们岂不是不能装水、不能放船了？所以 Minecraft 为一些物品启用了一个特殊的机制，这个机制能正确地判定目标，但是这个机制会在客户端和服务端同时判定，这就导致了服务端不再接收来自客户端的目标，而是根据玩家的实际朝向来确认目标。

为了解决这个问题，TouchController 加入了静默转头的机制，并且可以在“[需要修正使用方向的物品](../gui/config-screen/tab/item/items-need-to-fix-use-direction.md)”中配置。通过这个机制，你甚至可以完成一些基岩版中做不到的操作。在基岩版中，使用末影珍珠会向准星方向扔出。但是如果你在 TouchController 中将末影珍珠加入这个物品表，你就可以实现“指哪打哪”的末影珍珠。

## 机制

不使用分离控制，当手持“[需要修正使用方向的物品](../gui/config-screen/tab/item/items-need-to-fix-use-direction.md)”中的物品时，点击屏幕进行交互后 TouchController 会进行转头，使准星对准点击的方向、交互、然后再恢复原位。这一切都在一帧之内完成，这样客户端和服务端都不会渲染转头动作。
