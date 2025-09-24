# VueUse

## State

- `createGlobalState` 将状态保留在全局范围内，小号 Pinia
- `createInjectionState` 创建可注入到组件中的全局状态
- `createSharedComposable` 创建一个可在多个 Vue 实例中使用的组合式函数

- `injectLocal` 扩展了 inject 的功能，使其能够调用 provideLocal 在同一组件中提供值
- `provideLocal` 扩展 provide 功能，可调用 injectLocal 获取同一组件中的值

- `useAsyncState` 响应式异步状态。不会阻塞你的设置函数，并在 Promise 准备好后触发变化。状态默认为 shallowRef

- `useLastChanged` 记录 ref 最后更改的时间戳
- `useRefHistory` 追踪 ref 的变化历史，同时提供撤销和重做功能
- `useDebouncedRefHistory` useRefHistory 的简写，带防抖过滤
- `useThrottledRefHistory` useRefHistory 的节流过滤简写
- `useManualRefHistory` 在使用时手动跟踪 ref 的变化历史，同时提供撤销和重做功能

- `useStorage` 创建一个可用来访问和修改 LocalStorage 或 SessionStorage 的响应式 ref
- `useLocalStorage` 响应式 LocalStorage
- `useSessionStorage` 响应式 SessionStorage
- `useStorageAsync` 支持异步的响应式 Storage

## Elements

- `useElementBounding` 获取元素宽高位置信息
- `useElementSize` 获取元素大小，ResizeObserver
- `useElementVisibility` 追踪元素在视口内的可见性
- `useIntersectionObserver` 检测目标元素的可见性
- `useMouseInElement` 与元素相关的鼠标位置
- `useParentElement` 获取元素的父级
- `useMutationObserver` 监视 DOM 树的变化
- `useResizeObserver` 监听元素大小变化
- `useActiveElement` 获取当前 active 激活的元素，响应式 document.activeElement

- `useDraggable` 使元素可拖动
- `useDropZone` 创建一个可以放置文件的区域（将文件从电脑拖放到放置区域）

- `useDocumentVisibility` 获取当前页面的可见状态，最小化页面或切换标签页，响应式追踪 document.visibilityState
- `useWindowFocus` 监听当前页面聚焦状态
- `useWindowScroll` 监听窗口滚动
- `useWindowSize` 监听窗口大小

## Browser

- `useEventListener` 轻松使用 EventListener。在 mounted 时使用 addEventListener 进行注册，并在 unmounted 时自动移除
- `useImage` 响应式加载图片，可以等待结果再显示或者显示一个备用方案
- `useFileDialog` 打开文件对话框，选择文件
- `useFileSystemAccess` 创建、读取和写入本地文件，`系统 API FileSystemAccess`
- `useClipboard` 剪贴板，可以异步地从系统剪贴板读取和写，`系统 API Clipboard`
- `useClipboardItems` useClipboard 是一个纯文本函数，而 useClipboardItems 是基于 ClipboardItem 的函数。可以使用 useClipboardItems 来复制任何 ClipboardItem 支持的内容
- `useMediaControls` 控制和获取媒体数据
- `useObjectUrl` 通过 URL.createObjectURL() 为提供的 File、Blob 或 MediaSource 创建 URL
- `useBrowserLocation` 解析并监听当前 URL，如果使用了 VueRouter 使用 useRoute
- `useScriptTag` 创建一个脚本标签，支持在卸载时自动卸载该脚本标签
- `useTextDirection` 文字方向，ltr rtl
- `useUrlSearchParams` 响应式 URLSearchParams
- `useTextareaAutosize` 根据内容自动更新文本区域的高度
- `useFullscreen` 为特定元素提供全屏显示的方法，`系统 API Fullscreen`
- `useTitle` 设置页面标题
- `useFavicon` 更改 favicon
- `usePreferredLanguages` 获取用户首选语言，`系统 API Navigator.languages`
- `usePermission` 获取当前浏览器权限，`系统 API Permissions`
- `useScreenOrientation` 获取屏幕方向，`系统 API Screen Orientation`

