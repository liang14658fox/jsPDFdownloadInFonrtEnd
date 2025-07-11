<template>
  <div>
    <NativeCustomTable
      v-model="tableData1"
      :isShowHeader="false"
      style="margin-top: 40px"
    />

    <div style="position: relative" class="background-img-1">
      <div style="top: 8px; left: 120px" class="title-text">4</div>
      <div
        style="top: 23px; left: 255px; font-size: 15px; font-weight: 100"
        class="title-text"
      >
        蓝区风险指标详情
      </div>
    </div>
    <div
      id="myChart3"
      :style="{ width: '820px', height: '330px' }"
      style="margin-top: 10px; margin-left: 10px"
    ></div>
    <div  class="custom-legend" style="margin-top: 10px">
      <div class="legend-item">
        <span class="legend-color legend-green"></span> 已关差
      </div>
      <div class="legend-item">
        <span class="legend-color legend-orange"></span> 未关差
      </div>
    </div>
    <div style="position: relative; margin-top: 20px">
      <img src="../assets/蓝色titile.png" style="width: 840px; height: 40px" />
      <div style="position: absolute; top: 9px; left: 60px; color: white">
        蓝区风险指标1
      </div>
    </div>
    <div class="gray-box">
      <div style="border-left: 6px solid #118cd1">风险指标名称</div>
      <div>利息支出占借款金额的配比偏高未做纳税调整风险</div>
    </div>
    <div class="gray-box-2">
      <div>风险关差建议</div>
      <div>
        该指标通过计算利息支出占借款的比值，与同期银行贷款利率比较，如果该指标值大于同期银行贷款利率，
        可能存在高于银行同期贷款利率的贷款，在企业所得税汇算清缴时没有对支付的按照高于银行同期贷款利
        率计算的利息进行纳税调整的风险，如果存在此类情形需要在30天内完成更正申报。
      </div>
    </div>

    <div class="gradient-box">已关差公司明细</div>
    <NativeCustomTable v-model="tableData2" />
  </div>
</template>

<script>
import NativeCustomTable from './NativeCustomTable.vue'
import NativeCustomTableOrigin from './NativeCustomTableOrigin.vue'
export default {
  components: {
    NativeCustomTable,
    NativeCustomTableOrigin,
  },
  props: {},
  created() {
    this.$nextTick(() => {
      this.draw()
    })
  },
  data() {
    return {
      tableData1: [
        {
          industry: '洗衣机',
          company: '佛山市顺德海尔电器有限公司',
          period: '2024年汇算清缴',
          solution:
            '佛山市顺德海尔电器2024年正常报废资产219万，属于已达报废年限无法使用，以前年度纳税调增部分在24年已作纳税调减',
        },
        {
          industry: '信息',
          company: '青岛海尔多媒体有限公司',
          period: '2024年汇算清缴',
          solution: '逾期三年以上的应收款项损失，以前年度已做纳税调增',
        },
        {
          industry: '研发',
          company: '青岛海尔智能技术研发有限公司',
          period: '2024年汇算清缴',
          solution:
            '股权性投资损失，根据企业自身的财务状况和市场环境，有针对性的应对措施',
        },
      ],
      tableData2: [
        {
          industry: '采购',
          company: '青岛海尔国际贸易有限公司',
          period: '2024年汇算清缴',
          solution:
            '①660302 - 财务费用-利息支出，应取期末余额数（含本期预提冲销），实际应为86,924,444.43元；②平均借款余额，因23年审计调整了8亿到一年内到期的非流动负债-长期借款，实际期初长期借款应为22亿元，且从24年9月开始，才陆续每月还款4亿元；实际借款利率为2.9%。',
        },
        {
          industry: '洗衣机',
          company: '青岛云裳羽衣物联科技有限公司',
          period: '2024年汇算清缴',
          solution:
            '6603020000利息支出本期借方数据存在预提费用，贷方冲销预提费用的情况，实际利息支出1638519.78元，利率正常。',
        },
      ],
    }
  },
  methods: {
    draw() {
      // 初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('myChart3'))
      // 绘制图表
      var option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
        },
        grid: {
          top: 30,
          bottom: 70,
          left: 40,
          right: 20,
        },
        xAxis: {
          type: 'category',
          data: [
            '冰箱',
            '采购',
            '合肥电器',
            '计算机',
            '家庭机器人',
            '境内控股公司',
            '雷神',
            '绿色再循环工厂',
            '日日顺合资',
            '日日顺社会化',
            '商城',
            '水家电',
            '洗衣机',
            '小家电',
            '信息',
            '重庆家电',
          ],
          axisLabel: {
            interval: 0,
            rotate: 45,
          },
          axisTick: {
            alignWithLabel: true,
          },
          splitLine: {
            show: true, // ✅ 开启竖线
            lineStyle: {
              type: 'dashed',
              color: '#e0e0e0',
            },
          },
        },
        yAxis: {
          type: 'value',
          max: 5,
          axisLabel: {
            formatter: '{value}',
          },
          splitLine: {
            show: true,
            lineStyle: {
              type: 'dashed',
              color: '#ccc',
            },
          },
        },
        series: [
          {
            name: '已关差',
            type: 'bar',
            stack: '总量',
            barWidth: 38,
            itemStyle: {
              color: '#86CAAD',
            },
            data: [1, 4, 2, 1, 1, 1, 3, 1, 1, 1, 1, 1, 3, 1, 2, 3],
          },
          {
            name: '未关差',
            type: 'bar',
            stack: '总量',
            barWidth: 24,
            itemStyle: {
              color: '#FEB77C',
            },
            data: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          },
        ],
      }
      window.onresize = myChart.resize
      myChart.setOption(option)
    },
  },
}
</script>

<style scoped>
@import '/src/styles/mian.css';

.background-img-1 {
  margin-top: 35px;
  width: 840px;
  height: 50px;
  background-image: url('../assets/蓝色标题背景.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
