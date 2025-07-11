<template>
    <div>
    <NativeCustomTable v-model="tableData1" :isShowHeader="false" style="margin-top: 40px;"/>
        <div style="position: relative; margin-top: 40px">
            <img src="../assets/蓝色titile.png" style="width: 840px; height: 40px" />
            <div style="position: absolute; top: 9px; left: 60px; color: white">
                蓝区风险指标3
            </div>
        </div>
        <div class="gray-box">
            <div style="
    border-left: 6px solid #118cd1;">风险指标名称</div>
            <div>
                职工薪酬纳税调整明细表_其他_账载金额与工资薪金支出账载金额占比偏高职工福利费未足额纳税调整
                少缴企业所得税风险
            </div>
        </div>
        <div class="gray-box-2">
            <div>风险关差建议</div>
            <div>
                职工薪酬支出及纳税调整明细表_其他_账载金额偏大，有可能存在将福利性支出未计入职工福利费，少做
                纳税调整，如果存在此类情形需要在30天内完成更正申报。
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
    created () { },
    data () {
        return {
            tableData1: [
                {
                    industry: '日日顺合资',
                    company: '合肥日日顺电器有限公司',
                    period: '2024年汇算清缴',
                    solution:
                        '1、产生原因为原合肥日日顺承接海尔2016-2019年期间H股产品洗衣机、热水器全国17个地区的开票业务，合肥日日顺为税票中心；2、2019年合肥日日顺电器有限公司与股东方进行资金的注入，成立合资公司，原税票中心留底税金金额进行数据承接；3、此留底税金解决可行性方案，H股上市及合资公司总部已沟通过处理方案，目前合肥日日是业务停滞，按照总部战略进行各项业务清理推进；',
                },
                {
                    industry: '日日顺社会化',
                    company: '青岛日日顺乐家家居贸易有限公司',
                    period: '2024年汇算清缴',
                    solution:
                        '目前该公司基本不开展业务，目前的留抵金额为金融服务积累的进项税额。',
                },
                {
                    industry: '商城',
                    company: '海尔集团电子商务有限公司',
                    period: '2024年汇算清缴',
                    solution:
                        '时间性差异，因国补业务上线，备货增加，导致期末出现留抵，1月消化完毕',
                },
                {
                    industry: '水家电',
                    company: '青岛日日顺乐家水设备有限公司',
                    period: '2024年汇算清缴',
                    solution:
                        '公司2017年前正常开展业务形成留抵税额，留抵形成的原因为2015年6月存在部分进项税记账在7月，销项税正常记账在6月所属期，当月缴纳增值税277万元；后期进项税正常勾选认证形成留抵税额；2017年后公司战略调整，基本上不再发生业务；2022年公司共享移管，无业务发生，留抵税额从2017年延续至今。',
                },
                {
                    industry: '小家电',
                    company: '青岛海尔成套家电服务有限公司',
                    period: '2024年汇算清缴',
                    solution: '企业留有库存商品尚未销售，存在小额留抵',
                },
                {
                    industry: '信息',
                    company: '青岛模卡商贸有限公司',
                    period: '2024年汇算清缴',
                    solution: '企业亏损，增值税留抵',
                },
                {
                    industry: '重庆家电',
                    company: '重庆海尔家电销售合肥有限公司',
                    period: '2024年汇算清缴',
                    solution: '及时清理库存',
                },
                {
                    industry: '重庆家电',
                    company: '重庆海尔家电销售有限公司合肥分公司',
                    period: '2024年汇算清缴',
                    solution: '已分次提报直扣消化  预计本月能消化完',
                },
            ],
            tableData2: [
                {
                    industry: '洗衣机',
                    company: '合肥海尔塑胶有限公司',
                    period: '2024年汇算清缴',
                    solution: '其他_账载金额 113,885.00实际为辞退福利费；',
                },
                {
                    industry: '洗衣机',
                    company: '重庆海尔精密塑胶有限公司',
                    period: '2024年汇算清缴',
                    solution:
                        '重庆精密利润亏损，精密员工安置费记账在应付职工薪酬其他里面，所以金额偏大。',
                },
                {
                    industry: '信息',
                    company: '合肥海尔信息产品有限公司',
                    period: '2024年汇算清缴',
                    solution: '其他账载金额为退休人员的安置费，无需做所得税纳税调整',
                },
                {
                    industry: '重庆家电',
                    company: '重庆海尔家电销售有限公司',
                    period: '2024年汇算清缴',
                    solution:
                        '依据审计报告填写，其他_账载金额包括 企业劳务费、安置费和实习人员工资以应付职工薪酬贷方计提数2193972082.73元作为账载金额。',
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