- `useStyleTag` 在头部注入响应式 style 元素
- `useCssVar` 操作 CSS 变量
- `useBreakpoints` 这个指 viewport breakpoints（可自定义 sm md lg xl 等）
- `useColorMode` 更改颜色主题
- `useDark` 主题更改为暗夜模式
- `usePreferredDark` 当前系统主题是否是暗夜
- `usePreferredColorScheme` 获取系统主题颜色，`系统 API prefers-color-scheme`
- `useEyeDropper` 拾色器工具，`系统 API EyeDropper`
- `useMediaQuery` 媒体查询，获取当前屏幕大小等
- `useMemory` 获取当前页面内存信息，`系统 API Performance.memory`
- `usePerformanceObserver` 观察性能指标，`系统 API PerformanceObserver`
- `usePreferredContrast` 检测用户是否要求以更低或更高的对比度来呈现 Web 内容
- `usePreferredReducedMotion` 检测用户的系统是否被开启了动画减弱功能，`系统 API prefers-reduced-motion`
- `usePreferredReducedTransparency` 检测用户是否在其设备上启用了减少设备上使用的透明或半透明层效果的设置，`prefers-reduced-transparency`
- `usePreferredContrast` 获取对比度，`系统 API prefers-contrast`
- `useScreenSafeArea` 获取屏幕能完全展示的区域（针对一些异形屏）
- `useSSRWidth` 置一个全局视口宽度，当渲染依赖视口宽度的 SSR 组件（如 useMediaQuery 或 useBreakpoints ）时将使用该宽度
- `useShare` 分享，`系统 API Navigator.share()`
- `useWakeLock` 屏幕唤醒锁，可保持屏幕唤醒，`系统 API Screen Wake Lock`
- `useWebNotification` 桌面通知，`系统 API Notification`
- `useWebWorker` 简单的 Web Workers 注册和通信，在后台线程中运行脚本，`系统 API Web Workers`
- `useWebWorkerFn` alewin/useWorker 的一个接口
- `useBroadcastChannel` 同源的不同浏览器窗口、标签页、frame 或者 iframe 下的不同文档之间相互通信，`系统 API BroadcastChannel`

- `useBluetooth` 提供连接和与蓝牙低功耗外设交互的能力，`系统 API Web Bluetooth`
- `useGamepad` 游戏手柄，`系统 API Gamepad`
- `useVibrate` 振动硬件，`系统 API Vibration`

## Sensors

- `onClickOutside` 监听元素外部的点击
- `onLongPress` 监听元素上的长按事件
- `onStartTyping` 监听输入，在不可编辑的元素上开始输入时触发
- `onKeyStroke` 监听键盘按键事件
- `useElementHover` 获取元素 hover 状态
- `useFocus` 获取或设置 focus 状态
- `useFocusWithin` 跟踪一个元素或其子元素是否获得焦点，它旨在匹配 `:focus-within` CSS 伪类的行为
- `useKeyModifier` 获取修饰键的状态，例如 shift 是否按住
- `useMagicKeys` 获取所有按键状态
- `useMouse` 鼠标指针位置
- `useMousePressed` 鼠标按下状态
- `usePageLeave` 鼠标是否离开页面
- `usePointer` 获取指针状态，`系统 API Pointer events`
- `usePointerLock` 指针锁定（隐藏指针？）
- `useScroll` 响应式滚动位置和状态
- `useScrollLock` 锁定元素滚动
- `onElementRemoval` 监听元素被移除
- `usePointerSwipe` 基于 PointerEvents 的滑动检测
- `useSwipe` 基于 TouchEvents 的响应式滑动检测
- `useElementByPoint` 获取某个坐标指向的元素

- `useInfiniteScroll` 无限滚动（虚拟滚动条）
- `useNavigatorLanguage` navigator.language
- `useTextSelection` 基于 Window.getSelection 追踪用户文本选择（获取选中的文本）
- `useDevicePixelRatio` 获取设备像素比，`window.devicePixelRatio`
- `useIdle` 追踪用户是否处于非活动状态（当前页面）

