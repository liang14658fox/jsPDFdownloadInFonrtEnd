<template>
    <div>
        <div class="container background-div">
        <div class="item">
          <img
            src="../assets/logo.png"
            style="width: 190px; height: 45px; margin-top: 50px"
            alt="HSE logo"
          />
        </div>
        <div
          style="
            margin-top: 80px;
            color: #014c94;
            font-weight: 600;
            font-size: 60px;
            font-family:'STZhongsong';
          "
        >
          智家国内二季度税务风险报告
        </div>
        
        <div
          style="
            font-size: 25px;
            color: #014c94;
            font-weight: 600;
            font-size: 25px;
            margin-top: 15px;
          "
        >
          （<span style="margin: 0 2px;"><span style="font-size: 23px;">{{ 2025  }}</span>年</span>）
        </div>
        <div
          style="
            margin-top: 785px;
            color: #014c94;
            font-weight: 600;
            font-size: 27px;
          "
        >
          集团财资生态圈全球税务平台
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
    created() {

    },
    data() {
        return {

        }
    },
    methods:{

    },
}
</script>

<style scoped>
@import '/src/styles/mian.css';

.container {
  display: flex; /* 使用 Flexbox */
  flex-direction: column; /* 竖向排列 */
  align-items: center; /* 左右居中 */
}

.background-div {
  width: 840px;
  height: 1188px;
  background-image: url("../assets//封面.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

</style>