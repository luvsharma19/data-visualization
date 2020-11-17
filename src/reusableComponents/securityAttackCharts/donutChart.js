import React from 'react';
import { Box, Text } from 'grommet';
import { DonutChart } from '../charts';
import { getDonutConfig } from './config';

class SecurityAttackDonutChart extends React.Component {
    constructor(props) {
        super(props);
        this.config = getDonutConfig();
        this.state = {
            dataPoints: [],
        };
    }

    componentDidMount() {
        const dataPoints = [
            {
                name: 'SQL INJECTION',
                y: 44,
                color: '#EF6C00',
            },
            {
                name: 'CMD INJECTION',
                y: 21,
                color: '#ffa726',
            },
            {
                name: 'PHP INJECTION',
                y: 12,
                color: '#ffca28c9',
            },
            {
                name: 'LOCAL FILE INCLUDE',
                y: 18,
                color: '#FFEB3B',
            },
            {
                name: 'CROSS-SITE SCRIPTING',
                y: 5,
                color: '#ffee58',
            },
        ];
        this.setState({
            dataPoints,
        });
    }

    render() {
        const { dataPoints } = this.state;
        return (
            <Box
                className='security-attack-donut-chart'
                justify='start'
                align='center'
                gap='small'
            >
                <DonutChart options={this.config} dataPoints={dataPoints} />
                <Box className='security-attack-donut-legend'>
                    <ul style={{ listStyleType: 'none' }}>
                        {dataPoints.map((item) => {
                            return (
                                <li>
                                    <Text size='small' color={item.color}>
                                        {`${item.name} ${item.y}%`}
                                    </Text>
                                </li>
                            );
                        })}
                    </ul>
                </Box>
            </Box>
        );
    }
}

export default SecurityAttackDonutChart;
