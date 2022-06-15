import { RadialBarChart, PolarAngleAxis, RadialBar, Legend, Cell} from "recharts";
import PropTypes from 'prop-types';

/**
 * Static Title
 * @component
 * @returns {node} html to display the chart custom title
 */
function ScoreTitle(props) {
    return (
        <div><p className="scoreTitle">Score</p></div>
    )
}

/**
 * Score Chart component
 * @component
 * @param {object} props containing the array of data for the chart
 * @returns {node} recharts radial bar chart
 */
function Score(props) {
    
    return (
        <>
            <RadialBarChart width={194} height={213} innerRadius="70%" outerRadius="80%" data={props.radialData} startAngle={-180} endAngle={-720}>
                <PolarAngleAxis type="number"  domain={[0, 1]} angleAxisId={0} tick={false} />
                <RadialBar dataKey='score' clockWise={true} background="#000000" >
                <Cell fill="#FF0000"/>
                </RadialBar>
                <Legend verticalAlign="top" align="left"  content={<ScoreTitle />}/>
            </RadialBarChart>
            <div className="score">
                <p className="score__text"><b>{props.radialData[0].score * 100 }%</b> de votre objectif</p>
            </div>
        </>
    )
}

Score.propTypes = {
    /**
    * Score data fetched from backend
    */
    score: PropTypes.array
}
export default Score;