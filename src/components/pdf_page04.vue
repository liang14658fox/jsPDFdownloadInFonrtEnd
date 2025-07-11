<template>
    <div>
        <div class="gradient-box" style="margin-top: 40px">已关差公司明细</div>
        <native-custom-table v-model="tableData" />
    </div>
</template>

<script>
import NativeCustomTable from './NativeCustomTable.vue'
export default {
    components: {NativeCustomTable},
    props: {},
    created () { },
    data () {
        return {
            tableData: [
                {
                    industry: '冰箱',
                    company: '合肥海尔电冰箱有限公司',
                    period: '202501',
                    solution: '简易计税销售额相关的进项税额为0',
                },
                {
                    industry: '冰箱',
                    company: '合肥海尔电冰箱有限公司',
                    period: '202503',
                    solution: '简易计税销进项税转出进项为0',
                },
                {
                    industry: '冰箱',
                    company: '合肥海尔电冰箱有限公司',
                    period: '202504',
                    solution:
                        '简易计税的销售额为房屋出租收入，其进项税额不进行抵扣，无需做进项税额转出操作',
                },
                {
                    industry: '家用',
                    company: '青岛海尔金塑制品有限公司',
                    period: '202503',
                    solution: '目前只有厂房出租业务，无其他业务',
                },
                {
                    industry: '家用',
                    company: '大连海尔空调器有限公司',
                    period: '202501',
                    solution:
                        '根据财政部 税务总局关于全面推开营业税改征增值税试点的通知，财税〔2016〕36号，第二十七条下列项目的进项税额不得从销项税额中抵扣：（一）用于简易计税方法计税项目.免征增值税项目、集体福利或者个人消费的购进货物、加工修理修配劳务，服务，无形资产和不动产。其中涉及的固定资产。无形资产。不动产，仅指专用于上达项目的固定资产_无形资产（不包括基他权益性无形资产）、不动产。大连空调不存在专用于上述项目的进项税额转出建议计税',
                },
                {
                    industry: '家用',
                    company: '大连海尔空调器有限公司',
                    period: '202502',
                    solution:
                        '根据财政部 税务总局关于全面推开营业税改征增值税试点的通知，财税〔2016〕36号，第二十七条下列项目的进项税额不得从销项税额中抵扣：（一）用于简易计税方法计税项目.免征增值税项目、集体福利或者个人消费的购进货物、加工修理修配劳务，服务，无形资产和不动产。其中涉及的固定资产。无形资产。不动产，仅指专用于上达项目的固定资产_无形资产（不包括基他权益性无形资产）、不动产。大连空调不存在专用于上述项目的进项税转出简易计税',
                },
                {
                    industry: '家用',
                    company: '青岛海尔空调制冷设备有限公司',
                    period: '202503',
                    solution:
                        '胶南空调目前的业务仅剩房屋租赁业务，公司发生的进项税也没做抵扣，不需要做转出。',
                },
                {
                    industry: '家用',
                    company: '郑州海尔空调器有限公司',
                    period: '202501',
                    solution: '租赁收入开票税率享受5%的简易税率',
                },
                {
                    industry: '家用',
                    company: '郑州海尔空调器有限公司',
                    period: '202502',
                    solution: '公司享受简易税率5%，无问题',
                },
                {
                    industry: '家用',
                    company: '郑州海尔空调器有限公司',
                    period: '202503',
                    solution: '2016年之前的房产，厂房租赁享受简易征收5%税率',
                },
                {
                    industry: '家用',
                    company: '郑州海尔空调器有限公司',
                    period: '202504',
                    solution:
                        '出租其2016年4月30日前取得的不动产，可以选择适用简易计税政策，未发生进项税简易计税项目无需进项转出',
                },
                {
                    industry: '家用',
                    company: '郑州海尔空调器有限公司',
                    period: '202505',
                    solution:
                        '出租其2016年4月30日前取得的不动产，可以选择适用简易计税政策，未发生进项税简易计税项目无需进项转出',
                },
                {
                    industry: '洗衣机',
                    company: '合肥海尔塑胶有限公司',
                    period: '202501',
                    solution: '简易征收已按5%申报纳税',
                },
                {
                    industry: '洗衣机',
                    company: '合肥海尔塑胶有限公司',
                    period: '202502',
                    solution: '简易征收已按照5%缴纳增值税',
                },
                {
                    industry: '洗衣机',
                    company: '合肥海尔塑胶有限公司',
                    period: '202503',
                    solution: '简易征收已按照5%缴纳增值税',
                },
                {
                    industry: '洗衣机',
                    company: '合肥海尔塑胶有限公司',
                    period: '202505',
                    solution:
                        '前申报抵扣进项税额为一般项目进项税，并未抵减简易征收，简易征收已按按5%缴纳增值税',
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
