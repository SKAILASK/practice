(
// Javascript program to check whether a number
// is Palindrome or not.
/* Iterative function to reverse digits of num*/
function reverseDigits(num) {
    var rev_num = 0;
    while (num > 0) {
        rev_num = rev_num * 10 + num % 10;
        num = Math.floor(num / 10);
    }
    return rev_num;
});
/* Function to check if n is Palindrome*/
function isPalindrome(n) {
    // get the reverse of n
    var rev_n = reverseDigits(n);
    // Check if rev_n and n are same or not.
    if (rev_n == n)
        return 1;
    else
        return 0;
}
/*Driver program to test reversDigits*/
var n = 4562;
document.write("Is " + n + " a Palindrome number? -> ");
document.write(isPalindrome(n) == 1 ? "true" : "false" + "<br>");
n = 2002;
document.write("Is " + n + " a Palindrome number? -> ");
document.write(isPalindrome(n) == 1 ? "true" : "false");
/script>;
