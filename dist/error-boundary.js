"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorBoundary = void 0;
const react_1 = require("react");
const browser_1 = require("@bugbybug/browser");
class ErrorBoundary extends react_1.Component {
    constructor(props) {
        super(props);
        this.resetErrorBoundary = () => {
            this.setState({ hasError: false, error: null });
        };
        this.state = {
            hasError: false,
            error: null
        };
    }
    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }
    componentDidCatch(error, errorInfo) {
        const { onError, beforeSend } = this.props;
        const componentStack = errorInfo.componentStack || '';
        if (onError) {
            onError(error, componentStack);
        }
        let errorToSend = error;
        if (beforeSend) {
            errorToSend = beforeSend(error, componentStack);
        }
        if (errorToSend) {
            (0, browser_1.captureException)(errorToSend, {
                componentStack,
                react: true,
                errorBoundary: true
            });
        }
    }
    render() {
        const { hasError, error } = this.state;
        const { fallback, children } = this.props;
        if (hasError) {
            if (typeof fallback === 'function') {
                return fallback(error || new Error('Unknown Error'), this.resetErrorBoundary);
            }
            return fallback || null;
        }
        return children;
    }
}
exports.ErrorBoundary = ErrorBoundary;
//# sourceMappingURL=error-boundary.js.map