import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _aa17a2c0 = () => interopDefault(import('../pages/block.js' /* webpackChunkName: "pages/block" */))
const _1a1cdb5c = () => interopDefault(import('../pages/block/index.vue' /* webpackChunkName: "pages/block/index" */))
const _97f7fd8c = () => interopDefault(import('../pages/block/_id.vue' /* webpackChunkName: "pages/block/_id" */))
const _ecb1bc4c = () => interopDefault(import('../pages/misc.vue' /* webpackChunkName: "pages/misc" */))
const _0a413312 = () => interopDefault(import('../pages/misc/index.js' /* webpackChunkName: "pages/misc/index" */))
const _5233d1a8 = () => interopDefault(import('../pages/misc/api/index.vue' /* webpackChunkName: "pages/misc/api/index" */))
const _61367a2b = () => interopDefault(import('../pages/misc/api/index/index.vue' /* webpackChunkName: "pages/misc/api/index/index" */))
const _d81941b2 = () => interopDefault(import('../pages/misc/biggest-miners.vue' /* webpackChunkName: "pages/misc/biggest-miners" */))
const _a34caf64 = () => interopDefault(import('../pages/misc/raw-tx.vue' /* webpackChunkName: "pages/misc/raw-tx" */))
const _6a67fefa = () => interopDefault(import('../pages/misc/rich-list.vue' /* webpackChunkName: "pages/misc/rich-list" */))
const _b4d82ffe = () => interopDefault(import('../pages/misc/toolbox/index.vue' /* webpackChunkName: "pages/misc/toolbox/index" */))
const _4c8eac78 = () => interopDefault(import('../pages/misc/toolbox/index/index.vue' /* webpackChunkName: "pages/misc/toolbox/index/index" */))
const _00cd5603 = () => interopDefault(import('../pages/misc/toolbox/index/feedback.vue' /* webpackChunkName: "pages/misc/toolbox/index/feedback" */))
const _cc59609a = () => interopDefault(import('../pages/misc/toolbox/index/stake-calculator.vue' /* webpackChunkName: "pages/misc/toolbox/index/stake-calculator" */))
const _330db416 = () => interopDefault(import('../pages/tx/index.vue' /* webpackChunkName: "pages/tx/index" */))
const _6af03273 = () => interopDefault(import('../pages/brc20/txs.vue' /* webpackChunkName: "pages/brc20/txs" */))
const _e1ed1b7c = () => interopDefault(import('../pages/contract/deal_list.vue' /* webpackChunkName: "pages/contract/deal_list" */))
const _f000eb8e = () => interopDefault(import('../pages/contract/tokens.vue' /* webpackChunkName: "pages/contract/tokens" */))
const _5b91cf21 = () => interopDefault(import('../pages/address/_id.vue' /* webpackChunkName: "pages/address/_id" */))
const _8b968e38 = () => interopDefault(import('../pages/address/_id/index.vue' /* webpackChunkName: "pages/address/_id/index" */))
const _5e1f9924 = () => interopDefault(import('../pages/address/_id/balance.vue' /* webpackChunkName: "pages/address/_id/balance" */))
const _14176e1a = () => interopDefault(import('../pages/address/_id/token-balance.vue' /* webpackChunkName: "pages/address/_id/token-balance" */))
const _f84284aa = () => interopDefault(import('../pages/contract/_id.vue' /* webpackChunkName: "pages/contract/_id" */))
const _08b317ee = () => interopDefault(import('../pages/contract/_id/index.vue' /* webpackChunkName: "pages/contract/_id/index" */))
const _52cfc98b = () => interopDefault(import('../pages/contract/_id/rich-list.vue' /* webpackChunkName: "pages/contract/_id/rich-list" */))
const _1292219d = () => interopDefault(import('../pages/tx/_id.vue' /* webpackChunkName: "pages/tx/_id" */))
const _4f6f8cd4 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

if (process.client) {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'

    // reset scrollRestoration to auto when leaving page, allowing page reload
    // and back-navigation from other pages to use the browser to restore the
    // scrolling position.
    window.addEventListener('beforeunload', () => {
      window.history.scrollRestoration = 'auto'
    })

    // Setting scrollRestoration to manual again when returning to this page.
    window.addEventListener('load', () => {
      window.history.scrollRestoration = 'manual'
    })
  }
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected and scrollToTop is not explicitly disabled
  if (
    to.matched.length < 2 &&
    to.matched.every(r => r.components.default.options.scrollToTop !== false)
  ) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: decodeURI('/'),
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/block",
      component: _aa17a2c0,
      children: [{
        path: "",
        component: _1a1cdb5c,
        name: "block"
      }, {
        path: ":id",
        component: _97f7fd8c,
        name: "block-id"
      }]
    }, {
      path: "/misc",
      component: _ecb1bc4c,
      children: [{
        path: "",
        component: _0a413312,
        name: "misc"
      }, {
        path: "api",
        component: _5233d1a8,
        children: [{
          path: "",
          component: _61367a2b,
          name: "misc-api-index"
        }]
      }, {
        path: "biggest-miners",
        component: _d81941b2,
        name: "misc-biggest-miners"
      }, {
        path: "raw-tx",
        component: _a34caf64,
        name: "misc-raw-tx"
      }, {
        path: "rich-list",
        component: _6a67fefa,
        name: "misc-rich-list"
      }, {
        path: "toolbox",
        component: _b4d82ffe,
        children: [{
          path: "",
          component: _4c8eac78,
          name: "misc-toolbox-index"
        }, {
          path: "feedback",
          component: _00cd5603,
          name: "misc-toolbox-index-feedback"
        }, {
          path: "stake-calculator",
          component: _cc59609a,
          name: "misc-toolbox-index-stake-calculator"
        }]
      }]
    }, {
      path: "/tx",
      component: _330db416,
      name: "tx"
    }, {
      path: "/brc20/txs",
      component: _6af03273,
      name: "brc20-txs"
    }, {
      path: "/contract/deal_list",
      component: _e1ed1b7c,
      name: "contract-deal_list"
    }, {
      path: "/contract/tokens",
      component: _f000eb8e,
      name: "contract-tokens"
    }, {
      path: "/address/:id?",
      component: _5b91cf21,
      children: [{
        path: "",
        component: _8b968e38,
        name: "address-id"
      }, {
        path: "balance",
        component: _5e1f9924,
        name: "address-id-balance"
      }, {
        path: "token-balance",
        component: _14176e1a,
        name: "address-id-token-balance"
      }]
    }, {
      path: "/contract/:id?",
      component: _f84284aa,
      children: [{
        path: "",
        component: _08b317ee,
        name: "contract-id"
      }, {
        path: "rich-list",
        component: _52cfc98b,
        name: "contract-id-rich-list"
      }]
    }, {
      path: "/tx/:id",
      component: _1292219d,
      name: "tx-id"
    }, {
      path: "/",
      component: _4f6f8cd4,
      name: "index"
    }],

    fallback: false
  })
}
