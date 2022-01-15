import {Loader} from "@googlemaps/js-api-loader";

import React from 'react'

export const Status = {
    LOADING: "LOADING", FAILURE: "FAILURE", SUCCESS: "SUCCESS"
};

export default class Wrapper extends React.Component {
    state = {
        status: Status.LOADING
    };

    setStatusAndExecuteCallback = (newStatus, loader) => {
        const {callback} = this.props;
        if (callback) {
            callback(newStatus, loader);
        }
        this.setState({status: newStatus});
    };

    componentDidMount() {
        const {callback, ...options} = this.props;

        const loader = new Loader({
            apiKey: process.env.REACT_APP_GOOGLE_MAPS_KEY, version: "weekly", libraries: ["places"]
        });

        this.setStatusAndExecuteCallback(Status.LOADING, loader);

        loader.load().then(() => {
            this.setStatusAndExecuteCallback(Status.SUCCESS, loader);
        });
    }

    render() {
        const {status} = this.state;
        const {children, render} = this.props;

        if (status === Status.SUCCESS && children) {
            return children;
        }

        if (render) {
            return render(status);
        }

        return null;
    }
}
