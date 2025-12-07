module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[project]/lib/config.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Network Configuration
 * 
 * Configure your IOTA networks and package IDs here
 */ __turbopack_context__.s([
    "MAINNET_PACKAGE_ID",
    ()=>MAINNET_PACKAGE_ID,
    "MODULE_NAME",
    ()=>MODULE_NAME,
    "PACKAGE_ID",
    ()=>PACKAGE_ID,
    "TESTNET_PACKAGE_ID",
    ()=>TESTNET_PACKAGE_ID,
    "networkConfig",
    ()=>networkConfig,
    "useNetworkVariable",
    ()=>useNetworkVariable,
    "useNetworkVariables",
    ()=>useNetworkVariables
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$iota$2b$iota$2d$sdk$40$1$2e$9$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$client$2f$network$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@iota+iota-sdk@1.9.0_typescript@5.9.3/node_modules/@iota/iota-sdk/dist/esm/client/network.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$iota$2b$dapp$2d$kit$40$0$2e$7$2e$0_$40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$0_$5f40$types$2b$react$2d$dom$40$19$2e$2$2e$_410dfa514cd7abdfed665c03c0db9be6$2f$node_modules$2f40$iota$2f$dapp$2d$kit$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@iota+dapp-kit@0.7.0_@tanstack+react-query@5.90.12_react@19.2.0__@types+react-dom@19.2._410dfa514cd7abdfed665c03c0db9be6/node_modules/@iota/dapp-kit/dist/esm/index.js [app-ssr] (ecmascript)");
;
;
const PACKAGE_ID = "0x572fe621c85d764c1564837f5deb8273dfe5631e8184ef4a08f49e83cecc67d5";
const TESTNET_PACKAGE_ID = "";
const MAINNET_PACKAGE_ID = "";
const MODULE_NAME = "todo_list";
// Network configuration
const { networkConfig, useNetworkVariable, useNetworkVariables } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$iota$2b$dapp$2d$kit$40$0$2e$7$2e$0_$40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$0_$5f40$types$2b$react$2d$dom$40$19$2e$2$2e$_410dfa514cd7abdfed665c03c0db9be6$2f$node_modules$2f40$iota$2f$dapp$2d$kit$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createNetworkConfig"])({
    devnet: {
        url: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$iota$2b$iota$2d$sdk$40$1$2e$9$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$client$2f$network$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFullnodeUrl"])("devnet"),
        variables: {
            packageId: PACKAGE_ID
        }
    },
    testnet: {
        url: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$iota$2b$iota$2d$sdk$40$1$2e$9$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$client$2f$network$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFullnodeUrl"])("testnet"),
        variables: {
            packageId: TESTNET_PACKAGE_ID
        }
    },
    mainnet: {
        url: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$iota$2b$iota$2d$sdk$40$1$2e$9$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$client$2f$network$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFullnodeUrl"])("mainnet"),
        variables: {
            packageId: MAINNET_PACKAGE_ID
        }
    }
});
;
}),
"[project]/components/Provider.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Provider",
    ()=>Provider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.3_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$iota$2b$dapp$2d$kit$40$0$2e$7$2e$0_$40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$0_$5f40$types$2b$react$2d$dom$40$19$2e$2$2e$_410dfa514cd7abdfed665c03c0db9be6$2f$node_modules$2f40$iota$2f$dapp$2d$kit$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@iota+dapp-kit@0.7.0_@tanstack+react-query@5.90.12_react@19.2.0__@types+react-dom@19.2._410dfa514cd7abdfed665c03c0db9be6/node_modules/@iota/dapp-kit/dist/esm/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tanstack+query-core@5.90.12/node_modules/@tanstack/query-core/build/modern/queryClient.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tanstack+react-query@5.90.12_react@19.2.0/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$themes$40$3$2e$2$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$7_$5f40$types$2b$react$40$19$2e$2$2e$7_0b95fe46484f885d28446c960740f384$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$theme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@radix-ui+themes@3.2.1_@types+react-dom@19.2.3_@types+react@19.2.7__@types+react@19.2.7_0b95fe46484f885d28446c960740f384/node_modules/@radix-ui/themes/dist/esm/components/theme.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/config.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
const queryClient = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QueryClient"]();
function Provider({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$themes$40$3$2e$2$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$7_$5f40$types$2b$react$40$19$2e$2$2e$7_0b95fe46484f885d28446c960740f384$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$theme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Theme"], {
        appearance: "dark",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QueryClientProvider"], {
            client: queryClient,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$iota$2b$dapp$2d$kit$40$0$2e$7$2e$0_$40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$0_$5f40$types$2b$react$2d$dom$40$19$2e$2$2e$_410dfa514cd7abdfed665c03c0db9be6$2f$node_modules$2f40$iota$2f$dapp$2d$kit$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IotaClientProvider"], {
                networks: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["networkConfig"],
                defaultNetwork: "devnet",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$iota$2b$dapp$2d$kit$40$0$2e$7$2e$0_$40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$0_$5f40$types$2b$react$2d$dom$40$19$2e$2$2e$_410dfa514cd7abdfed665c03c0db9be6$2f$node_modules$2f40$iota$2f$dapp$2d$kit$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WalletProvider"], {
                    autoConnect: true,
                    children: children
                }, void 0, false, {
                    fileName: "[project]/components/Provider.tsx",
                    lineNumber: 22,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Provider.tsx",
                lineNumber: 21,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/Provider.tsx",
            lineNumber: 20,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Provider.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__d53fcb45._.js.map