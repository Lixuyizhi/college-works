// 左一图：进口份额占比
(function() {
  var chartDom = document.getElementById('左一');
  var myChart = echarts.init(chartDom);
  var option;

  option = {
    color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true }
      },
      iconStyle: {
        borderColor: '#fff' 
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: [
          '2008',
          '2009',
          '2010',
          '2011',
          '2012',
          '2013',
          '2014',
          '2015',
          '2016',
          '2017',
          '2018',
          '2019',
          '2020',
          '2021',
          '2022',
          '2023'
        ],
        axisLabel: { 
          color: '#fff',
          fontSize: 14
        },
        axisLine: { 
          lineStyle: {
            color: '#fff'
          }
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        min: 0,
        max: 1,
        axisLabel: { 
          color: '#fff',
          fontSize: 14
        },
        axisLine: { 
          lineStyle: {
            color: '#fff'
          }
        },
        splitLine: { 
          lineStyle: {
            color: '#fff'
          }
        }
      }
    ],
    series: [
      {
        name: '进口份额占比',
        type: 'line',
        stack: 'Total',
        smooth: true,
        lineStyle: {
          width: 0
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgb(128, 255, 165)'
            },
            {
              offset: 1,
              color: 'rgb(1, 191, 236)'
            }
          ])
        },
        emphasis: {
          focus: 'series'
        },
        data: [
          0.853324055, 1, 0.766489634, 0.755613693, 0.97469289, 0.478024292,
          0.264529347, 0.280170483, 0.26860586, 0.118281654, 0.021791349, 0,
          0.323944808, 0.051550399, 0.599277278, 0.727851968
        ]
      }
    ]
  };

  option && myChart.setOption(option);

  // 4. 让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();

// 左二图：进口国家风险
(function() {
  var chartDom = document.getElementById('左二');
  var myChart = echarts.init(chartDom);
  var option;

  const yAxisData = [0.096989383, 0.024652655, 0.186838811, 0, 0.427612815, 0.260975422, 0.323755921, 0.359251678, 0.378205165, 0.188427464, 0.503506675, 0.64173361, 0.725375463, 0.454549829, 1, 0.990284178];

  // 定义横坐标的年份范围
  const years = [];
  for (let year = 2008; year <= 2023; year++) {
    years.push(year);
  }

  const colors = ['#ff7f0e', '#2ca02c', '#d62728', '#9467bd', '#8c564b', '#e377c2', '#7f7f7f', '#bcbd22', '#17becf', '#1f77b4', '#ff9896', '#aec7e8', '#ffbb78', '#98df8a', '#c5b0d5', '#ff9896'];

  option = {
    xAxis: {
      type: 'category',
      data: years, // 设置横坐标为年份范围
      axisLabel: {
        interval: 0, // 每个刻度都显示
        rotate: 45, // 旋转45度，防止文字重叠
        color: '#fff',
        fontSize: 14
      },
      axisLine: { 
        lineStyle: {
          color: '#fff'
        }
      }
    },
    yAxis: {
      minInterval: 0.1, // 设置纵坐标间隔
      axisLabel: {
        show: true, // 显示纵坐标的具体数据
        formatter: '{value}', // 设置纵坐标的格式，这里显示具体数值
        color: '#fff',
        fontSize: 14
      },
      axisLine: {
        lineStyle: {
          color: '#fff'
        }
      },
      splitLine: {
        lineStyle: {
          color: '#fff'
        }
      }
    },
    animationDurationUpdate: 500,
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true }
      },
      iconStyle: {
        borderColor: '#fff' 
      }
    },
    series: {
      type: 'bar',
      data: yAxisData, // 设置纵坐标数据
      itemStyle: {
        color: function (params) {
          return colors[params.dataIndex]; // 根据柱子的索引选择对应的颜色
        }
      },
      emphasis: {
        itemStyle: {
          opacity: 0.9 // 高亮时的不透明度
        }
      },
      bevelSize: 0.2 // 圆柱的凸起大小，设置为0表示圆柱为平面
    }
  };

  option && myChart.setOption(option);

  // 4. 让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();

