const m = require("mithril")
const Contact = require('../model/contacts')

module.exports = {
  view: function() {
      return m('ul.list.pl0.mt0.measure.center',
        Contact.searchResults.map(contact => {
          // let's create an avatar since we do not have initials
          let initial = `${contact.firstName} ${contact.lastName}`.split(' ').map((n) => n.substr(0,1)).slice(0,2).join('')
          return m('li.flex.items-center.lh-copy.pa3.ph0-l.bb.b--black-10',
            m("svg[xmlns='http://www.w3.org/2000/svg'][xmlns:xlink='http://www.w3.org/1999/xlink'][viewBox='0 0 70 65'][width='50'][height='50']",
              m("circle[fill='#ccc'][r='32'][cx='32'][cy='32']"),
              m("text[x='32'][y='32'][text-anchor='middle'][stroke='#000'][dy='.3em']", initial),
            ),
            m('a.link.pl3.flex-auto', {
                href: `/edit/${contact.id}`, 
                oncreate: m.route.link
              },
              m('div',
                m('span.f4.db.black-70', `${contact.firstName} ${contact.lastName}`)
              )
            ),
            m('div',
              m('a[href="tel:"].f6.link.blue', contact.number)
            )
          )
        })
      )
  }
}