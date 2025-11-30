"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setUser = exports.captureException = exports.useBugByBug = exports.ErrorBoundary = exports.BugByBugProvider = void 0;
var provider_1 = require("./provider");
Object.defineProperty(exports, "BugByBugProvider", { enumerable: true, get: function () { return provider_1.BugByBugProvider; } });
var error_boundary_1 = require("./error-boundary");
Object.defineProperty(exports, "ErrorBoundary", { enumerable: true, get: function () { return error_boundary_1.ErrorBoundary; } });
var hooks_1 = require("./hooks");
Object.defineProperty(exports, "useBugByBug", { enumerable: true, get: function () { return hooks_1.useBugByBug; } });
__exportStar(require("./types"), exports);
var browser_1 = require("@bugbybug/browser");
Object.defineProperty(exports, "captureException", { enumerable: true, get: function () { return browser_1.captureException; } });
Object.defineProperty(exports, "setUser", { enumerable: true, get: function () { return browser_1.setUser; } });
//# sourceMappingURL=index.js.map