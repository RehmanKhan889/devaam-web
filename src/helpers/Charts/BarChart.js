import ReactApexChart from "react-apexcharts";
import { useState } from "react";
const BarChart = (props) => {
    
    return (

        <>
            {props.tab === '1' && <ReactApexChart //Daily data tab
                options={props.options1}
                type="bar"
                series={props.series1}
                height={350}
            />}
            {props.tab === '2' && <ReactApexChart //Weekly data tab
                options={props.options2}
                type="bar"
                series={props.series2}
                height={350}
            />}
            {props.tab === '3' && <ReactApexChart //Montly Data tab
                options={props.options3}
                type="bar"
                series={props.series3}
                height={350}
            />}
            {props.tab === 'undefined' && <ReactApexChart //if no tab is sent
                options={props.options1}
                type="bar"
                series={props.series1}
                height={350}
            />}
        </>
        
    )
}
export default BarChart;