import Search from "./search.js"
import View from "./view.js"
import Api from "./api.js"

const api = new Api()

new Search(new View(api), api)

// class View {
//   constructor() {
//     this.app = document.querySelector(".app")
//     this.title = this.createElem("h1", "title")
//     this.title.textContent = "Github Search Repos"

//     this.searchLine = this.createElem("div", "search-line")
//     this.searchInput = this.createElem("input", "search-input")
//     this.searchLine.append(this.searchInput)

//     this.main = this.createElem("div", "main")
//     this.userListSuggest = this.createElem("ul", "userListSuggest")
//     this.userListPicked = this.createElem("div", "userListPicked")
//     this.main.append(this.userListSuggest, this.userListPicked)

//     this.app.append(this.title, this.searchLine, this.main)
//   }
//   createElem(elem, elemClass) {
//     const element = document.createElement(elem)
//     elemClass ? element.classList.add(elemClass) : ""
//     return element
//   }
//   createRepo(data) {
//     let x = document.querySelectorAll("li")
//     if (x.length > 4) x.forEach((el) => el.remove())
//     const repoElement = this.createElem("li", "prev-repo")
//     repoElement.innerHTML = data.name
//     this.userListSuggest.append(repoElement)
//   }
//   debounce(fn) {
//     let timeout
//     return function (...args) {
//       console.log(args, "args")
//       clearTimeout(timeout)
//       timeout = setTimeout(() => fn.apply(this, args), 600)
//     }
//   }
// }
// const REPOS_PER_PAGE = 5
// class Search {
//   constructor(view) {
//     this.view = view

//     this.view.searchInput.addEventListener(
//       "keyup",
//       this.view.debounce(this.searchRepos.bind(this))
//     )
//   }
//   async searchRepos() {
//     if (this.view.searchInput.value) {
//       return await fetch(
//         `https://api.github.com/search/repositories?q=${this.view.searchInput.value}&per_page=${REPOS_PER_PAGE}`
//       ).then((res) => {
//         if (res.ok)
//           res
//             .json()
//             .then((data) => {
//               data.items.forEach((el) => this.view.createRepo(el))
//             })
//             .catch((e) => {})
//       })
//     } else {
//       this.view.userListSuggest.innerHTML = ""
//     }
//   }
// }
