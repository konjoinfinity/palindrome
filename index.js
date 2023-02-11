function palindrome(str) {
let pal = str
str = str.replace(/[^0-9a-zA-Z]/g, '').toLowerCase()
pal = pal.replace(/[^0-9a-zA-Z]/g, '').toLowerCase()
pal = pal.split("").reverse().join("");
 if(pal == str){
return true
 } else {
   return false
 }
}

palindrome("eye");