// 21. Write a JavaScript program to create a new string
//  adding "Py" in front of a given string.
//  If the given string begins with "Py" then return the original string.


function addPrefix(word){
  if (word.substring(0,2)==="Py")
  {
    return word;
  }
  return "Py"+word;
}

console.log(addPrefix("ton"));
console.log(addPrefix("Pyton"));


// 22. Write a JavaScript program to remove a character at the specified
//  position of a given string and return the new string.


function removeString(str){
  str2= str.substring(1,4);

}
console.log(removeString("masina"));
console.log(str2);
