<template>
  <div>
    <div class="background-img-1" style="position: relative; margin-top: 40px">
      <img src="../assets/红色title.png" style="width: 840px; height: 40px" />
      <div style="position: absolute; top: 9px; left: 60px; color: white">
        红区风险指标1
      </div>
    </div>
    <div class="gray-box">
      <div>风险指标名称</div>
      <div>递延收益未缴纳企业所得税预警</div>
    </div>
    <div class="gray-box-2">
      <div>风险关差建议</div>
      <div>
        账面存在递延收益，但汇算清缴A105020未按权责发生制确认收入纳税调整明细表未填报政府补助递延收入，请合适是否按照规定缴纳企业所得税，如果未进行纳税
        调整需要再30天内完成更正申报。
      </div>
    </div>
    <div class="gradient-box">已关差公司明细</div>
    <native-custom-table v-model="tableData" />
    <div class="background-img-1" style="position: relative; margin-top: 40px">
      <img src="../assets/红色title.png" style="width: 840px; height: 40px" />
      <div style="position: absolute; top: 9px; left: 60px; color: white">
        红区风险指标2
      </div>
    </div>
    <div class="gray-box">
      <div>风险指标名称</div>
      <div>发生简易计税销售额但进项税转出简易计税项目用为零的风险</div>
    </div>
    <div class="gray-box-2">
      <div>风险关差建议</div>
      <div>
        根据税法规定，简易计税销售额对应进项需要做进项转出，请关注简易计税项目对应的进项税是否已做转出，
        未做转出的需要在30天内完成进项转出更正申报。
      </div>
    </div>
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
          industry: '冰箱',
          company: '贵州海尔电器有限公司',
          period: '2024年汇算清缴',
          solution:
            '补贴资金有政府下发文件，按不征税收入处理。其他收益未调减与折旧未调增，所得税应纳税所得额总额不变，后续与税审对接规范纳税调整事项。',
        },
        {
          industry: '冰箱',
          company: '合肥海尔电冰箱有限公司',
          period: '2024年汇算清缴',
          solution:
            '纳税调账填写在A105000纳税调整项目明细表收入类调整项目其他中',
        },
        {
          industry: '厨电',
          company: '莱阳海尔智慧厨房电器有限公司',
          period: '2024年汇算清缴',
          solution: '实际当期已全部计入纳税所得额缴纳所得税',
        },
        {
          industry: '家用',
          company: '合肥海尔空调器有限公司',
          period: '2024年汇算清缴',
          solution:
            '本期摊销递延收益在纳税调整表第9行做了纳税调减，以前年度做了调增。',
        },
        {
          industry: '冷柜',
          company: '武汉海尔电冰柜有限公司',
          period: '2024年汇算清缴',
          solution: '已在A105000第十一行调整',
        },
        {
          industry: '热水器',
          company: '武汉海尔热水器有限公司',
          period: '2024年汇算清缴',
          solution: '已在申报表A105000的第十一行填列',
        },
        {
          industry: '日日顺乐信',
          company: '青岛海尔乐信云科技有限公司',
          period: '2024年汇算清缴',
          solution:
            '乐信云2021年度收到支持重点“小巨人”企业奖补资金2,000,000.00元，21年已一次性纳税；本纳税年度列入其他收益的金额调减。',
        },
        {
          industry: '洗衣机',
          company: '青岛海尔洗涤电器有限公司',
          period: '2024年汇算清缴',
          solution: '按规定缴纳所得税，实际不存在问题',
        },
        {
          industry: '小家电',
          company: '青岛海尔智慧生活电器有限公司',
          period: '2024年汇算清缴',
          solution: '2023年汇算清缴已经调增交过税',
        },
        {
          industry: '婴童',
          company: '青岛绿洲创智科技信息有限公司',
          period: '2024年汇算清缴',
          solution:
            '2021年形成的递延收益，在2021年度已经纳税调增，本年不需要纳税调整。',
        },
        {
          industry: '智慧园区',
          company: '重庆海尔物业管理有限公司',
          period: '2024年汇算清缴',
          solution: '属于不征收收入税审认为不用做纳税调整',
        },
        {
          industry: 'U+',
          company: '海尔优家智能科技（北京）有限公司',
          period: '2024年汇算清缴',
          solution: '账面无此科目余额',
        },
      ],
    }
  },
  methods: {
    mergeCells({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        const industry = row.industry
        const firstIndex = this.tableData.findIndex(
          (item) => item.industry === industry
        )
        const rowSpan = this.tableData.filter(
          (item) => item.industry === industry
        ).length
        if (rowIndex === firstIndex) {
          return {
            rowspan: rowSpan,
            colspan: 1,
          }
        } else {
          return {
            rowspan: 0,
            colspan: 0,
          }
        }
      }
    },
  },
}
</script>

<style>
@import '../styles/mian.css';

/* 表格外边框，取消左右边框 */
.custom-table-wrapper ::v-deep .el-table {
  border-left: none !important;
  border-right: none !important;
}

/* 表头背景色 */
.custom-header {
  background-color: #d3eadb !important;
  color: #000;
  font-weight: bold;
}

/* 行斑马纹颜色（绿色） */
.custom-row:nth-child(odd) {
  background-color: #f2f8f5;
}

/* 单元格边框微调 */
.custom-cell {
  border-left: none !important;
  border-right: none !important;
}
</style>
