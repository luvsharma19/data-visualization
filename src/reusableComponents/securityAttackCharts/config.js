const getMapConfig = () => ({
    title: {
        text: 'Attacks by Location',
        align: 'left',
        x: 10,
        y: 20,
        style: {
            color: '#4d4848c4',
            'font-size': '12px',
            'font-weight': 600,
        },
    },
    legend: {
        title: {
            text: 'Attacks per hour',
            style: {
                color: 'black',
            },
        },
        align: 'left',
        verticalAlign: 'bottom',
        floating: true,
        layout: 'vertical',
        valueDecimals: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.85)',
        symbolRadius: 0,
        symbolHeight: 14,
    },
    colorAxis: {
        min: 1,
        minColor: '#fcf6ed',
        maxColor: '#f4b04a',
        dataClasses: [
            {
                to: 10,
            },
            {
                from: 10,
                to: 50,
            },
            {
                from: 50,
                to: 100,
            },
            {
                from: 100,
                to: 250,
            },
            {
                from: 250,
                to: 1000,
            },
            {
                from: 1000,
                to: 2500,
            },
            {
                from: 2500,
            },
        ],
    },
    series: [
        {
            animation: true,
            name: 'Attacks',
            states: {
                hover: {
                    borderColor: '#876c62',
                    color: '#ef6c00',
                },
            },
            tooltip: {
                valueSuffix: '/hour',
            },
            shadow: false,
        },
    ],
});

const getDonutConfig = () => ({
    title: {
        text: 'Global Attack Type Distribution',
        align: 'center',
        y: 100,
        style: {
            color: '#4d4848c4',
            'font-size': '12px',
            'font-weight': 600,
        },
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
    },
    accessibility: {
        point: {
            valueSuffix: '%',
        },
    },
    plotOptions: {
        pie: {
            cursor: 'pointer',
            dataLabels: {
                enabled: false,
            },
        },
    },
    series: [
        {
            name: 'Type',
            size: '40%',
            innerSize: '70%',
            colorByPoint: true,
        },
    ],
});

const getBarConfig = () => ({
    title: {
        text: 'Top 5 Industries By Avg Attacks Per Account, Last 30 Days',
        align: 'center',
        style: {
            color: '#4d4848c4',
            'font-size': '12px',
            'font-weight': 600,
        },
    },
    xAxis: {
        categories: [
            'Financial Services',
            'Automotive',
            'Software & Technology',
            'Education',
            'Business Services',
        ],
        title: {
            text: null,
        },
    },
    yAxis: {
        min: 0,
        gridLineColor: '#ffffff',
        title: {
            text: null,
        },
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: false,
            },
        },
    },
    legend: {
        align: 'center',
        verticalAlign: 'bottom',
        y: 20,
        floating: true,
        backgroundColor: '#FFFFFF',
    },
    series: [
        {
            name: 'Average attacks per account',
            color: '#FF9800',
        },
    ],
});
// eslint-disable-next-line import/prefer-default-export
export { getMapConfig, getDonutConfig, getBarConfig };
