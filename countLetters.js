function countLetters (str){
  //parse str into separate letters ==> array
  //then use join() to put it all together in string again
  var inputString = str.split(' ').join('');
  var result = {};
  console.log('inputString is: ', inputString);


  for (var i = 0; i < inputString.length; i++) {
    var letter = inputString[i];
    //console.log("letter is: ", letter);
    if ( result[letter]){  //if letter already exist
      result[letter]++;
    } else{   //if letter not exist, add and set to 1
      result[letter] = 1;
    }
  }
  //console.log('result after loop is: ', result);
  return result;

}


console.log(countLetters("lighthouse in the house"));
