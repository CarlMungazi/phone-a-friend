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
    })
  },
  save: function () {
    return m.request({
      method: "PUT",
      url: `https://rem-rest-api.herokuapp.com/api/users/${Contact.current.id}`,
      data: Contact.current,
      withCredentials: true,
    })
  },
  searchResults: []
}

module.exports = Contact