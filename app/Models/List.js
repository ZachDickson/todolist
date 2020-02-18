import { generateId } from "../utils.js";

export default class List {
  constructor(data) {
    this.listTitle = data.listTitle
    this.tasks = data.tasks
    //TODO Your constructor takes in a data object that should have the properties you need to create your list here is a freebie, it will set the id its provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)
    this.id = data.id || generateId();
  }

  get listTemplate() {
    return /*html*/ `
            <div class="col-3">
                <h1>${this.listTitle}</h1>
                </form>
                <form onsubmit="app.listController.addTask(event)">
                  <div class="form-group">
                    <textarea class="form-control" rows="1" placeholder="Add some tasks!"></textarea>
                  </div>
                  <button type="submit" class="btn btn-dark">Create Task</button>
                </form>
                <h3 id="tasks"> <button onclick="app.listController.deleteList('${this.id}')" class="btn btn-danger">Delete</button></h3>
            </div>
    `
  }

  get taskTemplate() {
    return /*html*/ `
    <h3>${this.tasks}</h3>
`

  }
  //Be sure to add the methods needed to create the view template for this model
  //For starting out, your tasks may be strings alone, but later you may wish to turn them into full objects, that will be up to you
}
