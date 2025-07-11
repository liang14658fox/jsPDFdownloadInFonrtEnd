<template>
    <div>
        <div>
            <div style="position: relative" class="background-img-1">
                <div style="top: 8px; left: 120px" class="title-text">1</div>
                <div style="top: 23px; left: 255px; " class="title-text">
                    第二季度税务风险数据概览
                </div>
            </div>
            <div style="
            line-height: 26px;
            font-size: 14px;
            color: #6a6a6a;
            margin: 55px 50px;
          ">
                二季度智税通从增值税评估、企业所得税评估、关联指标配比分析评估三个维度对智家领域<span style="color: #209bf8" class="word-color">{{ 443
                    }}</span>家公司进行税务风险筛查，累计漏出
                <span style="color: #209bf8" class="word-color">{{ 115 }}</span>
                家 公司<span style="color: #f36a6c" class="word-color">{{ 10 }}</span>
                类风险指标预警，风险待关差事项合计<span style="color: #f36a6c" class="word-color">{{ 163 }}</span>条。
                <br />
                其中已关差<span style="color: #3fbf56" class="word-color">{{
                    154
                    }}</span>条，未关差<span style="color: #fe8d42" class="word-color">{{
                        9
                    }}</span>条，风险详情如下：
            </div>
            <div style="position: relative" class="background-img-3">
                <div style="top: 88px; left: 80px" class="img-3-item">
                    {{ 105 }}<span class="word"> 家</span>
                </div>
                <div style="top: 88px; left: 643px" class="img-3-item">
                    {{ 163 }} <span class="word"> 条</span>
                </div>
                <div style="top: 214px; left: 80px" class="img-3-item">
                    {{ 154 }} <span class="word"> 条</span>
                </div>
                <div style="top: 214px; left: 644px" class="img-3-item">
                    {{ 9 }} <span class="word"> 条</span>
                </div>
                <div style="
              top: 143px;
              left: 347px;
              color: white;
              font-size: 35px;
              font-weight: bold;
              position: absolute;
            ">
                    {{ 443 }}
                </div>
            </div>
            <div style="
            display: flex;
            align-items: center;
            margin-left: 50px;
            margin-top: 20px;
          ">
                <div class="warning-box">
                    <img src="../assets/红点.png" style="width: 17px; height: 15px; margin-right: 5px" alt="HSE logo" />
                    红区
                    <div style="
                margin-left: 30px;
                font-size: 35px;
                font-weight: bold;
                color: #f36a6c;
              ">
                        {{ 75 }}
                        <span class="word" style="font-weight: 100"> 家</span>
                    </div>
                </div>
                <div class="warning-box">
                    <img src="../assets/黄点.png" style="width: 17px; height: 15px; margin-right: 5px" alt="HSE logo" />
                    黄区
                    <div style="
                margin-left: 30px;
                font-size: 35px;
                font-weight: bold;
                color: #f5ba18;
              ">
                        {{ 24 }}
                        <span class="word" style="font-weight: 100"> 家</span>
                    </div>
                </div>
                <div class="warning-box">
                    <img src="../assets/蓝点.png" style="width: 17px; height: 15px; margin-right: 5px" alt="HSE logo" />
                    蓝区
                    <div style="
                margin-left: 30px;
                font-size: 35px;
                font-weight: bold;
                color: #219cf9;
              ">
                        {{ 27 }}
                        <span class="word" style="font-weight: 100"> 家</span>
                    </div>
                </div>
            </div>
            <div style="position: relative" class="background-img-2">
                <div style="top: 8px; left: 120px" class="title-text">2</div>
                <div style="top: 23px; left: 255px; ;" class="title-text">
                    红区风险指标详情
                </div>
            </div>
            <div id="myChart" :style="{ width: '820px', height: '340px' }" style="margin-top: 20px;margin-left: 10px;">
            </div>
            <div class="custom-legend" style="margin-top: 10px;">
                <div class="legend-item">
                    <span class="legend-color legend-green"></span> 已关差
                </div>
                <div class="legend-item">
                    <span class="legend-color legend-orange"></span> 未关差
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {

    },
    props: {

    },
    created () {
        this.$nextTick(()=>{
            this.draw();
        })
    },
    data () {
        return {

        }
    },
    methods: {
        draw () {
            // 初始化echarts实例
            let myChart = this.$echarts.init(document.getElementById("myChart"));
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
                        "厨电",
                        "海尔智家体验云",
                        "家庭机器人",
                        "家用",
                        "巨商汇",
                        "雷神",
                        "冷柜",
                        "绿色再循环工厂",
                        "美尔粉末",
                        "热水器",
                        "日日顺乐信",
                        "商用",
                        "适老平台",
                        "水家电",
                        "洗碗机",
                        "洗衣机",
                        "小家电",
                        "信息",
                        "研发",
                        "婴童",
                        "智慧园区",
                        "重庆家电",
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
                    max: 20,
                    interval: 4, // ✅ 显示 0、4、8、12、16、20
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
                        barWidth: 24,
                        itemStyle: {
                            color: "#86CAAD",
                        },
                        data: [
                            3, 2, 12, 3, 2, 1, 16, 1, 1, 4, 1, 1, 5, 2, 2, 1, 2, 1, 16, 3, 3,
                            6, 2, 1, 2,
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
                        data: [
                            0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0,
                            0, 0, 0,
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

<style  scoped>
@import '/src/styles/mian.css';

.background-img-1 {
  margin-top: 35px;
  width: 840px;
  height: 50px;
  background-image: url("../assets/蓝色标题背景.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.background-img-2 {
  margin-top: 45px;
  width: 840px;
  height: 50px;
  background-image: url("../assets/红色标题背景.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.background-img-3 {
  margin: -40px 40px 0;
  width: 760px;
  height: 308px;
  /* background-image: url("../assets/大屏背景.png"); */
  background-image: url("../assets/大屏背景.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}


.img-3-item {
  position: absolute;
  color: black;
  font-size: 22px;
}

.word {
  color: #626262;
  font-size: 14px;
}

.word-color {
  font-size: 23px;
  font-weight: 600;
  margin: 0px 2px 0px 3px;
}



.warning-box {
  background-color: #f5f5f5;
  border-radius: 10px;
  padding: 5px 35px;
  margin-left: 20px;
  display: flex;
  align-items: center;
  color: black;
  font-size: 14px;
}

</style>