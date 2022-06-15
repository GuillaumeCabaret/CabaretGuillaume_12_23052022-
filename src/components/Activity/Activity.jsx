import { BarChart, CartesianGrid, XAxis, YAxis, Bar, Legend, Tooltip, ResponsiveContainer } from "recharts";
import PropTypes from 'prop-types';

/**
 * Bar chart custom Tooltip
 * @component
 * @param {boolean} active If the data is hovered
 * @param {object} payload the hovered data
 * @returns {node} tooltip in html
 */
function ActivityTooltip({active, payload}) {   
    if (active) {
        return <div style={{ backgroundColor: "#FF0000", height: "60px", width: "80px", display: "flex",flexDirection: "column", alignItems: "center", justifyContent: "center", color: "#FFFFFF" }}>
            <p>{payload[0].value} kg</p>
            <p>{payload[1].value} kcal</p>
        </div>
    }
    return null
}

/**
 * Activity chart component
 * @component
 * @param {object} props containing the array of data for the chart
 * @returns {node} recharts bar chart
 */
function Activity(props) {
    let i = 1;
    props.activity.forEach((item) => {
        item.id = i;
        i++;
    })
    return (
        <ResponsiveContainer>
            <BarChart data={props.activity}>
                <CartesianGrid strokeDasharray="3 3" vertical={false}/>
                <XAxis dataKey="id"/>
                <YAxis orientation="right"/>
                <Tooltip content={<ActivityTooltip />} />
                <Bar dataKey="kilogram" fill="#282D30" barSize={10} />
                <Bar dataKey="calories" fill="#E60000" barSize={10}/>
                <text x="10" y="10" dominantBaseline="hanging" fontSize="16" fontWeight="bold">Activité Quotidienne</text>  
                <Legend verticalAlign="top" align="right" iconType="circle" height={40}/>
            </BarChart>
        </ResponsiveContainer>
    )
}

Activity.propTypes = {
    /**
    * Activity data fetched from backend
    */
    activity: PropTypes.arrayOf(PropTypes.shape({
        chartX: PropTypes.number,
        chartY: PropTypes.number,
    }))
}
export default Activity;