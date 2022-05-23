import React from "react";

import {getData} from "../services/dataFetch";

/**
 * Dashboard
 * Fetch the data on Mount and display all chart by passing the data to them
 * @component
 * @returns {node} html template of the dashboard including alll the charts
 */
class  Dashboard extends React.Component{
    
    constructor(props) {
        super(props);
        if (window.location.pathname.substring(1)) {
            this.state = {id : window.location.pathname.substring(1)};
        }
        else {
            this.state = { id: "12" };
        }
        
    }

    componentDidMount() {
        getData(this.state.id).then(userData => this.setState({ data: userData }));
    }
    
    render() {
        if (!this.state.data) { return null }

        return (
        <div className="dashboard">
        <h1 className="dashboard__greeting">Bonjour <span>{this.state.data.userInfos.firstName}</span></h1>
    </div>
        )
    }
}


export default Dashboard;