import React from 'react';
import PropTypes from 'prop-types';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const BarChart = ({
    dataPoints = [],
    options = {
        series: [],
    },
}) => {
    const barOptions = {
        ...options,
        chart: {
            type: 'bar',
        },
    };

    if (barOptions.series) {
        barOptions.series[0].data = dataPoints;
    } else {
        barOptions.series = [
            {
                data: dataPoints,
            },
        ];
    }

    return <HighchartsReact highcharts={Highcharts} options={barOptions} />;
};

BarChart.propTypes = {
    options: PropTypes.object,
    dataPoints: PropTypes.array,
};

export default BarChart;
