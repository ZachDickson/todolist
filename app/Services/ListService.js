import List from "../Models/List.js";
import store from "../store.js"

//Public
class ListService {
  deleteList(id) {
    let lists = store.State.lists.filter(l => l.id !== id)
    store.State.lists = lists
    store.saveState()
  }

  addList(newList) {
    newList = new List(newList)
    store.State.lists.push(newList)
    console.log(store.State.lists)
  }

  addTask(newTask) {
    newTask = new List(newTask)
    store.State.lists.push(newTask)
  }
  //TODO  Here is where we handle all of our business logic,
  //given the information you need in the controller,
  //what methods will you need to do when this class is first 'constructed'?
  //NOTE You will need this code to persist your data into local storage, be sure to call the store method to save after each change
}

const SERVICE = new ListService();
export default SERVICE;
