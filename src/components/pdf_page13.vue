<template>
  <div>
    <div style="position: relative; margin-top: 40px">
      <img src="../assets/蓝色titile.png" style="width: 840px; height: 40px" />
      <div style="position: absolute; top: 9px; left: 60px; color: white">
        蓝区风险指标2
      </div>
    </div>
    <div class="gray-box">
      <div style="
    border-left: 6px solid #118cd1;">风险指标名称</div>
      <div>批发零售业存在留抵导致漏缴税风险</div>
    </div>
    <div class="gray-box-2">
      <div>风险关差建议</div>
      <div>
        一般情况下批发零售业低进高出不应该存在留抵，请核实原因，确认是否存在漏缴税情形，如果存在请于
        30天之内完成更正申报。
      </div>
    </div>
    <div class="gradient-box-origin">未关差公司明细</div>
    
    <NativeCustomTableOrigin v-model="tableData1" />
    <div class="gradient-box">已关差公司明细</div>
    
    <NativeCustomTable v-model="tableData2" />
  </div>
</template>

<script>
import NativeCustomTable from './NativeCustomTable.vue'
import NativeCustomTableOrigin from './NativeCustomTableOrigin.vue'
export default {
  components: {
    NativeCustomTable,NativeCustomTableOrigin
  },
  props: {},
  created() {},
  data() {
    return {
      tableData1: [
        {
          industry: '采购',
          company: '青岛海达瑞采购服务有限公司',
          period: '2024年汇算清缴',
        },
      ],
      tableData2: [
        {
          industry: '冰箱',
          company: '大连海尔电冰箱有限公司保税区分公司',
          period: '2024年汇算清缴',
          solution: '通过日常经营行为消化。',
        },
        {
          industry: '采购',
          company: '青岛海尔零部件采购有限公司',
          period: '2024年汇算清缴',
          solution: '以前年度提前预缴增值税，目前暂未消化',
        },
        {
          industry: '采购',
          company: '青岛海尔国际贸易有限公司',
          period: '2024年汇算清缴',
          solution: '25年1-5月国贸按惯例提前储备7.5亿芯片，影响进项税额增加。',
        },
        {
          industry: '采购',
          company: '大连海尔国际贸易有限公司',
          period: '2024年汇算清缴',
          solution: '后续日常活动进行消化。',
        },
        {
          industry: '合肥电器',
          company: '海尔电器销售(合肥)有限公司',
          period: '2024年汇算清缴',
          solution: '前期为获得政府补贴预缴税金，目前正通过销售业务逐步消化',
        },
        {
          industry: '合肥电器',
          company: '青岛海尔电器销售服务有限公司',
          period: '2024年汇算清缴',
          solution:
            '2025年1月前期留抵已消化完毕，2025年1月属期缴纳增值税744万元',
        },
        {
          industry: '计算机',
          company: '海尔信息科技（深圳）有限公司青岛分公司',
          period: '2024年汇算清缴',
          solution:
            '账面存在库存商品1,336,016.16元，对应进项税额与留抵税额一致，为产品未销售产生进项税额，待完成产品销售，即可消化掉留抵税额。',
        },
        {
          industry: '家庭机器人',
          company: '青岛塔波尔家进出口有限公司',
          period: '2024年汇算清缴',
          solution: '银行手续费进项税，主营收入、成本无留抵税额产生。',
        },
        {
          industry: '境内控股公司',
          company: '青岛微艾智贸易有限公司',
          period: '2024年汇算清缴',
          solution: '该公司24年至今无业务，收入成本皆为0，暂时无法消化留抵。',
        },
        {
          industry: '雷神',
          company: '青岛雷神信息科技有限公司',
          period: '2024年汇算清缴',
          solution:
            '公司大规模铺展业务、各种电商节，校园行活动等，备货需要，导致库存商品大，留抵税额大，后续已经逐渐消化留抵税额。',
        },
        {
          industry: '雷神',
          company: '青岛雷神网络运营有限公司',
          period: '2024年汇算清缴',
          solution:
            '年度审计费、银行手续费等进项税，主营收入、成本未形成留抵税额。',
        },
        {
          industry: '雷神',
          company: '安徽海擎信息科技有限公司',
          period: '2024年汇算清缴',
          solution:
            '公司大规模铺展业务，及各种电商节，购物节需要备货，导致形成留抵税额，后续已经逐步消化留抵，并正常缴纳增值税。',
        },
        {
          industry: '绿色再循环工厂',
          company: '青岛鲸智再生环保科技有限公司',
          period: '2024年汇算清缴',
          solution: '企业亏损，增值税留抵',
        },
      ],
    }
  },
  methods: {},
}
</script>

<style scoped>
@import '/src/styles/mian.css';
</style>
