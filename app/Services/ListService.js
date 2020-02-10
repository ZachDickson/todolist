import List from "../Models/List.js";
import store from "../store.js"

//Public
class ListService {

  addList(newList) {
    newList = new List(newList)
    store.State.cars.push(newList)
    console.log(store.State.cars)
  }
  //TODO  Here is where we handle all of our business logic,
  //given the information you need in the controller,
  //what methods will you need to do when this class is first 'constructed'?
  //NOTE You will need this code to persist your data into local storage, be sure to call the store method to save after each change
}

const SERVICE = new ListService();
export default SERVICE;
