// 左一图：资源年产量
(function() {
  var chartDom = document.getElementById('左一');
  var myChart = echarts.init(chartDom);
  var option;

  option = {
    dataset: {
      source: [
        ['amount', 'year'],
        [11, 2004],
        [12, 2005],
        [12.5, 2006],
        [13.5, 2007],
        [11, 2008],
        [11.5, 2009],
        [12, 2010],
        [12, 2011],
        [11, 2012],
        [11, 2013],
        [9.6, 2014],
        [11, 2015],
        [9.2, 2016],
        [9.3, 2017],
        [9, 2018],
        [8.45, 2019],
        [8.1, 2020],
        [9.1, 2021],
        [7.1, 2022],
        [6.8, 2023]
      ]
    },
    grid: { containLabel: true },
    xAxis: { 
      axisLabel: {
        color: '#fff',
        fontSize: 14
      }
    },
    yAxis: { 
      type: 'category',
      axisLabel: {
        color: '#fff',
        fontSize: 14 
      }
    },
    visualMap: {
      orient: 'horizontal',
      left: 'center',
      min: 6,
      max: 14,
      text: ['高产量', '低产量'],
      dimension: 0,
      inRange: {
        color: ['#65B581', '#FFCE34', '#FD665F']
      },
      textStyle: {
        color: '#fff',
        fontSize: 16
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
        type: 'bar',
        encode: {
          x: 'amount',
          y: 'year'
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


// 左二图：资源保障程度
(function() {
  var chartDom = document.getElementById('左二');
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
    legend: {
      data: []
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
          '2004',
          '2005',
          '2006',
          '2007',
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
          interval: 0,
          rotate: 45,
          textStyle: {
            color: '#fff',
            fontSize: 14
          }
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        axisLabel: {
          textStyle: {
            color: '#fff',
            fontSize: 14
          }
        }
      }
    ],
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
        name: '资源保障程度',
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
          0.119610657, 0.332990162, 0.426877145, 0.593787336, 0.119610657,
          0.519083286, 0.609128346, 0.609128346, 0.420852312, 0.420852312,
          0.091369252, 0.420852312, 0.699173406, 0.720474388, 0.655151376,
          0.523345774, 0.430149894, 0.67740427, 1, 0
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

// 中间图：资源安全供应风险指数
(function() {
  var chartDom = document.getElementById('中间');
  var myChart = echarts.init(chartDom);
  var option;

  let category = [];
  let dottedBase = new Date('2009');
  let barData = [
    19.27490351, 21.51723202, 23.97699178, 21.52205896, 20.92639641, 17.87863982,
    21.48880454, 29.3065729, 29.30107197, 28.72807983, 27.17869528, 27.55229266,
    30.12028092, 40, 19.76056113
  ];
  for (let i = 0; i < 15; i++) {
    let date = new Date(
      dottedBase.getFullYear() + i,
      dottedBase.getMonth(),
      dottedBase.getDate()
    );
    category.push(date.getFullYear());
  }
  // option
  option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      },
      z:99999,
    },
    legend: {
      data: ['历年资源安全供应风险指数(%)'],
      textStyle: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold' 
      }
    },
    xAxis: {
      data: category,
      axisLine: {
        lineStyle: {
          color: '#fff',
          fontSize: 14
        }
      }
    },
    yAxis: {
      splitLine: { show: false },
      axisLine: {
        lineStyle: {
          color: '#fff',
          fontSize: 14
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
    series: [
      {
        name: '历年资源安全供应风险指数(%)',
        type: 'bar',
        barWidth: 10,
        itemStyle: {
          borderRadius: 5,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#14c8d4' },
            { offset: 1, color: '#43eec6' }
          ])
        },
        data: barData,
        label: {
          show: false 
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


// 右一图：资源年储量
(function() {
  var chartDom = document.getElementById('右一');
  var myChart = echarts.init(chartDom);
  var option;

  option = {
    color: ['#37A2FF'],
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
          '2004',
          '2005',
          '2006',
          '2007',
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
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        axisLabel: {
          color: '#fff',
          fontSize: 14
        }
      }
    ],
    series: [
      {
        name: '资源年储量（万吨）',
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
              color: 'rgb(55, 162, 255)'
            },
            {
              offset: 1,
              color: 'rgb(116, 21, 219)'
            }
          ])
        },
        emphasis: {
          focus: 'series'
        },
        data: [
          170, 170, 170, 170, 170, 150, 150, 150, 150, 150, 150, 150, 110, 110,
          110, 110, 110, 110, 72, 110
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

// 右二图：自给率
(function() {
  var chartDom = document.getElementById('右二');
  var myChart = echarts.init(chartDom);
  var option;

  option = {
    xAxis: {
      type: 'category',
      boundaryGap: false,
      axisLabel: {
        color: '#fff',
        fontSize: 14
      }
    },
    yAxis: {
      type: 'value',
      boundaryGap: false,
      axisLabel: {
        color: '#fff',
        fontSize: 14
      }
    },
    visualMap: {
      type: 'piecewise',
      show: false,
      dimension: 0,
      seriesIndex: 0,
      pieces: [
        {
          gt: 1,
          lt: 3,
          color: 'rgba(255, 165, 0, 0.4)'
        },
        {
          gt: 5,
          lt: 7,
          color: 'rgba(255, 165, 0, 0.4)'
        },
        {
          gt: 9,
          lt: 11,
          color: 'rgba(255, 165, 0, 0.4)'
        },
        {
          gt: 13,
          lt: 15,
          color: 'rgba(255, 165, 0, 0.4)'
        },
        {
          gt: 17,
          lt: 19,
          color: 'rgba(255, 165, 0, 0.4)'
        }
      ]
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
        type: 'line',
        smooth: 0.6,
        symbol: 'none',
        lineStyle: {
          color: '#ffa500', 
          width: 5
        },
        markLine: {
          symbol: ['none', 'none'],
          label: { show: false },
          data: [
            { xAxis: 1 },
            { xAxis: 3 },
            { xAxis: 5 },
            { xAxis: 7 },
            { xAxis: 9 },
            { xAxis: 11 },
            { xAxis: 13 },
            { xAxis: 15 },
            { xAxis: 17 },
            { xAxis: 19 }
          ]
        },
        areaStyle: {},
        data: [
          ['2004', 0],
          ['2005', 0.169856549],
          ['2006', 0.111458632],
          ['2007', 0.205846342],
          ['2008', 0.37770845],
          ['2009', 0.444661889],
          ['2010', 0.466733255],
          ['2011', 0.589721243],
          ['2012', 0.655250636],
          ['2013', 0.625467509],
          ['2014', 0.802562739],
          ['2015', 0.653587915],
          ['2016', 0.766155239],
          ['2017', 0.744579211],
          ['2018', 0.781252615],
          ['2019', 0.83558899],
          ['2020', 0.947464739],
          ['2021', 0.828609776],
          ['2022', 1],
          ['2023', 0.988028056]
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