import React from 'react';
import { MapChart } from '../charts';
import { getMapConfig } from './config';

class SecurityAttackMap extends React.Component {
    constructor(props) {
        super(props);
        this.config = getMapConfig();
        this.state = {
            dataPoints: [],
        };
    }

    componentDidMount() {
        const dataPoints = [
            ['ae', 37],
            ['af', 44],
            ['at', 1900],
            ['am', 20],
            ['az', 19],
            ['bd', 9],
            ['bh', 12],
            ['bn', 43],
            ['ca', 5],
            ['us', 35],
            ['bt', 26],
            ['cn', 3200],
            ['cnm', 33],
            ['cy', 48],
            ['ge', 27],
            ['id', 65],
            ['il', 29],
            ['in', 3000],
            ['iq', 36],
            ['ir', 70],
            ['jk', 40],
            ['jo', 31],
            ['jp', 100],
            ['kg', 52],
            ['kh', 25],
            ['kp', 45],
            ['kr', 70],
            ['kw', 35],
            ['kz', 28],
            ['no', 50],
            ['se', 44],
            ['fi', 49],
            ['de', 1600],
            ['cz', 1600],
            ['uk', 1600],
            ['la', 38],
            ['lb', 46],
            ['lk', 51],
            ['mm', 13],
            ['mn', 34],
            ['my', 18],
            ['nc', 47],
            ['np', 50],
            ['om', 5],
            ['ph', 1],
            ['pk', 39],
            ['qa', 41],
            ['ru', 1],
            ['sa', 2],
            ['sg', 65],
            ['sh', 17],
            ['sp', 10],
            ['sy', 30],
            ['th', 4],
            ['tj', 22],
            ['tl', 24],
            ['tm', 32],
            ['tr', 65],
            ['tw', 49],
            ['uz', 23],
            ['vn', 21],
            ['ye', 6],
            ['it', 2500],
            ['dk', 2500],
            ['pl', 2500],
            ['es', 2500],
            ['fr', 2500],
        ];

        this.setState({
            dataPoints,
        });
    }

    render() {
        const { dataPoints } = this.state;
        return <MapChart options={this.config} dataPoints={dataPoints} />;
    }
}

export default SecurityAttackMap;
