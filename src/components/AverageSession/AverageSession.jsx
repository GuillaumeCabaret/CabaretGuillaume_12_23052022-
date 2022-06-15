import { LineChart, Line, XAxis, Legend, Tooltip, ResponsiveContainer, ReferenceArea} from "recharts";
import PropTypes from 'prop-types';

import { useState } from "react";


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

const throttle = (func, limit) => {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    }
  }


/**
 * Average Session Chart component
 * @component
 * @param {object} props containing the array of data for the chart'
 * @returns {node} recharts line chart
 */
function AverageSession(props) {

   const [activeTooltip, setActiveTooltip] = useState(0)
   
   function ActiveTooltip(e) {
       console.log(e.activeTooltipIndex)
    // if (e.activeTooltipIndex) { 
        setActiveTooltip(e.activeTooltipIndex)
    // }
}

    const safeActiveTooltip = throttle(ActiveTooltip, 20)
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
        <ResponsiveContainer>
            <LineChart width={208} height={213} data={props.averageSession} onMouseMove = { e =>  safeActiveTooltip(e)} >
                <Line type="monotone" dataKey="sessionLength" stroke="#FFFFFF" dot={false} />
                <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: "#FFFFFF" }} />
                {/* <YAxis/> */}
                <Tooltip content={<LineTooltip />} />
                <Legend verticalAlign="top" align="left" iconSize={0} content={<LineLegend />}/>
                <ReferenceArea x1={activeTooltip} x2={6} y1={0} y2={60} stroke="red" strokeOpacity={1} fill="yellow"/>
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