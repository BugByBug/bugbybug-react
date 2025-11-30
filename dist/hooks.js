"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useBugByBug = useBugByBug;
const react_1 = require("react");
const context_1 = require("./context");
function useBugByBug() {
    const context = (0, react_1.useContext)(context_1.BugByBugContext);
    if (context === undefined) {
        console.warn('useBugByBug must be used within a BugByBugProvider');
        return undefined;
    }
    return context.client;
}
//# sourceMappingURL=hooks.js.map