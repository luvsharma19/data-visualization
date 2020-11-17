import React from 'react';
import { Box, Heading } from 'grommet';
import {
    SecurityAttackMap,
    SecurityAttackDonutChart,
    SecurityAttackBarChart,
} from '../reusableComponents/securityAttackCharts';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.name = 'luv';
    }

    render() {
        return (
            <Box fill pad='large' background='#eeeeeeb8'>
                <Box fill='horizontal' justify='start' align='start'>
                    <Heading
                        margin={{ top: 'none', bottom: 'large' }}
                        level='3'
                        color='#000000'
                    >
                        Security visualizations
                    </Heading>
                    <Heading
                        margin={{ top: 'none', bottom: 'small' }}
                        level='6'
                        color='#4d4848c4'
                    >
                        LATEST VISUALIZATIONS
                    </Heading>
                    <Box
                        fill='horizontal'
                        direction='row-responsive'
                        justify='start'
                        align='start'
                        gap='medium'
                    >
                        <Box
                            fill='horizontal'
                            background='#ffffff'
                            border={{
                                size: '2px',
                                color: '#77777763',
                                type: 'solid',
                            }}
                        >
                            <Box pad='small'>
                                <Heading
                                    style={{ fontWeight: 500 }}
                                    margin={{ top: 'none', bottom: 'small' }}
                                    level={6}
                                    size='18px'
                                    color='#ff9800'
                                >
                                    Real Time Attack Visualization
                                </Heading>
                            </Box>
                            <Box
                                direction='row-responsive'
                                justify='start'
                                align='center'
                                fill='horizontal'
                                pad={{ bottom: '35px' }}
                            >
                                <SecurityAttackMap />
                                <SecurityAttackDonutChart />
                            </Box>
                        </Box>
                        <Box
                            background='#ffffff'
                            border={{
                                size: '2px',
                                color: '#77777763',
                                type: 'solid',
                            }}
                        >
                            <Box pad='small'>
                                <Heading
                                    style={{ fontWeight: 500 }}
                                    margin={{ top: 'none', bottom: 'small' }}
                                    level={6}
                                    size='18px'
                                    color='#ff9800'
                                >
                                    Industry Attack Dashboard
                                </Heading>
                                <Box pad={{ bottom: '48px' }} width='800px'>
                                    <SecurityAttackBarChart />
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        );
    }
}

export default Dashboard;
