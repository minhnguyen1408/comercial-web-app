import React from 'react';
import {Row, Col} from 'antd';

class MainFooter extends React.Component{
    render() {
        return (
            <Row className='footer'>
                <Col xs={18} sm={10} md={10} lg={10}>
                    <h5>&copy; 2019 Cashmart Payday Loan Inc. All Rights Reserved.</h5>
                </Col>
                <Col xs={24} sm={24} md={24} lg={24}>
                    <p>
                    Free $200.00 loan offer valid for the customer's first payday loan. Offer only applies to the loan fees on a $200.00 loan;
                    if a loan exceeds $200.00, CashMart's applicable fees for the portion of the loan in excess of $200.00 will apply.
                    Offer is non-transferrable, Offer valid for a limited time only and may be discontinued by CashMart at any time. Check with any store location.
                    Not valid with any other offers. Limit one offer per customer during the promotional period. No cash value. No substitutions. To receive this offer,
                    customers must repay their advance in cash on or before their Loan due date, otherwise interest will accrue from the date the loan was originated. To qualify for a payday loan, minimum 
                    net income requirements will apply and may vary by province. Other conditions may also apply. Ask a CashMart Customer Service Representative for details.  
                    British Columbia residents: The APR on a $300.00 loan for 14 days in BC is 391.07% at the rate of $15.00 per $100 borrowed. BC Payday Licence #69346
                    </p>
                </Col>
            </Row>
        )
    }
}

export default MainFooter;