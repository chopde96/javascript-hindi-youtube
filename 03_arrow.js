const user={
    username:"ankit",
    price:99,
    welcomeMessage:function(){
        console.log(`${this.username},welcome to website`);
        console.log(this);
        
        
    }
}
//user.welcomeMessage();
//console.log(this); //{} output is empty object because we are in node environment if we use console then this refers to window object
//cannot use this in arrow function 
function trial(){
    let username='ponting'
    console.log(this.username);
    }
   // trial();//output is undefined as this only works with objects not with functions,this is also gloabl object
    const chai= () => {
         let username='ponting'
    console.log(this.username);
    }
    chai();//output is undefined this not used with function
    const myArray= [2,4,5,6];
    