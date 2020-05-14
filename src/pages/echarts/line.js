import Taro, { Component } from '@tarojs/taro'
import { View, Button } from '@tarojs/components'
import Chart from 'taro-echarts'
// import geoJson from '../../mock/map/geoJson'

class Echars extends Component {
  state = {
    chartKey: '',
    show: true,
  }

  render() {
    return (
      <View className='chart-page-container'>
        <Chart
          option={{
            xAxis: {
              type: 'category',
              data: ['Mon1', 'Tue2', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
              type: 'value'
            },
            series: [{
              data: [900, 932, 901, 934, 1290, 1330, 1720],
              type: 'line'
            }]
          }}
        />
      </View>
    )
  }
}

export default Echars