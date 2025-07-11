<template>
    <div>
        <div style="position: relative" class="background-img-1">
            <div style="top: 8px; left: 120px" class="title-text">3</div>
            <div style="top: 23px; left: 255px; font-size: 15px; font-weight: 100" class="title-text">
                黄区风险指标详情
            </div>
        </div>
        <div id="myChart2" :style="{ width: '820px', height: '340px' }" style="margin-top: 20px;margin-left: 10px;">
        </div>
        <div class="custom-legend" style="margin-top: 10px;">
            <div class="legend-item">
                <span class="legend-color legend-green"></span> 已关差
            </div>
            <div class="legend-item">
                <span class="legend-color legend-orange"></span> 未关差
            </div>
        </div>
        <div style="position: relative; margin-top: 40px">
            <img src="../assets/橙色titile.png" style="width: 840px; height: 40px" />
            <div style="position: absolute; top: 9px; left: 60px; color: white">
                黄风险指标1
            </div>
        </div>
        <div class="gray-box">
            <div style="border-left: 6px solid #fe9d50;">风险指标名称</div>
            <div>汇算清缴退税金额过大存在税务稽查风险</div>
        </div>
        <div class="gray-box-2">
            <div>风险关差建议</div>
            <div>
                企业所得税汇缴退税金额大于100万元，退税金额较大会被税局重点稽查检查，请核实是否存在漏缴税金的风险，
                如果存在此类情形需要在30天内完成更正申报。
            </div>
        </div>

        <div class="gradient-box">已关差公司明细</div>
        <native-custom-table v-model="tableData" style="margin-top: 20px" />
    </div>
</template>

<script>
import NativeCustomTable from './NativeCustomTable.vue'
export default {
    components: {
        NativeCustomTable,
    },
    props: {},
    created () {
        this.$nextTick(() => {
            this.draw();
        })
    },
    data () {
        return {
            tableData: [
                {
                    industry: 'U+',
                    company: '青岛海尔科技有限公司',
                    period: '2024年汇算清缴',
                    solution: '享受加计扣除税收优惠',
                },
                {
                    industry: '采购',
                    company: '青岛海达诚采购服务有限公司',
                    period: '2024年汇算清缴',
                    solution: '退税因汇缴时存在纳税调整项目，相关明细附上',
                },
                {
                    industry: '采购',
                    company: '青岛海达源采购服务有限公司',
                    period: '2024年汇算清缴',
                    solution: '审计按照权责发生制重新调整税金及费用金额',
                },
                {
                    industry: '境内控股公司',
                    company: '青岛微艾智贸易有限公司',
                    period: '2024年汇算清缴',
                    solution:
                        '2024年预缴权益法核算长期股权投资收益9,640,351.19元，季度预缴纳税，年度汇算清缴纳税调减形成退税',
                },
                {
                    industry: '雷神',
                    company: '青岛雷神信息科技有限公司',
                    period: '2024年汇算清缴',
                    solution:
                        '24年1季度因未完成以前年度汇算清缴，弥补亏损额不能使用，导致一季度大额缴税，24年度汇算清缴后形成退税。',
                },
                {
                    industry: '冷柜',
                    company: '青岛海尔特种电冰柜有限公司',
                    period: '2024年汇算清缴',
                    solution: '年度审计、研发费加计抵减后应退税额。',
                },
                {
                    industry: '洗衣机',
                    company: '青岛海尔洗涤电器有限公司',
                    period: '2024年汇算清缴',
                    solution: '退税金额经年度纳税申报鉴证，已核实，无问题',
                },
                {
                    industry: '洗衣机',
                    company: '上海海尔洗涤电器有限公司',
                    period: '2024年汇算清缴',
                    solution:
                        '"①退税已与区税务沟通②上海稽查局稽查中，退税金额待稽查结束后退"',
                },
            ],
        }
    },
    methods: {
        draw () {
            // 初始化echarts实例
            let myChart = this.$echarts.init(document.getElementById("myChart2"));
            // 绘制图表
            var option = {
                tooltip: {
                    trigger: "axis",
                    axisPointer: {
                        type: "shadow",
                    },
                },
                grid: {
                    top: 30,
                    bottom: 70,
                    left: 40,
                    right: 20,
                },
                xAxis: {
                    type: "category",
                    data: [
                        "U+",
                        "安防",
                        "冰箱",
                        "采购",
                        "合肥电器",
                        "家用",
                        "境内控股公司",
                        "雷神",
                        "冷柜",
                        "绿色再循环工厂",
                        "热水器",
                        "商用",
                        "洗碗机",
                        "信息",
                        "研发",
                    ],
                    axisLabel: {
                        interval: 0,
                        rotate: 45,
                    },
                    axisTick: {
                        alignWithLabel: true,
                    },
                    splitLine: {
                        show: true, // ✅ 开启竖线
                        lineStyle: {
                            type: "dashed",
                            color: "#e0e0e0",
                        },
                    },
                },
                yAxis: {
                    type: "value",
                    max: 8,
                    // interval: 'auto', // ✅ 显示 0、4、8、12、16、20
                    axisLabel: {
                        formatter: "{value}",
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            type: "dashed",
                            color: "#ccc",
                        },
                    },
                },
                series: [
                    {
                        name: "已关差",
                        type: "bar",
                        stack: "总量",
                        barWidth: 40,
                        itemStyle: {
                            color: "#86CAAD",
                        },
                        data: [
                            1, 1, 1, 2, 3, 2, 8, 1, 1, 1, 1, 2, 7, 1, 2
                        ],
                    },
                    {
                        name: "未关差",
                        type: "bar",
                        stack: "总量",
                        barWidth: 24,
                        itemStyle: {
                            color: "#FEB77C",
                        },
                        data: [0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0
                        ],
                    },
                ],
            };
            window.onresize = myChart.resize;
            myChart.setOption(option);
        },
    },
}
</script>

<style scoped>
@import '/src/styles/mian.css';

.background-img-1 {
    margin-top: 35px;
    width: 840px;
    height: 50px;
    background-image: url('../assets/橙色标题背景.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}



</style>
