<template>
  <div class="container">
    <Panel width="100%" title="Transaction List">
      <table>
        <thead>
          <tr>
            <td>Transaction id</td>
            <td>Time</td>
            <td>Amount of the transaction</td>
            <td>Tx Fee</td>
            <td>Transaction Type</td>
            <td>Confirmation Number</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="{id, timestamp,outputValue, fees, confirmations} of list">
            <td>
              <nuxt-link :to="{name: 'tx-id', params: {id: id}}">{{id | format(15,6)}}</nuxt-link>
            </td>
            <td>
              <FromNow :timestamp="timestamp" />
            </td>
            <td>{{outputValue | bitstash(4)}}</td>
            <td>{{fees | bitstash(4)}}</td>
            <td>Stash Transfer</td>
            <td>{{confirmations}}</td>
          </tr>
        </tbody>
      </table>
      <pagination />
    </Panel>
  </div>
</template>
<script>
import Panel from "../../components/panel";
import Pagination from "@/components/pagination";
import Transaction from "@/models/transaction";
import { RequestError } from "@/services/bitstashinfo-api";
export default {
  components: { Panel, Pagination },
  head() {
    return {
      title: this.$t("block.list.block_list")
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
      let list = await Transaction.getRecentTransactions({
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
<style lang='less' scoped>
@import url("../../styles/pages/tx/index.less");
</style>
