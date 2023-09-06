import React, { Component } from 'react';

export default class ErrorHandler extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        // log the error or perform other actions here
        console.error(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <div style={{ color: 'red' }}> Error: {this.state.error.message} in <b>{this.props.children.type.name}</b> component</div>;
        }

        return this.props.children;
    }
}