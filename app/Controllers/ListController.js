import ListService from "../Services/ListService.js";
import store from "../store.js"

//TODO Don't forget to render to the screen after every data change.
function _drawLists() {
  let lists = store.State.lists
  let listsElem = document.getElementById("lists")
  let template = ""

  lists.forEach(list => {
    template += list.Template
  })

  listsElem.innerHTML = template
}

//Public
export default class ListController {
  constructor() {
    //NOTE: After the store loads, we can automatically call to draw the lists.
    _drawLists();
  }

  addList(event) {
    event.preventDefault()

    let formData = event.target

    let newList = {
      title: formData.listTitle.value,
      // tasks: formData.tasks.value
    }
    _drawLists()

    console.log(newList)
  }

  //TODO: Your app will need the ability to create, and delete both lists and listItems
}
