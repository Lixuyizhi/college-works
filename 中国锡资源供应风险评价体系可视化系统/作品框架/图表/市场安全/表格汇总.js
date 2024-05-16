// 左一图：2023年锡进口主要来源国
(function() {
  var chartDom = document.getElementById('左一');
  var myChart = echarts.init(chartDom);
  var option;

  option = {
    legend: {
      top: 'bottom',
      textStyle: {
        color: '#fff'
      }
    },
    textStyle: {
      color: '#fff'
    },
    color: ['#FF6A6A', '#FF7F50', '#FFD700', '#FFA500', '#ADFF2F', '#00FF7F', '#00BFFF', '#9370DB'],
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
        name: 'Nightingale Chart',
        type: 'pie',
        radius: [40,50],
        center: ['50%', '50%'],
        roseType: 'area',
        itemStyle: {
          borderRadius: 8
        },
        label: {
          fontSize: 16,
          color: '#fff' 
        },
        data: [
          { value: 40, name: '印度尼西亚' },
          { value: 38, name: '秘鲁' },
          { value: 32, name: '马来西亚' },
          { value: 30, name: '泰国' },
          { value: 28, name: '韩国' },
          { value: 26, name: '日本' },
          { value: 22, name: '玻利维亚' },
          { value: 18, name: '德国' }
        ]
      }
    ]
  };

  option && myChart.setOption(option);

  // 让图表跟随屏幕自动适应
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();

// 左二图：价格波动指数
(function() {
  var chartDom = document.getElementById('左二');
  var myChart = echarts.init(chartDom);
  var option;

  // 设置横坐标数据和对应的折线数据
  const years = [
    2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020,
    2021, 2022, 2023
  ];
  const data = [
    0.314662045, 0.330984747, 0.618339039, 0.448211929, 0.219731166, 0.099975154,
    0.122669048, 0.371067613, 0.158623302, 0.350242027, 0.060199157, 0.016718254,
    0, 1, 0.120121431, 0.1841753
  ];

  option = {
    xAxis: {
      type: 'category',
      data: years,
      axisLabel: {
        interval: 0, // 横坐标显示全部数据
        rotate: 45, // 45度角倾斜显示，防止文字重叠
        formatter: function (value) {
          return value.toString(); // 强制显示数字，避免自动转换为科学计数法
        },
        textStyle: {
          color: '#fff', // 设置横坐标文字颜色为白色
          fontSize: 14
        }
      },
      axisLine: {
        lineStyle: {
          color: '#fff' // 设置横坐标轴线颜色为白色
        }
      }
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        textStyle: {
          color: '#fff', // 设置纵坐标文字颜色为白色
          fontSize: 14
        }
      },
      axisLine: {
        lineStyle: {
          color: '#fff' // 设置纵坐标轴线颜色为白色
        }
      }
    },
    series: [
      {
        type: 'line',
        data: data,
        lineStyle: {
          color: 'red'
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              // 设置渐变色
              offset: 0,
              color: 'rgba(255, 0, 0, 0.7)' // 渐变色起始颜色
            },
            {
              offset: 1,
              color: 'rgba(255, 0, 0, 0.1)' // 渐变色结束颜色
            }
          ])
        },
        symbol: 'circle', // 设置折线上的符号为圆形
        symbolSize: 10, // 设置圆形的大小
        markPoint: {
          symbol: 'triangle', // 设置折线上的标记点为三角形
          symbolSize: 15, // 设置三角形的大小
          data: [
            {
              type: 'max', // 最大值标记点
              name: '最大值'
            },
            {
              type: 'min', // 最小值标记点
              name: '最小值'
            }
          ]
        }
      }
    ],
    // 添加工具箱
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
    }
  };

  // 使用 setOption 方法设置图表选项
  myChart.setOption(option);

  // 4. 让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();

// 中间图：市场安全供应风险指数
(function() {
  var chartDom = document.getElementById('中间');
  var myChart = echarts.init(chartDom);
  var option;

  option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      },
      formatter: function (params) {
        var tar = params[1];
        return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
      }
    },
    grid: {
      left: '0%',
      right: '0%',
      bottom: '0%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      splitLine: { show: false },
      data: [
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
        textStyle: {
          color: '#fff'// 设置横坐标文字颜色为白色
        }
      },
      axisLine: {
        lineStyle: {
          color: '#fff'// 设置横坐标轴线颜色为白色
        }
      }
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        textStyle: {
          color: '#fff'// 设置纵坐标文字颜色为白色
        }
      },
      axisLine: {
        lineStyle: {
          color: '#fff' // 设置纵坐标轴线颜色为白色
        }
      }
    },
    legend: {
      data: ['历年市场安全供应风险指数(%)'],
      textStyle: {
        color: '#fff',// 设置图例文字颜色为白色
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
        name: '占位',
        type: 'bar',
        stack: '总量',
        itemStyle: {
          borderColor: 'transparent',
          color: 'transparent'
        },
        emphasis: {
          itemStyle: {
            borderColor: 'transparent',
            color: 'transparent'
          }
        },
        data: [
          13.24, 24.73, 17.93, 8.79, 4,
          4.91, 14.84, 6.34, 14.01, 2.41,
          0.67, 0, 40, 4.8, 7.37
        ]
      },
      {
        name: '历年市场安全供应风险指数(%)',
        type: 'bar',
        barGap: '0%', // 设置柱子之间的间隔为0%
        barCategoryGap: '1%', 
        stack: '总量',
        label: {
          show: true,
          position: 'inside',
          formatter: null,
          textStyle: {
            fontSize: 14 // 设置文字字号为14
          }
        },
        itemStyle: {
          color: 'lightgreen'
        },
        barWidth: 4, // 调整柱状图的宽度，单位为像素
        data: [
          13.24, 24.73, 17.93, 8.79, 4,
          4.91, 14.84, 6.34, 14.01, 2.41,
          0.67, 0, 40, 4.8, 7.37
        ]
      }
    ]
  };

  option && myChart.setOption(option);

  // 让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();

