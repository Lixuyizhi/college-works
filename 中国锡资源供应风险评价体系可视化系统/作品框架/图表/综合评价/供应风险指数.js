// 右图：
(function() {
  var chartDom = document.getElementById('右图');
  var myChart = echarts.init(chartDom);
  var option;

  const valueList = [
    40.37311453, 54.89504952, 48.8173521, 40.17673754, 30.23450627, 26.33648964,
    41.4695921, 39.55726983, 45.27224616, 34.62692271, 32.26915178, 37.42038717,
    79.72331018, 58.85804174, 41.69111262
  ];

  // 横坐标数据
  const dateList = [];
  for (let year = 2009; year <= 2023; year++) {
    dateList.push(year.toString());
  }

  // 设置图表的配置项
  option = {
    // Make gradient line here
    visualMap: [
      {
        show: false,
        type: 'continuous',
        seriesIndex: 0,
        min: 0,
        max: 100
      },
      {
        show: false,
        type: 'continuous',
        seriesIndex: 1,
        dimension: 0,
        min: 0,
        max: dateList.length - 1
      }
    ],
    title: {
      left: 'center',
      text: '',
      textStyle: {
        rich: {
          b: {
            fontWeight: 'bold',
            color: '#fff'
          }
        }
      }
    },
    tooltip: {
      trigger: 'axis'
    },
    xAxis: {
      data: dateList,
      axisLabel: {
        color: '#fff',
        fontSize: 20
      },
      axisLine: {
        lineStyle: {
          color: '#fff'
        }
      }
    },
    yAxis: {
      axisLabel: {
        color: '#fff',
        fontSize: 20
      },
      axisLine: {
        lineStyle: {
          color: '#fff' 
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
    series: [{
      type: 'line',
      symbol: 'cube',
      symbolSize: 8,
      lineStyle: {
        width: 4
      },
      itemStyle: {
        color: 'blue'
      },
      areaStyle: { 
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0,
          color: 'rgba(255, 165, 0, 0.7)' // 渐变起始色，橙色
        }, {
          offset: 1,
          color: 'rgba(255, 165, 0, 0.1)' // 渐变结束色，浅橙色
        }])
      },      
      showSymbol: true,
      data: valueList
    }]
  };

  // 使用配置项初始化图表
  option && myChart.setOption(option);
  // 4. 让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();