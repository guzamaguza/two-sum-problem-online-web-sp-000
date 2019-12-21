//collects each pair of numbers with a matching sum
function bruteForceTwoSum(array, sum){
  let pair = [];
  let matchingPairs =[][];
  for(let i=0;i<array.length; i++){
    for(let j=0;j<array.length;j++){

      if(sum === array[i] + array[j]){
        pair = [i,j];
        matchingPairs.push(pair);
      }
    }
  }
  return matchingPairs;
}


//collects each pair of numbers with a matching sum
function binarySearchTwoSum(array, sum){


}


//returns true when a match is found
function binaryMatch(sortedArray, missingNum){


}


//collects each pair of numbers with a matching sum
function hashTwoSum(array, sum){


}
