<template>
  <div>
    <div class="background-img-1" style="position: relative; margin-top: 40px">
      <img src="../assets/橙色titile.png" style="width: 840px; height: 40px" />
      <div style="position: absolute; top: 9px; left: 60px; color: white">
        黄区风险指标3
      </div>
    </div>
    <div class="gray-box">
      <div style="border-left: 6px solid #fe9d50;">风险指标名称</div>
      <div>研发工薪支出与研发费用占比异常多计研发费用少缴纳企业所得风险</div>
    </div>
    <div class="gray-box-2">
      <div>风险关差建议</div>
      <div>
        反映企业直接从事研发人员工薪与研发费用发生额的关系，研发工薪支出与研发费用占比异常可能存在
        多列研发费用的情况，如果存在此类情形需要在30天内完成更正申报。
      </div>
    </div>

    <div class="gradient-box">已关差公司明细</div>
    
    <NativeCustomTable v-model="tableData1" />
    <div class="background-img-1" style="position: relative; margin-top: 40px">
      <img src="../assets/橙色titile.png" style="width: 840px; height: 40px" />
      <div style="position: absolute; top: 9px; left: 60px; color: white">
        黄区风险指标4
      </div>
    </div>
    <div class="gray-box">
      <div style="border-left: 6px solid #fe9d50;">风险指标名称</div>
      <div>资产损失金额大额异常风险</div>
    </div>
    <div class="gray-box-2">
      <div>风险关差建议</div>
      <div>
        存在大额资产损失且税收金额大于等于100万元的情况，请核实1.留存备查的证据材料，是否满足税总公告
        【2011】25号公告规定的各类资产损失扣除条件
        2.特别关注纳税调减的情况，分析纳税调减是由于采用准备
        金核销方式产生，还是由于以前年度会计上已作损失处理产生？准备金核销的话，核实相应准备金是否进行
        纳税调增？以前年度会计上已作损失处理的话，核实以前年度是否就损失进行纳税调增？3.查看凭证、合同等
        原始资料，审核涉及资产损失计算的要素，包括处置收入、计税基础等，是否准确？不符合税法规定的大额损失
        情形需要在30天内完成更正申报。
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
    NativeCustomTable,NativeCustomTableOrigin
  },
  props: {},
  created() {},
  data() {
    return {
      tableData1: [
        {
          industry: '安防',
          company: '青岛海尔智能家电科技有限公司',
          period: '2024年汇算清缴',
          solution:
            '公司作为研发中心，主要研发费的发生为研发人员工资，其他设备折旧等费用因不容易区分，在归集费用时已主动剔除，导致人员人工占比高。',
        },
        {
          industry: '研发',
          company: '海尔（深圳）研发有限责任公司',
          period: '2024年汇算清缴',
          solution:
            '目前本小微的项目以软件类研发项目为主，无需大型设备及资产投入，如设计实验需求，也主要出差利用集团实业设备，故主要研发投入为人工成本投入和部分差旅投入为主。',
        },
      ],
      tableData2: [
        {
          industry: '冰箱',
          company: '合肥海尔电冰箱有限公司',
          period: '2024年汇算清缴',
          solution:
            '根据相关资产计提报废等规定做固定资产清理及报废，并已做相应的资产减值损失存货准备',
        },
        {
          industry: '家用',
          company: '青岛海尔(胶州)空调器有限公司',
          period: '2024年汇算清缴',
          solution: '涉及固定资产报废业务，按税法要求进行年度汇缴申报。',
        },
        {
          industry: '家用',
          company: '重庆海尔空调器有限公司',
          period: '2024年汇算清缴',
          solution: '正常取数，无风险',
        },
        {
          industry: '绿色再循环工厂',
          company: '青岛海绿源循环科技有限公司',
          period: '2024年汇算清缴',
          solution: '以前年度已纳税调整，本年度核销卖掉',
        },
        {
          industry: '热水器',
          company: '武汉海尔热水器有限公司',
          period: '2024年汇算清缴',
          solution: '据实申报，并联系第三方税审后续出具资产损失报告，以备后查',
        },
        {
          industry: '商用',
          company: '青岛海尔空调电子有限公司',
          period: '2024年汇算清缴',
          solution: '资产到期报废',
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
