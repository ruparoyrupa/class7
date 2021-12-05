const list = [

    {
        id       : 1 ,

        name     :'Rupa Roy' ,

        age      : 30 ,

        fees     : 2000 ,

        location :'Jessore' ,

       



    },

    {
        id       : 2 ,

        name     :'Hasan Anamul' ,

        age      : 33 ,

        fees      : 2800 ,

        location :'Dhaka' ,

       



    },

    {
        id       : 3 ,

        name     :'Joy Shaheb' ,

        age      : 30 ,

        fees     : 3900 ,

        location :'Khulna' ,

       



    },
    
    {
        id       : 4 ,

        name     :'Lima Khatun' ,

        age      : 21 ,

        fees    : 2000 ,

        location :'Dhaka' 

     



    },

    {
        id       : 5 ,

        name     :'ANirban Biswas' ,

        age      : 36 ,

        fees     : 4000 ,

        location :'Jessore' 

        



    },

    {
        id       : 6 ,

        name     :'Protish Biswas' ,

        age      : 20 ,

        fees     : 3700 ,

        location :'Khulna' 

      



    },

    {
        id       : 7 ,

        name     :'Chandra Biswas' ,

        age      : 25 ,

        fees     : 2000 ,

        location :'Jessore' 




    },

    {
        id       : 8 ,

        name     :'Mahmud Hasan' ,

        age      : 32 ,

        fees     : 3500 ,

        location :'Dhaka' 

    



    },

    {
        id       : 9 ,

        name     :'Rupali Roy' ,

        age      : 28 ,

        fees     : 3000 ,

        location :'Khulna' 




    },

    {
        id       : 10 ,

        name     :'Deloar Khan' ,

        age      : 40 ,

        fees     : 1000 ,

        location :'Dhaka' 

       



    }


] ;

let totel2 = 0 ;
list.map( data => {
     
   console.log(`
      Id        : ${data.id} 
      Name      : ${data.name}  
      Age       : ${data.age}
      Taka      : ${data.fees}
      Location  : ${data.location}
    
   `);

   totel = totel2+data.fees


}) ;


console.log(`Totel amount  =  ${totel}`);

// ===============================================================



list.map( data => {
    if (data.name == 'Rupa Roy') {
        
        console.log(`
        Id        : ${data.id} 
        Name      : ${data.name}  
        Age       : ${data.age}
        Taka      : ${data.fees}
        Location  : ${data.location}
      
     `);
  
     
  
    
    }
}) ;



