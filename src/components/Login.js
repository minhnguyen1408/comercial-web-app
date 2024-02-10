import React from 'react';
import {Row, Col, Form, Icon, Input, Button, Checkbox} from 'antd';
import {Link} from 'react-router-dom';

class Login extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
    }


    render() {
        const FormItem = Form.Item;
        const { getFieldDecorator } = this.props.form;
        return (
            <Row type="flex" justify="space-around" className='LoginRow'>
                <Col xs={22} sm={22} md={22} lg={8} className='LoginForm'>
                    <Form onSubmit={this.handleSubmit}>
                        <FormItem>
                        {getFieldDecorator('userName', {
                            rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                        )}
                        </FormItem>
                        <FormItem>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your Password!' }],
                        })(
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                        )}
                        </FormItem>
                        <FormItem>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(
                            <Checkbox>Remember me</Checkbox>
                        )}
                        <br />
                        <Link to='/Apply'>Forget Password</Link><br />
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button>
                        Or <Link to='/Apply'>register now!</Link>
                        </FormItem>
                    </Form>
                </Col>
            </Row>
        );
    }
}

const LoginForm = Form.create()(Login);

export default LoginForm;