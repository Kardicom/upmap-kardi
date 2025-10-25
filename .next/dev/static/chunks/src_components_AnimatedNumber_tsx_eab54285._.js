(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/AnimatedNumber.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnimatedNumber",
    ()=>AnimatedNumber
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function AnimatedNumber({ value, duration = 1800, suffix = '', postfix = '', className = '' }) {
    _s();
    const isMobile = ("TURBOPACK compile-time value", "object") !== 'undefined' && window.matchMedia('(max-width: 767px)').matches;
    const [display, setDisplay] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(isMobile ? value : 0);
    const [started, setStarted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(isMobile);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnimatedNumber.useEffect": ()=>{
            if (isMobile) return;
            const node = ref.current;
            if (!node) return;
            let observer = null;
            function handleIntersect(entries) {
                if (entries[0].isIntersecting) {
                    setStarted(true);
                    if (observer) observer.disconnect();
                }
            }
            observer = new window.IntersectionObserver(handleIntersect, {
                threshold: 0.4
            });
            observer.observe(node);
            return ({
                "AnimatedNumber.useEffect": ()=>observer && observer.disconnect()
            })["AnimatedNumber.useEffect"];
        }
    }["AnimatedNumber.useEffect"], [
        isMobile
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnimatedNumber.useEffect": ()=>{
            if (isMobile || !started) return;
            let startTime = null;
            function animate(ts) {
                if (!startTime) startTime = ts;
                const progress = Math.min((ts - startTime) / duration, 1);
                const current = Math.floor(progress * value);
                setDisplay(current);
                if (progress < 1) {
                    requestAnimationFrame(animate);
                } else {
                    setDisplay(value);
                }
            }
            requestAnimationFrame(animate);
        }
    }["AnimatedNumber.useEffect"], [
        started,
        value,
        duration,
        isMobile
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        ref: ref,
        className: className,
        children: [
            display,
            suffix,
            postfix && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-2xl align-top font-bold ml-1",
                children: postfix
            }, void 0, false, {
                fileName: "[project]/src/components/AnimatedNumber.tsx",
                lineNumber: 56,
                columnNumber: 19
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/AnimatedNumber.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_s(AnimatedNumber, "bcd6FEHZrOTUx6dUz6l01ZAGLGo=");
_c = AnimatedNumber;
var _c;
__turbopack_context__.k.register(_c, "AnimatedNumber");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_AnimatedNumber_tsx_eab54285._.js.map