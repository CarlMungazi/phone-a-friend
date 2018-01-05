const m = require("mithril")
const Contact = require('../model/contacts')

function lowerFirst (str) {
  let temp = str.split('')
  temp[0] = temp[0].toLowerCase()

  return temp.join('')
}

module.exports = {
	oninit: function(vnode) {
    vnode.state.query = ''
    vnode.state.sort = {
      opts: ['First Name', 'Last Name'],
      sortBy: ''
    } 
	},
	view: function(vnode) {
		return m('.measure.center', [
			m('input[type=search].input-reset.ba.b--black-20.pa2.mb2.dib.w-75.mr1', {
        oninput: m.withAttr("value", (value) => {
          vnode.state.query = value 
        }),
        value: vnode.state.query
      }),
      m('span',
        m("a[href='/results']",{ oncreate: m.route.link },
          m('button.f6.dim.br2.ba.ph3.pv2.mb2.dib.mid-gray.mr2', {
            onclick: (e) => {
              let results
              let regex = new RegExp(vnode.state.query.replace(/\s+/g, ''), "gi")
              results = Contact.list.filter(contact => {
                let fullName = `${contact.firstName}${contact.lastName}`
                return fullName.toLowerCase().match(regex)
                
              })
              Contact.searchResults = results
            }
          }, "Search")
        )
      ),
      m('.normal.black-60',
        m('span.f6', 'Sort by: ',
          vnode.state.sort.opts.map(function(el) {
            let inputName = el.trim()
            let elIdx = vnode.state.sort.opts.indexOf(el)
            return m('button.f6.dim.br-pill.ba.ph3.pv2.mb2.dib.mid-gray.mr2', {
              onclick: function () {
                vnode.state.sort.sortBy = inputName.replace(/\s+/g, '')

                let sortParam = lowerFirst(vnode.state.sort.sortBy)

                Contact.list.sort( (a, b) => {
                  let nameA = a[sortParam].toUpperCase()
                  let nameB = b[sortParam].toUpperCase()
                  if (nameA < nameB) {
                    return -1;
                  }
                  if (nameA > nameB) {
                    return 1;
                  }

                  return 0;
                })
              },
            }, el
           )
          })
        )
      )
		])
	}
}