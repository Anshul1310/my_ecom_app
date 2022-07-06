import React, { Component } from 'react';
// import Chart from 'react-apexcharts'

class PieChart extends Component {

    constructor(props) {
        super(props);

        this.state = {
            options: {
                labels: ['Users', 'Orders', 'Earnings'],
                legend: {
                    position: 'bottom'
                }
            },
            series: [44, 55, 41,],
        }
    }

    render() {

        return (
            <div className="donut">
                 {/* <Chart options={this.state.options} series={this.state.series} type="pie" width="380" /> */}
            </div>
        );
    }
}

export default PieChart;