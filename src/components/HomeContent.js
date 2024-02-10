import React from 'react';
import {Link} from 'react-router-dom';
import {Layout, Row, Col, Card, Button} from 'antd';

class HomeContent extends React.Component{
    render() {
        const {Content} = Layout;
        return (
            <Content>
                <Row type="flex" justify="space-between">
                    <Col xs={24} sm={24} md={24} lg={24} className='homeBackground'>
                            <h1>Payday Loans and Personal Loans</h1>
                            <p>Efficency,Flexible and Convenience</p>
                            <p><Button><Link to='loans'>Learn More</Link></Button></p>
                    </Col>
                    <Col xs={24} sm={24} md={8} lg={7}>
                        <Card
                            className = 'serviceCard_1'
                        >
                            <h3>Loans</h3>
                            <p><Button><Link to='loans'>Learn More</Link></Button></p>
                        </Card>
                    </Col>
                    <Col xs={24} sm={24} md={8} lg={7}>
                        <Card
                            className='serviceCard_2'
                        >
                            <h3>Application</h3>
                            <p><Button><Link to='login'>Start Now</Link></Button></p>
                        </Card>
                    </Col>
                    <Col xs={24} sm={24} md={8} lg={7}>
                        <Card
                            className='serviceCard_3'
                        >
                            <h3>Find Us</h3>
                            <p><Button><Link to='Location'>Learn More</Link></Button></p>
                        </Card>
                    </Col>
                </Row>
            </Content>
        );
    }
}

export default HomeContent;