const members = [

    {
       

        name     :'Rupa Roy' ,

        age      : 30 ,

        location :'Jessore' ,

        gender   :'Female'



    },

    {
       

        name     :'Hasan Anamul' ,

        age      : 13 ,

        location :'Dhaka' ,

        gender   :'Male'



    },

    {
        

        name     :'Joy Shaheb' ,

        age      : 30 ,

        location :'Khulna' ,

        gender   :'Male'



    },
    
    {
        

        name     :'Lima Khatun' ,

        age      : 21 ,

        location :'Dhaka' ,

        gender   :'Female'



    },

    {
       

        name     :'ANirban Biswas' ,

        age      : 36 ,

        location :'Jessore' ,

        gender   :'Male'



    },

    {
        

        name     :'Protish Biswas' ,

        age      : 16 ,

        location :'Khulna' ,

        gender   :'Male'



    },

    {
       

        name     :'Chandra Biswas' ,

        age      : 55 ,

        location :'Jessore' ,

        gender   :'Female'



    },

    {
        

        name     :'Mahmud Hasan' ,

        age      : 32 ,

        location :'Dhaka' ,

        gender   :'Male'



    },

    {
        

        name     :'Rupali Roy' ,

        age      : 45 ,

        location :'Khulna' ,

        gender   :'Female'



    },

    {
       

        name     :'Deloar Khan' ,

        age      : 40 ,

        location :'Dhaka' ,

        gender   :'Male'



    }

] ;



// members.map( data   => {
  
//     let name = data.name
//     let age =data.age
//     let gender =data.gender
//     let location = data.location

//     if ( age >= 0 && age <= 17 ) {
//         console.log(`
//         Name     :   ${name}
         
//         Gender   :   ${gender}

//         Location :   ${location}

//          Age      :   ${age}

//         Message   : You are not allowed in this club .
        
//         `);
//     }else if ( age >= 18 && age <= 40 ){
//         console.log(`
        
//         Name     :   ${name}
         
//         Gender   :   ${gender}

//         Location :   ${location}

//         Age      :   ${age}

//         Mesage    : Welcome to our club .
        
//         `);
//     }else if ( age > 41 ) {
//         console.log(`
        
//         Name     :   ${name}
         
//         Gender   :   ${gender}

//         Location :   ${location}

//         Age      :   ${age}
        
//         Message  :  Age is over . You are not allowed in our club .
//         `);
//     }
  
    
     
    
       
  
// }) ;


members.map(data => {

    let name = data.name
    let age =data.age
    let gender =data.gender
    let location = data.location


    function message(){


        if ( age >= 0 && age <= 17 ) {
            return ` You are not allowed in this club .`
        }else if ( age >= 18 && age <= 40 ){
            return ` Welcome to our club .`
        }else if ( age > 41 ) {
            return ` Age is over . You are not allowed in our club .`
        }

    } ;


    console.log(`
        
            Name     :   ${name}
             
             Gender   :   ${gender}
    
             Location :   ${location}
    
             Age      :   ${age}

             Meaaage  : ${message()}

    `)

})









