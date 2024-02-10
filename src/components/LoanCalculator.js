import React from 'react';
import {Layout, Row, Col, Select, Form, Card, Button, Table} from 'antd';
import {Link} from 'react-router-dom';
import _ from 'lodash';

class LoanCalculator extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isToggle:false,
            employmentStatus:'',
            netPay:'',
            history:'',
            status:'',
            amount:''
        }
        this.handleEmploymentStatus = this.handleEmploymentStatus.bind(this);
        this.handleNetPay = this.handleNetPay.bind(this);
        this.handleHistory = this.handleHistory.bind(this);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
              this.setState({isToggle:true});
            const {employmentStatus,netPay,history} = this.state;
            const tem = [employmentStatus,netPay,history];
            const score = tem.map(item => {
                return parseInt(item,10);
            });
            const final = _.sum(score);
            if(final<=15){
                this.setState({
                    status:'May Not Approve',
                    amount:'200'
                })
            }else if(15 << final <= 45){
                this.setState({
                    status:'Approved',
                    amount:'500'
                })
            }else{
                this.setState({
                    status:'Approved',
                    amount:'1500'
                })
            }
          }
        });
    }

    handleEmploymentStatus(value){
        this.setState({employmentStatus:value});
    }

    handleNetPay(value){
        this.setState({netPay:value});
    }

    handleHistory(value){
        this.setState({history:value});
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const {Content} = Layout;
        const Option = Select.Option;
        const FormItem = Form.Item;
        const columnPdl = [
            {
                title:'Loan Amount',
                dataIndex:'loanAmount',
                key:'loanAmount',
                align:'center'
            },
            {
                title:'Pay Period',
                dataIndex:'payPeriod',
                key:'payPeriod',
                align:'center'
            },
            {
                title:'All Fees',
                dataIndex:'allFees',
                key:'allFees',
                align:'center'
            },
            {
                title:'Payback Amount',
                dataIndex:'paybackAmount',
                key:'paybackAmount',
                align:'center'
            }
        ];
        const columnApr = [
            {
                title:'Loan Term(7 days)',
                dataIndex:'weeklyPay',
                key:'weeklyPay',
                align:'center'
            },
            {
                title:'Loan Term(14 days)',
                dataIndex:'biweeklyPay',
                key:'biweeklyPay',
                align:'center'
            },
            {
                title:'Loan Term(30 days)',
                dataIndex:'monthlyPay',
                key:'monthlyPay',
                align:'center'
            }
        ]

        const dataPdl = [
            {
                key:'1',
                loanAmount:'$100',
                payPeriod:'14 days',
                allFees:'$15',
                paybackAmount:'$115'
            },
            {
                key:'2',
                loanAmount:'$200',
                payPeriod:'14 days',
                allFees:'$30',
                paybackAmount:'$230'
            },
            {
                key:'3',
                loanAmount:'$300',
                payPeriod:'14 days',
                allFees:'$45',
                paybackAmount:'$345'
            },
            {
                key:'4',
                loanAmount:'$500',
                payPeriod:'14 days',
                allFees:'$75',
                paybackAmount:'$575'
            },
            {
                key:'5',
                loanAmount:'$1000',
                payPeriod:'14 days',
                allFees:'$150',
                paybackAmount:'$1150'
            },
        ];
        const dataApr = [
            {
                key:'1',
                weeklyPay:'782.14%',
                biweeklyPay:'391.07%',
                monthlyPay:'182.50%'
            },
            {
                key:'2',
                weeklyPay:'782.14%',
                biweeklyPay:'391.07%',
                monthlyPay:'182.50%'
            },
            {
                key:'3',
                weeklyPay:'782.14%',
                biweeklyPay:'391.07%',
                monthlyPay:'182.50%'
            }
        ];
        const {isToggle, status, amount} = this.state;
        let result;
        if(isToggle){
            result = (
                <Card title='Your estimate result'>
                    <p>Based on the information you provided, other customers in same situation have been:</p>
                    <p>{status}</p>
                    <p>Loan amount from:</p>
                    <p>{amount}</p>
                </Card>
            )
        }else{
            result = (
                <Card title='Your estimate result'>
                    <p>Please fill the form left to see the result.</p>
                </Card>
            )
        }
        return (
            <Content>
                <Row type="flex" justify="space-around">
                    <Col xs={24} sm={24} md={24} lg={10} className='LoanCalculator'>
                        <h4>Payday Loan Eligibility Calculator</h4>
                        <Form onSubmit={this.handleSubmit} className="calculator-form">
                            <FormItem>
                            {getFieldDecorator('mainsource', {
                                rules: [{ required: true, message: 'Please select your employment status' }],
                            })(
                                <Select onChange={this.handleEmploymentStatus} placeholder='please select your employment status'>
                                <Option value='30'>I'm employed by a company or selfemployed</Option>
                                <Option value='20'>I'm retired and have Canada pention Plan</Option>
                                <Option value='10'>I'm on Employed Insurance currently</Option>
                                <Option value='0'>Others</Option>
                                </Select>
                            )}
                            </FormItem>
                            <FormItem>
                            {getFieldDecorator('amount', {
                                rules: [{ required: true, message: 'Please select your average income amount' }],
                            })(
                                <Select onChange={this.handleNetPay} placeholder='please select your average income amount every two weeks'>
                                <Option value='5'>less than 1000</Option>
                                <Option value='10'>1000-1500</Option>
                                <Option value='20'>1500-2000</Option>
                                <Option value='30'>2000+</Option>
                                </Select>
                            )}
                            </FormItem>
                            <FormItem>
                            {getFieldDecorator('status', {
                                rules: [{ required: true, message: 'Please select your loan status' }],
                            })(
                                <Select onChange={this.handleHistory} placeholder='please select if you have loan with other company'>
                                <Option value='0'>Yes,I have loan with other comany</Option>
                                <Option value='5'>No, this is my first Payday Loan</Option>
                                </Select>
                            )}
                            </FormItem>
                            <FormItem>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Calculate
                            </Button>
                            <Link to='/loans'>Need more?Try personal solution</Link>
                            </FormItem>
                        </Form>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={8} className='CalculateResult'>
                        {result}
                    </Col>
                </Row>
                <Row type="flex" justify="space-around">
                    <Col xs={24} sm={24} md={24} lg={18} className='rateTable'>
                        <Table columns={columnPdl} dataSource={dataPdl}></Table>
                        <Table columns={columnApr} dataSource={dataApr}></Table>
                    </Col>
                </Row>
            </Content>
        );
    }
}

const Calculator = Form.create()(LoanCalculator);
export default Calculator;