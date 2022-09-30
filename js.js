
// const arr = ["a", "b", "c", "d", "a", "b", "a", "c"];

// let duplicate = [];
// let n = arr.length;
// for (let i = 0; i < n; i++) {
//     let c = 1;
//     for (let j = i + 1; j < n; j++) {
//         if (arr[i] == arr[j]) {
//             c++;
//             arr[j] = arr[n - 1];
//             n--;
//             j--;
//         }
//     }
//     if (c > 1) {
//         duplicate.push(arr[i]);
//     }
// }
// console.log(duplicate);


// const Test=[{name1:'Jack',age:24},{name2:'Beck',age:26},{name3:'melvin',age:27}]; 
// const sumage =Test.reduce((acc,desc)=>acc+desc.age,0)
// console.log(sumage);


// for (let i=0;)

// let arr=[40,45,100,1];
// console.log(arr.sort());

// function sortArray(array) {
//     var temp = 0;
//     for (var i = 0; i < array.length; i++) {
//       for (var j = i; j < array.length; j++) {
//         if (array[j] < array[i]) {
//           temp = array[j];
//           array[j] = array[i];
//           array[i] = temp;
//         }
//       }
//     }
//     return array;
//   }
  
//   console.log(sortArray([40,45,100,1]).join());

// let num;
//  num = 6;

// console.log(num);
 // Returns 'undefined' from hoisted var declaration (not 6)
 // Declaration

// ✨🧨🧨✨reverse number🎈🎈 

// const reverse = (num) =>{

// if(num<0)
//     return -1* parseInt(num.toString().split('').reverse().join(''));

//     return parseInt(num.toString().split('').reverse().join(''));
// }

// console.log(reverse(567));

//🎉✨✨🎇palindrome check🎈🎈

// let palindrome = "dsdsd";
// let reverse = palindrome.split('').reverse().join('');
// console.log(reverse===palindrome);

//🎈🎈🎈🎇  aaabbaacccaa    O/P: 7a2b3c  🎊🎊🎄🎄

// let count = "aaabbaacccaa";
// let sort= count.split('').sort();
// console.log(sort);

//✨✨✨find second largest number✨✨✨

// var secondMax = function (){ 
//     var arr = [123, 234, 12, 453, 23232]; // use int arrays
//     var max = Math.max.apply(null, arr); // get the max of the 
//     arr.splice(arr.indexOf(max), 1); // remove max from the array
//     return Math.max.apply(null, arr); // get the 2nd max
// };
// console.log(secondMax());

//✨✨🎇🎇typeof ✨🧨

// var a;
// console.log(typeof a);

// a ="hello";
// console.log(typeof a);

// a=42;
// console.log(typeof a);

// a= true;
// console.log(typeof a);

// a=null;
// console.log(typeof a);

// a=undefined;
// console.log(typeof a);

// a= {b:"c"};
// console.log(typeof a);

//reverse each word

// var string = "welcome to this javascript .";
// var reverse= string.split('').reverse().join('');
// var rereverse= reverse.split('').reverse().join('');
// var repeat = reverseBySeparator(string,"");
// var repeatword= reverseBySeparator(repeat,"");
// function reverseBySeparator(string,separator){
//     return string.split(separator).reverse().join(separator);
// }
// var maprepeat = reverseBymap(string);
// function reverseBymap(string){
//    const allwords = string.split(" ");
//    return allwords.map(item => item.split("").reverse().join("")).join(" ");
// }

// var news = reverseWords('words like me');
// console.log(reverseBymap(string));
// console.log(reverse)

// const reverseString = (str =null)=>{
//     let newStr = [];
//     let string = "";
//     let reverseStr = "";
//     for (i=0;i<str.length;i++){
//         if(str[i] == " "){
//             newStr.push(string);
//             string = "";
//         }else {
//             string += str[i];
//         }
//     }
//     if (string){
//         newStr.push(string);
//     }
//     for (i = newStr.length -1;i>=0;i--){
//         reverseStr += newStr[i] + " ";
//     }
//     return reverseStr;

// };
// let val = reverseString("welcome to javascript world");
// console.log(val);


// function reverseInPlace(str) {
//     var words = [];
//     words = str.match(/\S+/g);
//     var result = "";
//     for (var i = 0; i < words.length; i++) {
//        result += words[i].split('').reverse().join('') + " ";
//     }
//     return result
//   }
//   console.log(reverseInPlace("welcome to the world"));
  


// const someFunction = () => {
// 	try {
// 		let a = 1;
// 		var b =2;
// 		throw new Error('Error occured!')
		
// 	} catch(error) {
        
// 		console.log(a);
// 		console.log(b);
// 		console.log(error);
// 	}
// }
// someFunction();


// let MAX = 256;

// 	function canMakeStr2(str1, str2)
// 	{
		
// 		let count = new Array(MAX);
// 		count.fill(0);
// 		for (let i = 0; i < str1.length; i++)
// 			count[str1[i]]++;

		
// 		for (let i = 0; i < str2.length; i++) {
// 			if (count[str2[i]] == 0)
// 				return false;
// 			count[str2[i]]--;
// 		}
// 		return true;
// 	}
	
// 	let str1 = "BCD";
// 	let str2 = "anr";
// 	if (canMakeStr2(str1, str2))
// 	console.log("True");
// 	else
// 	console.log("false");
			

// 	const arr = [1,5,7,6,5,3]
// 	const sort= arr.sort();
// 	const array =sort.length;
// 	for(i=array-2;i>=0;i--){
// 		if(arr[i]!=sort[array-1]){
// 			console.log(arr[i]);
			
			
// 		}
// 	}


// let string= "space is here";
// // let split=string.split('');

// for(i=0;i<=string.length;i++){
// 	if(string[i]!=[' ']){
// 		console.log(string[i]);
// 	}
// }

(function foo (){
	console.log('foo')
})();
bar();
baz ();
foo ();
function bar(){
	console.log('bar')
} 
const baz = function(){
	console.log('baz')
}