// 中间图：贸易安全供应风险指数
(function() {
  var chartDom = document.getElementById('中间');
  var myChart = echarts.init(chartDom);
  var option;

  let dataAxis = [
    '2009',
    '2010',
    '2011',
    '2012',
    '2013',
    '2014',
    '2015',
    '2016',
    '2017',
    '2018',
    '2019',
    '2020',
    '2021',
    '2022',
    '2023'
  ];
  let data = [7.858821163, 8.644255936, 6.911883157, 9.865431955, 5.309103713, 3.551087883, 5.138083046, 3.905764864, 1.961493103, 3.490876579, 4.421726332, 9.868094517, 9.603029265, 14.05318449, 14.563539495];
  let yMax = 15;
  let dataShadow = [];
  for (let i = 0; i < data.length; i++) {
    dataShadow.push(yMax);
  }
  option = {
    xAxis: {
      data: dataAxis,
      axisLabel: {
        inside: true,
        color: '#fff',
        fontSize: 14
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      z: 10
    },
    yAxis: {
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        color: '#fff',
        fontSize: 14
      }
    },
    dataZoom: [
      {
        type: 'inside'
      }
    ],
    legend: {
      data: ['历年贸易安全供应风险指数(%)'],
      textStyle: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
      }
    },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true }
      },
      iconStyle: {
        borderColor: '#fff' 
      }
    },
    series: [
      {
        name: '历年贸易安全供应风险指数(%)',
        type: 'bar',
        showBackground: true,
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#83bff6' },
            { offset: 0.5, color: '#188df0' },
            { offset: 1, color: '#188df0' }
          ]),
          barBorderRadius: [5, 5, 0, 0]
        },
        emphasis: {
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#2378f7' },
              { offset: 0.7, color: '#2378f7' },
              { offset: 1, color: '#83bff6' }
            ])
          }
        },
        data: data
      }
    ]
  };
  const zoomSize = 6;
  myChart.on('click', function (params) {
    console.log(dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)]);
    myChart.dispatchAction({
      type: 'dataZoom',
      startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
      endValue:
        dataAxis[Math.min(params.dataIndex + zoomSize / 2, data.length - 1)]
    });
  });

  option && myChart.setOption(option);
  
  // 4. 让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();

// 右一图：进口价格波动指数
(function() {
  var chartDom = document.getElementById('右一');
  var myChart = echarts.init(chartDom);
  var option;

  const seriesData1 = [
    0.319278883, 0.576056478, 0.511233123, 0.16451258, 0.145553824, 0.015956101,
    0.284257932
  ];
  const seriesData2 = [
    0, 0.085589502, 0.117908346, 0.092644822, 0.265241329, 1, 0.21135962,
    0.310384703
  ];

  // 定义年份范围
  const years1 = [];
  for (let year = 2009; year <= 2016; year++) {
    years1.push(year);
  }

  const years2 = [];
  for (let year = 2017; year <= 2023; year++) {
    years2.push(year);
  }

  option = {
    tooltip: {},
    angleAxis: [
      {
        type: 'category',
        polarIndex: 0,
        startAngle: 90,
        endAngle: 0,
        data: years1, // 更新第一个系列的角度轴为2009年到2016年的年份范围
        axisLine: {
          lineStyle: {
            color: '#fff' 
          }
        },
        axisLabel: {
          color: '#fff',
          fontSize: 14
        }
      },
      {
        type: 'category',
        polarIndex: 1,
        startAngle: -90,
        endAngle: -180,
        data: years2,
        axisLine: {
          lineStyle: {
            color: '#fff'
          }
        },
        axisLabel: {
          color: '#fff',
          fontSize: 14
        }
      }
    ],
    radiusAxis: [
      { polarIndex: 0, axisLabel: { color: '#fff' } }, 
      { polarIndex: 1, axisLabel: { color: '#fff' } } 
    ],
    polar: [{}, {}],
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true }
      },
      iconStyle: {
        borderColor: '#fff' 
      }
    },
    series: [
      {
        type: 'bar',
        polarIndex: 0,
        data: seriesData1, // 更新第一个系列的数据
        coordinateSystem: 'polar',
        itemStyle: {
          color: '#FAD860' 
        }
      },
      {
        type: 'bar',
        polarIndex: 1,
        data: seriesData2, // 更新第二个系列的数据
        coordinateSystem: 'polar',
        itemStyle: {
          color: '#60ACFC'
        }
      }
    ]
  };

  option && myChart.setOption(option);
  // 4. 让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();


// 右二图：进口国家集中度
(function() {
  var chartDom = document.getElementById('右二');
  var myChart = echarts.init(chartDom);
  var option;

  const yAxisData = [
    0.049, 0.228, 0.199, 0.116, 0.406, 0.177,
    0.106, 0.104, 0.134, 0, 0.055, 0.15,
    0.659, 0.415, 1, 0.884
  ];

  // 定义横坐标的年份范围
  const years = [];
  for (let year = 2008; year <= 2023; year++) {
    years.push(year);
  }

  option = {
    xAxis: {
      type: 'category',
      data: years, // 设置横坐标为年份范围
      axisLine: {
        lineStyle: {
          color: '#fff'
        }
      },
      axisLabel: {
        color: '#fff',
        fontSize: 14
      }
    },
    yAxis: {
      type: 'value',
      axisLine: {
        lineStyle: {
          color: '#fff'
        }
      },
      axisLabel: {
        color: '#fff',
        fontSize: 14
      }
    },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true }
      },
      iconStyle: {
        borderColor: '#fff' 
      }
    },
    series: [
      {
        data: yAxisData,
        type: 'line',
        symbol: 'triangle',
        symbolSize: 20,
        itemStyle: {
          borderWidth: 3,
          borderColor: '#EE6666',
          color: '#FFFF00'
        },
        label: {
          show: true, // 显示标签
          formatter: function(params) {
            // 显示纵坐标数据
            return params.value;
          }
        },
        lineStyle: {
          width: 4,
          type: 'dashed',
          color: '#FFFF00'
        }
      }
    ]
  };

  option && myChart.setOption(option);
  // 4. 让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();