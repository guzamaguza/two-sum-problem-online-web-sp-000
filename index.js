//collects each pair of numbers with a matching sum [Time complexity : O(n²)]
function bruteForceTwoSum(array, sum){
  let pair = [];
  let matchingPairs = [];
  let sum_it = 0;
  for(let i=0; i<array.length; i++){
    for(let j=0; j<array.length; j++){
        sum_it = array[i] + array[j]
      if(sum === sum_it){
        if(i != j){
        pair = [array[i],array[j]];
        matchingPairs.push(pair);
      }
      }
    }
  }
  let lengthOfMP = matchingPairs.length;
  for(let q = 0;q<lengthOfMP/2;q++){
  matchingPairs.pop(matchingPairs[lengthOfMP - 1]) //eliminates duplicate pairs
   }
  return matchingPairs;
}


//collects each pair of numbers with a matching sum [ O(n log n) ]
function binarySearchTwoSum(array, sum){
  let sortedArray = array.sort();
  let matchingPairs = [];
  let mid = Math.floor(array.length / 2);
    for(let i=0;i<array.length;i++){
      let numLookingFor = sum - array[i];

      if (array[mid] === numLookingFor) {
              let pair = [array[i], numLookingFor];
              return matchingPairs.push(pair);
      } else if (array[mid] < numLookingFor) {
              continue;
      } else if (array[mid] > numLookingFor) {
              continue;
      }
    }
}


//returns true when a match is found
function binaryMatch(sortedArray, missingNum){


}


//collects each pair of numbers with a matching sum
function hashTwoSum(array, sum){


}
