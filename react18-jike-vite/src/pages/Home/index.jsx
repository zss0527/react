import * as echarts from 'echarts';
import { useEffect, useRef } from 'react';

const Home = () => {
  const chartRef = useRef(null)
  useEffect(() => {
    // const chartDom = document.getElementById('echarts');
    const myChart = echarts.init(chartRef.current);
    const option = {
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
  }, [])

  return <>
    <div ref={chartRef} style={{ width: '500px', height: '400px' }}></div>
  </>
}

export default Home