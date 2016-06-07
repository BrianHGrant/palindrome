$(document).ready(function(){
  $("#palindromeForm").submit(function(event){
    var textInput = $("input#userInput").val();
    // var length = textInput.length;
    // alert (length);
    var textArray = textInput.split("");
    alert (textArray);
    var textArrayLength = textArray.length;
    alert (textArrayLength);
    var splitText = textArray.slice(0, textArrayLength / 2);
    alert (splitText);
    
    var splitText2 = textArray.slice(textArrayLength / 2, textArrayLength);
    alert (splitText2);
    if ((splitText).toString() === (splitText2.reverse()).toString()) {
      alert("It's a palindrome!")
    } else {
      alert("It's not a palindrome!")
    };


//     var newLength = length / 2;
//     alert(newLength);
//     var lengthArray = textInput.splice(0,textInput.charAt(newLength));
// alert(lengthArray);

    event.preventDefault();
  });
});
