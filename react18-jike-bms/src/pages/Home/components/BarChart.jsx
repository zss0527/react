//封装柱状图组件

import { useRef, useEffect } from "react";
import PropTypes from 'prop-types';
import * as echarts from 'echarts';

var BarChart = ({ title }) => {
  const chartRef = useRef(null)
  useEffect(() => {
    // const chartDom = document.getElementById('echarts');
    const myChart = echarts.init(chartRef.current);
    const option = {
      title: {
        text: title
      },
      xAxis: {
        type: 'category',
        data: ['Vue', 'Angular', 'React']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [120, 200, 150],
          type: 'bar'
        }
      ]
    };
    option && myChart.setOption(option);
  }, [title])

  return <>
    <div ref={chartRef} style={{ width: '500px', height: '400px' }}></div>
  </>
}
BarChart.propTypes = {
  title: PropTypes.string.isRequired,
};

export default BarChart