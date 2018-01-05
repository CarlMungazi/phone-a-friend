const m = require("mithril")
const Contact = require('../model/contacts')

module.exports = {
  oninit: Contact.loadList,
  view: function() {
    return m('ul.list.pl0.mt0.measure.center',
      Contact.list.map(contact => {
        return m('li.flex.items-center.lh-copy.pa3.ph0-l.bb.b--black-10',
          m('a', {
              href: `/edit/${contact.id}`, 
              oncreate: m.route.link
            },
            m('div.pl3.flex-auto',
              m('span.db.black-70', `${contact.firstName}`),
              m('span.db.black-70', `${contact.lastName}`)
            )
          )
        )
      })
    )
  }
}