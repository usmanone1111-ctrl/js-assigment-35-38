// // ✅ Assignment 35–38 (Functions)




// 1.
// function showDateTime(){
//     document.write(new Date());
// }
// showDateTime();












// 2.
// function greet(first, last){
//     alert("Hello " + first + " " + last);
// }
// greet("Ali","Khan");









// 3.
// function add(a,b){
//     return a + b;
// }
// alert(add(5,3));





// // 4. Calculator

// function calculator(num1, num2, op){
//     if(op === "+") return num1 + num2;
//     if(op === "-") return num1 - num2;
//     if(op === "*") return num1 * num2;
//     if(op === "/") return num1 / num2;
// }
// alert(calculator(10,5,"+"));




 // 5.
// function square(a){
//     return a*a;
// }
// alert(square(3));





// // 6. Factorial


// function factorial(n){
//     var result = 1;
//     for(var i=1;i<=n;i++){
//         result *= i;
//     }
//     return result;
// }
// alert(factorial(5));






// 7.
// function counting(start,end){
//     for(var i=start;i<=end;i++){
//         document.write(i + " ");
//     }
// }
// counting(1,10);



// function counting(start, end){
//     for( var i=start; i<=end; i++){
//         document.write(i + " ");
//     }
// }
// countion(1,10);





// 8. Hypotenuse

// function calculateHypotenuse(base,perp){
//     function calculateSquare(x){
//         return x*x;
//     }
//     return Math.sqrt(calculateSquare(base) + calculateSquare(perp));
// }
// alert(calculateHypotenuse(3,4));







// 9.
// function area(width,height){
//     return width * height;
// }
// alert(area(5,4));








// 10. Palindrome


// function isPalindrome(str){
//     var check = str.split("").reverse().join("");
//     return str === check;
// }
// alert(isPalindrome("madam"));








// 11. Title Case

// function titleCase(str){
//     var words = str.split(" ");
//     for(var i=0;i<words.length;i++){
//         words[i] = words[i][0].toUpperCase() + words[i].slice(1);
//     }
//     return words.join(" ");
// }
// alert(titleCase("the quick brown fox"));

















// 12. Longest Word


// function longestWord(str){
//     var words = str.split(" ");
//     var longest = "";
//     for(var w of words){
//         if(w.length > longest.length){
//             longest = w;
//         }
//     }
//     return longest;
// }
// alert(longestWord("Web Development Tutorial"));



























// 13.
// function countLetter(str,letter){
//     var count = 0;
//     for(var i=0;i<str.length;i++){
//         if(str[i] === letter) count++;
//     }
//     return count;
// }
// alert(countLetter("JSResourceS.com","o"));













// // 14. Geometrizer


// function calcCircumference(r){
//     document.write("Circumference is " + (2*Math.PI*r) + "<br>");
// }
// function calcArea(r){
//     document.write("Area is " + (Math.PI*r*r));
// }
// calcCircumference(5);
// calcArea(5);
 

function calcCiramference(r){
 document.write("cirumference is" + (2*Math.PI*r) + "<br>");
}

function calcArea(r){
    document.write("Area is" + (Math.PI*r*r));
}

calcCiramference(5);
calcArea(5);