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
          industry: '洗衣机',
          company: '天津海尔洗涤电器有限公司',
          period: '2024年汇算清缴',
          solution: '24年账面未发生用于研发的无形资产摊销费用',
        },
        {
          industry: '洗衣机',
          company: '青岛云裳羽衣物联科技有限公司',
          period: '2024年汇算清缴',
          solution:
            '从研发费用投入及研发成果产出，转化至产品全流程来看，实际研发成果收益期基本为一年，与无形资产摊销十年及以上摊销期不匹配，资本化加计扣除无法准确反应企业经营情况。',
        },
        {
          industry: '洗衣机',
          company: '青岛海尔洗涤电器有限公司',
          period: '2024年汇算清缴',
          solution: '企业不存在应资本化而未资本化的研发项目，无风险',
        },
        {
          industry: '洗衣机',
          company: '合肥海尔滚筒洗衣机有限公司',
          period: '2024年汇算清缴',
          solution: '研发费用投入会计核算全部费用化。',
        },
        {
          industry: '洗衣机',
          company: '上海海尔洗涤电器有限公司',
          period: '2024年汇算清缴',
          solution: '研发项目未达到资本化条件',
        },
        {
          industry: '洗衣机',
          company: '青岛海尔洗衣机有限公司',
          period: '2024年汇算清缴',
          solution:
            '从研发费用投入及研发成果产出，转化至产品全流程来看，实际研发成果收益期基本为一年，与无形资产摊销十年及以上摊销期不匹配，资本化加计扣除无法准确反应企业经营情况。',
        },
        {
          industry: '洗衣机',
          company: '合肥海尔洗衣机有限公司',
          period: '2024年汇算清缴',
          solution:
            '处于早期探索阶段的研发项目，成果尚未达到资本化条件，相关支出需全部费用化。',
        },
        {
          industry: '洗衣机',
          company: '佛山市顺德海尔电器有限公司',
          period: '2024年汇算清缴',
          solution:
            '公司开展的研究开发活动仅处于研究阶段，还未符合条件资本化，因此费用化入账。',
        },
        {
          industry: '洗衣机',
          company: '重庆海尔洗衣机有限公司',
          period: '2024年汇算清缴',
          solution: '税审调整',
        },
        {
          industry: '洗衣机',
          company: '重庆海尔滚筒洗衣机有限公司',
          period: '2024年汇算清缴',
          solution: '税审调整',
        },
        {
          industry: '洗衣机',
          company: '佛山海尔滚筒洗衣机有限公司',
          period: '2024年汇算清缴',
          solution:
            '公司研究开发活动过程中产生的费用不符合资本化条件，故入账至管理费用。',
        },
        {
          industry: '小家电',
          company: '上海海尔智能科技有限公司',
          period: '2024年汇算清缴',
          solution: '该公司没有开形资产',
        },
        {
          industry: '小家电',
          company: '青岛海尔智慧生活电器有限公司',
          period: '2024年汇算清缴',
          solution:
            '暂无资本化金额，有研发立项，发生的都是人工，委托研发和模具费用，不符合无形资产确认条件。',
        },
        {
          industry: '信息',
          company: '青岛海尔多媒体有限公司',
          period: '2024年汇算清缴',
          solution: '年度未发生符合资本化条件的研发费用',
        },
        {
          industry: '研发',
          company: '青岛海尔智能技术研发有限公司',
          period: '2024年汇算清缴',
          solution: '定期检查费用的分类是否准确,应资本化的进行资本化处理',
        },
        {
          industry: '研发',
          company: '海尔（上海）家电研发中心有限公司',
          period: '2024年汇算清缴',
          solution: '根据税务鉴证报告数据填报',
        },
        {
          industry: '研发',
          company: '海尔（深圳）研发有限责任公司',
          period: '2024年汇算清缴',
          solution:
            '本小微为高新技术企业，集团定位为华南地区高端产业超前研发中心点，研发活动具有较高前瞻性和不确定性，按谨慎性原则，所对应的研发费用当年均已费用化。',
        },
        {
          industry: '研发',
          company: '青岛海日高科技有限公司',
          period: '2024年汇算清缴',
          solution:
            '目前研发项目处于研究阶段，按会计要求支出进行费用化，项目进入开发阶段后会将满足资本化条件的支出进行资本化处理 ',
        },
        {
          industry: '研发',
          company: '青岛海高设计制造有限公司',
          period: '2024年汇算清缴',
          solution: '按实际业务类型支出加计，无延迟缴纳所得税问题',
        },
        {
          industry: '研发',
          company: '青岛国创智能家电研究院有限公司',
          period: '2024年汇算清缴',
          solution:
            '归集的研究开发费用主要是人员费、试验费，样机费等，没有需要资本化的事项',
        },
        {
          industry: '婴童',
          company: '上海贝立安特智能科技有限公司',
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
