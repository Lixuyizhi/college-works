//中图
(function() {
  var chartDom = document.getElementById('中图');
  var myChart = echarts.init(chartDom);
  var option;

  var data = [
    {
      name: '评价体系',
      children: [
        {
          name: '资源安全',
          children: [
            { name: '资源保障程度', value: 7 },
            { name: '自给率', value: 8 }
          ]
        },
        {
          name: '市场安全',
          children: [{ name: '价格波动指数', value: 5 }]
        },
        {
          name: '贸易安全',
          children: [
            { name: '进口份额占比', value: 6 },
            { name: '进口国家风险', value: 4 },
            { name: '进口国家集中度', value: 3 },
            { name: '进口价格波动指数', value: 6 }
          ]
        }
      ]
    }
  ];

  option = {
    visualMap: {
      type: 'continuous',
      min: 1, // 调整最小值
      max: 10, // 调整最大值
      inRange: {
        color: ['#2F93C8', '#4FB3A4', '#AEC48F', '#FFDB5C', '#F98862'] // 增加颜色选项
      }
    },
    series: {
      type: 'sunburst',
      data: data,
      radius: [0, '95%'],
      label: {
        rotate: 0,
        fontSize: 24,
        fontWeight: 'bold' // 将文字加粗
      }
    }
  };

  option && myChart.setOption(option);

  // 让图表跟随屏幕自动适应
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();