// 右一图：主要贸易市场风险指数
(function() {
  var chartDom = document.getElementById('右一');
  var myChart = echarts.init(chartDom);
  var option;

  option = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      type: 'scroll',
      bottom: 10,
      textStyle: { // 设置图例文字颜色为白色
        color: '#fff',
        fontSize: 14
      },
      data: (function () {
        var list = [];
        for (var i = 1; i <= 16; i++) {
          list.push(i + 2007 + '');
        }
        return list;
      })()
    },
    visualMap: {
      top: 'middle',
      right: 10,
      color: ['red', 'yellow'],
      calculable: true,
      max: 10
    },
    radar: {
      indicator: [
        { text: '印度尼西亚', max: 9 },
        { text: '马来西亚', max: 9 },
        { text: '玻利维亚', max: 9 },
        { text: '日本', max: 9 },
        { text: '韩国', max: 9 }
      ],
      name: { // 设置雷达图文字颜色为白色
        textStyle: {
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
    series: (function () {
      var series = [];
      for (var i = 1; i <= 16; i++) {
        var dataValues = [];
        if (i === 1) {
          // 2008年
          dataValues = [3, 5, 7, 6, 4];
        } else if (i === 2) {
          // 2009年
          dataValues = [4, 5, 5, 6, 4];
        } else if (i === 3) {
          // 2010年
          dataValues = [4, 6, 4, 5, 7];
        } else if (i === 4) {
          // 2011年
          dataValues = [4, 6, 3, 4, 5];
        } else if (i === 5) {
          // 2012年
          dataValues = [4, 5, 5, 4, 7];
        } else if (i === 6) {
          // 2013年
          dataValues = [4, 5, 6, 4, 8];
        } else if (i === 7) {
          // 2014年
          dataValues = [5, 5, 4, 7, 6];
        } else if (i === 8) {
          // 2015年
          dataValues = [4, 5, 6, 4, 8];
        } else if (i === 9) {
          // 2016年
          dataValues = [5, 5, 6, 7, 5];
        } else if (i === 10) {
          // 2017年
          dataValues = [5, 5, 5, 8, 5];
        } else if (i === 11) {
          // 2018年
          dataValues = [5, 4, 6, 8, 7];
        } else if (i === 12) {
          // 2019年
          dataValues = [5, 5, 6, 8, 7];
        } else if (i === 13) {
          // 2020年
          dataValues = [5, 6, 5, 5, 4];
        } else if (i === 14) {
          // 2021年
          dataValues = [4, 6, 4, 7, 8];
        } else if (i === 15) {
          // 2022年
          dataValues = [5, 6, 5, 7, 5];
        } else if (i === 16) {
          // 2023年
          dataValues = [5, 5, 6, 5, 7];
        }

        series.push({
          type: 'radar',
          symbol: 'none',
          lineStyle: {
            width: 1
          },
          emphasis: {
            areaStyle: {
              color: 'rgba(0,250,0,0.3)'
            }
          },
          data: [
            {
              value: dataValues,
              name: i + 2007 + ''
            }
          ]
        });
      }
      return series;
    })()
  };

  option && myChart.setOption(option);
  // 4. 让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function() {
    myChart.resize();
  });
  
  // 将坐标轴文字颜色设置为白色
  myChart.setOption({
    radar: {
      axisLabel: {
        color: '#fff'
      }
    }
  });
})();

// 右二图：资源年消费量
(function() {
  var chartDom = document.getElementById('右二');
  var myChart = echarts.init(chartDom);
  var option;

  option = {
    tooltip: {
      trigger: 'axis'
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    xAxis: {
      type: 'category',
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
      axisLabel: { // 设置x轴文字颜色为白色
        color: '#fff',
        fontSize: 14
      }
    },
    yAxis: {
      type: 'value',
      axisLabel: { // 设置y轴文字颜色为白色
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
        name: '消费量（万吨）',
        type: 'line',
        step: 'middle',
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#ff7f0e' }, // 开始颜色
            { offset: 1, color: '#ffd700' } // 结束颜色
          ])
        },
        data: [
          9.29, 11.55, 11.48, 13.39, 12.77, 14.3, 15.28, 17.64, 17.62, 16.93,
          19.26, 17.58, 17.37, 16.97, 17.42, 17.97, 21.62, 19.11, 21.53, 20
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
