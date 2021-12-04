const deves = [

    {
        id       : 1 ,

        name     :'Rupa Roy' ,

        age      : 30 ,

        skill    :'java',

        income   : 4000 ,

        location :'Jessore' ,

        gender   :'Female'



    },

    {
        id       : 2 ,

        name     :'Hasan Anamul' ,

        age      : 33 ,

        skill    :'java',

        income   : 2800 ,

        location :'Dhaka' ,

        gender   :'Male'



    },

    {
        id       : 3 ,

        name     :'Joy Shaheb' ,

        age      : 30 ,

        skill    :'php',

        income   : 3900 ,

        location :'Khulna' ,

        gender   :'Male'



    },
    
    {
        id       : 4 ,

        name     :'Lima Khatun' ,

        age      : 21 ,

        skill    :'MERN',

        income   : 2000 ,

        location :'Dhaka' ,

        gender   :'Female'



    },

    {
        id       : 5 ,

        name     :'ANirban Biswas' ,

        age      : 36 ,

        skill    :'MERN',

        income   : 4000 ,

        location :'Jessore' ,

        gender   :'Male'



    },

    {
        id       : 6 ,

        name     :'Protish Biswas' ,

        age      : 20 ,

        skill    :'php',

        income   : 3700 ,

        location :'Khulna' ,

        gender   :'Male'



    },

    {
        id       : 7 ,

        name     :'Chandra Biswas' ,

        age      : 25 ,

        skill    :'java',

        income   : 2000 ,

        location :'Jessore' ,

        gender   :'Female'



    },

    {
        id       : 8 ,

        name     :'Mahmud Hasan' ,

        age      : 32 ,

        skill    :'java',

        income   : 3500 ,

        location :'Dhaka' ,

        gender   :'Male'



    },

    {
        id       : 9 ,

        name     :'Rupali Roy' ,

        age      : 28 ,

        skill    :'MERN',

        income   : 3000 ,

        location :'Khulna' ,

        gender   :'Female'



    },

    {
        id       : 10 ,

        name     :'Deloar Khan' ,

        age      : 40 ,

        skill    :'php',

        income   : 1000 ,

        location :'Dhaka' ,

        gender   :'Male'



    }


] ;

let totel = 0 ;
deves.map( data => {
     
   console.log(`
      Id        : ${data.id} 
      Name      : ${data.name}  
      Age       : ${data.age}
      Skill     : ${data.skill}
      Income    : ${data.income}
      Location  : ${data.location}
    
   `);

   totel = totel+data.income


}) ;


console.log(`Totel Income  = $ ${totel}`);

// ===============================================================

let mote = 0 ;

deves.map( data => {
    if (data.skill == 'java') {
        
        console.log(`
        Id        : ${data.id} 
        Name      : ${data.name}  
        Age       : ${data.age}
        Skill     : ${data.skill}
        Income    : ${data.income}
        Location  : ${data.location}
      
     `);
  
     mote = mote+data.income ;
  
    
    }
}) ;

console.log(`Totel Income = $ ${mote}`);






// let mote = 0 ;

// deves.map( data => {
//     if (data.name == 'Rupa Roy') {
        
//         console.log(`
//         Id        : ${data.id} 
//         Name      : ${data.name}  
//         Age       : ${data.age}
//         Skill     : ${data.skill}
//         Income    : ${data.income}
//         Location  : ${data.location}
      
//      `);
  
//      mote =(mote+data.income)*12 ;
  
    
//     }
// }) ;

// console.log(`1 Year totel income = $ ${mote}`);

