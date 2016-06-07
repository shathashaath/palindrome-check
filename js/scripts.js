$(function(){
  $("form#palindrome").submit(function(event){
    event.preventDefault();
    
    var pal = $("input#palindrome-input").val();
    function checkPalindrome(word){
      var len = Math.floor(pal.length / 2);
      for (i = 0; i < pal.length; i++) {
        if (pal.charAt(i) !== pal.charAt(pal.length - i - 1)) {
          return false;
        }
        return true;
      }
    }
  if (checkPalindrome(pal)) {
    $("#answer").append("<p>This word is a palindrome");
  } else {
    $("#answer").append("<p>This word is NOT a palindrome");
  }

  });
});
