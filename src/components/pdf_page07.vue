<template>
  <div>
    <native-custom-table
      v-model="tableData"
      style="margin-top: 40px"
      :isShowHeader="false"
    />
  </div>
</template>

<script>
import NativeCustomTable from './NativeCustomTable.vue'
export default {
  components: {
    NativeCustomTable,
  },
  props: {},
  created() {},
  data() {
    return {
      tableData: [
        {
          industry: '巨商汇',
          company: '青岛巨商汇网络科技有限公司',
          period: '2024年汇算清缴',
          solution:
            '结合前端项目管理，从项目立项阶段即区分是否满足资本化条件，对于满足资本化条件的项目进行系统打标后，按照资本化流程进行后续处理，严格按照相关的政策准则的规定，进行研发投入的归集与记录',
        },
        {
          industry: '雷神',
          company: '青岛雷神科技股份有限公司',
          period: '2024年汇算清缴',
          solution:
            '从研发费用投入及研发成果产出，转化至产品全流程来看，实际研发成果收益期基本为一年，与无形资产摊销十年及以上摊销期不匹配，资本化加计扣除无法准确反应企业经营情况。',
        },
        {
          industry: '冷柜',
          company: '青岛海尔特种电冰柜有限公司',
          period: '2024年汇算清缴',
          solution: '无无形资产入账',
        },
        {
          industry: '冷柜',
          company: '武汉海尔电冰柜有限公司',
          period: '2024年汇算清缴',
          solution: '研发费用全部费用化，未形成无形资产',
        },
        {
          industry: '冷柜',
          company: '佛山海尔电冰柜有限公司',
          period: '2024年汇算清缴',
          solution:
            '公司开展的研究开发活动仅处于研究阶段，还未符合条件资本化，因此费用化入账。',
        },
        {
          industry: '绿色再循环工厂',
          company: '青岛海绿源循环科技有限公司',
          period: '2024年汇算清缴',
          solution: '年度内未发生符合资本化条件的研发费用',
        },
        {
          industry: '美尔粉末',
          company: '青岛美尔塑料粉末有限公司',
          period: '2024年汇算清缴',
          solution:
            '美尔公司现有符合资本化条件的项目均已经摊销完毕，其他支出项目不符合相关资本化条件，属于正常情况，无风险',
        },
        {
          industry: '热水器',
          company: '青岛海尔智慧电器设备有限公司',
          period: '2024年汇算清缴',
          solution:
            '经加计扣除审计后，不存在研发费用资本化占比偏低多计管理费用少缴纳企业所得税风险，无风险',
        },
        {
          industry: '热水器',
          company: '郑州海尔新能源科技有限公司',
          period: '2024年汇算清缴',
          solution: '研发费用全部费用化，没有计入无形资产',
        },
        {
          industry: '热水器',
          company: '武汉海尔热水器有限公司',
          period: '2024年汇算清缴',
          solution: '研发费用全部费用化，未形成无形资产',
        },
        {
          industry: '热水器',
          company: '青岛经济技术开发区海尔热水器有限公司',
          period: '2024年汇算清缴',
          solution: '无无形资产入账',
        },
        {
          industry: '日日顺乐信',
          company: '青岛海尔乐信云科技有限公司',
          period: '2024年汇算清缴',
          solution: '没达到资本化确认条件',
        },
        {
          industry: '商用',
          company: '青岛海尔中央空调有限公司',
          period: '2024年汇算清缴',
          solution:
            '经核查，不存在研发费用资本化占比偏低多计管理费用少缴企业所得税的风险',
        },
        {
          industry: '商用',
          company: '青岛海尔空调电子有限公司',
          period: '2024年汇算清缴',
          solution: '无无形资产入账',
        },
        {
          industry: '适老平台',
          company: '上海海尔医疗科技有限公司',
          period: '2024年汇算清缴',
          solution: '01X0公司研发费用均计入2024年度损益，未形成无形资产',
        },
        {
          industry: '水家电',
          company: '青岛海尔施特劳斯科技有限公司',
          period: '2024年汇算清缴',
          solution: '按国家税务总局要求填报',
        },
        {
          industry: '水家电',
          company: '青岛海尔施特劳斯水设备有限公司',
          period: '2024年汇算清缴',
          solution:
            '解释如下：不存在应资本化而未资本化的金额答1、研发费用投入前期主要计入费用，后续研发进展形成专利。但是根据无形资产资本化的条件要求未来经济利益的预期（无形资产必须能够为企业带来未来的经济利益，包括证明该资产能够在市场上产生收益，或在内部使用时能够带来效益）。目前研发受专利及市场投入影响，未满足以上条件。因此无相关费用产生后续方案：若产生及时计入',
        },
        {
          industry: '洗碗机',
          company: '青岛海尔洗碗机有限公司',
          period: '2024年汇算清缴',
          solution: '无风险',
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
