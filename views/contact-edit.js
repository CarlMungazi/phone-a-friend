const m = require("mithril")
const Contact = require('../model/contacts')

function isNullOrWhiteSpace(str) { // modified from https://gist.github.com/EdCharbeneau/9552248
  return (!str || str.length === 0 || /\s+/g.test(str) || /^\s*$/.test(str))
}

module.exports = {
  oninit: function (vnode) {
    Contact.load(vnode.attrs.id)
    vnode.state.inputDisabled = true
    vnode.state.emptyInput = {
      state: false
    } 
  },
  view: function (vnode) {
    return m("form.pl0.mt0.measure.center", {
      onsubmit: function (e) {
        e.preventDefault()
        Contact.save()
      }
    }, [
      isNullOrWhiteSpace(Contact.current.firstName) ? m("label.f7.b.db.mb2.light-red", "Please enter a name without any spaces") : m("label.f7.b.db.mb2", "First Name"),
      m("input.input[type=text][placeholder=First Name].f4.input-reset.bbo.b--black-20.pa2.mb2.dib.w-75.mr1", {
        oninput: m.withAttr("value", (value) => {
          Contact.current.firstName = value
        }),
        value: Contact.current.firstName,
        disabled: vnode.state.inputDisabled,
        class: vnode.state.inputDisabled ? 'b--black-20' : 'b--light-blue'
      }),
      isNullOrWhiteSpace(Contact.current.lastName) ? m("label.f7.b.db.mb2.light-red", "Please enter a name without any spaces") : m("label.f7.b.db.mb2", "Last Name"),
      m("input.input[type=text][placeholder=Last Name].f4.input-reset.bbo.b--black-20.pa2.mb2.dib.w-75.mr1", {
        oninput: m.withAttr("value", (value) => {
          Contact.current.lastName = value
        }),
        value: Contact.current.lastName,
        disabled: vnode.state.inputDisabled,
        class: vnode.state.inputDisabled ? 'b--black-20' : 'b--light-blue'
      }),
      isNullOrWhiteSpace(Contact.current.number) ? m("label.f7.b.db.mb2.light-red", "Please enter a number without any spaces") : m("label.f7.b.db.mb2", "Number"),
      m("input.input[type=text][placeholder=Number].f4.input-reset.bbo.b--black-20.pa2.mb2.dib.w-75.mr1", {
        oninput: m.withAttr("value", (value) => {
          Contact.current.number = value
        }),
        value: Contact.current.number,
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
            
            Object.keys(Contact.current).forEach(el => {
              let checkWhiteSpace = isNullOrWhiteSpace(Contact.current[el])

              if ( !Contact.current[el] || checkWhiteSpace) {
                vnode.state.emptyInput.state = true
              }
            })

            if (vnode.state.emptyInput.state === false) {
              vnode.state.inputDisabled = !vnode.state.inputDisabled
              Contact.save()
            } 
          }
        }, "Save"),
      )
    ])
  }
}