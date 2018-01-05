# Phone-A-Friend
Basic phonebook application which retrieves data from an [API](https://rem-rest-api.herokuapp.com/) and then renders it

### Stack
- JS: Mithril
- CSS: Tachyons
- Build: Webpack

### Description
Using mithril and tachyons for that rapid prototyping goodness. Webpack for some simple bundling. Taychons is imported via the `index.html` file to keeps things even more simple

### Installation
1. Clone repo
2. `npm install`
3. `npm start`
4. Open `index.html`

### Roadmap

1. Design: review markup and css
2. TDD: Add unit tests
3. Performance: Investigate split second lag for individual contact load
4. UI: Remove filter option on individual contact view
5. UI: Add 'no results found' message when user search returns nothing
6. Refactor: Refactor contact-edit component to make it more modular
6. Backend: Host own version of REM API on Heroku and edit contact data model