import Card from "../components/Card/Card";
import Activity from "../components/Activity/Activity";
import Performance from "../components/Performance/Performance";
import Score from "../components/Score/Score";
import AverageSession from "../components/AverageSession/AverageSession";

import React from "react";

import service from "../services";



import protein_icon from "../../src/img/protein-icon.svg";
import calories_icon from "../../src/img/calories-icon.svg";
import carbs_icon from "../../src/img/carbs-icon.svg"
import fat_icon from "../../src/img/fat-icon.svg"

const {getActivity, getAverageSession, getData, getPerformance} = service;

/**
 * Dashboard
 * Fetch the data on Mount and display all chart by passing the data to them
 * @component
 * @returns {node} html template of the dashboard including alll the charts
 */
class Dashboard extends React.Component{
    
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
        getActivity(this.state.id).then(userActivity => this.setState({ activity: userActivity }));
        getAverageSession(this.state.id).then(userAverage => this.setState({average: userAverage}));
        getPerformance(this.state.id).then(userperformance => this.setState({ performance: userperformance }));
    }
    
    render() {
        if (!this.state.data || !this.state.average || !this.state.activity || !this.state.performance) { return null }
        const radialData = [{ score: this.state.data.todayScore }];
        const lineData = this.state.average.sessions;
        const barData = this.state.activity.sessions;
        const radarData = this.state.performance;
        
        return (
        <div className="dashboard">
        <h1 className="dashboard__greeting">Bonjour <span>{this.state.data.userInfos.firstName}</span></h1>
        <p className="dashboard__message">Félicitation ! Vous avez explosé vos objectifs hier</p>
        <div className="data">
            <div className = "activity">
                <Activity activity={barData} />
            </div>
            <div className="chart__container">
                <div className="line">
                    <AverageSession averageSession = {lineData} /> 
                </div>
                <div className="radar">
                    <Performance performance={radarData} />
                </div>
                <div className="radial">
                    <Score radialData={radialData} />
                </div>   
            </div>                                 
        <div className ="nutrition">
            <Card image={calories_icon} value={this.state.data.keyData.calorieCount+"kCal"} name="Calories" />
            <Card image={protein_icon} value={this.state.data.keyData.proteinCount+"g"} name="Proteines" />
            <Card image={carbs_icon} value={this.state.data.keyData.carbohydrateCount+"g"} name="Glucides" />
            <Card image={fat_icon} value={this.state.data.keyData.lipidCount+"g"} name="Lipides" />
        </div>
    </div>
</div>
        )
    }
}



export default Dashboard;