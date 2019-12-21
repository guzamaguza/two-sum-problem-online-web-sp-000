//collects each pair of numbers with a matching sum
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


//collects each pair of numbers with a matching sum
function binarySearchTwoSum(array, sum){
  sortedArray = array.sort();
  //rootNode = array[round(array.length/2)];
  for(let i=0; i<array.length; i++){
    numLookingFor = sum - array[i];
    let mid = Math.floor((array.length)/2);
    let pointer;
    if(array[mid] === numLookingFor){
             pointer =  mid;
             break
    }else if(numbers[mid] < required){
            start = mid+1;
    }else{
            end = mid-1
    }



    if(numLookingFor > array[i]){
    pair = [array[i],array[j]];
    matchingPairs.push(pair);
    }else if(numLookingFor < array[i]){

    }
  }
}


//returns true when a match is found
function binaryMatch(sortedArray, missingNum){


}


//collects each pair of numbers with a matching sum
function hashTwoSum(array, sum){


}
