<template>
    <div>
        <native-custom-table v-model="tableData1" style="margin-top: 40px" :isShowHeader="false" />
        <div class="background-img-1" style="position: relative; margin-top: 40px">
            <img src="../assets/红色title.png" style="width: 840px; height: 40px" />
            <div style="position: absolute; top: 9px; left: 60px; color: white">
                红区风险指标1
            </div>
        </div>
        <div class="gray-box">
            <div >风险指标名称</div>
            <div>研发费用资本化占比偏低多计管理费用少缴纳企业所得税风险</div>
        </div>
        <div class="gray-box-2">
            <div>风险关差建议</div>
            <div>
                研发支出在研究阶段做费用化处理，开发阶段形成无形资产做资本化处理，研发加计资本化占比偏低反映企业
                可能存在研发项目应资本化而未资本化，延迟缴纳企业所得税的问题，请排查研发支出是否正确处理，存在应资
                本化而未资本化情形需要在30天内完成更正申报。
            </div>
        </div>

        <div class="gradient-box-origin">未关差公司明细</div>

        <NativeCustomTableOrigin v-model="tableData2" />

        <div class="gradient-box">已关差公司明细</div>

        <native-custom-table v-model="tableData3" />
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
    created () { },
    data () {
        return {
            tableData1: [
                {
                    industry: '信息',
                    company: '合肥海尔电器有限公司',
                    period: '202503',
                    solution: '简易计税销售的进项税额无需认证',
                },
                {
                    industry: '信息',
                    company: '青岛胶南海尔电子有限公司',
                    period: '202502',
                    solution: '25年2月所属期未发生进项税额，无需进行进项税额转出。',
                },
                {
                    industry: '重庆家电',
                    company: '重庆海尔家电销售有限公司上海分公司',
                    period: '202502',
                    solution:
                        '房租收入，因其在2016年4月30日前取得，所以季度收取的租金收入采用简易计税的方法，适用5%的征收率，且无对应的维修费用，装修费用，物业费用等进项税额，无需做进项税额转出',
                },
                {
                    industry: '重庆家电',
                    company: '重庆海尔家电销售有限公司上海分公司',
                    period: '202505',
                    solution:
                        '房租收入，因其在2016年4月30日前取得，所以季度收取的租金收入采用简易计税的方法，适用5%的征收率，且无对应的维修费用，装修费用，物业费用等进项税额，无需做进项税额转出',
                },
            ],
            tableData2: [
                {
                    industry: '冰箱',
                    company: '青岛海尔电冰箱有限公司',
                    period: '2024年汇算清缴',
                },
                {
                    industry: '热水器',
                    company: '青岛海尔新能源电器有限公司',
                    period: '2024年汇算清缴',
                },
                {
                    industry: '洗衣机',
                    company: '青岛胶南海尔洗衣机有限公司',
                    period: '2024年汇算清缴',
                },
                {
                    industry: '信息',
                    company: '青岛小帅智能科技股份有限公司',
                    period: '2024年汇算清缴',
                },
            ],
            tableData3: [
                {
                    industry: 'U+',
                    company: '海尔优家智能科技（北京）有限公司',
                    period: '2024年汇算清缴',
                    solution:
                        '0CL0因常年亏损，未享受研发费加计扣除优惠政策，未避免税务稽核，此部分本年未申请加计扣除。',
                },
                {
                    industry: 'U+',
                    company: '青岛海尔科技有限公司',
                    period: '2024年汇算清缴',
                    solution: '审计师认为未达到资本化标准，所以费用化',
                },
                {
                    industry: '安防',
                    company: '青岛海尔智能家电科技有限公司',
                    period: '2024年汇算清缴',
                    solution:
                        '从研发费用投入及研发成果产出，转化至产品全流程来看，实际研发成果收益期基本为一年，与无形资产摊销十年及以上摊销期不匹配，资本化加计扣除无法准确反应企业经营情况。',
                },
                {
                    industry: '安防',
                    company: '广东海尔智能科技有限公司',
                    period: '2024年汇算清缴',
                    solution: '以前年度有留存未弥补亏损，25年无需缴纳企业所得税',
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
