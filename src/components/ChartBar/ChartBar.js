import './ChartBar.css'

const ChartBar=props=>{
    let percentage='0%'
    if(props.max>0)
    percentage=Math.round((props.value/props.max)*100)

    return(
    <div className='chart-bar'>
        <div className='chart-bar__inner'>
            <div className='chart-bar__fill' style={{height:percentage}}>

            </div>
        </div>
        <div className='chart-bar__label'>
            {props.label}
        </div>
    </div>
    )
}

export default ChartBar;