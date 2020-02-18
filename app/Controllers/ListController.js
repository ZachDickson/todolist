import ListService from "../Services/ListService.js";
import store from "../store.js"

//TODO Don't forget to render to the screen after every data change.
function _drawLists() {
  let lists = store.State.lists
  let listsElem = document.getElementById("lists")
  let template = ""

  lists.forEach(list => {
    template += list.listTemplate
  })

  listsElem.innerHTML = template
  store.saveState()
}

function _drawTasks() {
  let task = store.State.lists
  let taskElem = document.getElementById("tasks")
  let template = ""

  task.forEach(t => {
    template += t.taskTemplate
  })

  taskElem.innerHTML = template
  store.saveState()
}

//Public
export default class ListController {
  constructor() {
    //NOTE: After the store loads, we can automatically call to draw the lists.
    _drawLists();
    _drawTasks()
  }

  addList(event) {
    event.preventDefault()

    let formData = event.target

    let newList = {
      listTitle: formData.listTitle.value

    }
    console.log(newList)
    ListService.addList(newList)
    _drawLists()
    _drawTasks()


  }

  addTask(event) {
    event.preventDefault()

    let formData = event.target

    let newList = {
      tasks: formData.tasks.value

    }
    console.log(newList)
    ListService.addList(newList)
    _drawLists()


  }
  deleteList(id) {
    ListService.deleteList(id)
    _drawLists()
  }

  //TODO: Your app will need the ability to create, and delete both lists and listItems
}
