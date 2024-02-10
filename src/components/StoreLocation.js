import React from 'react';
import {Layout, Row, Col, Select, Input, Button} from 'antd';
import MapWrapper from './MapWrapper';
import {DirectionsRenderer, Marker, InfoWindow} from 'react-google-maps';
 
const {maps} = window.google;

class StoreLocation extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            city:'0',
            directions:undefined,
            input:undefined,
            isCityChange:false
        }
        this.handleCityChange = this.handleCityChange.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleDirection = this.handleDirection.bind(this);
    }

    handleCityChange(value){
        this.setState({
            city:value,
            isCityChange:true
        });
    }

    handleInput(e){
        e.preventDefault();
        this.setState({input:e.target.value})
    }

    handleDirection(){
        this.setState({
            isCityChange:false
        })
        const input = this.state.input;
        const des = (this.state.city == '1')? '2245 commercial drive,vancouver,bc' : '10392 king george blvd,surrey,bc';
        const DirectionsService = new maps.DirectionsService();
        DirectionsService.route({
            origin:input,
            destination:des,
            travelMode: maps.TravelMode.DRIVING
        },(result,status) => {
            if(status === maps.DirectionsStatus.OK){
                this.setState({
                    directions:result
                })
            }else{
                console.log('error')
            }
        });
    }

    render() {
        const {Content} = Layout;
        const Option = Select.Option;
        const city = this.state.city;
        const isCityChange = this.state.isCityChange;
        const cityInfo = [
            {
                'city':'surrey',
                'latlng':{lat: 49.191362, lng:-122.844795},
                'name':'CashMart Surrey',
                'address':'10392 King George Blvd, Surrey, BC'
            },
            {
                'city':'vancouver',
                'latlng':{lat: 49.264435,lng: -123.069900},
                'name':'CashMart Vancouver',
                'address':'2245 Commercial Drive,Vancouver,BC'
            }
        ];
        let map;
        if(!isCityChange){
            const latlng = (cityInfo[city].city == 'surrey')? {lat: 49.191362, lng:-122.844795} : {lat: 49.264435,lng: -123.069900}
            map = (
                        <MapWrapper
                            loadingElement={<div style={{ height: `100%` }} />}
                            containerElement={<div style={{ height: `25em` }} />}
                            mapElement={<div style={{ height: `100%` }} />}
                            defaultZoom={18}
                            defaultCenter = {latlng}
                        >
                            <Marker position={latlng}>
                                <InfoWindow>
                                    <div>
                                        <h4>{cityInfo[city].name}</h4>
                                        <p>{cityInfo[city].address}</p>
                                    </div>
                                </InfoWindow>
                            </Marker>
                            <DirectionsRenderer directions={this.state.directions}></DirectionsRenderer>
                        </MapWrapper>
            )
        }else{
            const latlng = (cityInfo[city].city == 'surrey')? {lat: 49.191362, lng:-122.844795} : {lat: 49.264435,lng: -123.069900}
            map = (
                <MapWrapper
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `25em` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                    defaultZoom={16}
                    defaultCenter={latlng}
                >
                    <Marker position={latlng}>
                        <InfoWindow>
                            <div>
                                <h4>{cityInfo[city].name}</h4>
                                <p>{cityInfo[city].address}</p>
                            </div>
                        </InfoWindow>
                    </Marker>
                </MapWrapper>
            )
        }
        let address;
        if(city == 0){
            address = (
                <Col xs={24} sm={24} md={24} lg={24} className='storeInfo'>
                    <h2>Address</h2>
                    <h4>10392b King George Blvd, Surrey, V3T 2W5</h4>
                    <h2>Contact</h2>
                    <h4>604-588-6977</h4>
                    <h4>store701@mycashmart.com</h4>
                    <h2>Business Hours</h2>
                    <h4>Mon-Sat 8:30-20:00</h4>
                    <h4>Sunday 11:00-18:00</h4>
                </Col>
            )
        }else{
            address = (
                <Col xs={24} sm={24} md={24} lg={24} className='storeInfo'>
                    <h2>Address</h2>
                    <h4>2245 Commercial Drive,Vancouver, V5N 4B6</h4>
                    <h2>Contact</h2>
                    <h4>604-253-9698</h4>
                    <h4>store702@mycashmart.com</h4>
                    <h2>Business Hours</h2>
                    <h4>Mon-Sat 9:00-20:00</h4>
                    <h4>Sunday 10:00-17:00</h4>
                </Col>
            )
        }
        return (
            <Content>
                <Row type="flex" justify="space-around">
                    <Col xs={24} sm={24} md={24} lg={5} className='locationSelector'>
                        <h2>Please Select Your City:</h2>
                        <Select defaultValue="surrey" style={{width:'24em'}} onChange={this.handleCityChange}> 
                            <Option value="0">Surrey</Option>
                            <Option value="1">Vancouver</Option>
                        </Select>
                        <Input placeholder='please input your postcode or address' onChange={this.handleInput}></Input>
                        <Button type='primary' onClick={this.handleDirection}>Get Direction</Button>
                        <Row>
                            {address}
                        </Row>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={15}>
                        {map}
                    </Col>
                </Row>
            </Content>
        );
    }
}

export default StoreLocation;