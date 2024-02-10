import React from 'react';
import {Collapse, Row, Col, Layout} from 'antd';

class FAQ extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            info: []
        }
    }
    
    componentDidMount(){
        fetch('http://5b3dae8d95bf8d0014a1d78a.mockapi.io/api/v1/FAQs')
        .then(response => response.json())
        .then(data => this.setState({info:data}));
    }

    render() {
        const Panel = Collapse.Panel;
        const {Content} = Layout;
        const collapse = this.state.info.map(item => (
            <Panel header={item.header} key={item.key}>
                <p>{item.text}</p>
            </Panel>
        ));
        return (
            <Content>
                <Row type="flex" justify="space-around">
                    <Col xs={24} sm={24} md={24} lg={20} className='collapseHolder'>
                        <h2>Still have questions about our services?</h2>
                        <Collapse accordion>
                            {collapse}
                        </Collapse>
                    </Col>
                </Row>
            </Content>
        );
    }
}

export default FAQ;