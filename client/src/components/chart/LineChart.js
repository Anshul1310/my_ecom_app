import React, { Component } from "react";
// import Chart from "react-apexcharts";
import './chart.css'

class LineChart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                chart: {
                    id: "basic-bar"
                },
                xaxis: {
                    categories: [2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029]
                },
                stroke: {
                    curve: "smooth"
                }
            },
            series: [
                {
                    name: "Users",
                    data: [30, 40, 45, 50, 49, 60, 70, 91]
                },
                {
                    name: "Orders",
                    data: [20, 25, 35, 57, 45, 62, 74, 92]
                },
                {
                    name: "Earnings",
                    data: [10, 23, 32, 45, 59, 66, 79, 99]
                },
            ],

        };
    }

    render() {
        return (
            <div className="app">
                {/* <div className="row">
                    <div className="mixed-chart">
                        <Chart
                            options={this.state.options}
                            series={this.state.series}
                            type="line"
                            width="500"
                        />
                    </div>
                </div> */}
            </div>
        );
    }
}

export default LineChart;