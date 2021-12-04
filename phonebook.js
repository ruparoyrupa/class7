const members = [

    {
       

        name     :'Tripty Roy' ,

        age      : 55 ,

        relation : 'mother' ,

        location :'Jessore' ,

        gender   :'Female',

        phone    : '01767372689'



    },

    {
       

        name     :'Hasan Anamul' ,

        age      : 33 ,

        relation : 'Brother',

        location :'Dhaka' ,

        gender   :'Male',

        phone    : '01348755433'



    },

    {
        

        name     :'Joy Shaheb' ,

        age      : 30 ,

        relation : 'Friend',

        location :'Khulna' ,

        gender   :'Male',

        phone    : '01884562345'



    },
    
    {
        

        name     :'Lima Khatun' ,

        age      : 21 ,

        relation : 'Sister',

        location :'Dhaka' ,

        gender   :'Female',

        phone    : '01745927467'



    },

    {
       

        name     :'ANirban Biswas' ,

        age      : 36 ,

        relation : 'Brother',

        location :'Jessore' ,

        gender   :'Male',

        phone    : '01873456325'



    },

    {
        

        name     :'Protish Biswas' ,

        age      : 38 ,

        relation :'Husband',

        location :'Khulna' ,

        gender   :'Male',

        phone    : '01723765543'



    }

    

] ;



members.map(data => {
   
   if (data.name == 'Protish Biswas') {
       
      console.log(`
      
      Name     : ${data.name}

      Age      : ${data.age}

      Relation : ${data.relation}

      Location : ${data.location}

      Gender   : ${data.gender}

      Phone    : ${data.phone}
      
      `);


   }



    console.log(data);

}) ;

