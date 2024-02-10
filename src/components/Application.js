import React from 'react';
import {Collapse, Row, Col, Layout, Form, Input, Tooltip, Icon, Select, Checkbox, Button, AutoComplete, Alert, Modal} from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;

class Application extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            confirmDirty: false,
            autoCompleteResult: [],
        }
        this.privacyInfo = this.privacyInfo.bind(this);
        this.padAgreement = this.padAgreement.bind(this);
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
    }
    
    handleConfirmBlur = (e) => {
        const value = e.target.value;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    }
    
    compareToFirstPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
            callback('Two passwords that you enter is inconsistent!');
        } else {
            callback();
        }
    }
    
    validateToNextPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
            callback();
    }
    
    handleWebsiteChange = (value) => {
        let autoCompleteResult;
        if (!value) {
            autoCompleteResult = [];
        } else {
            autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
        }
        this.setState({ autoCompleteResult });
    }

    privacyInfo = () => {
        Modal.info({
            title: 'Privacy and Terms',
            content: (
              <div>
                <h1>Privacy Policy</h1>
                <p>Effective date: January 14, 2019</p>
                <p>Cashmart Payday Loan Inc. ("us", "we", or "our") operates the http://www.mycashmart.com website (the "Service").</p>
                <p>This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data..</p>
                <p>We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, accessible from http://www.mycashmart.com</p>
                <h2>Information Collection And Use</h2>
                <p>We collect several different types of information for various purposes to provide and improve our Service to you.</p>
                <h3>Types of Data Collected</h3>
                <h4>Personal Data</h4>
                <p>While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:</p>
                <ul>
                    <li>Email address</li><li>First name and last name</li><li>Phone number</li><li>Address, State, Province, ZIP/Postal code, City</li><li>Cookies and Usage Data</li>
                </ul>
                <h4>Usage Data</h4>
                <p>We may also collect information how the Service is accessed and used ("Usage Data"). This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</p>
                <h4>Tracking & Cookies Data</h4>
                <p>We use cookies and similar tracking technologies to track the activity on our Service and hold certain information.</p>
                <p>Cookies are files with small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. Tracking technologies also used are beacons, tags, and scripts to collect and track information and to improve and analyze our Service.</p>
                <p>You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.</p>
                <p>Examples of Cookies we use:</p>
                <ul>
                    <li><strong>Session Cookies.</strong> We use Session Cookies to operate our Service.</li>
                    <li><strong>Preference Cookies.</strong> We use Preference Cookies to remember your preferences and various settings.</li>
                    <li><strong>Security Cookies.</strong> We use Security Cookies for security purposes.</li>
                </ul>
                <h2>Use of Data</h2>
                <p>Cashmart Payday Loan Inc. uses the collected data for various purposes:</p>    
                <ul>
                    <li>To provide and maintain the Service</li>
                    <li>To notify you about changes to our Service</li>
                    <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
                    <li>To provide customer care and support</li>
                    <li>To provide analysis or valuable information so that we can improve the Service</li>
                    <li>To monitor the usage of the Service</li>
                    <li>To detect, prevent and address technical issues</li>
                </ul>
                <h2>Transfer Of Data</h2>
                <p>Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from your jurisdiction.</p>
                <p>If you are located outside Canada and choose to provide information to us, please note that we transfer the data, including Personal Data, to Canada and process it there.</p>
                <p>Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.</p>
                <p>Cashmart Payday Loan Inc. will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of your data and other personal information.</p>
                <h2>Disclosure Of Data</h2>
                <h3>Legal Requirements</h3>
                <p>Cashmart Payday Loan Inc. may disclose your Personal Data in the good faith belief that such action is necessary to:</p>
                <ul>
                    <li>To comply with a legal obligation</li>
                    <li>To protect and defend the rights or property of Cashmart Payday Loan Inc.</li>
                    <li>To prevent or investigate possible wrongdoing in connection with the Service</li>
                    <li>To protect the personal safety of users of the Service or the public</li>
                    <li>To protect against legal liability</li>
                </ul>

                <h2>Security Of Data</h2>
                <p>The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.</p>

                <h2>Service Providers</h2>
                <p>We may employ third party companies and individuals to facilitate our Service ("Service Providers"), to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used.</p>
                <p>These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.</p>

                <h2>Links To Other Sites</h2>
                <p>Our Service may contain links to other sites that are not operated by us. If you click on a third party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.</p>
                <p>We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.</p>

                <h2>Changes To This Privacy Policy</h2>
                <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
                <p>We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update the "effective date" at the top of this Privacy Policy.</p>
                <p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>

                <h2>Contact Us</h2>
                <p>If you have any questions about this Privacy Policy, please contact us:</p>
                <ul>
                    <li>By email: info@mycashmart.com</li>
                        <li>By visiting this page on our website: http://www.mycashmart.com</li>
                    <li>By phone number: 6045886977</li>
                </ul>
              </div>
            ),
            onOk() {},
          });
    }

    padAgreement = () => {
        Modal.info({
            title: 'Personal Pre-authorized Debit Plan Agreement',
            content: (
              <div>
                <h1>Terms and Coditions</h1>
                <p>1.In this Agreement “I”, “me” and “my” refer to the Payor (Account Holder) who signs above.</p>
                <p>
                    2. This Agreement is provided for the benefit of Cashmart Payday Loan Inc. (the “CashMart”) and my 
                    Financial Institution and is provided in consideration of our Financial Institution agreeing to process 
                    debits against my Account in accordance with the Rules of the Canadian Payments Association. I agree 
                    that any direction I may provide to draw a PAD, and any PAD drawn in accordance with this Agreement, 
                    shall be binding on me as if signed by me.
                </p>
                <p>
                    3. I certify that all information provided with respect to my Account is accurate and I agree to inform 
                    CashMart, in writing, of any change in the Account information provided in this Agreement. In the event
                    of any such change, this Agreement shall continue in respect of any new Account and Financial Institution 
                    to the same extent as if they had been shown on the signed form. I guarantee that the signatories to any
                    written notice of change I provide to CashMart will be all such persons as would be required to sign any
                    cheque drawn on or withdrawal made from the new Account.
                </p>
                <p>
                    4. I agree that my Financial Institution is not required to verify that any PAD has been drawn in 
                    accordance with this Agreement, including the amount, frequency and fulfillment of any purpose to 
                    which the PAD relates. I agree that delivery of this Agreement to CashMart constitutes delivery 
                    by me to my Financial Institution, and that CashMart may deliver a copy of this Agreement to 
                    Ca$hMart financial institution for the purpose of processing a PAD, and I consent to the disclosure of any 
                    information contained in this Agreement to such financial institution.
                </p>
                <p>
                    5. I may revoke or cancel this Agreement at any time by delivering written notice of revocation to 
                    CashMart at least ten (10) business days prior to the next due date of a Personal PAD. This Agreement 
                    applies only to the method of payment, and I agree that revocation of this Agreement does not 
                    terminate or vary in any way any contract or the terms of service under which utilities or other services 
                    are provided to me by CashMart.
                </p>
                <p>
                    6. I may dispute a PAD drawn on my Account where :
                    (i)the PAD was not drawn in accordance with this Agreement, or 
                    (ii)this Agreement was revoked by me. In order to obtain reimbursement by my Financial Institution for a 
                    disputed PAD, I must sign the required form of declaration and deliver it to my Financial Institution in 
                    accordance with Rule H1 of the Canadian Payments Association. In the case of a Personal PAD as 
                    defined in Rule H1, the specified period is 90 calendar days after the date on which the disputed PAD was 
                    drawn on my Account, and in the case of a Business PAD as defined in Rule H1, the specified period is 
                    10 business days after the date on which the disputed PAD was drawn on my Account. I acknowledge that 
                    if a notice is not given in accordance with Rule H1 within these specified periods, any dispute regarding a 
                    PAD must be resolved solely with Ca$hMart and that my Financial Institution will have no liability to me
                    with respect to any such PAD.
                </p>
                <p>
                    7. I warrant and guarantee that, if the Account shown on the reverse is a joint account, all persons who 
                    would be required to sign jointly in order to draw a cheque on the Account or make a withdrawal from the
                    Account have signed this Agreement.
                </p>
                <p>
                    8. I agree to comply with the Rules of the Canadian Payments Association now or hereafter in effect in 
                    relation to PAD authorizations and the drawing and processing of the PAD, and agree to sign any further
                    documentation that may be required pursuant to such rules.
                </p>
                <p>
                    9. I/we understand and accept the foregoing terms and conditions, and agree to participate in CashMart’s
                    Pre-Authorized Debit Plan and authorize CashMart to collect payment of bi-weekly, semi-monthly, 
                    monthly, bi-monthly, or other periodic billings for services supplied by CashMart, by means of 
                    Pre-Authorized Debits (“PADs”) drawn against my/our account(s) at the financial institution shown on 
                    the Agreement form. This Agreement shall apply to any other account and financial institution of which 
                    I/we give written notice to CashMart in accordance with this Agreement.
                </p>
              </div>
            ),
            onOk() {},
          });
    }

    render() {
        const Panel = Collapse.Panel;
        const {Content} = Layout;
        const { getFieldDecorator } = this.props.form;
        const { autoCompleteResult } = this.state;

        const tailFormItemLayout = {
            wrapperCol: {
              xs: {
                span: 24,
                offset: 0,
              },
              sm: {
                span: 16,
                offset: 8,
              },
            },
          };
      
          const websiteOptions = autoCompleteResult.map(website => (
            <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
          ));

        return (
            <Content>
                <Row type="flex" justify="space-around" className='apllicationForm'>
                    <Col xs={24} sm={24} md={24} lg={22}>
                        <Alert message="The Online Application is currently not available" type="error" />
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={22}>
                        <Form onSubmit={this.handleSubmit}>
                            <Collapse defaultActiveKey={['1']}>
                                <Panel header="Personal Infomation" key="1">
                                    <Row gutter={8}>
                                        <Col xs={24} sm={24} md={24} lg={8}>
                                            <FormItem label="Last Name">
                                                {getFieldDecorator('lastName', {
                                                    rules: [{
                                                    required: true, message: 'Please input your last name',
                                                    }],
                                                })(
                                                    <Input />
                                                )}
                                            </FormItem>
                                        </Col>
                                        <Col xs={24} sm={24} md={24} lg={8}>
                                            <FormItem label="First Name">
                                                {getFieldDecorator('firstName', {
                                                    rules: [{
                                                    required: true, message: 'Please input your first name',
                                                    }],
                                                })(
                                                    <Input />
                                                )}
                                            </FormItem>
                                        </Col>
                                        <Col xs={24} sm={24} md={24} lg={8}>
                                            <FormItem label="Birth Day">
                                                {getFieldDecorator('birthDay', {
                                                    rules: [{
                                                    required: true, message: 'Please input your birth day'
                                                    }],
                                                })(
                                                    <Input placeholder='YYYY-MM-DD'/>
                                                )}
                                            </FormItem>
                                        </Col>
                                    </Row>
                                    <FormItem label="E-mail">
                                        {getFieldDecorator('email', {
                                            rules: [{
                                            type: 'email', message: 'The input is not valid E-mail!',
                                            }, {
                                            required: true, message: 'Please input your E-mail!',
                                            }],
                                        })(
                                            <Input/>
                                        )}
                                    </FormItem>
                                    <FormItem label="Password">
                                        {getFieldDecorator('password', {
                                            rules: [{
                                            required: true, message: 'Please input your password!',
                                            }, {
                                            validator: this.validateToNextPassword,
                                            }],
                                        })(
                                            <Input type="password" />
                                        )}
                                    </FormItem>
                                    <FormItem label="Confirm Password">
                                        {getFieldDecorator('confirm', {
                                            rules: [{
                                            required: true, message: 'Please confirm your password!',
                                            }, {
                                            validator: this.compareToFirstPassword,
                                            }],
                                        })(
                                            <Input type="password" onBlur={this.handleConfirmBlur} />
                                        )}
                                    </FormItem>
                                    <FormItem label='Register me a account'>
                                        {getFieldDecorator('register')(
                                            <Checkbox>I have read the <a onClick={this.privacyInfo}>agreement</a></Checkbox>
                                        )}
                                    </FormItem>
                                </Panel>
                                <Panel header="Employment Information" key="2">
                                    <FormItem
                                        label={(
                                            <span>
                                            Employer&nbsp;
                                            <Tooltip title="You can input your company's name">
                                                <Icon type="question-circle-o" />
                                            </Tooltip>
                                            </span>
                                        )}
                                    >
                                        {getFieldDecorator('employer', {
                                            rules: [{ required: true, message: 'Please input your employer!', whitespace: true }],
                                        })(
                                            <Input />
                                        )}
                                    </FormItem>
                                    <FormItem label='Net Income'>
                                        {getFieldDecorator('netIncome', {
                                            rules: [{ required: true, message: 'Please select your average income amount' }],
                                        })(
                                            <Select placeholder='please select your average income amount every two weeks'>
                                                <Option value='great'>less than 1000</Option>
                                                <Option value='good'>1000-1500</Option>
                                                <Option value='decent'>1500-2000</Option>
                                                <Option value='improve'>2000+</Option>
                                            </Select>
                                        )}
                                    </FormItem>
                                    <FormItem label="Employer Phone Number">
                                        {getFieldDecorator('phone', {
                                            rules: [{ required: true, message: 'Please input your employer phone number!' }],
                                        })(
                                            <Input style={{ width: '100%' }} />
                                        )}
                                    </FormItem>
                                    <FormItem label="Company Website">
                                        {getFieldDecorator('website', {
                                            rules: [{ required: false, message: 'Please input website!' }],
                                        })(
                                            <AutoComplete
                                            dataSource={websiteOptions}
                                            onChange={this.handleWebsiteChange}
                                            placeholder="website"
                                            >
                                            <Input />
                                            </AutoComplete>
                                        )}
                                    </FormItem>
                                </Panel>
                                <Panel header="Bank Infomation" key="3">
                                    <Row gutter={8}>
                                        <Col xs={24} sm={24} md={24} lg={8}>
                                            <FormItem label="Transit Number">
                                                {getFieldDecorator('transitNumber', {
                                                    rules: [{
                                                    required: true, message: 'Please input your bank transit number correctly', len: 5,
                                                    }],
                                                })(
                                                    <Input placeholder='Transit Number'/>
                                                )}
                                            </FormItem>
                                        </Col>
                                        <Col xs={24} sm={24} md={24} lg={8}>
                                            <FormItem label="Insititution Number">
                                                {getFieldDecorator('insititutionNumber', {
                                                    rules: [{
                                                    required: true, message: 'Please input your bank insititution number correctly', len: 3,
                                                    }],
                                                })(
                                                    <Input placeholder='Insititution Number' />
                                                )}
                                            </FormItem>
                                        </Col>
                                        <Col xs={24} sm={24} md={24} lg={8}>
                                            <FormItem label="Account Number">
                                                {getFieldDecorator('accountNumber', {
                                                    rules: [{
                                                    required: true, message: 'Please input your account number correctly', min: 7, max: 12,
                                                    }],
                                                })(
                                                    <Input placeholder='Account Number'/>
                                                )}
                                            </FormItem>
                                        </Col>
                                    </Row>
                                    <FormItem {...tailFormItemLayout}>
                                        {getFieldDecorator('agreement', {
                                            valuePropName: 'checked',
                                        })(
                                            <Checkbox>I have read the <a onClick={this.padAgreement}>agreement</a></Checkbox>
                                        )}
                                    </FormItem>
                                    <FormItem {...tailFormItemLayout}>
                                        <Button type="primary" htmlType="submit">Apply</Button>
                                    </FormItem>
                                </Panel>
                            </Collapse>
                        </Form>
                    </Col>
                </Row>
            </Content>
        );
    }
}

const ApplicationForm = Form.create()(Application);
export default ApplicationForm;