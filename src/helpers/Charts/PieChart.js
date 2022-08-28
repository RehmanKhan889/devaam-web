
import ReactApexChart from "react-apexcharts";
const PieChart = (props) => {
    
    return (
        <ReactApexChart
            options={props.options1}
            series={props.series1}
            type="pie"
            width={320}/>
    )
}
export default PieChart