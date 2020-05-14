import Taro, { Component } from '@tarojs/taro'
import { View, Button } from '@tarojs/components'
import Chart from 'taro-echarts'
import geoJson from '../../../node_modules/echarts/map/json/world.json'

const option = {
  title: {
    text: 'Prices and Earnings 2012',
    subtext: 'data from macrofocus',
    sublink: 'https://www.macrofocus.com/public/products/infoscope/datasets/pricesandearnings/',
    left: 'center',
    top: 5,
    itemGap: 0,
    textStyle: {
      color: 'red'
    },
    z: 200
  },
  tooltip: {
    trigger: 'item',
    formatter: function (params) {
      var value = (params.value + '').split('.');
      value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,') + '.' + value[1];
      return params.seriesName + '<br/>' + params.name + ' : ' + value;
    }
  },
  series: [
    {
      name: 'World Population (2010)',
      type: 'map',
      mapType: 'world',
      roam: true,
      itemStyle: {
        emphasis: { label: { show: true } }
      },
      data: [
        { name: 'Afghanistan', value: 28397.812 },
        { name: 'Angola', value: 19549.124 },
        { name: 'Albania', value: 3150.143 },
        { name: 'China', value: 1359821.465 }
      ]
    }]
};

export default class Echars extends Component {

  config = {
    navigationBarTitleText: '图表示例'
  }

  onBeforeSetOption = (echarts) => {
    echarts.registerMap('world', geoJson)
  }

  componentWillMount() {

  }


  render() {
    return (
      <View className='chart-page-container'>
        <Chart
          height="100vh"
          option={option}
          onBeforeSetOption={this.onBeforeSetOption}
        />
      </View>
    )
  }
}
