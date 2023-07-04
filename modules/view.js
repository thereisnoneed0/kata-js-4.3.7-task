export default class View {
  constructor(api) {
    this.app = document.querySelector(".app")
    this.api - api
    this.title = this.createElem("h1", "title")
    this.title.textContent = "Github Search Repos"

    this.searchLine = this.createElem("div", "search-line")
    this.searchInput = this.createElem("input", "search-input")
    this.searchLine.append(this.searchInput)

    this.main = this.createElem("div", "main")
    this.userListSuggest = this.createElem("ul", "userListSuggest")
    this.userListPicked = this.createElem("ul", "userListPicked")
    this.main.append(this.userListSuggest, this.userListPicked)

    this.app.append(this.title, this.searchLine, this.main)
    // хотел повесить слушателя на весь список ,а не прикручивать сушатель к каждому <li>
    this.userListPicked.addEventListener("click", (e) => {
      if (e.target.className === "cross-btn-right") {
        e.target.parentNode.remove() //тут надо удаляять не e.target потому что он просто будет крест удалять а сам элемент ul или li
      }

      console.log(e.currentTarget, "<-- current", e.target.parentNode)
    })
  }
  createElem(elem, elemClass) {
    const element = document.createElement(elem)
    elemClass ? element.classList.add(elemClass) : ""
    return element
  }
  createRepos(data) {
    console.log(data)
    let x = document.querySelectorAll("li")
    if (x.length > 4) x.forEach((el) => el.remove())
    const repoElement = this.createElem("li", "prev-repo")
    repoElement.innerHTML = data.name
    repoElement.addEventListener("click", (e) => this.makeRepo(data))
    this.userListSuggest.append(repoElement)
  }

  makeRepo(data) {
    // const ulElement = this.createElem("ul", "ul-elements")
    const dataElement = this.createElem("li", "picked-element")
    dataElement.innerHTML = `<span> Name: ${data["name"]}</span>
                             <span> Owner: ${data.owner.login}</span>  
                             <span>  stars:  ${data.stargazers_count}</span>`
    this.userListPicked.append(dataElement)
    this.makeBtn(dataElement)
  }

  makeBtn(parent) {
    const imageCrossLeft = this.createElem("img", "cross-btn-left")
    const imageCrossRight = this.createElem("img", "cross-btn-right")
    imageCrossLeft.src = "./assets/Vector 8.png"
    imageCrossRight.src = "./assets/Vector 7.png"
    parent.append(imageCrossLeft, imageCrossRight)
  }

  debounce(fn) {
    let timeout
    return function (...args) {
      console.log(args, "args")
      clearTimeout(timeout)
      timeout = setTimeout(() => fn.apply(this, args), 200)
    }
  }
}
