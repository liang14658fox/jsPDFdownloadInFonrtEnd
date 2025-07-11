<template>
    <div class="custom-table-wrapper">
        <table class="custom-table">
            <thead v-if="isShowHeader">
                <tr>
                    <th style="width: 50px">对应产业</th>
                    <th style="width: 125px">公司名称</th>
                    <th style="width: 265px">风险发生期间</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in processedData" :key="index">
                    <!-- 合并产业列 -->
                    <td v-if="item.showIndustry" :rowspan="item.industryRowspan" class="col1-cell"
                        :class="item.groupIndex % 2 === 0 ? 'even-row' : 'odd-row'" style="width: 50px">
                        {{ item.industry }}
                    </td>

                    <!-- 合并公司列 -->
                    <td v-if="item.showCompany" :rowspan="item.companyRowspan"
                        :class="item.groupIndex % 2 === 0 ? 'even-row' : 'odd-row'" style="width: 125px">
                        {{ item.company }}
                    </td>

                    <td :class="item.groupIndex % 2 === 0 ? 'even-row' : 'odd-row'" style="width: 65px" class="col1-cell">
                        {{ item.period }}
                    </td>
                </tr>
            </tbody>
        </table>
        
        <div class="buttom-line"></div>
    </div>
</template>

<script>
export default {
    name: 'NativeCustomTable',
    props: {
        value: Array, // 支持 v-model
        isShowHeader: {
            type: Boolean,
            default: true
        }
    },

    computed: {
        tableData: {
            get () {
                return this.value
            },
            set (val) {
                this.$emit('input', val)
            }
        },
        processedData () {
            if (!this.value || this.value.length === 0) return []

            const raw = this.value.map(item => ({
                ...item,
                showIndustry: false,
                industryRowspan: 1,
                showCompany: false,
                companyRowspan: 1,
                groupIndex: 0,
            }))

            // --- 合并 industry ---
            let currentIndustry = null
            let currentIndustryStart = 0
            let groupIndex = -1

            for (let i = 0; i < raw.length; i++) {
                if (raw[i].industry !== currentIndustry) {
                    if (currentIndustry !== null) {
                        const span = i - currentIndustryStart
                        raw[currentIndustryStart].industryRowspan = span
                        raw[currentIndustryStart].showIndustry = true
                        groupIndex++
                        for (let j = currentIndustryStart; j < i; j++) {
                            raw[j].groupIndex = groupIndex
                        }
                    }
                    currentIndustry = raw[i].industry
                    currentIndustryStart = i
                }

                // 最后一项
                if (i === raw.length - 1) {
                    const span = i - currentIndustryStart + 1
                    raw[currentIndustryStart].industryRowspan = span
                    raw[currentIndustryStart].showIndustry = true
                    groupIndex++
                    for (let j = currentIndustryStart; j <= i; j++) {
                        raw[j].groupIndex = groupIndex
                    }
                }
            }

            // --- 合并 company ---
            let currentCompany = null
            let companyStart = 0

            for (let i = 0; i < raw.length; i++) {
                if (raw[i].company !== currentCompany) {
                    if (currentCompany !== null) {
                        const span = i - companyStart
                        raw[companyStart].companyRowspan = span
                        raw[companyStart].showCompany = true
                    }
                    currentCompany = raw[i].company
                    companyStart = i
                }

                if (i === raw.length - 1) {
                    const span = i - companyStart + 1
                    raw[companyStart].companyRowspan = span
                    raw[companyStart].showCompany = true
                }
            }

            return raw
        },

        // 按 industry 分组，用于行合并和斑马色控制
        groupedData () {
            const groups = []
            const map = new Map()
            this.tableData.forEach(item => {
                if (!map.has(item.industry)) {
                    map.set(item.industry, [])
                }
                map.get(item.industry).push(item)
            })
            map.forEach((items, industry) => {
                groups.push({ industry, items })
            })
            return groups
        }
    }
}
</script>

<style scoped>
.custom-table-wrapper {
    padding: 0;
    margin: 0 20px;
}

/* 基础表格样式 */
.custom-table {
    width: 100%;
    border-collapse: collapse;
    border-left: none;
    border-right: none;
    table-layout: fixed;
    font-size: 14px;
}

/* 表头统一渐变背景色 */
.custom-table thead tr {
    background: linear-gradient(to right, #F97319 0%, #FFBB8D 50%, #F97319 100%);
    color: #000;
    font-weight: bold;
}

.buttom-line {
    background: linear-gradient(to right, #F97319 0%, #FFBB8D 50%, #F97319 100%);
height: 4px;
margin-top: -2px;
z-index: 100;
}


/* 去掉最左最右边框 */
.custom-table th:first-child,
.custom-table td:first-child {
    border-left: none;
}

.custom-table th:last-child,
.custom-table td:last-child {
    border-right: none;
}

/* 斑马纹行（按组） */
.even-row {
    background-color: #fff;
}

.odd-row {
    background-color: #FDEDE2;
}

.custom-table th,
.custom-table td {
    border: 1px solid #FEA258;
    text-align: left;
    padding: 8px 3px;
    vertical-align: middle;
    /* ✅ 垂直居中 */
    line-height: 20px;

}

/* ✅ 表头：文字居中（水平+垂直） */
.custom-table thead th {
    text-align: center;
    vertical-align: middle;
}

/* ✅ 单元格：水平左对齐（垂直居中已由上方统一） */
.custom-table tbody td {
    text-align: left;
}



/* 第1、3列：上下左右居中 */
.custom-table td.col1-cell {
    text-align: center;
    vertical-align: middle;
}


</style>
