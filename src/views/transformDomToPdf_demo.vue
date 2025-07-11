<template>
    <div style="width: 100%">
        <div class="preview-content-operateBtn" style="padding: 8px 16px">
            <!-- <el-button @click="uploadToService()" type="primary">上传至服务器</el-button>
            <el-input style="width: 200px; margin: 0 8px" v-model="sceneId"></el-input>
            <el-button @click="downLoad_api()" type="primary">下载</el-button> -->
            <!-- <el-button class="previewBtn" type="warning" @click="onClickDownLoad">DOM在前端直接转转换为PDF并下载</el-button> -->
        </div>
        <div id="pdfDom1">
            <pdf_page01 class="pdf-page"></pdf_page01>
            <pdf_page02 class="pdf-page"></pdf_page02>
            <pdf_page03 class="pdf-page"></pdf_page03>
            <pdf_page04 class="pdf-page"></pdf_page04>
            <pdf_page05 class="pdf-page"></pdf_page05>
            <pdf_page06 class="pdf-page"></pdf_page06>
            <pdf_page07 class="pdf-page"></pdf_page07>
        </div>
        <div id="pdfDom2">
            <pdf_page08 class="pdf-page"></pdf_page08>
            <pdf_page09 class="pdf-page"></pdf_page09>
            <pdf_page10 class="pdf-page"></pdf_page10>
            <pdf_page11 class="pdf-page"></pdf_page11>
            <pdf_page12 class="pdf-page"></pdf_page12>
            <pdf_page13 class="pdf-page"></pdf_page13>
            <pdf_page14 class="pdf-page"></pdf_page14>
        </div>

        <el-button class="back-to-top" type="primary" style="position: fixed; bottom: 60px; right: 10px; z-index: 9999"
            @click="onClickDownLoad()">导出PDF</el-button>

        <el-button class="back-to-top" style="position: fixed; bottom: 10px; right: 10px; z-index: 9999"
            @click="backToTop()">返回顶部</el-button>
    </div>
</template>

<script>
// import {
//   upload_file2, // 上传
// } from "@/api/system/SystemManagementApi";

// import {
//   download_file, // 下载
// } from "@/api/system/SystemManagementApi";

import pdf_page01 from '../components/pdf_page01.vue'
import pdf_page02 from '../components/pdf_page02.vue'
import pdf_page03 from '../components/pdf_page03.vue'
import pdf_page04 from '../components/pdf_page04.vue'
import pdf_page05 from '../components/pdf_page05.vue'
import pdf_page06 from '../components/pdf_page06.vue'
import pdf_page07 from '../components/pdf_page07.vue'
import pdf_page08 from '../components/pdf_page08.vue'
import pdf_page09 from '../components/pdf_page09.vue'
import pdf_page10 from '../components/pdf_page10.vue'
import pdf_page11 from '../components/pdf_page11.vue'
import pdf_page12 from '../components/pdf_page12.vue'
import pdf_page13 from '../components/pdf_page13.vue'
import pdf_page14 from '../components/pdf_page14.vue'
// import htmlToPdf from "../untils/htmlToPdf.js";
import htmlToPdf2 from "../untils/htmlToPdf2.js";

export default {
    components: {
        pdf_page01,
        pdf_page02,
        pdf_page03,
        pdf_page04,
        pdf_page05,
        pdf_page06,
        pdf_page07,
        pdf_page08,
        pdf_page09,
        pdf_page10,
        pdf_page11,
        pdf_page12,
        pdf_page13,
        pdf_page14,
    },
    props: {},
    created () { },
    mounted () { },
    data () {
        return {
            sceneCode: "institutionLaw",
            sceneId: "",
            uploadFileUrl:
                process.env.VUE_APP_BASE_API +
                "/admin-api/infra/file/upload?sceneCode=", // 请求地址
        };
    },
    methods: {
        backToTop () { // 滚动回到页面顶部
            window.scrollTo(0, 0);
        },
        downLoad_api () {
            download_file({
                sceneId: this.sceneId,
                sceneCode: "initVisit",
            })
                .then((res) => {
                    this.$download.excel(res, "test.pdf");
                })
                .finally(() => { });
        },
        async uploadToService () {
            const file = await htmlToPdf.getPdfFile("测试文件名");
            const formData = new FormData();
            formData.append("file", file);
            const url = this.uploadFileUrl + this.sceneCode; // 拼接 sceneCode 参数
            upload_file2(formData, url).then((res) => {
                this.$message.success("上传成功");
                this.sceneId = res.data.fileId; // 上传成功后返回 sceneId
            });
        },
        onClickDownLoad () {
            htmlToPdf2.getPdf("智家国内二季度税务风险报告");
        },
    },
};
</script>

<style scoped>
.pdf-page {
    width: 840px;
    height: 1188px;
    border: 1px solid #cccccc;
    box-sizing: border-box;
}
</style>
