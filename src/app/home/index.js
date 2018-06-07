import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link, Redirect } from 'react-router-dom';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import * as Scroll from 'react-scroll';
import './index.less';

class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {
			redirect: false
		}
	}

	componentWillMount() {
		if(!window.localStorage.username) {
			this.setState({
				redirect: true
			})
		}
	}

	componentDidMount() {
		console.log(document.body.scrollTop || document.documentElement.scrollTop || window.pageYOffset)
		//确保滚动条在顶部
  		// window.scrollTo(0, 0)
  		Scroll.animateScroll.scrollToTop();
	}	

	render() {
		if(this.state.redirect) {
			return <Redirect push to="/login" />
		}
		const timeOptions = {
		  	title: {
		    	text: '时段销售概括',
		    	align: 'left',
		    	x: 1,
		    	y: 15,
		    	style: {
		    		fontSize: '.3rem',
		    		color: '#aba3a3'
		    	}
		  	},
		  	chart: {  
                backgroundColor: '#312727' 
            },  
  			xAxis: {
                categories: ['上海区', '北京区', '华北区', '江北区', '华南区']  
            },
            yAxis: {
				min: 0,
				title: {
						text: '销售量 (元)'
				}
			},
			series: [{
					name: '销售额',
					data: [43934, 52503, 57177, 69658, 97031]
			}],
            credits: {
			    enabled: false // 禁用版权信息
			},
			legend: {
				enabled: false
			}
		}

		const regionOptions = {
		  	title: {
		    	text: '区域销售概括',
		    	align: 'left',
		    	x: 1,
		    	y: 15,
		    	style: {
		    		fontSize: '.3rem',
		    		color: '#aba3a3'
		    	}
		  	},
		  	chart: {  
                type: 'column',
                backgroundColor: '#312727' 
            },  
  			xAxis: {
                categories: ['上海区', '北京区', '华北区', '江北区', '华南区']  
            },
            yAxis: {
				min: 0,
				title: {
						text: '销售量 (元)'
				}
			},
            plotOptions: {  
                series: {  
                    cursor: 'pointer',  
					point: {  
                        events: {  
                            click: function () {
                            	let params = this.options.name && this.options.key ? '?'+this.options.name+'='+this.options.key : '';
                            	window.location.href = './subHome' + params;
                            }  
                        }  
                    }  
                }  
            },
            series: [{  
                data: [
	                {  
	                    y: 100.8,   
	                    name: 'region',
            			key: '上海区'
	                }, 
	                {
	                    y: 50.8,
	                    name: 'region',
            			key: '北京区' 
	                },
	                {
	                    y: 145.8,
	                    name: 'region',
            			key: '华北区' 
	                },
	                {  
	                    y: 46.8,  
	                    name: 'region',
            			key: '江北区' 
	                },
	                {
	                   	y: 125.2,
	                   	name: 'region',
            			key: '华南区'
	                 }
	            ]
            }],
            credits: {
			    enabled: false // 禁用版权信息
			},
			legend: {
				enabled: false
			}
		}

		return (
			<div className="home">
				<div className="homeHeader">
					<span>百安居销售额总览</span>
				</div>
				<div className="homeContent">
					<div className="sales">
						<div className="totalSales">
							<span className="totalSalesTitle">销售额</span>
							<span className="totalSalesValue">246K</span>
						</div>
						<div className="averageSales">
							<span className="averageSalesTitle">客流量</span>
							<span className="averageSalesValue">246K</span>
						</div>
					</div>
					<div className="timeSalesChart">
						<HighchartsReact
						    highcharts={Highcharts}
						    options={timeOptions}
						/>	
					</div>
					<div className="regionSalesChart">
						<HighchartsReact
						    highcharts={Highcharts}
						    options={regionOptions}
						/>	
					</div>
					
				</div>
			</div>
		);
	}
}

export default connect(
	(state) => {
		return {store: state}
	},
	// (dispatch) => bindActionCreators({...actions}, dispatch)
)(Home);