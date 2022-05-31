import { LineChart, Line, XAxis, Legend, Tooltip, ResponsiveContainer} from "recharts";
import PropTypes from 'prop-types';

/**
 * Custom Line chart Tooltip
 * @component
 * @param {boolean} active If the data is hovered
 * @param {object} payload data of the hovered point
 * @returns {node} Response
 */
function LineTooltip({active, payload}) {
    if (active) {
        return <div style={{ backgroundColor: "#FFFFFF", height: "30px", width: "60px", display: "flex", alignItems: "center",justifyContent: "center"} }><p>{payload[0].value} min</p></div>
    }
    return null
}

/**
 * Static Legend
 * @component
 * @returns {node} Response
 */
function LineLegend(props) {
    return <div><p style={{color: "#FFFFFF", width: "75%", textAlign: "left", marginLeft:"20px", opacity:"0.7"}}>Durée moyenne des sessions</p></div>
}

/**
 * Average Session Chart component
 * @component
 * @param {object} props    containing the array of data for the chart'
 * @returns {node} recharts line chart
 */
function AverageSession(props) {
   
    props.averageSession.forEach((item) => {            
                switch (item.day) {                
                    case  1:                        
                        item.day = "L";
                        break;
                    case 2:
                        item.day = "M";
                        break;
                    case  3:
                        item.day = "M";
                        break;
                    case  4:
                        item.day = "J";
                        break;
                    case  5:
                        item.day = "V";
                        break;
                    case  6:
                        item.day = "S";
                        break;
                    case  7:
                        item.day = "D";
                        break;
                    default:     
                }
            })
    return (
        <ResponsiveContainer width={258} height={263}>
            <LineChart width={208} height={213} data={props.averageSession} >
                <Line type="monotone" dataKey="sessionLength" stroke="#FFFFFF" dot={false}/>
                <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: "#FFFFFF" }} />
                <Tooltip content={<LineTooltip />} />
                <Legend verticalAlign="top" align="left" iconSize={0} content={<LineLegend />}/>
            </LineChart>
        </ResponsiveContainer>
                    
    )
}

LineTooltip.propTypes = {
    /**
    * If the chart data is hovered
    */
    active: PropTypes.bool,
    /**
    * Value of the hovered point on the chart
    */
	payload: PropTypes.array,
};
AverageSession.propTypes = {
    /**
    * Session data fetched from backend
    */
    averageSession: PropTypes.array
}

export default AverageSession;