- `useNetwork` 网络状态，`系统 API Network Information`
- `useOnline` 在线状态，useNetwork 的包装器
- `useFps` 获取当前帧数
- `useGeolocation` 获取位置信息，`系统 API Geolocation`
- `useDeviceMotion` 获取设备位置和方向变化速度信息，`DeviceMotionEvent`
- `useDeviceOrientation` 获取设备的物理方向的信息，`DeviceOrientationEvent`
- `useBattery` 获取电池信息充放电状态等，`系统 API Battery Status`
- `useDevicesList` 获取可用的输入/输出设备，相机麦克风扬声器等，`MediaDevices enumerateDevices()`
- `useDisplayMedia` 录屏，可以用于共享屏幕，`mediaDevices.getDisplayMedia`
- `useUserMedia` 用户摄像头媒体的流式传输（可用于视频会议或直播？），`系统 API mediaDevices.getUserMedia`
- `useParallax` 创建视差效果，它使用 useDeviceOrientation
- `useSpeechRecognition` 语音识别，`系统 API SpeechRecognition`
- `useSpeechSynthesis` 语音合成，`系统 API SpeechSynthesis`

## Network

- `useEventSource` EventSource 与 HTTP 服务器建立持久连接，`系统 API EventSource`
- `useFetch` Fetch
- `useWebSocket` WebSocket

## Animation

- `useInterval` 计数器，提供 counter, reset, pause, resume
- `useIntervalFn` 带有控制功能的 setInterval 包装器
- `useTimeout` 在一定时间后更新值，并带有控制功能
- `useTimeoutFn` 带有控制选项的 setTimeout 函数的封装
- `useNow` 响应式当前日期
- `useTimestamp` 响应式的当前时间戳
- `useRafFn` 在每次 requestAnimationFrame 上调用函数。具有暂停和恢复控制
- `useAnimate` 动画 `系统 API Web Animations`
- `useTransition` 值之间的过渡效果

## Component

- `useVirtualList` 虚拟列表
- `computedInject` 结合 computed 和 inject 使用
- `createReusableTemplate` 在组件作用域内定义和重用模板
- `createTemplatePromise` 将模板作为 Promise。适用于构建自定义对话框、模态框、提示框等
- `templateRef` 将 ref 绑定到模板元素的简写方式
- `unrefElement` 从 ref 或 Vue 组件实例中检索基础 DOM 元素
- `useCurrentElement` 将当前组件的 DOM 元素作为 ref 返回
- `useTemplateRefsList` 将 refs 绑定到 v-for 内的模板元素和组件的快捷方式
- `useMounted` 获取组件是否已挂载
- `useVModel` v-model 绑定的简写，推荐用 defineModel
- `useVModels` props 的 v-model 绑定的简写方式
- `tryOnBeforeMount` 安全的 onBeforeMount。如果在组件生命周期内，调用 onBeforeMount()，如果不是，直接调用函数
- `tryOnBeforeUnmount` 安全的 onBeforeUnmount。如果在组件生命周期内，调用 onBeforeUnmount()，如果不是，不执行任何操作
- `tryOnMounted` 安全的 onMounted。如果在组件生命周期内，调用 onMounted()，如果不是，直接调用函数
- `tryOnScopeDispose` 安全的 onScopeDispose。如果在效果范围生命周期内，调用 onScopeDispose()，如果不是，不执行任何操作
- `tryOnUnmounted` 安全的 onUnmounted。如果在组件生命周期内，调用 onUnmounted()，如果不是，不执行任何操作

## Watch

- `watchArray` 监视数组的添加和移除
- `watchAtMost` watch 带有触发次数限制
- `watchDebounced` 延迟触发的监听器
- `watchThrottled` 节流式监视
- `watchDeep` 使用 { deep: true } 监听值的简写形式
- `watchIgnorable` 可忽略的 watch
- `watchImmediate` 使用 { immediate: true } 监听值的简写形式
- `watchOnce` 仅触发一次的 watch
- `watchPausable` 可暂停的 watch
- `watchTriggerable` 可手动触发的 watch
- `watchWithFilter` 带有额外 EventFilter 控制的 watch
- `until` 等待变化的一次性 Promise
- `whenever` 简写形式，监听值为真时触发

## Reactivity

