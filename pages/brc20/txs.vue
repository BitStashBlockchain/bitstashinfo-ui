<template>
  <div class="container">
    <Panel width="100%" title="Token">
      <table>
        <thead>
          <tr>
            <td>Id</td>
            <td>Value</td>
            <td>Time</td>
            <td>Sender</td>
            <td>Receiver</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(value, name) of list.transactions">
            <td  class="monospace break-word"> <nuxt-link :to="{name: 'tx-id', params: {id: value.transactionId}}">{{ value.transactionId | format(15,6) }}</nuxt-link></td>
           <td> {{value.value || value.symbol  }}</td>
            <td>   <FromNow :timestamp="value.timestamp" /></td>
            <td  class="monospace break-word"><nuxt-link :to="{name: 'address-id', params: {id: value.from}}">{{value.from | format(10,6)}}</nuxt-link></td>
            <td  class="monospace break-word"> <nuxt-link :to="{name: 'address-id', params: {id: value.to}}">{{value.to | format(10,6)}}</nuxt-link></td>
          </tr>
        </tbody>
      </table>
    </Panel>
  </div>
</template>

<script>
import Panel from "../../components/panel";
import Pagination from "@/components/pagination";
import Qrc20 from "@/models/qrc20";
import { RequestError } from "@/services/bitstashinfo-api";
export default {
  components: { Panel, Pagination },
  head() {
    return {
      title: this.$t("list")
    };
  },
  data() {
    return {
      list: [],
      date: ""
    };
  },
  async asyncData({ req, query, redirect, error }) {
    try {
      let list = await Qrc20.getTransaction({
        params: {
          count: 20,
          confirmations: 1
        },
        ip: req && req.ip
      });
      return { list };
    } catch (err) {
      if (err instanceof RequestError) {
        error({ statusCode: err.code, message: err.message });
      } else {
        error({ statusCode: 500, message: err.message });
      }
    }
  }
};
</script>

<style lang="less" scoped>
@import url("../../styles/pages/contract/deal_list.less");
</style>
