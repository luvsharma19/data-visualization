import React from 'react';
import PropTypes from 'prop-types';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const DonutChart = ({
    dataPoints = [],
    options = {
        series: [],
    },
}) => {
    const donutOptions = {
        ...options,
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie',
        },
    };

    if (donutOptions.series) {
        donutOptions.series[0].data = dataPoints;
    } else {
        donutOptions.series = [
            {
                data: dataPoints,
            },
        ];
    }

    return <HighchartsReact highcharts={Highcharts} options={donutOptions} />;
};

DonutChart.propTypes = {
    options: PropTypes.object,
    dataPoints: PropTypes.array,
};

export default DonutChart;
