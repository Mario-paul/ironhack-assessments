/****************************************************/
const express = require('express');                 //
const bodyParser = require('body-parser');          //
                                                    //
const app = express();                              //
mongoose.connect(MONGODB_URL)                       //
  .then(()=> console.log('connected'))              //
  .catch((err)=> console.log(err));                 //
                                                    //
app.use(bodyParser.json());                         //
app.listen(3000);                                   //
/****************************************************/
/* Environment setup. Do not modify the above code. */ 

// const router = express.Router(); // maybe could work, don't think so. use app
// from express (on line 5)


// MODELS
// Create the `Task` model:
const Task = mongoose.model('Task', mongoose.Schema({
  title: String,
  details: String
}));

// Create the `User` model:
const User = mongoose.model('User', mongoose.Schema({
    email: String,
    name: String,
    tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: "Task"}]
}));

// ROUTES
// 2.1
// Create route - POST /users
app.post("/users", (req, res) => {
//   console.log(req.body)    
  User.create(req.body)
  .then((user) => res.json({data: user}))
  .catch((err) => console.log(err))
})

// 2.2
// Create route - GET /users/:userId
app.get("/users/:userId", (req, res) => {
//   console.log(req.params)
  let user = req.params
  User.findOne({_id: user.userId })
  .populate("tasks")
  .then((tasks) => res.json({data: tasks}))
  .catch((err) => console.log(err))
})

// 3.1
// Create route - POST /tasks
app.post("/tasks", (req, res) => {
//   console.log(req.body)    
  Task.create(req.body)
  .then((user) => res.json({data: user}))
  .catch((err) => console.log(err))
})

// 3.2
// Create route - GET /tasks/:taskId
app.get("/tasks/:taskId", (req, res) => {
//   console.log(req.params)
  let task = req.params
  Task.findOne({_id: task.taskId })
  .populate("tasks")
  .then((tasks) => res.json({data: tasks}))
  .catch((err) => console.log(err))
})

// 3.3
// Create route - PUT /tasks/:taskId
app.put("/tasks/:taskId", (req, res) => {
//   console.log(req.params)
//   console.log(req.body)
  let taskParams = req.params
  let taskBody = req.body
  Task.findOneAndUpdate({_id: taskParams.taskId },
                        {title: taskBody.title,
                        details: taskBody.details},
                       {new: true})
  .populate("tasks")
  .then((tasks) => res.json({data: tasks}))
  .catch((err) => console.log(err))
})

// 3.4
// Create route - DELETE /tasks/:taskId
app.delete("/tasks/:taskId", (req, res) => {
  console.log(req.params)
  let taskParams = req.params
  Task.findOneAndRemove({_id: taskParams.taskId })
  .then((status) => res.sendStatus("204"))
  .catch((err) => console.log(err))  
})

