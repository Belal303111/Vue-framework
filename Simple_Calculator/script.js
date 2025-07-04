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

