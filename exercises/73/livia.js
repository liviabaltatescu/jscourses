// 73. Write a JavaScript program to reverse the elements of a given array of
// integers length 3.

function reverse_elements(array){
return array.map((element, idx, arr) => arr[(arr.length - 1) - idx]);
}

console.log(reverse_elements([1,2,3]));


// 76. Write a JavaScript program to create a new array taking the first and last
// elements from a given array of integers and length must be greater or equal to 1.

function ex76(nums){
  array=[];
  array.push(nums[0],nums[nums.length-1]);
  return array;
}

console.log(ex76([2,3,4,5,6]));


// 77. Write a JavaScript program to test if an array of integers of length 2 contains
// 1 or a 3.

function test_integer(nr){
  if (nr.length==2){
    if (nr.indexOf(1) != -1 || nr.indexOf(3) != -1){
      return 'corect';
    }
  }else{
    return false;
  }
}
console.log(test_integer([2,3,4,5,6]));
console.log(test_integer([4,3]));
console.log(test_integer([2,5]));


// 78. Write a JavaScript program to test if an array of integers of length 2 does
// not contain 1 or a 3.


function test_integer(nr){
  if (nr.length==2){
    if (nr.indexOf(1) == -1 && nr.indexOf(3) == -1){
      return 'corect';
    }
  }else{
    return false;
  }
}
console.log(test_integer([2,3,4,5,6]));
console.log(test_integer([4,3]));
console.log(test_integer([2,5]));

// 80. Write a JavaScript program to swap the first and last elements of a given
// array of integers. The array length should be at least 1

function swapElements(arr){
  [arr[0],arr[arr.length-1]]=[arr[arr.length-1],arr[0]];
  return arr;
}

console.log(swapElements([1,2,3,4]));
console.log(swapElements([1,2]));
