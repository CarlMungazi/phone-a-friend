const m = require("mithril")
const Contact = require('../model/contacts')

module.exports = {
  oninit: function (vnode) {
    Contact.load(vnode.attrs.id)
    vnode.state.inputDisabled = true
  },
  view: function (vnode) {
    return m("form.pl0.mt0.measure.center", {
      onsubmit: function (e) {
        e.preventDefault()
        Contact.save()
      }
    }, [
      m("label.f7.b.db.mb2", "First Name"),
      m("input.input[type=text][placeholder=First Name].f4.input-reset.bbo.b--black-20.pa2.mb2.dib.w-75.mr1", {
        oninput: m.withAttr("value", (value) => {
          Contact.current.firstName = value
        }),
        value: Contact.current.firstName,
        disabled: vnode.state.inputDisabled,
        class: vnode.state.inputDisabled ? 'b--black-20' : 'b--light-blue'
      }),
      m("label.f7.b.db.mb2", "Last Name"),
      m("input.input[type=text][placeholder=Last Name].f4.input-reset.bbo.b--black-20.pa2.mb2.dib.w-75.mr1", {
        oninput: m.withAttr("value", (value) => {
          Contact.current.lastName = value
        }),
        value: Contact.current.lastName,
        disabled: vnode.state.inputDisabled,
        class: vnode.state.inputDisabled ? 'b--black-20' : 'b--light-blue'
      }),
      m('div',
        m("button[type=button].f6.dim.br2.ba.ph3.pv2.mb2.dib.mid-gray.mt3.mr2", {
          onclick: function (e) {
            e.preventDefault()
            vnode.state.inputDisabled = !vnode.state.inputDisabled
          },
          style: {
            'pointer-events': vnode.state.inputDisabled ? 'initial' : 'none'
          }
        }, "Edit"),
        m("button[type=submit].f6.dim.br2.ba.ph3.pv2.mb2.dib.mid-gray.mt3", {
          onclick: function (e) {
            e.preventDefault()
            vnode.state.inputDisabled = !vnode.state.inputDisabled
          }
        }, "Save"),
      )
    ])
  }
}