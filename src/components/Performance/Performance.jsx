import { RadarChart, Radar ,PolarGrid, PolarAngleAxis, ResponsiveContainer} from "recharts";

import PropTypes from 'prop-types';


/**
 * Performance Chart component
 * @component
 * @param {object} props containing the array of data for the chart
 * @returns {node} recharts radar chart
 */
function Performance(props) {
    
    props.performance.forEach((item) => {            
                switch (item.kind) {                
                    case  1:
                        item.kind = "Cardio";
                        break;
                    case 2:
                        item.kind = "Energie";
                        break;
                    case  3:
                        item.kind = "Endurance";
                        break;
                    case  4:
                        item.kind = "Force";
                        break;
                    case  5:
                        item.kind = "Vitesse";
                        break;
                    case  6:
                        item.kind = "Intensité";
                        break;
                    default:
                }
            })
    return (
        <ResponsiveContainer>
            <RadarChart outerRadius={50} data={props.performance}>
                <PolarGrid />
                <PolarAngleAxis dataKey="kind" tickLine={false} tick={{ fill: "#FFFFFF", fontSize: 10 }} />
                <Radar dataKey="value" stroke="#FF0000" fill="#FF0000" fillOpacity={0.6} />
            </RadarChart>  
        </ResponsiveContainer>
                  
    )
}

Performance.propTypes = {
    /**
    * Performance data fetched from backend
    */
    performance: PropTypes.array
}
export default Performance;