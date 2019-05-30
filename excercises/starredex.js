//Palindrome





//Separate Dogs






//Pig Latin






//Recipe and food determination






/*Print every prime # from 2 to 2,000
function checkingforPrimes(x){

for (i = 2; i < 2000;){
    console.log("The number is" + i + "<.>");
  (i++);
/*if((x+1)%2==0){
    print(x + "is not prime");
}else{
    print(x + "is not prime");
}
}
} */

function checkForPrimes() {
    var x = 0;
    var text ="";
    for(x = 2; x < 2000;){
      if((x+1)%2==0){
      console.log( text + x + " is prime");
    }else{
       console.log(text + x + " is not prime");
    }
      x++;
        
    }
    }
    
    console.log(checkForPrimes());
//Two strings-return largest common substring from 2 strings






//Given two lists-each list is a subset of another list