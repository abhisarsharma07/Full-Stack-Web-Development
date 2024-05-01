console.log("lets start")

//objects
let rectangle={
  length:1,//property
  breadth:2,//property
  draw: function(){
     console.log('draw');
  }
};  
// let rectangle2={
//      length:1,//property
//      breadth:2,//property
//      draw: function(){
//         console.log('draw'); 
//      }
//    };  
//    let rectangle3={
//      length:1,//property
//      breadth:2,//property
//      draw: function(){
//         console.log('draw');
//      }
//    };  


//FACTORY FUCTION- it wil create object and it returns object
function createRectangle(len,bre){
     return rectangle={
          length:len,//property
          breadth:bre,//property
          draw: function(){  //function ka naam draw hai
             console.log('draw');
          }
        };  
}
// createRectangle() it will give object
 let rectangleObj1= createRectangle(5,4);//object created for function()  



 //CONSTRUCTOR FUNCTION-> PASCAL
 //constructor function ->prop/method-> initialise/define
 function Rectangle(len,bre){
     this.length=len;
     this.breadth=bre;
     this.draw=function(){
          console.log('drawing');

     }
 }

 //object creation using constructor

 let rectangleObject =new Rectangle(4,6);


 rectangleObject.color='yellow';
 console.log(rectangleObject);

 delete rectangleObject.color;
 console.log(rectangleObject);



let tri={
     length:2,
     breadth:4
 };
 //for-in loop

for(let key in tri){

     //keys are reflected through variable
     //values are reflected through rectangle[key]
     console.log(key, tri[key]);
}

//for-of loop
// for(let key of Object.entries(rectangle)){
//      console.log(key);
// }





if('color' in rectangle){
     console.log('present');
}
else{
     console.log('Absent');
}



// // object cloning->iteration
let src= {
     a:10,
     b:20,
     c:30
};

// let dest={};

// for(let key in src){
//      dest[key]=src[key];
// }


// console.log(dest);

// src.a++;
// console.log(dest);


//object cloning->assign
// src2={
//      value:25
// };
// let dest=Object.assign({},src2,src);//yaha par src aur src2 ke data ko clone kar liya {} isme
// console.log(dest);


//object cloning->spread
let dest={...src};
console.log(dest);
