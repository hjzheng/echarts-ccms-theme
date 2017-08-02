(function (root, factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as an anonymous module.
		define(['exports', 'echarts'], factory);
	} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
		// CommonJS
		factory(exports, require('echarts'));
	} else {
		// Browser globals
		factory({}, root.echarts);
	}
}(this, function (exports, echarts) {
	var log = function (msg) {
		if (typeof console !== 'undefined') {
			console && console.error && console.error(msg);
		}
	};
	if (!echarts) {
		log('ECharts is not Loaded');
		return;
	}
	echarts.registerTheme('ccms', {
		"color": [
			"#52a0e7",
			"#63d0d0",
			"#ffcd58",
			"#99d2ed",
			"#3f73c3",
			"#e6c8a7"
		],
		"backgroundColor": "rgba(252,252,252,0)",
		"textStyle": {},
		"title": {
			"textStyle": {
				"color": "#666666"
			},
			"subtextStyle": {
				"color": "#999999"
			}
		},
		"line": {
			"itemStyle": {
				"normal": {
					"borderWidth": "2"
				}
			},
			"lineStyle": {
				"normal": {
					"width": "3"
				}
			},
			"symbolSize": "3",
			"symbol": "circle",
			"smooth": false
		},
		"radar": {
			"itemStyle": {
				"normal": {
					"borderWidth": "2"
				}
			},
			"lineStyle": {
				"normal": {
					"width": "3"
				}
			},
			"symbolSize": "8",
			"symbol": "emptyCircle",
			"smooth": false
		},
		"bar": {
			"itemStyle": {
				"normal": {
					"barBorderWidth": 0,
					"barBorderColor": "#ccc"
				},
				"emphasis": {
					"barBorderWidth": 0,
					"barBorderColor": "#ccc"
				}
			}
		},
		"pie": {
			"itemStyle": {
				"normal": {
					"borderWidth": 0,
					"borderColor": "#ccc"
				},
				"emphasis": {
					"borderWidth": 0,
					"borderColor": "#ccc"
				}
			}
		},
		"scatter": {
			"itemStyle": {
				"normal": {
					"borderWidth": 0,
					"borderColor": "#ccc"
				},
				"emphasis": {
					"borderWidth": 0,
					"borderColor": "#ccc"
				}
			}
		},
		"boxplot": {
			"itemStyle": {
				"normal": {
					"borderWidth": 0,
					"borderColor": "#ccc"
				},
				"emphasis": {
					"borderWidth": 0,
					"borderColor": "#ccc"
				}
			}
		},
		"parallel": {
			"itemStyle": {
				"normal": {
					"borderWidth": 0,
					"borderColor": "#ccc"
				},
				"emphasis": {
					"borderWidth": 0,
					"borderColor": "#ccc"
				}
			}
		},
		"sankey": {
			"itemStyle": {
				"normal": {
					"borderWidth": 0,
					"borderColor": "#ccc"
				},
				"emphasis": {
					"borderWidth": 0,
					"borderColor": "#ccc"
				}
			}
		},
		"funnel": {
			"itemStyle": {
				"normal": {
					"borderWidth": 0,
					"borderColor": "#ccc"
				},
				"emphasis": {
					"borderWidth": 0,
					"borderColor": "#ccc"
				}
			}
		},
		"gauge": {
			"itemStyle": {
				"normal": {
					"borderWidth": 0,
					"borderColor": "#ccc"
				},
				"emphasis": {
					"borderWidth": 0,
					"borderColor": "#ccc"
				}
			}
		},
		"candlestick": {
			"itemStyle": {
				"normal": {
					"color": "#e6a0d2",
					"color0": "transparent",
					"borderColor": "#e6a0d2",
					"borderColor0": "#3fb1e3",
					"borderWidth": "2"
				}
			}
		},
		"graph": {
			"itemStyle": {
				"normal": {
					"borderWidth": 0,
					"borderColor": "#ccc"
				}
			},
			"lineStyle": {
				"normal": {
					"width": "1",
					"color": "#cccccc"
				}
			},
			"symbolSize": "8",
			"symbol": "emptyCircle",
			"smooth": false,
			"color": [
				"#52a0e7",
				"#63d0d0",
				"#ffcd58",
				"#99d2ed",
				"#3f73c3",
				"#e6c8a7"
			],
			"label": {
				"normal": {
					"textStyle": {
						"color": "#ffffff"
					}
				}
			}
		},
		"map": {
			"itemStyle": {
				"normal": {
					"areaColor": "#eeeeee",
					"borderColor": "#aaaaaa",
					"borderWidth": 0.5
				},
				"emphasis": {
					"areaColor": "rgba(63,177,227,0.25)",
					"borderColor": "#3fb1e3",
					"borderWidth": 1
				}
			},
			"label": {
				"normal": {
					"textStyle": {
						"color": "#ffffff"
					}
				},
				"emphasis": {
					"textStyle": {
						"color": "rgb(63,177,227)"
					}
				}
			}
		},
		"geo": {
			"itemStyle": {
				"normal": {
					"areaColor": "#eeeeee",
					"borderColor": "#aaaaaa",
					"borderWidth": 0.5
				},
				"emphasis": {
					"areaColor": "rgba(63,177,227,0.25)",
					"borderColor": "#3fb1e3",
					"borderWidth": 1
				}
			},
			"label": {
				"normal": {
					"textStyle": {
						"color": "#ffffff"
					}
				},
				"emphasis": {
					"textStyle": {
						"color": "rgb(63,177,227)"
					}
				}
			}
		},
		"categoryAxis": {
			"axisLine": {
				"show": false,
				"lineStyle": {
					"color": "#333"
				}
			},
			"axisTick": {
				"show": false,
				"lineStyle": {
					"color": "#333"
				}
			},
			"axisLabel": {
				"show": true,
				"textStyle": {
					"color": "#666"
				}
			},
			"splitLine": {
				"show": false,
				"lineStyle": {
					"color": [
						"#ccc"
					]
				}
			},
			"splitArea": {
				"show": false,
				"areaStyle": {
					"color": [
						"rgba(250,250,250,0.3)",
						"rgba(200,200,200,0.3)"
					]
				}
			}
		},
		"valueAxis": {
			"axisLine": {
				"show": false,
				"lineStyle": {
					"color": "#333"
				}
			},
			"axisTick": {
				"show": false,
				"lineStyle": {
					"color": "#333"
				}
			},
			"axisLabel": {
				"show": true,
				"textStyle": {
					"color": "#666"
				}
			},
			"splitLine": {
				"show": true,
				"lineStyle": {
					"color": [
						"#DFE2E5"
					]
				}
			},
			"splitArea": {
				"show": false,
				"areaStyle": {
					"color": [
						"rgba(250,250,250,0.3)",
						"rgba(200,200,200,0.3)"
					]
				}
			}
		},
		"logAxis": {
			"axisLine": {
				"show": true,
				"lineStyle": {
					"color": "#333"
				}
			},
			"axisTick": {
				"show": true,
				"lineStyle": {
					"color": "#333"
				}
			},
			"axisLabel": {
				"show": true,
				"textStyle": {
					"color": "#333"
				}
			},
			"splitLine": {
				"show": true,
				"lineStyle": {
					"color": [
						"#ccc"
					]
				}
			},
			"splitArea": {
				"show": false,
				"areaStyle": {
					"color": [
						"rgba(250,250,250,0.3)",
						"rgba(200,200,200,0.3)"
					]
				}
			}
		},
		"timeAxis": {
			"axisLine": {
				"show": true,
				"lineStyle": {
					"color": "#333"
				}
			},
			"axisTick": {
				"show": false,
				"lineStyle": {
					"color": "#333"
				}
			},
			"axisLabel": {
				"show": true,
				"textStyle": {
					"color": "#333"
				}
			},
			"splitLine": {
				"show": true,
				"lineStyle": {
					"color": [
						"#ccc"
					]
				}
			},
			"splitArea": {
				"show": false,
				"areaStyle": {
					"color": [
						"rgba(250,250,250,0.3)",
						"rgba(200,200,200,0.3)"
					]
				}
			}
		},
		"toolbox": {
			"iconStyle": {
				"normal": {
					"borderColor": "#999999"
				},
				"emphasis": {
					"borderColor": "#666666"
				}
			}
		},
		"legend": {
			"right": 0, // 不生效 ?
			"textStyle": {
				"color": "#3d3d3d"
			}
		},
		"grid": {
			"left": "35",
			"right": "5"
		},
		"tooltip": {
			"axisPointer": {
				"lineStyle": {
					"color": "#D0D0D0",
					"width": 1
				},
				"crossStyle": {
					"color": "#D0D0D0",
					"width": 1
				}
			}
		},
		"timeline": {
			"lineStyle": {
				"color": "#626c91",
				"width": 1
			},
			"itemStyle": {
				"normal": {
					"color": "#626c91",
					"borderWidth": 1
				},
				"emphasis": {
					"color": "#626c91"
				}
			},
			"controlStyle": {
				"normal": {
					"color": "#626c91",
					"borderColor": "#626c91",
					"borderWidth": 0.5
				},
				"emphasis": {
					"color": "#626c91",
					"borderColor": "#626c91",
					"borderWidth": 0.5
				}
			},
			"checkpointStyle": {
				"color": "#3fb1e3",
				"borderColor": "rgba(63,177,227,0.15)"
			},
			"label": {
				"normal": {
					"textStyle": {
						"color": "#626c91"
					}
				},
				"emphasis": {
					"textStyle": {
						"color": "#626c91"
					}
				}
			}
		},
		"visualMap": {
			"color": [
				"#2a99c9"
			]
		},
		"dataZoom": {
			"backgroundColor": "rgba(255,255,255,0)",
			"dataBackgroundColor": "rgba(222,222,222,1)",
			"fillerColor": "rgba(114,230,212,0.25)",
			"handleColor": "#cccccc",
			"handleSize": "100%",
			"textStyle": {
				"color": "#999999"
			}
		},
		"markPoint": {
			"label": {
				"normal": {
					"textStyle": {
						"color": "#ffffff"
					}
				},
				"emphasis": {
					"textStyle": {
						"color": "#ffffff"
					}
				}
			}
		}
	});
}));
