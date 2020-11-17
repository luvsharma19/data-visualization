import React from 'react';
import PropTypes from 'prop-types';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const mapData = require('@highcharts/map-collection/custom/world-highres.geo.json');

// Load Highcharts modules
require('highcharts/modules/map')(Highcharts);

const MapChart = ({
    dataPoints = [],
    options = {
        series: [],
    },
}) => {
    const mapOptions = {
        ...options,
        chart: {
            map: mapData,
        },
    };

    if (mapOptions.series) {
        mapOptions.series[0].data = dataPoints;
    } else {
        mapOptions.series = [
            {
                data: dataPoints,
            },
        ];
    }

    return (
        <HighchartsReact
            highcharts={Highcharts}
            constructorType='mapChart'
            options={mapOptions}
        />
    );
};

MapChart.propTypes = {
    options: PropTypes.object,
    dataPoints: PropTypes.array,
};

export default MapChart;
