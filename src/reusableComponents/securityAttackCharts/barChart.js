import React from 'react';
import { BarChart } from '../charts';
import { getBarConfig } from './config';

class SecurityAttackBarChart extends React.Component {
    constructor(props) {
        super(props);
        this.config = getBarConfig();
        this.state = {
            dataPoints: [],
        };
    }

    componentDidMount() {
        const dataPoints = [2400, 1900, 1700, 1400, 1200];
        this.setState({
            dataPoints,
        });
    }

    render() {
        const { dataPoints } = this.state;
        return <BarChart options={this.config} dataPoints={dataPoints} />;
    }
}

export default SecurityAttackBarChart;
