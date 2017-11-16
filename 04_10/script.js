function Course(title,instructor,level,views){
  this.title = title;
  this.instructor=instructor;
  this.level=level;
  this.views= views;
  this.updateViews = function(){
    return ++this.views;
  };
}


var courses = [
  new Course("JS course", "Lynda", 1,0),
  new Course("JS object", "Lynda", 2,76)
]


// console.log(courses);
console.log(courses[1].title);
