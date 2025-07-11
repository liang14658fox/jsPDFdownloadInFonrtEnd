<template>
    <div>
        <native-custom-table v-model="tableData" style="margin-top: 40px;" :isShowHeader="false" />
    </div>
</template>

<script>
import NativeCustomTable from './NativeCustomTable.vue'
export default {
    components: {
        NativeCustomTable,
    },
    props: {},
    created () { },
    data () {
        return {
            tableData: [
                {
                    industry: '冰箱',
                    company: '青岛海尔电子塑胶有限公司',
                    period: '2024年汇算清缴',
                    solution:
                        '解释口径：家电行业市场竞争加剧，产品更新迭代较快，新品上市的迭代更新较快，研究和开发阶段不断检验、试验的过程，发生的费用支出结果具有不确定性，没有完成无形资产使用在技术上的可行性，未达到资本化条件。',
                },
                {
                    industry: '冰箱',
                    company: '青岛海尔特种电冰箱有限公司',
                    period: '2024年汇算清缴',
                    solution:
                        '家电行业市场竞争加剧，产品更新迭代较快，新品上市的迭代更新较快，研究和开发阶段不断检验、试验的过程，发生的费用支出结果具有不确定性，没有完成无形资产使用在技术上的可行性，未达到资本化条件。',
                },
                {
                    industry: '冰箱',
                    company: '大连海尔电冰箱有限公司',
                    period: '2024年汇算清缴',
                    solution: '我司的研发费用不符合资本化确认条件',
                },
                {
                    industry: '冰箱',
                    company: '青岛海尔特种制冷电器有限公司',
                    period: '2024年汇算清缴',
                    solution:
                        '经研发加计扣审计后，不存在研发费用资本化占比偏低多计管理费用少缴纳企业所得税的风险 ',
                },
                {
                    industry: '冰箱',
                    company: '合肥海尔电冰箱有限公司',
                    period: '2024年汇算清缴',
                    solution: '研发投入谨慎性原则，费用化处理',
                },
                {
                    industry: '冰箱',
                    company: '重庆海尔制冷电器有限公司',
                    period: '2024年汇算清缴',
                    solution: '无风险',
                },
                {
                    industry: '冰箱',
                    company: '沈阳海尔电冰箱有限公司',
                    period: '2024年汇算清缴',
                    solution: '我司的研发费用不符合资本化确认条件',
                },
                {
                    industry: '厨电',
                    company: '青岛海尔智慧厨房电器有限公司',
                    period: '2024年汇算清缴',
                    solution:
                        '家电行业市场竞争加剧，产品更新迭代较快，新品上市的迭代更新较快，研究和开发阶段不断检验、试验的过程，发生的费用支出结果具有不确定性，没有完成无形资产使用在技术上的可行性，未达到资本化条件。',
                },
                {
                    industry: '厨电',
                    company: '莱阳海尔智慧厨房电器有限公司',
                    period: '2024年汇算清缴',
                    solution: '按照实际发生填写',
                },
                {
                    industry: '海尔智家体验云',
                    company: '青岛卫玺智能科技有限公司',
                    period: '2024年汇算清缴',
                    solution: '企业不存在研发项目应资本化金额，模具费集团统一要求费用化',
                },
                {
                    industry: '海尔智家体验云',
                    company: '青岛极家云智能科技有限公司',
                    period: '2024年汇算清缴',
                    solution:
                        '从研发费用投入及研发成果产出，转化至产品全流程来看，实际研发成果收益期基本为一年，与无形资产摊销十年及以上摊销期不匹配，资本化加计扣除无法准确反应企业经营情况。',
                },
                {
                    industry: '家庭机器人',
                    company: '海尔机器人科技（青岛）有限公司',
                    period: '2024年汇算清缴',
                    solution:
                        '从研发费用投入及研发成果产出，转化至产品全流程来看，实际研发成果收益期基本为一年，与无形资产摊销十年及以上摊销期不匹配，资本化加计扣除无法准确反应企业经营情况。',
                },
                {
                    industry: '家用',
                    company: '合肥海尔空调电子有限公司',
                    period: '2024年汇算清缴',
                    solution: '研发投入谨慎性原则，费用化处理',
                },
                {
                    industry: '家用',
                    company: '青岛海尔空调器有限总公司',
                    period: '2024年汇算清缴',
                    solution: '本公司没有无形资产列支到研发费。',
                },
                {
                    industry: '家用',
                    company: '合肥海尔空调器有限公司',
                    period: '2024年汇算清缴',
                    solution:
                        '研发费用核销时全部计入研发费用，未通过生产成本核算，当期投入全部费用化。',
                },
                {
                    industry: '家用',
                    company: '武汉海尔电器股份有限公司',
                    period: '2024年汇算清缴',
                    solution: '研发费用全部费用化，未形成无形资产',
                },
                {
                    industry: '家用',
                    company: '青岛海尔(胶州)空调器有限公司',
                    period: '2024年汇算清缴',
                    solution:
                        '开发阶段是一个不断检验、试验的过程，发生的费用支出结果具有不确定性，没有完成无形资产使用在技术上的可行性',
                },
                {
                    industry: '家用',
                    company: '郑州海尔空调器有限公司',
                    period: '2024年汇算清缴',
                    solution: '研发费用全部费用化，没有计入无形资产',
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
