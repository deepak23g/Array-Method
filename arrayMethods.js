const arr=[-2,100,4,-5,20,500];

//  1.  includes method;
console.log(arr.includes(20));    
console.log(arr.includes(-100))   


// 2. join method
const arr2=['d','e','e','p','a','k'];
console.log(arr2.join());

// 3.  filter method
function isPos(value){
    return value>0;
}

const result=arr.filter(isPos);
console.log(result);

// 4. map method
function help(num){
 return num*10;
}
const newArr=arr.map(help);
console.log(newArr);


// 5. splice method
const days=['Sunday','Tuesday','Wednesday','Friday'];
days.splice(1,0,'Monday');
console.log(days);
days.splice(4,0,'Thursday');
console.log(days);

// 6. unshift method
arr.unshift(-100,99);
console.log(arr);



