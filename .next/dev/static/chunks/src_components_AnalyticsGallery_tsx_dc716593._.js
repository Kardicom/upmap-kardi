(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/AnalyticsGallery.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AnalyticsGallery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zoom$2d$in$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ZoomIn$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zoom-in.js [app-client] (ecmascript) <export default as ZoomIn>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const analyticsData = [
    {
        id: 1,
        title: 'Два Доктора',
        description: 'Рост переходов в профиль на 15%, маршрутов на 1%, звонков на 32%, переходов на сайт на 23%',
        image: 'https://upmap.ru/images/YaB/2doc.webp',
        metrics: {
            calls: '+32%',
            yandexMaps: '+15%',
            siteClicks: '+23%'
        },
        period: '19.01.2025 — 19.02.2025',
        totalViews: '23 625',
        routes: '152',
        calls: '212',
        siteClicks: '309'
    },
    {
        id: 2,
        title: 'ЦЭЛТ',
        description: 'Рост переходов в профиль на 4%, маршрутов на 30%, звонков на 36%, переходов на сайт на 33%',
        image: 'https://upmap.ru/images/YaB/celt.webp',
        metrics: {
            calls: '+36%',
            yandexMaps: '+4%',
            siteClicks: '+33%'
        },
        period: '19.01.2025 — 19.02.2025',
        totalViews: '123 402',
        routes: '4 073',
        calls: '1 654',
        siteClicks: '5 115'
    },
    {
        id: 3,
        title: 'Деколь Мебель',
        description: 'Переходы в профиль -44%, маршруты +527%, звонки +149%, переходы на сайт +73%',
        image: 'https://upmap.ru/images/YaB/dmebel.webp',
        metrics: {
            calls: '+149%',
            yandexMaps: '+64%',
            siteClicks: '+73%'
        },
        period: '19.11.2024 — 19.02.2025',
        totalViews: '13 240',
        routes: '2 427',
        calls: '2 297',
        siteClicks: '708'
    },
    {
        id: 4,
        title: 'Медика',
        description: 'Переходы в профиль +132%, маршруты +45%, звонки +47%, переходы на сайт +40%',
        image: 'https://upmap.ru/images/YaB/medica.webp',
        metrics: {
            calls: '+47%',
            yandexMaps: '+31%',
            siteClicks: '+40%'
        },
        period: '19.01.2025 — 19.02.2025',
        totalViews: '37 640',
        routes: '433',
        calls: '291',
        siteClicks: '708'
    },
    {
        id: 5,
        title: 'Наша стоматология',
        description: 'Переходы в профиль +4%, маршруты +36%, звонки +14%, переходы на сайт +55%',
        image: 'https://upmap.ru/images/YaB/nashstomatolog.webp',
        metrics: {
            calls: '+14%',
            yandexMaps: '+1%',
            siteClicks: '+55%'
        },
        period: '19.01.2025 — 19.02.2025',
        totalViews: '54 708',
        routes: '713',
        calls: '407',
        siteClicks: '890'
    },
    {
        id: 6,
        title: 'Студия ортодонтии',
        description: 'Переходы в профиль +297%, маршруты +27%, звонки +20%, переходы на сайт +24%',
        image: 'https://upmap.ru/images/YaB/ortodont.webp',
        metrics: {
            calls: '+20%',
            yandexMaps: '+1534%',
            siteClicks: '+24%'
        },
        period: '19.01.2025 — 19.02.2025',
        totalViews: '24 756',
        routes: '386',
        calls: '208',
        siteClicks: '271'
    },
    {
        id: 7,
        title: 'Городской ветеринарный лечебно-диагностический центр №1',
        description: 'Переходы в профиль +3%, маршруты +12%, звонки +19%, переходы на сайт +23%',
        image: 'https://upmap.ru/images/YaB/vet1.webp',
        metrics: {
            calls: '+19%',
            yandexMaps: '+4%',
            siteClicks: '+23%'
        },
        period: '10.01.2025 — 10.02.2025',
        totalViews: '40 591',
        routes: '1 565',
        calls: '2 308',
        siteClicks: '930'
    }
];
function AnalyticsGallery() {
    _s();
    const galleryRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [selectedImage, setSelectedImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [canScrollLeft, setCanScrollLeft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [canScrollRight, setCanScrollRight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const touch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0,
        dx: 0,
        dy: 0,
        active: false
    });
    const scrollGalleryLeft = ()=>{
        if (galleryRef.current) {
            const container = galleryRef.current;
            const containerWidth = container.clientWidth;
            const currentScroll = container.scrollLeft;
            const scrollAmount = Math.min(containerWidth * 0.8, 820);
            const newScrollLeft = Math.max(0, currentScroll - scrollAmount);
            container.scrollTo({
                left: newScrollLeft,
                behavior: 'smooth'
            });
        }
    };
    const scrollGalleryRight = ()=>{
        if (galleryRef.current) {
            const container = galleryRef.current;
            const containerWidth = container.clientWidth;
            const currentScroll = container.scrollLeft;
            const maxScroll = container.scrollWidth - containerWidth;
            const scrollAmount = Math.min(containerWidth * 0.8, 820);
            const newScrollLeft = Math.min(maxScroll, currentScroll + scrollAmount);
            container.scrollTo({
                left: newScrollLeft,
                behavior: 'smooth'
            });
        }
    };
    const updateScrollButtons = ()=>{
        if (galleryRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = galleryRef.current;
            const maxScrollLeft = scrollWidth - clientWidth;
            setCanScrollLeft(scrollLeft > 1);
            setCanScrollRight(scrollLeft < maxScrollLeft - 1);
        }
    };
    function handleTouchStart(e) {
        if (e.touches && e.touches.length === 1) {
            touch.current.x = e.touches[0].clientX;
            touch.current.y = e.touches[0].clientY;
            touch.current.dx = 0;
            touch.current.dy = 0;
            touch.current.active = true;
        }
    }
    function handleTouchMove(e) {
        if (!touch.current.active || !e.touches || e.touches.length !== 1) return;
        const dx = e.touches[0].clientX - touch.current.x;
        const dy = e.touches[0].clientY - touch.current.y;
        touch.current.dx = dx;
        touch.current.dy = dy;
    }
    function handleTouchEnd() {
        if (!touch.current.active) return;
        const { dx, dy } = touch.current;
        const absDx = Math.abs(dx);
        const absDy = Math.abs(dy);
        const minSwipe = 50;
        if (absDx > absDy && absDx > minSwipe) {
            if (dx < 0) {
                nextImage();
            } else {
                prevImage();
            }
        } else if (absDy > absDx && absDy > minSwipe) {
            closeModal();
        }
        touch.current.active = false;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnalyticsGallery.useEffect": ()=>{
            const el = galleryRef.current;
            if (!el) return;
            el.addEventListener('scroll', updateScrollButtons);
            updateScrollButtons();
            const onWheel = {
                "AnalyticsGallery.useEffect.onWheel": (e)=>{
                    if (el && el.scrollWidth > el.clientWidth) {
                        if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
                            e.preventDefault();
                            el.scrollLeft += e.deltaY * 2.5;
                        }
                    }
                }
            }["AnalyticsGallery.useEffect.onWheel"];
            el.addEventListener('wheel', onWheel, {
                passive: false
            });
            return ({
                "AnalyticsGallery.useEffect": ()=>{
                    el.removeEventListener('scroll', updateScrollButtons);
                    el.removeEventListener('wheel', onWheel);
                }
            })["AnalyticsGallery.useEffect"];
        }
    }["AnalyticsGallery.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnalyticsGallery.useEffect": ()=>{
            if (!selectedImage) return;
            window.analyticsModalOpen = true;
            function blockWheelEvents(e) {
                const target = e.target;
                const isInsideModal = target.closest('.modal-overlay, .modal-content');
                if (!isInsideModal) {
                    e.preventDefault();
                    e.stopImmediatePropagation();
                }
            }
            const body = document.body;
            const html = document.documentElement;
            const originalBodyOverflow = body.style.overflow;
            const originalHtmlOverflow = html.style.overflow;
            body.style.overflow = 'hidden';
            html.style.overflow = 'hidden';
            document.addEventListener('wheel', blockWheelEvents, {
                passive: false,
                capture: true
            });
            window.addEventListener('wheel', blockWheelEvents, {
                passive: false,
                capture: true
            });
            return ({
                "AnalyticsGallery.useEffect": ()=>{
                    window.analyticsModalOpen = false;
                    document.removeEventListener('wheel', blockWheelEvents, {
                        capture: true
                    });
                    window.removeEventListener('wheel', blockWheelEvents, {
                        capture: true
                    });
                    body.style.overflow = originalBodyOverflow;
                    html.style.overflow = originalHtmlOverflow;
                }
            })["AnalyticsGallery.useEffect"];
        }
    }["AnalyticsGallery.useEffect"], [
        selectedImage
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnalyticsGallery.useEffect": ()=>{
            const handleKeyDown = {
                "AnalyticsGallery.useEffect.handleKeyDown": (event)=>{
                    if (selectedImage === null) return;
                    switch(event.key){
                        case 'ArrowLeft':
                            event.preventDefault();
                            prevImage();
                            break;
                        case 'ArrowRight':
                            event.preventDefault();
                            nextImage();
                            break;
                        case 'Escape':
                            event.preventDefault();
                            closeModal();
                            break;
                    }
                }
            }["AnalyticsGallery.useEffect.handleKeyDown"];
            if (selectedImage !== null) {
                document.addEventListener('keydown', handleKeyDown);
            }
            return ({
                "AnalyticsGallery.useEffect": ()=>{
                    document.removeEventListener('keydown', handleKeyDown);
                }
            })["AnalyticsGallery.useEffect"];
        }
    }["AnalyticsGallery.useEffect"], [
        selectedImage,
        analyticsData.length
    ]);
    const openModal = (image, index)=>{
        setSelectedImage(image);
        setCurrentIndex(index);
    };
    const closeModal = ()=>{
        setSelectedImage(null);
    };
    const nextImage = ()=>{
        const nextIndex = (currentIndex + 1) % analyticsData.length;
        setCurrentIndex(nextIndex);
        setSelectedImage(analyticsData[nextIndex]);
    };
    const prevImage = ()=>{
        const prevIndex = (currentIndex - 1 + analyticsData.length) % analyticsData.length;
        setCurrentIndex(prevIndex);
        setSelectedImage(analyticsData[prevIndex]);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mb-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-4xl md:text-5xl font-extrabold text-gray-900 mb-3 tracking-tight font-sans",
                                children: "Детальная аналитика наших кейсов"
                            }, void 0, false, {
                                fileName: "[project]/src/components/AnalyticsGallery.tsx",
                                lineNumber: 343,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto font-light font-sans",
                                children: "Реальные скриншоты из Яндекс.Бизнеса наших клиентов с подтвержденными результатами"
                            }, void 0, false, {
                                fileName: "[project]/src/components/AnalyticsGallery.tsx",
                                lineNumber: 346,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/AnalyticsGallery.tsx",
                        lineNumber: 342,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: `absolute left-4 top-1/2 -translate-y-1/2 z-10 shadow-lg hover:shadow-xl p-3 rounded-full transition-all duration-200 border border-gray-200 ${canScrollLeft ? 'bg-white/90 hover:bg-white text-gray-700 hover:text-gray-900' : 'bg-gray-100 text-gray-400 cursor-not-allowed'}`,
                                onClick: scrollGalleryLeft,
                                disabled: !canScrollLeft,
                                "aria-label": "Прокрутить влево",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                    className: "w-6 h-6"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AnalyticsGallery.tsx",
                                    lineNumber: 362,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/AnalyticsGallery.tsx",
                                lineNumber: 352,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "overflow-x-auto scrollbar-hide",
                                style: {
                                    scrollBehavior: 'smooth'
                                },
                                ref: galleryRef,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-6 pb-4",
                                    style: {
                                        width: 'max-content'
                                    },
                                    children: analyticsData.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group relative",
                                            style: {
                                                width: '400px',
                                                flexShrink: 0
                                            },
                                            onClick: ()=>openModal(item, index),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative h-64 bg-gray-100 overflow-hidden",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: item.image,
                                                            alt: item.title,
                                                            className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/AnalyticsGallery.tsx",
                                                            lineNumber: 379,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full p-3",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zoom$2d$in$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ZoomIn$3e$__["ZoomIn"], {
                                                                    className: "w-6 h-6 text-gray-700"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/AnalyticsGallery.tsx",
                                                                    lineNumber: 386,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/AnalyticsGallery.tsx",
                                                                lineNumber: 385,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/AnalyticsGallery.tsx",
                                                            lineNumber: 384,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/AnalyticsGallery.tsx",
                                                    lineNumber: 378,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "text-xl font-semibold text-gray-900 mb-2 line-clamp-2 font-sans",
                                                            children: item.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/AnalyticsGallery.tsx",
                                                            lineNumber: 392,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-gray-700 text-base mb-4 line-clamp-2 font-light font-sans",
                                                            children: item.description
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/AnalyticsGallery.tsx",
                                                            lineNumber: 395,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between text-base font-medium",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-center",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-blue-600 font-bold text-lg",
                                                                            children: item.metrics.calls
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/AnalyticsGallery.tsx",
                                                                            lineNumber: 400,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-gray-500 text-xs",
                                                                            children: 'Нажатий "Позвонить"'
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/AnalyticsGallery.tsx",
                                                                            lineNumber: 401,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/AnalyticsGallery.tsx",
                                                                    lineNumber: 399,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-center",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-green-600 font-bold text-lg",
                                                                            children: item.metrics.yandexMaps
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/AnalyticsGallery.tsx",
                                                                            lineNumber: 404,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-gray-500 text-xs",
                                                                            children: "Яндекс Карты"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/AnalyticsGallery.tsx",
                                                                            lineNumber: 405,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/AnalyticsGallery.tsx",
                                                                    lineNumber: 403,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-center",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-orange-600 font-bold text-lg",
                                                                            children: item.metrics.siteClicks
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/AnalyticsGallery.tsx",
                                                                            lineNumber: 408,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-gray-500 text-xs",
                                                                            children: "Переходы на сайт"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/AnalyticsGallery.tsx",
                                                                            lineNumber: 409,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/AnalyticsGallery.tsx",
                                                                    lineNumber: 407,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/AnalyticsGallery.tsx",
                                                            lineNumber: 398,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/AnalyticsGallery.tsx",
                                                    lineNumber: 391,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, item.id, true, {
                                            fileName: "[project]/src/components/AnalyticsGallery.tsx",
                                            lineNumber: 372,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AnalyticsGallery.tsx",
                                    lineNumber: 370,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/AnalyticsGallery.tsx",
                                lineNumber: 365,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: `absolute right-4 top-1/2 -translate-y-1/2 z-10 shadow-lg hover:shadow-xl p-3 rounded-full transition-all duration-200 border border-gray-200 ${canScrollRight ? 'bg-white/90 hover:bg-white text-gray-700 hover:text-gray-900' : 'bg-gray-100 text-gray-400 cursor-not-allowed'}`,
                                onClick: scrollGalleryRight,
                                disabled: !canScrollRight,
                                "aria-label": "Прокрутить вправо",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                    className: "w-6 h-6"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AnalyticsGallery.tsx",
                                    lineNumber: 428,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/AnalyticsGallery.tsx",
                                lineNumber: 418,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/AnalyticsGallery.tsx",
                        lineNumber: 351,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AnalyticsGallery.tsx",
                lineNumber: 341,
                columnNumber: 7
            }, this),
            selectedImage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 bg-black/90 flex justify-center items-center p-4 overflow-y-auto max-h-screen modal-overlay",
                onClick: closeModal,
                onTouchStart: handleTouchStart,
                onTouchMove: handleTouchMove,
                onTouchEnd: handleTouchEnd,
                onWheel: (e)=>e.stopPropagation(),
                style: {
                    cursor: 'pointer',
                    pointerEvents: 'auto'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative flex flex-col items-center w-full max-w-6xl mx-auto modal-content",
                    onClick: (e)=>e.stopPropagation(),
                    style: {
                        cursor: 'default',
                        pointerEvents: 'auto'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center bg-red-600 rounded-full shadow-lg hover:bg-red-700 transition-colors border-2 border-white focus:outline-none focus:ring-2 focus:ring-red-400",
                            onClick: (e)=>{
                                e.stopPropagation();
                                closeModal();
                            },
                            "aria-label": "Закрыть",
                            style: {
                                boxShadow: '0 2px 8px rgba(0,0,0,0.18)'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "w-7 h-7 text-white"
                            }, void 0, false, {
                                fileName: "[project]/src/components/AnalyticsGallery.tsx",
                                lineNumber: 454,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/AnalyticsGallery.tsx",
                            lineNumber: 448,
                            columnNumber: 13
                        }, this),
                        analyticsData.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10",
                            onClick: (e)=>{
                                e.stopPropagation();
                                prevImage();
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                className: "w-10 h-10"
                            }, void 0, false, {
                                fileName: "[project]/src/components/AnalyticsGallery.tsx",
                                lineNumber: 462,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/AnalyticsGallery.tsx",
                            lineNumber: 458,
                            columnNumber: 15
                        }, this),
                        analyticsData.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10",
                            onClick: (e)=>{
                                e.stopPropagation();
                                nextImage();
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                className: "w-10 h-10"
                            }, void 0, false, {
                                fileName: "[project]/src/components/AnalyticsGallery.tsx",
                                lineNumber: 471,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/AnalyticsGallery.tsx",
                            lineNumber: 467,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: selectedImage.image,
                            alt: selectedImage.title,
                            className: "w-full max-w-6xl max-h-[80vh] object-contain rounded-lg shadow-2xl"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AnalyticsGallery.tsx",
                            lineNumber: 475,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-6 text-center text-white max-w-4xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-3xl font-bold mb-2",
                                    children: selectedImage.title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AnalyticsGallery.tsx",
                                    lineNumber: 481,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-300 mb-2 text-lg",
                                    children: selectedImage.description
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AnalyticsGallery.tsx",
                                    lineNumber: 482,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-400 mb-6 text-sm",
                                    children: [
                                        "Период: ",
                                        selectedImage.period
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AnalyticsGallery.tsx",
                                    lineNumber: 483,
                                    columnNumber: 15
                                }, this),
                                analyticsData.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 text-gray-400 text-sm",
                                    children: [
                                        currentIndex + 1,
                                        " из ",
                                        analyticsData.length
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AnalyticsGallery.tsx",
                                    lineNumber: 485,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/AnalyticsGallery.tsx",
                            lineNumber: 480,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/AnalyticsGallery.tsx",
                    lineNumber: 443,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/AnalyticsGallery.tsx",
                lineNumber: 434,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_s(AnalyticsGallery, "V9qE7ouEjqIRi5gg0Pefu1NECzg=");
_c = AnalyticsGallery;
var _c;
__turbopack_context__.k.register(_c, "AnalyticsGallery");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/AnalyticsGallery.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/AnalyticsGallery.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=src_components_AnalyticsGallery_tsx_dc716593._.js.map