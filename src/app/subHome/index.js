import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { BackIcon } from '../../components/icon/index';
import './index.less';

class SubHome extends Component {
	constructor(props) {
		super(props);

		this.state = {
		}
	}	

	render() {
		const salesOptions = {
		  	title: {
		    	text: '商品销售Top5',
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

		const typeOptions = {
		  	title: {
		    	text: '商品品类Top5',
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

		const salesRatioOptions = {
			title: {
		        text: '销售渠道占比',
		        align: 'left',
		    	x: 1,
		    	y: 15,
		    	style: {
		    		fontSize: '.3rem',
		    		color: '#aba3a3'
		    	}
		    },
		    chart: {
		    	type: 'pie',
		    	backgroundColor: '#312727' 
		    },
		    tooltip: {
		    	headerFormat: null,
		        pointFormat: '{point.name}: <b>{point.y}</b>'
		    },
		    plotOptions: {
		        pie: {
		            allowPointSelect: true,  // 可以被选择
		            cursor: 'pointer',       // 鼠标样式
		            dataLabels: {
		                enabled: true,
		                format: '<b>{point.name}</b>:<br/>{point.percentage:.1f} %',
		                style: {
		                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
		                }
		            }
		        }
		    },
		    series: [{
		        name: null,
		        data: [
		            {
		            	name: '销售订单',
		            	y: 23000
		            },
		            {
		            	name: '会员',
		            	y: 10200
		            },
		            {
		                name: '非会员',
		                y: 9800,
		                sliced: true,  // 默认突出
		                selected: true // 默认选中 
		            },
		            {
		            	name: '一级渠道',
		            	y: 7800
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

		const storeSalesOptions = [
			{
				key: 1,
				name: '上海沪太店',
				sales: 13400,
				flow: 20
			},
			{
				key: 2,
				name: '上海沪太店',
				sales: 13400,
				flow: 20
			},
			{
				key: 3,
				name: '上海沪太店',
				sales: 13400,
				flow: 20
			}
		]
		return (
			<div className="home">
				<BackIcon clickHandle={() => this.props.history.goBack()} />
				<div className="homeHeader">
					<span>百安居区域销售额总览</span>
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
					<div className="storeSales">
						<table>
							<thead>
								<tr style={{'backgroundColor':'#a29999'}}>
									<td>门店</td>
									<td>销售额</td>
									<td>客流量</td>
								</tr>
							</thead>
							<tbody>
								{
									storeSalesOptions && storeSalesOptions.map((item) => {
										return (
											<tr key={item.key}>
												<td>{item.name}</td>
												<td>{item.sales}</td>
												<td>{item.flow}</td>
											</tr>
										);
									})
								}	
							</tbody>
						</table>
					</div>
					<div className="timeSalesChart">
						<HighchartsReact
						    highcharts={Highcharts}
						    options={salesOptions}
						/>	
					</div>
					<div className="regionSalesChart">
						<HighchartsReact
						    highcharts={Highcharts}
						    options={typeOptions}
						/>	
					</div>
					<div className="salesRatioChart">
						<HighchartsReact
						    highcharts={Highcharts}
						    options={salesRatioOptions}
						/>	
					</div>
					
				</div>
			</div>
		);
	}
}

export default SubHome;