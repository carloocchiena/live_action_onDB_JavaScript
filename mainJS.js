var app = true
var studentNames = ["Mark", "Tony", "Lucio"] //this is where you could link to a DB theoretically

var start = prompt("Do you like to start the rooster app? y\\n")

var commands = ["add" , "remove", "display", "quit"]

var okCommand = commands.includes(instruction)

if (start == "n") {
  var quit = alert ("ok man, no problem; refresh the page to start again");
} else {
  while (app) {
    var instruction = prompt ("What you wanna do? add, remove, display, quit?")
    if (instruction == "add") {
      name = prompt ("Ok insert the name you'd like to add")
      studentNames.push(name)
    } else if (instruction == "remove") {
      name = prompt ("Ok insert the name you'd like to delete")
      var index = studentNames.indexOf(name);
      if (index > -1) {
        studentNames.splice(index, 1);
      } else {
        alert("Name not found!")
      }
    } else if (instruction == "display") {
      console.log(studentNames)
    } else if (instruction == "quit") {
      app = false
      alert ("ok man, no problem; refresh the page to start again")
    } else {
      var instruction = prompt ("What you wanna do? add, remove, display, quit?")
    }
  }
}
