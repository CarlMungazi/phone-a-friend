const m = require("mithril")
const stream = require("mithril-stream")

const ContactList = require('./views/contact-list')
const ContactEdit = require('./views/contact-edit')
const Layout = require("./views/layout")
const SearchResults = require("./views/search-results")

m.route(document.body, "/list", {
  "/list": {
    render: () => {
      return m(Layout, m(ContactList))
    }
  },
  "/edit/:id": {
    render: (vnode) => {
      return m(Layout, m(ContactEdit, vnode.attrs))
    }
  },
  "/results": {
    render: () => {
      return m(Layout, m(SearchResults))
    }
  }
})