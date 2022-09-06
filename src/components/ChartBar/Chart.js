import './Chart.css'
import ChartBar from './ChartBar'

const Chart=props=>{
    const data=props.datapoints.map(datapoint=>datapoint.value)
    const maxExpense=Math.max(...data)
    return(
        <div className="chart">
            {props.datapoints.map((datapoint)=>
            (<ChartBar 
                key={datapoint.label}
                value={datapoint.value}
                max={maxExpense}
                label={datapoint.label}
            />))}
        </div>
    )

}

export default Chart