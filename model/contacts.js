const m = require("mithril")

const Contact = {
  list: [],
  loadList: function () {
      return m.request({
        method: "GET",
        url: "https://rem-rest-api.herokuapp.com/api/users",
        withCredentials: true,
      })
      .then(res => {
        Contact.list = res.data
        Contact.list.forEach(contact => {
          if (contact.number) {
            // do nothing
          } else {
            Object.defineProperty(contact, 'number', {
              enumerable: true,
              configurable: true,
              writable: true,
              value: '+442032960159'
            })
          }
        })
      })
      .catch(err => {
        console.error(err)
      })
    },
  current: {},
  load: function (id) {
    return m.request({
      method: "GET",
      url: `https://rem-rest-api.herokuapp.com/api/users/${id}`,
      withCredentials: true,
    })
    .then(res => {
      Contact.current = res
      if (Contact.current.number) {
        // do nothing
      } else {
        Object.defineProperty(Contact.current, 'number', {
          enumerable: true,
          configurable: true,
          writable: true,
          value: '+442032960159'
        })
      }
    })
    .catch(err => {
      console.error(err)
    })
  },
  save: function () {
    return m.request({
      method: "PUT",
      url: `https://rem-rest-api.herokuapp.com/api/users/${Contact.current.id}`,
      data: Contact.current,
      withCredentials: true,
    })
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.error(err)
    })
  },
  searchResults: []
}

module.exports = Contact