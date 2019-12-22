
import * as echarts from '../../ec-canvas/echarts';

function initChart(canvas, width, height) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);

  var option = {
    title: {
      text: "词云图"
    },
    tooltip: {},
    series: [{
      type: 'wordCloud',
      gridSize: 20,
      sizeRange: [12, 50],
      rotationRange: [0, 0],
      shape: 'circle',
      textStyle: {
        normal: {
          color: function () {
            return 'rgb(' + [
              Math.round(Math.random() * 160),
              Math.round(Math.random() * 160),
              Math.round(Math.random() * 160)
            ].join(',') + ')';
          }
        },
        emphasis: {
          shadowBlur: 10,
          shadowColor: '#333'
        }
      },
      data: [{
        name: 'Sam S Club',
        value: 10000,
        textStyle: {
          normal: {
            color: 'black'
          },
          emphasis: {
            color: 'red'
          }
        }
      }, {
        name: 'Macys',
        value: 6181
      }, {
        name: 'Amy Schumer',
        value: 4386
      }, {
        name: 'Jurassic World',
        value: 4055
      }, {
        name: 'Charter Communications',
        value: 2467
      }, {
        name: 'Chick Fil A',
        value: 2244
      }, {
        name: 'Planet Fitness',
        value: 1898
      }, {
        name: 'Pitch Perfect',
        value: 1484
      }, {
        name: 'Express',
        value: 1112
      }, {
        name: 'Home',
        value: 965
      }, {
        name: 'Johnny Depp',
        value: 847
      }, {
        name: 'Lena Dunham',
        value: 582
      }, {
        name: 'Lewis Hamilton',
        value: 555
      }, {
        name: 'KXAN',
        value: 550
      }, {
        name: 'Mary Ellen Mark',
        value: 462
      }, {
        name: 'Farrah Abraham',
        value: 366
      }, {
        name: 'Rita Ora',
        value: 360
      }, {
        name: 'Serena Williams',
        value: 282
      }, {
        name: 'NCAA baseball tournament',
        value: 273
      }, {
        name: 'Point Break',
        value: 265
      }]
    }]
  };
  chart.setOption(option);
  return chart;
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    ec: {
      // onInit: initChart
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})