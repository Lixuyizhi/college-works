// 左图：
(function() {
  var chartDom = document.getElementById('左图');
  var myChart = echarts.init(chartDom);
  var option;
  
  option = {
    tooltip: {
      formatter: '{a} <br/>{b} : {c}%'
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
        name: '供应风险指数',
        type: 'gauge',
        detail: {
          formatter: '{value}',
          textStyle: { 
            color: '#ffffff',
            fontWeight: 'bold'
          }
        },
        data: [
          {
            value: 41.69,
            name: ''
          }
        ],
        // 设置仪表盘样式
        axisLine: {
          lineStyle: {
            color: [[0.2, '#ff4500'], [0.8, '#ffa500'], [1, '#ffd700']],
            width: 34 //
          }
        },
        // 设置刻度样式
        axisTick: {
          length: 15, 
          lineStyle: {
            color: 'auto'
          }
        },
        axisLabel: {
          textStyle: {
            fontWeight: 'bold', 
            fontSize: 14
          }
        },
        // 设置指针样式
        pointer: {
          width: 10 
        },
        // 设置标签样式
        label: {
          textStyle: {
            fontSize: 24 
          }
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