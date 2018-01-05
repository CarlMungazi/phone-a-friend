const m = require("mithril")
const SearchBar = require('../components/search')

module.exports = {
  view: function(vnode) {
      return m(".fl.w-100.pa2", [
          m("nav.measure.center.mb2", [
              m("a[href='/list']", {
                oncreate: m.route.link
              }, "View Contacts")
          ]),
          m(SearchBar),
          m("article.mw5.mw6-ns.center.pt4", vnode.children)
      ])
  }
}