- `computedAsync` 用于异步函数的计算属性
- `computedEager` 即时计算的计算属性，没有延迟评估（Vue 3.4+ 可以直接使用 computed）
- `computedWithControl` 显式定义计算属性的依赖关系
- `createRef` 根据 deep 参数返回 deepRef 或 shallowRef
- `extendRef` 向 Ref 添加额外的属性
- `reactify` 将普通函数转换为响应式函数
- `reactifyObject` 将 reactify 应用于对象
- `reactiveComputed` 计算响应式对象。与 computed 返回一个 ref 不同，reactiveComputed 返回一个响应式对象
- `reactiveOmit` 从响应式对象中动态地排除字段
- `reactivePick` 从响应式对象中动态地选择字段
- `refAutoReset` 一个在一段时间后将重置为默认值的 ref
- `refDebounced` 对 ref 的更新进行防抖
- `refDefault` 将默认值应用于 ref
- `refThrottled` 限制 ref 值的变化频率
- `refWithControl` 对 ref 及其响应式进行细粒度控制
- `syncRef` 双向引用同步
- `syncRefs` 将目标引用与源引用保持同步
- `toReactive` 将 ref 转换为响应式对象。也可以创建一个"可交换"的响应式对象
- `toRef` 将值、ref 或 getter 规范化为 ref 或 computed
- `toRefs` 扩展了 toRefs，还接受对象引用的 refs

## Array

- `useArrayDifference` 响应式获取两个数组的差集
- `useArrayEvery` 响应式 Array.every
- `useArrayFilter` 响应式的 Array.filter
- `useArrayFind` 响应式 Array.find
- `useArrayFindIndex` 响应式 Array.findIndex
- `useArrayFindLast` 响应式 Array.findLast
- `useArrayIncludes` 响应式 Array.includes
- `useArrayJoin` 响应式 Array.join
- `useArrayMap` 响应式 Array.map
- `useArrayReduce` 响应式 Array.reduce
- `useArraySome` 响应式 Array.some
- `useArrayUnique` 响应式唯一数组
- `useSorted` 响应式排序数组

## Time

- `useCountdown` useIntervalFn 的包装器，提供倒计时功能
- `useDateFormat` 根据传入的字符串获取格式化日期，灵感来自 dayjs
- `useTimeAgo` 响应式的相对时间。当时间发生变化时，自动更新相对时间字符串

## Utilities

- `get` 用于访问 ref.value 的简写方式
- `set` ref.value = x 的简写
- `isDefined` 用于 Ref 的非空检查类型守卫
- `useCached` 使用自定义比较器缓存一个 ref
- `usePrevious` 保存 ref 的先前值
- `useCloned` 对 ref 进行响应式克隆。默认情况下，它使用 JSON.parse(JSON.stringify()) 进行克隆
- `useToNumber` 将字符串 ref 转换为数字
- `useToString` 将 ref 转换为字符串
- `useBase64` 响应式的 Base64 转换。 支持 plain text
- `useToggle` 一个带有实用功能的布尔切换器
- `makeDestructurable` 使对象和数组具有等价的解构性能。详见这篇博文获取更多详情。

- `createEventHook` 用于创建事件钩子的实用工具
- `createUnrefFn` 创建一个普通函数，接受 ref 和原始值作为参数
- `useAsyncQueue` 依次执行每个异步任务，并将当前任务的结果传递给下一个任务
- `useConfirmDialog` 创建事件钩子以支持模态框和确认对话框链
- `useCounter` 基础计数器，带有工具函数
- `useCycleList` 循环遍历一个项目列表
- `useDebounceFn` 延迟执行函数
- `useEventBus` 一个基本的事件总线
- `useMemoize` 根据参数缓存函数结果并保持其响应性。它也可以用于异步函数，并会重用现有的 Promise 以避免同时获取相同的数据
- `useOffsetPagination` 响应式的偏移分页
- `useStepper` 提供构建多步骤向导界面的辅助工具
- `useSupported` SSR 兼容性检测 isSupported
- `useThrottleFn` 节流执行函数。特别适用于限制事件处理程序在调整大小和滚动等事件上的执行频率
- `useTimeoutPoll` 使用超时来轮询某些内容。在最后一个任务完成后触发回调

