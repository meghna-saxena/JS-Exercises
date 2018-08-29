// find second largest from a list
// [1,2,3,4,5] // return 4

// iterate over the array
  //take first element push it to a new array // [1]
  //if next element is greater than the previous element, delete the previous and push the next el // []
  // this way you will find the largest no
  // now create another empty array
  // iterate again over the original array, 
  //but this time array el should not contain the highest no
  //apply the same logic, get the second largest no
  // return the no.

  function findSecondLargestMyFirstApproach(arr) {
    var largestNum = undefined;
    for(var i = 0; i<arr.length; i++) {
      if(largestNum === undefined) {
        largestNum = arr[i];
      }
      if(arr[i] > largestNum) {
        delete largestNum;
       largestNum = arr[i];
      }          
    }
    console.log("largest=>" + largestNum);
    
    var secondLargestNum = undefined;
    for(var i = 0; i<arr.length; i++) {
      if(secondLargestNum === undefined) {
        if(arr[i] !== largestNum) {
        secondLargestNum = arr[i];
       }
     }
      if(arr[i] !== largestNum) {
      if(arr[i] > secondLargestNum ) {
        secondLargestNum = arr[i];
      }
     }
   }
     console.log("second=>" + secondLargestNum);
  }


// ===============================================



  
  function findSecondLargest(arr) {
      if(!arr || arr.length < 2) {
          console.log("No second largest");
        return
      }
  
    var largestNum = arr[0];
    for(var i = 0; i < arr.length; i++) {
      if(arr[i] > largestNum) {
       largestNum = arr[i];
      }          
    }
    console.log("largest=>" + largestNum);
    
    var secondLargestNum = undefined;
    for(var i = 0; i < arr.length; i++) {
      if(secondLargestNum === undefined && arr[i] !== largestNum) {
          secondLargestNum = arr[i];
      }
      if(arr[i] !== largestNum && arr[i] > secondLargestNum ) {
        secondLargestNum = arr[i];
      }
   }
     console.log("second=>" + secondLargestNum);
  }
  
  // findSecondLargest([1,2,3,4,5]);
  // findSecondLargest([5, 4, 3, 2, 1]);
  // findSecondLargest([-1, -3]);
  // findSecondLargest([-5, 5]);
  // findSecondLargest([])
  