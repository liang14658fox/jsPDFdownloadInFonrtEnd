<template>
  <div>
    <div class="background-img-1" style="position: relative; margin-top: 40px">
      <img src="../assets/橙色titile.png" style="width: 840px; height: 40px" />
      <div style="position: absolute; top: 9px; left: 60px; color: white">
        黄区风险指标2
      </div>
    </div>
    <div class="gray-box">
      <div style="border-left: 6px solid #fe9d50;">风险指标名称</div>
      <div>金融商品转让投资收益增值税未及时缴纳的风险</div>
    </div>
    <div class="gray-box-2">
      <div>风险关差建议</div>
      <div>
        本月投资收益发生额>0，根据增值税法规定，保本类金融商品收益及金融商品转让收益需缴纳增值税，请根据
        投资收益的具体类型和性质进行判断，核实是否足额缴纳，未足额缴纳的需要在30天内完成更正申报。
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
    NativeCustomTable,
    NativeCustomTableOrigin,
  },
  props: {},
  created() {},
  data() {
    return {
      tableData2: [
        {
          industry: '合肥电器',
          company: '青岛海尔电器销售服务有限公司',
          period: '202503',
          solution: '理财未到期，4月到期已计提增值税',
        },
        {
          industry: '合肥电器',
          company: '青岛海尔电器销售服务有限公司',
          period: '202504',
          solution:
            '2025年4月属期申报金融商品转让投资收益 5,635,010.34 元，已申报纳税',
        },
        {
          industry: '合肥电器',
          company: '青岛海尔电器销售服务有限公司',
          period: '202505',
          solution: '未达到增值税纳税义务时间，6月已计提销项税金',
        },
        {
          industry: '境内控股公司',
          company: '海尔智家股份有限公司',
          period: '202501',
          solution: '居民企业间股利分红。',
        },
        {
          industry: '境内控股公司',
          company: '海尔智家股份有限公司',
          period: '202502',
          solution: '居民企业间投资收益',
        },
        {
          industry: '境内控股公司',
          company: '海尔智家股份有限公司',
          period: '202503',
          solution: '无问题',
        },
        {
          industry: '境内控股公司',
          company: '海尔智家股份有限公司',
          period: '202504',
          solution: '增值税已缴纳',
        },
        {
          industry: '境内控股公司',
          company: '海尔智家股份有限公司',
          period: '202505',
          solution: '增值税已缴纳',
        },
        {
          industry: '境内控股公司',
          company: '青岛海尚创智投资有限公司',
          period: '202503',
          solution: '权益法核算的长期股权投资收益不缴纳增值税',
        },
        {
          industry: '境内控股公司',
          company: '青岛海尚创智投资有限公司',
          period: '202505',
          solution: '权益法核算长期股权投资收益不缴纳增值税',
        },
        {
          industry: '商用',
          company: '青岛海尔空调电子有限公司',
          period: '202503',
          solution: '无',
        },
        {
          industry: '洗衣机',
          company: '合肥海尔洗衣机有限公司',
          period: '202502',
          solution: '股权投资收益（股息、红利、股权转让）不征收增值税',
        },
        {
          industry: '洗衣机',
          company: '合肥海尔洗衣机有限公司',
          period: '202503',
          solution: '居民企业直接投资于其他居民企业取得的投资收益属于免税收入',
        },
        {
          industry: '洗衣机',
          company: '合肥海尔洗衣机有限公司',
          period: '202504',
          solution: '居民企业直接投资于其他居民企业取得的投资收益属于免税收入',
        },
        {
          industry: '洗衣机',
          company: '合肥海尔洗衣机有限公司',
          period: '202505',
          solution: '居民企业直接投资于其他居民企业取得的投资收益属于免税收入',
        },
      ],
      tableData1: [
        {
          industry: '家用',
          company: '青岛海尔空调器有限总公司',
          period: '202502',
        },
        {
          industry: '家用',
          company: '青岛海尔空调器有限总公司',
          period: '202503',
        },
        {
          industry: '家用',
          company: '青岛海尔空调器有限总公司',
          period: '202504',
        },
        {
          industry: '家用',
          company: '青岛海尔空调器有限总公司',
          period: '202505',
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
