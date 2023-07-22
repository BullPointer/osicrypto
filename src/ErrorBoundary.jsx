/* eslint-disable react/prop-types */
import React from "react";

class ErrorBoundary extends React.Component {
    state = { hasError: false }

    static getDerivedStateFromError() {
        return { hasError: true }
    }

    componentDidCatch(error, info) {
        console.log(error, info);
    }
    render() {
        if (this.state.hasError) {
            return this.props.fallback;
        }
        return this.props.children
    }
}
export default ErrorBoundary;