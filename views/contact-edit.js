const m = require("mithril")
const Contact = require('../model/contacts')

module.exports = {
  oninit: function (vnode) {
    Contact.load(vnode.attrs.id)
  },
  view: function () {
    return m("form", {
      onsubmit: function (e) {
        e.preventDefault()
        Contact.save()
      }
    }, [
      m("label.label", "First Name"),
      m("input.input[type=text][placeholder=First Name]", {
        oninput: m.withAttr("value", (value) => {
          Contact.current.firstName = value
        }),
        value: Contact.current.firstName
      }),
      m("label.label", "Last Name"),
      m("input.input[type=text][placeholder=Last Name]", {
        oninput: m.withAttr("value", (value) => {
          Contact.current.lastName = value
        }),
        value: Contact.current.lastName
      }),
      m("button.button[type=button]", "Save Contact")
    ])
  }
}