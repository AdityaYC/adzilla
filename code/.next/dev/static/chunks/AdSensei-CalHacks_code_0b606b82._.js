(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/AdSensei-CalHacks/code/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AdSensei-CalHacks/code/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AdSensei-CalHacks/code/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/AdSensei-CalHacks/code/components/ui/card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardAction",
    ()=>CardAction,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AdSensei-CalHacks/code/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AdSensei-CalHacks/code/lib/utils.ts [app-client] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/AdSensei-CalHacks/code/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Card;
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/AdSensei-CalHacks/code/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c1 = CardHeader;
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('leading-none font-semibold', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/AdSensei-CalHacks/code/components/ui/card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_c2 = CardTitle;
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground text-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/AdSensei-CalHacks/code/components/ui/card.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_c3 = CardDescription;
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('col-start-2 row-span-2 row-start-1 self-start justify-self-end', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/AdSensei-CalHacks/code/components/ui/card.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_c4 = CardAction;
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('px-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/AdSensei-CalHacks/code/components/ui/card.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
_c5 = CardContent;
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex items-center px-6 [.border-t]:pt-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/AdSensei-CalHacks/code/components/ui/card.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
_c6 = CardFooter;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "CardHeader");
__turbopack_context__.k.register(_c2, "CardTitle");
__turbopack_context__.k.register(_c3, "CardDescription");
__turbopack_context__.k.register(_c4, "CardAction");
__turbopack_context__.k.register(_c5, "CardContent");
__turbopack_context__.k.register(_c6, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/AdSensei-CalHacks/code/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AdSensei-CalHacks/code/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AdSensei-CalHacks/code/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AdSensei-CalHacks/code/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AdSensei-CalHacks/code/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: 'bg-primary text-primary-foreground hover:bg-primary/90',
            destructive: 'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
            outline: 'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
            secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
            ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
            link: 'text-primary underline-offset-4 hover:underline'
        },
        size: {
            default: 'h-9 px-4 py-2 has-[>svg]:px-3',
            sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
            lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
            icon: 'size-9',
            'icon-sm': 'size-8',
            'icon-lg': 'size-10'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/AdSensei-CalHacks/code/components/ui/button.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/AdSensei-CalHacks/code/lib/analysis-store.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addAnalysis",
    ()=>addAnalysis,
    "clearAnalyses",
    ()=>clearAnalyses,
    "generateAnalysis",
    ()=>generateAnalysis,
    "getAnalyses",
    ()=>getAnalyses,
    "saveAnalyses",
    ()=>saveAnalyses
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/AdSensei-CalHacks/code/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const STORAGE_KEY = 'adzilla_analyses';
function getAnalyses() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (!stored) return [];
        const data = JSON.parse(stored);
        return data.analyses || [];
    } catch  {
        return [];
    }
}
function saveAnalyses(analyses) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const store = {
        analyses,
        lastUpdated: Date.now()
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
}
function addAnalysis(analysis) {
    const current = getAnalyses();
    saveAnalyses([
        analysis,
        ...current
    ]);
}
function clearAnalyses() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    localStorage.removeItem(STORAGE_KEY);
}
// Backend API URL
const API_URL = __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';
async function generateAnalysis(file, imageData) {
    try {
        // Call real backend API
        const formData = new FormData();
        formData.append('file', file);
        const response = await fetch(`${API_URL}/upload`, {
            method: 'POST',
            body: formData
        });
        if (!response.ok) {
            throw new Error('Analysis failed');
        }
        const data = await response.json();
        const aiResult = data.result;
        // Map AI response to our interface
        const sentiment = mapSentiment(aiResult.sentiment || aiResult.current_ad_analysis?.predicted_performance?.sentiment);
        const colors = parseColors(aiResult.detected_elements?.colors || aiResult.audio_visual_signals?.color_palette || aiResult.current_ad_analysis?.visual_analysis?.colors || []);
        // Extract recommendations from various possible locations
        const recommendations = aiResult.what_to_improve || aiResult.virality_tips || aiResult.recommendations?.quick_wins?.map((qw)=>qw.action) || [];
        // Extract virality score and ROI potential
        const viralityScore = parseFloat(aiResult.metrics?.virality_rate?.replace('%', '') || aiResult.viral_potential || '50');
        const roiPotential = (aiResult.metrics?.roi_potential || 'medium').toLowerCase();
        const adScore = parseFloat(aiResult.metrics?.ad_score || aiResult.overall_score || '7');
        return {
            id: data.id || Math.random().toString(36).substr(2, 9),
            fileName: file.name,
            fileSize: file.size,
            uploadedAt: Date.now(),
            sentimentScore: calculateSentimentScore(aiResult.sentiment || aiResult.current_ad_analysis?.predicted_performance?.sentiment, aiResult.emotional_impact || aiResult.current_ad_analysis?.predicted_performance?.emotional_impact),
            sentiment,
            predictedCTR: (aiResult.viral_potential || aiResult.current_ad_analysis?.predicted_performance?.virality_potential || 70) / 20,
            engagementScore: aiResult.shareability_score || aiResult.current_ad_analysis?.predicted_performance?.engagement_prediction * 10 || 75,
            dominantColors: colors,
            recommendations,
            imageData,
            viral_ads: aiResult.viral_ads || [],
            full_analysis: aiResult,
            viralityScore,
            roiPotential,
            adScore
        };
    } catch (error) {
        console.error('API call failed, using fallback:', error);
        // Fallback to mock data if API fails
        return generateMockAnalysis(file, imageData);
    }
}
function mapSentiment(sentiment) {
    const s = sentiment?.toLowerCase() || '';
    if (s.includes('positive') || s.includes('very_positive')) return 'Positive';
    if (s.includes('negative') || s.includes('very_negative')) return 'Negative';
    return 'Neutral';
}
function calculateSentimentScore(sentiment, emotionalImpact) {
    if (emotionalImpact) return emotionalImpact / 10 // Convert 0-100 to 0-10
    ;
    const s = sentiment?.toLowerCase() || '';
    if (s.includes('very_positive')) return 9 + Math.random();
    if (s.includes('positive')) return 7 + Math.random() * 2;
    if (s.includes('negative')) return 2 + Math.random() * 3;
    return 5 + Math.random() * 2;
}
function parseColors(colors) {
    const colorEmotions = {
        red: 'Energy, Urgency',
        blue: 'Trust, Calm',
        green: 'Growth, Health',
        yellow: 'Optimism, Warmth',
        orange: 'Energy, Action',
        purple: 'Luxury, Creativity',
        pink: 'Playful, Feminine',
        black: 'Bold, Strong',
        white: 'Clean, Pure',
        gray: 'Professional, Balance'
    };
    return colors.slice(0, 4).map((hex, i)=>{
        const colorName = getColorName(hex);
        return {
            name: colorName,
            percentage: Math.round(40 - i * 10 + Math.random() * 10),
            hex: hex.startsWith('#') ? hex : `#${hex}`,
            emotion: colorEmotions[colorName.toLowerCase()] || 'Neutral'
        };
    });
}
function getColorName(hex) {
    // Simple color name mapping
    const h = hex.toLowerCase().replace('#', '');
    if (h.startsWith('ff') && h.endsWith('00')) return 'Red';
    if (h.startsWith('00') && h.includes('ff')) return 'Blue';
    if (h.includes('ff') && h.includes('00')) return 'Yellow';
    if (h.startsWith('00') && h.endsWith('00')) return 'Green';
    if (h === 'ffffff' || h === 'fff') return 'White';
    if (h === '000000' || h === '000') return 'Black';
    return 'Color';
}
function generateMockAnalysis(file, imageData) {
    const sentimentOptions = [
        'Positive',
        'Positive',
        'Positive',
        'Neutral',
        'Negative'
    ];
    const sentiment = sentimentOptions[Math.floor(Math.random() * sentimentOptions.length)];
    const colorPalettes = [
        [
            {
                name: 'Blue',
                percentage: 35,
                hex: '#4169E1',
                emotion: 'Trust, Calm'
            },
            {
                name: 'White',
                percentage: 30,
                hex: '#FFFFFF',
                emotion: 'Clean, Pure'
            },
            {
                name: 'Orange',
                percentage: 20,
                hex: '#FF8C00',
                emotion: 'Energy, Action'
            },
            {
                name: 'Gray',
                percentage: 15,
                hex: '#808080',
                emotion: 'Professional'
            }
        ]
    ];
    const allRecommendations = [
        'Increase contrast between text and background for better readability',
        'Consider adding a clear call-to-action button with high visibility',
        'The color palette evokes strong emotions - great for brand recall'
    ];
    return {
        id: Math.random().toString(36).substr(2, 9),
        fileName: file.name,
        fileSize: file.size,
        uploadedAt: Date.now(),
        sentimentScore: sentiment === 'Positive' ? 7 + Math.random() * 3 : sentiment === 'Neutral' ? 5 + Math.random() * 2 : 2 + Math.random() * 3,
        sentiment,
        predictedCTR: 2 + Math.random() * 4,
        engagementScore: 60 + Math.random() * 35,
        dominantColors: colorPalettes[0],
        recommendations: allRecommendations,
        imageData
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/AdSensei-CalHacks/code/components/upload-interface.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UploadInterface",
    ()=>UploadInterface
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AdSensei-CalHacks/code/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AdSensei-CalHacks/code/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AdSensei-CalHacks/code/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AdSensei-CalHacks/code/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/AdSensei-CalHacks/code/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileImage$3e$__ = __turbopack_context__.i("[project]/AdSensei-CalHacks/code/node_modules/lucide-react/dist/esm/icons/file-image.js [app-client] (ecmascript) <export default as FileImage>");
var __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/AdSensei-CalHacks/code/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/AdSensei-CalHacks/code/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/AdSensei-CalHacks/code/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/AdSensei-CalHacks/code/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/AdSensei-CalHacks/code/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/AdSensei-CalHacks/code/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/AdSensei-CalHacks/code/node_modules/lucide-react/dist/esm/icons/target.js [app-client] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AdSensei-CalHacks/code/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$lib$2f$analysis$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AdSensei-CalHacks/code/lib/analysis-store.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function UploadInterface() {
    _s();
    const [files, setFiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isDragging, setIsDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isAnalyzing, setIsAnalyzing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [analysisProgress, setAnalysisProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const handleDragOver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "UploadInterface.useCallback[handleDragOver]": (e)=>{
            e.preventDefault();
            setIsDragging(true);
        }
    }["UploadInterface.useCallback[handleDragOver]"], []);
    const handleDragLeave = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "UploadInterface.useCallback[handleDragLeave]": (e)=>{
            e.preventDefault();
            setIsDragging(false);
        }
    }["UploadInterface.useCallback[handleDragLeave]"], []);
    const handleDrop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "UploadInterface.useCallback[handleDrop]": (e)=>{
            e.preventDefault();
            setIsDragging(false);
            const droppedFiles = Array.from(e.dataTransfer.files).filter({
                "UploadInterface.useCallback[handleDrop].droppedFiles": (file)=>file.type.startsWith('image/')
            }["UploadInterface.useCallback[handleDrop].droppedFiles"]);
            setFiles({
                "UploadInterface.useCallback[handleDrop]": (prev)=>[
                        ...prev,
                        ...droppedFiles
                    ]
            }["UploadInterface.useCallback[handleDrop]"]);
        }
    }["UploadInterface.useCallback[handleDrop]"], []);
    const handleFileSelect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "UploadInterface.useCallback[handleFileSelect]": (e)=>{
            if (e.target.files) {
                const selectedFiles = Array.from(e.target.files);
                setFiles({
                    "UploadInterface.useCallback[handleFileSelect]": (prev)=>[
                            ...prev,
                            ...selectedFiles
                        ]
                }["UploadInterface.useCallback[handleFileSelect]"]);
            }
        }
    }["UploadInterface.useCallback[handleFileSelect]"], []);
    const removeFile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "UploadInterface.useCallback[removeFile]": (index)=>{
            setFiles({
                "UploadInterface.useCallback[removeFile]": (prev)=>prev.filter({
                        "UploadInterface.useCallback[removeFile]": (_, i)=>i !== index
                    }["UploadInterface.useCallback[removeFile]"])
            }["UploadInterface.useCallback[removeFile]"]);
        }
    }["UploadInterface.useCallback[removeFile]"], []);
    const handleAnalyze = async ()=>{
        if (files.length === 0) return;
        setIsAnalyzing(true);
        setAnalysisProgress(0);
        const steps = files.length * 4;
        let currentStep = 0;
        for (const file of files){
            // Convert file to base64 for storage
            const reader = new FileReader();
            const imageData = await new Promise((resolve)=>{
                reader.onload = (e)=>resolve(e.target?.result);
                reader.readAsDataURL(file);
            });
            // Simulate analysis steps
            await new Promise((resolve)=>setTimeout(resolve, 300));
            currentStep++;
            setAnalysisProgress(currentStep / steps * 100);
            await new Promise((resolve)=>setTimeout(resolve, 300));
            currentStep++;
            setAnalysisProgress(currentStep / steps * 100);
            await new Promise((resolve)=>setTimeout(resolve, 300));
            currentStep++;
            setAnalysisProgress(currentStep / steps * 100);
            const analysis = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$lib$2f$analysis$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateAnalysis"])(file, imageData);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$lib$2f$analysis$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addAnalysis"])(analysis);
            await new Promise((resolve)=>setTimeout(resolve, 300));
            currentStep++;
            setAnalysisProgress(currentStep / steps * 100);
        }
        router.push('/dashboard');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-4 md:grid-cols-3 mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-popup group rounded-xl border border-primary/20 bg-gradient-to-br from-card to-card/50 p-5 backdrop-blur-sm hover:border-primary/40 hover:shadow-lg hover:shadow-primary/20 transition-all",
                        style: {
                            animationDelay: '0.1s'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-lg bg-primary/10 p-2 group-hover:bg-primary/20 transition-colors",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                        className: "size-5 text-primary"
                                    }, void 0, false, {
                                        fileName: "[project]/AdSensei-CalHacks/code/components/upload-interface.tsx",
                                        lineNumber: 95,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/AdSensei-CalHacks/code/components/upload-interface.tsx",
                                    lineNumber: 94,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm font-semibold",
                                            children: "Sentiment Analysis"
                                        }, void 0, false, {
                                            fileName: "[project]/AdSensei-CalHacks/code/components/upload-interface.tsx",
                                            lineNumber: 98,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-muted-foreground",
                                            children: "Measure emotional impact"
                                        }, void 0, false, {
                                            fileName: "[project]/AdSensei-CalHacks/code/components/upload-interface.tsx",
                                            lineNumber: 99,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/AdSensei-CalHacks/code/components/upload-interface.tsx",
                                    lineNumber: 97,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/AdSensei-CalHacks/code/components/upload-interface.tsx",
                            lineNumber: 93,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/AdSensei-CalHacks/code/components/upload-interface.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-popup group rounded-xl border border-primary/20 bg-gradient-to-br from-card to-card/50 p-5 backdrop-blur-sm hover:border-primary/40 hover:shadow-lg hover:shadow-primary/20 transition-all",
                        style: {
                            animationDelay: '0.2s'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-lg bg-primary/10 p-2 group-hover:bg-primary/20 transition-colors",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                        className: "size-5 text-primary"
                                    }, void 0, false, {
                                        fileName: "[project]/AdSensei-CalHacks/code/components/upload-interface.tsx",
                                        lineNumber: 107,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/AdSensei-CalHacks/code/components/upload-interface.tsx",
                                    lineNumber: 106,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm font-semibold",
                                            children: "Color Psychology"
                                        }, void 0, false, {
                                            fileName: "[project]/AdSensei-CalHacks/code/components/upload-interface.tsx",
                                            lineNumber: 110,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-muted-foreground",
                                            children: "Understand visual appeal"
                                        }, void 0, false, {
                                            fileName: "[project]/AdSensei-CalHacks/code/components/upload-interface.tsx",
                                            lineNumber: 111,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/AdSensei-CalHacks/code/components/upload-interface.tsx",
                                    lineNumber: 109,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/AdSensei-CalHacks/code/components/upload-interface.tsx",
                            lineNumber: 105,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/AdSensei-CalHacks/code/components/upload-interface.tsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-popup group rounded-xl border border-primary/20 bg-gradient-to-br from-card to-card/50 p-5 backdrop-blur-sm hover:border-primary/40 hover:shadow-lg hover:shadow-primary/20 transition-all",
                        style: {
                            animationDelay: '0.3s'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-lg bg-primary/10 p-2 group-hover:bg-primary/20 transition-colors",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"], {
                                        className: "size-5 text-primary"
                                    }, void 0, false, {
                                        fileName: "[project]/AdSensei-CalHacks/code/components/upload-interface.tsx",
                                        lineNumber: 119,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/AdSensei-CalHacks/code/components/upload-interface.tsx",
                                    lineNumber: 118,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm font-semibold",
                                            children: "AI Recommendations"
                                        }, void 0, false, {
                                            fileName: "[project]/AdSensei-CalHacks/code/components/upload-interface.tsx",
                                            lineNumber: 122,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-muted-foreground",
                                            children: "Get actionable insights"
                                        }, void 0, false, {
                                            fileName: "[project]/AdSensei-CalHacks/code/components/upload-interface.tsx",
                                            lineNumber: 123,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/AdSensei-CalHacks/code/components/upload-interface.tsx",
                                    lineNumber: 121,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/AdSensei-CalHacks/code/components/upload-interface.tsx",
                            lineNumber: 117,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/AdSensei-CalHacks/code/components/upload-interface.tsx",
                        lineNumber: 116,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/AdSensei-CalHacks/code/components/upload-interface.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                className: "animate-fade-in-up border-primary/20 bg-gradient-to-br from-card to-card/50 shadow-xl backdrop-blur-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                        className: "size-5 text-primary animate-pulse-glow"
                                    }, void 0, false, {
                                        fileName: "[project]/AdSensei-CalHacks/code/components/upload-interface.tsx",
                                        lineNumber: 132,
                                        columnNumber: 13
                                    }, this),
                                    "Upload Files"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/AdSensei-CalHacks/code/components/upload-interface.tsx",
                                lineNumber: 131,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                                children: "Drag and drop your ad images or click to browse"
                            }, void 0, false, {
                                fileName: "[project]/AdSensei-CalHacks/code/components/upload-interface.tsx",
                                lineNumber: 135,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/AdSensei-CalHacks/code/components/upload-interface.tsx",
                        lineNumber: 130,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            onDragOver: handleDragOver,
                            onDragLeave: handleDragLeave,
                            onDrop: handleDrop,
                            className: `relative flex min-h-64 cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed transition-all ${isDragging ? 'border-primary bg-primary/20 shadow-lg shadow-primary/30' : 'border-border hover:border-primary/50 hover:bg-primary/5'}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "file",
                                    multiple: true,
                                    accept: "image/*",
                                    onChange: handleFileSelect,
                                    className: "absolute inset-0 cursor-pointer opacity-0"
                                }, void 0, false, {
                                    fileName: "[project]/AdSensei-CalHacks/code/components/upload-interface.tsx",
                                    lineNumber: 150,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `transition-transform ${isDragging ? 'scale-110' : ''}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                        className: "size-16 text-muted-foreground"
                                    }, void 0, false, {
                                        fileName: "[project]/AdSensei-CalHacks/code/components/upload-interface.tsx",
                                        lineNumber: 158,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/AdSensei-CalHacks/code/components/upload-interface.tsx",
                                    lineNumber: 157,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-4 text-sm font-medium",
                                    children: "Drop your ad images here or click to browse"
                                }, void 0, false, {
                                    fileName: "[project]/AdSensei-CalHacks/code/components/upload-interface.tsx",
                                    lineNumber: 160,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-1 text-xs text-muted-foreground",
                                    children: "Supports JPG, PNG, GIF up to 10MB each"
                                }, void 0, false, {
                                    fileName: "[project]/AdSensei-CalHacks/code/components/upload-interface.tsx",
                                    lineNumber: 163,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-6 flex gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "size-2 rounded-full bg-primary/40 animate-pulse"
                                        }, void 0, false, {
                                            fileName: "[project]/AdSensei-CalHacks/code/components/upload-interface.tsx",
                                            lineNumber: 167,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "size-2 rounded-full bg-primary/30 animate-pulse",
                                            style: {
                                                animationDelay: '0.2s'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/AdSensei-CalHacks/code/components/upload-interface.tsx",
                                            lineNumber: 168,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "size-2 rounded-full bg-primary/20 animate-pulse",
                                            style: {
                                                animationDelay: '0.4s'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/AdSensei-CalHacks/code/components/upload-interface.tsx",
                                            lineNumber: 169,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/AdSensei-CalHacks/code/components/upload-interface.tsx",
                                    lineNumber: 166,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/AdSensei-CalHacks/code/components/upload-interface.tsx",
                            lineNumber: 140,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/AdSensei-CalHacks/code/components/upload-interface.tsx",
                        lineNumber: 139,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/AdSensei-CalHacks/code/components/upload-interface.tsx",
                lineNumber: 129,
                columnNumber: 7
            }, this),
            files.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                className: "animate-popup border-primary/20 bg-gradient-to-br from-card to-card/50 shadow-xl backdrop-blur-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileImage$3e$__["FileImage"], {
                                                    className: "size-5 text-primary"
                                                }, void 0, false, {
                                                    fileName: "[project]/AdSensei-CalHacks/code/components/upload-interface.tsx",
                                                    lineNumber: 181,
                                                    columnNumber: 19
                                                }, this),
                                                "Selected Files (",
                                                files.length,
                                                ")"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/AdSensei-CalHacks/code/components/upload-interface.tsx",
                                            lineNumber: 180,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                                            children: "Review your uploads before analyzing"
                                        }, void 0, false, {
                                            fileName: "[project]/AdSensei-CalHacks/code/components/upload-interface.tsx",
                                            lineNumber: 184,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/AdSensei-CalHacks/code/components/upload-interface.tsx",
                                    lineNumber: 179,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-lg bg-primary/10 px-3 py-1 text-xs font-medium text-primary",
                                    children: [
                                        "Batch of ",
                                        files.length
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/AdSensei-CalHacks/code/components/upload-interface.tsx",
                                    lineNumber: 188,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/AdSensei-CalHacks/code/components/upload-interface.tsx",
                            lineNumber: 178,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/AdSensei-CalHacks/code/components/upload-interface.tsx",
                        lineNumber: 177,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: files.map((file, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "group flex items-center gap-4 rounded-xl border border-border bg-card/50 p-4 transition-all hover:border-primary/40 hover:bg-card hover:shadow-md hover:shadow-primary/10",
                                        style: {
                                            animation: 'popup 0.3s ease-out',
                                            animationDelay: `${index * 0.05}s`
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex size-14 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileImage$3e$__["FileImage"], {
                                                    className: "size-6 text-primary"
                                                }, void 0, false, {
                                                    fileName: "[project]/AdSensei-CalHacks/code/components/upload-interface.tsx",
                                                    lineNumber: 202,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/AdSensei-CalHacks/code/components/upload-interface.tsx",
                                                lineNumber: 201,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 truncate",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "truncate font-medium",
                                                        children: file.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/AdSensei-CalHacks/code/components/upload-interface.tsx",
                                                        lineNumber: 205,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-1 flex items-center gap-3 text-xs text-muted-foreground",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    (file.size / 1024 / 1024).toFixed(2),
                                                                    " MB"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/AdSensei-CalHacks/code/components/upload-interface.tsx",
                                                                lineNumber: 207,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "size-1 rounded-full bg-muted-foreground/40"
                                                            }, void 0, false, {
                                                                fileName: "[project]/AdSensei-CalHacks/code/components/upload-interface.tsx",
                                                                lineNumber: 208,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-primary",
                                                                children: "Ready for analysis"
                                                            }, void 0, false, {
                                                                fileName: "[project]/AdSensei-CalHacks/code/components/upload-interface.tsx",
                                                                lineNumber: 209,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/AdSensei-CalHacks/code/components/upload-interface.tsx",
                                                        lineNumber: 206,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/AdSensei-CalHacks/code/components/upload-interface.tsx",
                                                lineNumber: 204,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                variant: "ghost",
                                                size: "icon",
                                                onClick: ()=>removeFile(index),
                                                className: "hover:bg-destructive/10 hover:text-destructive transition-colors",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                    className: "size-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/AdSensei-CalHacks/code/components/upload-interface.tsx",
                                                    lineNumber: 218,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/AdSensei-CalHacks/code/components/upload-interface.tsx",
                                                lineNumber: 212,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, index, true, {
                                        fileName: "[project]/AdSensei-CalHacks/code/components/upload-interface.tsx",
                                        lineNumber: 196,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/AdSensei-CalHacks/code/components/upload-interface.tsx",
                                lineNumber: 194,
                                columnNumber: 13
                            }, this),
                            isAnalyzing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6 space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-muted-foreground",
                                                children: "Analysis Progress"
                                            }, void 0, false, {
                                                fileName: "[project]/AdSensei-CalHacks/code/components/upload-interface.tsx",
                                                lineNumber: 227,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-medium text-primary",
                                                children: [
                                                    Math.round(analysisProgress),
                                                    "%"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/AdSensei-CalHacks/code/components/upload-interface.tsx",
                                                lineNumber: 228,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/AdSensei-CalHacks/code/components/upload-interface.tsx",
                                        lineNumber: 226,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-2 overflow-hidden rounded-full bg-muted",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-full bg-gradient-to-r from-primary to-accent transition-all duration-500 animate-pulse-glow",
                                            style: {
                                                width: `${analysisProgress}%`
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/AdSensei-CalHacks/code/components/upload-interface.tsx",
                                            lineNumber: 231,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/AdSensei-CalHacks/code/components/upload-interface.tsx",
                                        lineNumber: 230,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/AdSensei-CalHacks/code/components/upload-interface.tsx",
                                lineNumber: 225,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                className: "mt-6 w-full bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/50 transition-all animate-pulse-glow",
                                size: "lg",
                                onClick: handleAnalyze,
                                disabled: isAnalyzing,
                                children: isAnalyzing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                            className: "mr-2 size-5 animate-spin"
                                        }, void 0, false, {
                                            fileName: "[project]/AdSensei-CalHacks/code/components/upload-interface.tsx",
                                            lineNumber: 247,
                                            columnNumber: 19
                                        }, this),
                                        "Analyzing..."
                                    ]
                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                            className: "mr-2 size-5"
                                        }, void 0, false, {
                                            fileName: "[project]/AdSensei-CalHacks/code/components/upload-interface.tsx",
                                            lineNumber: 252,
                                            columnNumber: 19
                                        }, this),
                                        "Analyze ",
                                        files.length,
                                        " ",
                                        files.length === 1 ? 'Ad' : 'Ads',
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                            className: "ml-2 size-5"
                                        }, void 0, false, {
                                            fileName: "[project]/AdSensei-CalHacks/code/components/upload-interface.tsx",
                                            lineNumber: 254,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true)
                            }, void 0, false, {
                                fileName: "[project]/AdSensei-CalHacks/code/components/upload-interface.tsx",
                                lineNumber: 239,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/AdSensei-CalHacks/code/components/upload-interface.tsx",
                        lineNumber: 193,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/AdSensei-CalHacks/code/components/upload-interface.tsx",
                lineNumber: 176,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/AdSensei-CalHacks/code/components/upload-interface.tsx",
        lineNumber: 90,
        columnNumber: 5
    }, this);
}
_s(UploadInterface, "W1mWK19IbJMFdT23CLnE6rd9sSA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$AdSensei$2d$CalHacks$2f$code$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = UploadInterface;
var _c;
__turbopack_context__.k.register(_c, "UploadInterface");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=AdSensei-CalHacks_code_0b606b82._.js.map