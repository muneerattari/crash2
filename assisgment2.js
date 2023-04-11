// // .1 

// // function addFive(num) {
// //   return function(num2) {
// //     return num + num2;
// //   }
// // }


// // let five = addFive(5);


// // console.log(five(5)); 
// // console.log(five(100)); 
// // console.log(five(10)); 

// // // 2

// // let arr =['ahmed','raza','muneer','sameer','hamza']

// // function findValue(arr, value) {
// //   if (arr.length === 0) {
// //     return false;
// //   }

// //   if (arr[0] === value) {
// //     return true;
// //   }

// //   return findValue(arr.slice(1), value);
// // }

// // console.log( findValue(arr,('sameer')));

// // // 3.

// // function addPara(text){
// //   let p =document.createElement('p')
// //  p.innerText=text
// // let body = document.querySelector('body')
// // body.appendChild(p)

// // }
// // addPara('this is my new para');

// // // 4.

// // function listItem (item){
// //   let body = document.querySelector("body")
// //   let uol= document.createElement('ul')
// //   let li=document.createElement('li')
// //   li.innerText=item
// //   uol.appendChild(li)
// //   body.appendChild(uol)
// // }
// // listItem("first item")


// // // 5.
// // setInterval(function(){
// //     function colorChange (e,color){
// // e.style.backgroundColor=color

// // }
// // let para = document.getElementById('para')
// // colorChange(para,'green')
// // },400)



// // 6



// const setInLocalstorage = (key,value) => {
//     let str = JSON.stringify(value)
//     localStorage.setItem(key,str)
//   };
  
//   let obj = {
//     name: "ahmed",
//     age: 18,
//     teacher: "sir ishaq",
//     course: "javascript"
//   };
//   setInLocalstorage("Key", obj);
  
  
//   //7 
//   let obj2 = {
//     name: "ahmed",
//     age: 18,
//     teacher: "sir ishaq",
//     course: "javascript"
//   };
  
  
  
  
  
  
//   const getInLocalstorage = (value) => {
    
//    let key= localStorage.getItem(value)
//       JSON.parse(key)
//   };
//   let myObject = getInLocalstorage("age");
//   console.log(myObject);
  
//   console.log(getInLocalstorage(obj))
  
  
