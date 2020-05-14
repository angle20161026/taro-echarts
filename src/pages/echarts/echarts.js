import Taro, { Component } from '@tarojs/taro'
import { View, Button } from '@tarojs/components'
import Chart from 'taro-echarts'
import Charts from '@/mock'
import geoJson from '../../mock/map/worldjson'

export default class Echars extends Component {

  config = {
    navigationBarTitleText: '图表示例'
  }

  state = {
    chartKey: '',
    show: true,
  }

  componentWillMount() {
    let { name, type } = this.$router.params
    if (name) {
      this.updateTitle(name)
    }
    debugger
    this.setState({ chartKey: type })
  }

  // 改变标题
  updateTitle = (title) => {
    Taro.setNavigationBarTitle({ title })
  }

  onBeforeSetOption = (echarts, chartKey) => {
    debugger
    if (chartKey !== 'map') {
      return
    }
    echarts.registerMap('world', geoJson)
  }

  test = () => {
    Taro.navigateTo({
      url: '/pages/savecanvas/index'
    })
  }

  render() {
    const { chartKey, show } = this.state
    let showCharts = chartKey ? Charts[chartKey] : []
    return (
      <View className='chart-page-container'>
        <Button onClick={() => this.setState({ show: !show })}>{show ? '隐藏' : '显示'}</Button>
        {
          show && showCharts.map(item => {
            const { id, title, option, height, loading } = item
            let tempHeight = showCharts.length === 1 ? 'calc(100vh - 80px)' : height
            return (

              <Chart
                chartId={id}
                height={tempHeight}
                loading={loading}
                option={option}
                onBeforeSetOption={(echarts) => this.onBeforeSetOption(echarts, chartKey)}
              />

            )
          })
        }
      </View>
    )
  }
}
