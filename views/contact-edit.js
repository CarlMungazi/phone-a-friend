const m = require("mithril")
const Contact = require('../model/contacts')

module.exports = {
  oninit: function (vnode) {
    Contact.load(vnode.attrs.id)
  },
  view: function () {
    return m("form.pl0.mt0.measure.center", {
      onsubmit: function (e) {
        e.preventDefault()
        Contact.save()
      }
    }, [
      m("label.f6.b.db.mb2", "First Name"),
      m("input.input[type=text][placeholder=First Name].input-reset.bbo.b--black-20.pa2.mb2.dib.w-75.mr1", {
        oninput: m.withAttr("value", (value) => {
          Contact.current.firstName = value
        }),
        value: Contact.current.firstName
      }),
      m("label.f6.b.db.mb2", "Last Name"),
      m("input.input[type=text][placeholder=Last Name].input-reset.bbo.b--black-20.pa2.mb2.dib.w-75.mr1", {
        oninput: m.withAttr("value", (value) => {
          Contact.current.lastName = value
        }),
        value: Contact.current.lastName
      }),
      m("button[type=submit].f6.dim.br2.ba.ph3.pv2.mb2.db.mid-gray.mt3", "Save"),
    ])
  }
}