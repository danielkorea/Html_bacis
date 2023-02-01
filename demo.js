// string 可以写各种html标签内容
document.write("<h1>demo</h1>")
var name = "daniel";
name = 1;
name = true;
// document.write(name);
var str = "hello"+"i'am daniel";
document.writeln(str.toLowerCase());
document.writeln(str.toUpperCase());
// str.charAt(1);
// str.indexOf(h);
var num = Math.max(2,4,55,33);
document.write(num);

//prompt 页面弹出输入框
// var my_name = prompt("名字");
// var age = prompt("age");
// document.writeln(my_name+age);
// var num1 = prompt("num1");
// var num2 = prompt("num2");
// num1 = parseInt(num1);
// num2 = parseInt(num2);
// document.writeln(num1*num2);
//数组，可以存放不同类型
var scores = [80,60,20,30,59];
var arr = [true,20,"daniel"];
document.writeln(scores[1]);
document.writeln(arr);
//函数
function hello(){
    // alert("daniel");
}
function myFunction(a,b)
{
    if (a>b)
    {
        return;
    }
    return a+b;
}
hello();
// alert(myFunction(2,3));
var point = 90;
var rainy = true;
if (point == 100 && rainy){
    document.writeln("give up");
}else{
    document.writeln("keep going");
}
// if else if    else 用法和ios 一样

var person = {
    firstName:"John",
    lastName:"Doe",
    age:50,
    eyeColor:"blue"
};
typeof "John"                // 返回 string
typeof 3.14                  // 返回 number
typeof false                 // 返回 boolean
typeof [1,2,3,4]             // 返回 object
typeof {name:'John', age:34} // 返回 object
var carname=new String;
var x=      new Number;
var y=      new Boolean;
var cars=   new Array;
var person= new Object;
person.age;
person.lastName;
person.eyeColor;
//和iOS一样 while ,do while ，for 循环一样
var i = 1;
while(i<=3){
    document.writeln(i);
    i++;
}
function displayDate(){
	document.getElementById("date").innerHTML=Date();
}

// for(var i=0; i<3 ;i++){
//     prompt("daniel");
//     alert("daniel");
// }
//二维数组和iOS一样
var number = [
    [1,2,3],[2,3,4],[3,4,5]
]
number[0][0];
//class类
class Phone{
    constructor(n,year,is_waterproof){
        this.n = n;
        this.year = year;
        this.is_waterproof = is_waterproof;
    }
    phone_age(){
        return 2023-this.year;
    }
}
var phone1 = new Phone("123",2020,false);
document.writeln(phone1.n);
document.writeln(phone1.phone_age());
// var phone1 = {
//     n:"123",
//     year:2023,
//     is_waterproof:false;
//     phone_age:function(){
//         retun 2023 - this.year;
//     }
// }
// var phone2 = {
//     n:"122343",
//     year:2033,
//     is_waterproof:false;
//     phone_age:function(){
//         retun 2023 - this.year;
//     }
// }
// event listener
function handle_click(element){
    alert("叫你按就按啊"); 
    console.log(element);
    // element.innerHTML = "元素";
    element.innerText = "文本";
    element.style.color = "red";
}
//监听直接在js上写
var btn1 = document.getElementById("btn1");
btn1.addEventListener("click",function(){
    this.innerText = "按屁啊";
    this.style.color = "blue";
})
var img = document.getElementById("img");
img.addEventListener("mouseover",function(){
    this.src = "2.png";
})

//部落格blog
var title = document.getElementById("title");
var content = document.getElementById("content");
var btn2 = document.getElementById("btn2");
var list = document.getElementById("list");
btn2.addEventListener("click",function(){
     console.log(title.value);
     console.log(content.value);
     console.log(list.innerHTML);
     list.innerHTML = list.innerHTML + `
     <div class="article">
     <h2>${title.value}</h2>
     <p>${content.value}</p>
     </div>
     `;
     title.value = "";
     content.value = "";
     
}) 





