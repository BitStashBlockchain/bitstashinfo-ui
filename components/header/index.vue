<template>
  <div class="nav-container">
    <nuxt-link to="/" class="anchor">
       <img :src="require('./logo.png')" alt="Stylechip logo icon" />
       <span class="title">BitStash</span>
    </nuxt-link>
    <nav class="nav-list">
      <div class="nav-item">
        <div>
          <nuxt-link to="/block" class="nav-item-main">
            Blockchain
            <span></span>
          </nuxt-link>
        </div>
        <ul>
          <li>
            <nuxt-link to="/block">Block</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/tx">Transaction</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/misc/rich-list">Rich-List</nuxt-link>
          </li>
        </ul>
      </div>

      <div class="nav-item">
        <div>
          <nuxt-link to="/contract/tokens" class="nav-item-main">
            Token
            <span></span>
          </nuxt-link>
        </div>
        <ul>
          <li>
            <nuxt-link to="/contract/tokens">Token Overview</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/brc20/txs">Token Transaction</nuxt-link>
          </li>
        </ul>
      </div>

      <div class="nav-item">
        <div>
          <span class="nav-item-main">
            Resources
            <span></span>
          </span>
        </div>
        <ul>
          <li>
            <nuxt-link to="/misc/biggest-miners">Staking</nuxt-link>
          </li>
          <li>
            <a href="https://explore.bitstash.co/api/info">Explorer API</a>
          </li>
          <li>
            <nuxt-link to="/misc/toolbox">Tools</nuxt-link>
          </li>
        </ul>
      </div>

      <div class="nav-item">
        <div>
          <nuxt-link to="/" class="nav-item-main">
            More
            <span></span>
          </nuxt-link>
        </div>
        <ul>
          <li><a href="https://bitstash.co/"  target="_Blank">Official Website</a></li>
          <li>
            <a href="https://t.me/bitstashmarketplace"  target="_Blank">Telegram</a></li>
          <li><a href="https://bitstash.co/wallets"  target="_Blank">Wallets & Ecology</a></li></li>
        </ul>
      </div>

      <Search class="search" />
    </nav>
  </div>
</template>

<script>
import Search from "@/components/search";
export default {
  components: { Search }
};
</script>

<style lang="less" scoped>
@import url('../../styles/components/header.less');
</style>


