<template v-slot:bartable>
  <v-col cols="12" md="6" class="DataCard">
    <!--time-bar-chart
      id="number-of-confirmed-cases"
      :title="$t('陽性者の属性')"
      :title-id="'attributes-of-confirmed-cases'"
      :chart-id="'time-bar-chart-attributes'"
      :chart-data="patientsGraph"
      :date="Data.patients.date"
      :last-acquisite-date="lastAcquisiteDate"
      :unit="$t('人')"
      :url="
        'https://www.pref.fukushima.lg.jp/sec/21045c/fukushima-hasseijyoukyou.html'
      "
      :chart-table="patientsTable"
    / -->
    <data-table
      id="attributes-of-confirmed-cases"
      :title="$t('陽性患者の属性')"
      :title-id="'attributes-of-confirmed-cases'"
      :chart-data="patientsTable"
      :chart-option="{}"
      :date="Data.patients.date"
      :info="sumInfoOfPatients"
      :url="
        'https://www.pref.fukushima.lg.jp/sec/21045c/fukushima-hasseijyoukyou.html'
      "
    />
  </v-col>
</template>

<script>
import Data from '@/data/data.json'
import formatGraph from '@/utils/formatGraph'
import formatTable from '@/utils/formatTable' // '@/utils/formatTableCity'
// import TimeBarChart from '@/components/TimeBarChart.vue'
import DataTable from '@/components/DataTable.vue'

export default {
  components: {
    // TimeBarChart,
    DataTable
  },
  props: {
    graphData: {
      type: Object,
      required: false,
      default: Data
    }
  },
  data() {
    // 陽性者数グラフ
    const patientsGraph = formatGraph(this.graphData.patients_summary.data)
    // 陽性者数
    const patientsTable = formatTable(this.graphData.patients.data)
    // 1
    // 直近の公表日の取得
    const lastIndex = this.graphData.patients_summary.data.length - 1
    const lad = new Date(
      this.graphData.patients_summary.data[lastIndex]['日付']
    )
    // 1end

    const sumInfoOfPatients = {
      lText: patientsGraph[
        patientsGraph.length - 1
      ].cumulative.toLocaleString(),
      sText: this.$t('{date}の累計', {
        date: patientsGraph[patientsGraph.length - 1].label
      }),
      unit: this.$t('人')
    }

    const data = {
      Data,
      patientsGraph,
      patientsTable,
      sumInfoOfPatients,
      lastAcquisiteDate: `${lad.getMonth() + 1}/${lad.getDate()}`
    }
    return data
  },
  mounted() {
    this.Data = this.graphData
    // 陽性者数グラフ
    this.patientsGraph = formatGraph(this.Data.patients_summary.data)
    // 陽性者数
    this.patientsTable = formatTable(this.Data.patients.data)

    this.sumInfoOfPatients = {
      lText: this.patientsGraph[
        this.patientsGraph.length - 1
      ].cumulative.toLocaleString(),
      sText: this.$t('{date}の累計', {
        date: this.patientsGraph[this.patientsGraph.length - 1].label
      }),
      unit: this.$t('人')
    }

    // 2
    const lastIndex = this.Data.patients_summary.data.length - 1
    // 直近の公表日の取得
    const lad = new Date(
      this.graphData.patients_summary.data[lastIndex]['日付']
    )
    this.lastAcquisiteDate = `${lad.getMonth() + 1}/${lad.getDate()}`
    // 2end
  }
}
</script>
