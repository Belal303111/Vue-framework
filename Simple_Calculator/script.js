// Simple Calculator
const {createApp} =Vue;
createApp({
    data(){
        return{
            a:0,
            b:0,
            result:0
        }
    },
    methods:{
//     input()
// {
//     int(prompt("Enter the first numbers: ",a,b));
//     return a,b;
// },
         sum()
{
    this.result= this.a+this.b;
},
    sub()
{
    this.result=  this.a-this.b;
},
    mul()
{
    this.result=  this.a*this.b;
},
    div()
{
    if(this.b!=0) this.result=  this.a/this.b;
    else this.result=  "Can't divided by zero";
},
     mod()
{
    this.result=  this.a%this.b;
}
    }
}).mount('#Belal-app');


// var operation='';
// // console.log("Please enter your operation")
// var n=0,m=0;
// prompt(int("Enter the numbers \n ",n,m));
// prompt("Enter your operation: ",operation);
// var test='y';
// while(test!=y)
//    {
//     if(operation=='+')
//         document.writeln(sum(n,m));
//     else if(operation =='-')
//         document.writeln(sub(n,m));
//     else if(operation == '*')
//         document.writeln(mul(n,m));
//     else if(operation=="/")
//         document.writeln(div(n,m));
//     else if(operation=="%")
//         document.writeln(mod(n,m));
//     else document.writeln("The operation is not true");
//     prompt("if you finish enter y ",test);
// }

