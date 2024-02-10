import React from 'react';
import {Link} from 'react-router-dom';
import {Menu, Row} from 'antd';

class HomeHeader extends React.Component{
    render(){
        return(
            <Row>
                <Menu
                    mode="horizontal"
                >
                    <Menu.SubMenu title='Loan Service'>
                        <Menu.Item key="0">
                            <Link to='loans'>Loan Service</Link>
                        </Menu.Item>
                        <Menu.Item key="1">
                            <Link to='Rate'>Rate</Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to='FAQs'>FAQs</Link>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Link to='/'>Home</Link>
                        </Menu.Item>
                    </Menu.SubMenu>
                    <Menu.SubMenu title='Application'>
                        <Menu.Item key='4'>
                            <Link to='/Apply'>Apply Now</Link>
                        </Menu.Item>
                        <Menu.Item key='5'>
                            <Link to='Login'>Login</Link>
                        </Menu.Item>
                    </Menu.SubMenu>
                    <Menu.SubMenu title='About Company'>
                        <Menu.Item key='6'>
                            option
                        </Menu.Item>
                        <Menu.Item key='7'>
                            option
                        </Menu.Item>
                        <Menu.Item key='8'>
                            option
                        </Menu.Item>
                    </Menu.SubMenu>
                    <Menu.Item>
                        <Link to='Location'>Find Store</Link>
                    </Menu.Item>
                </Menu>
            </Row>
        );
    }
}

export default HomeHeader;