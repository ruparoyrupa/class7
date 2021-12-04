const result =[
    {
        name   : 'Rupa Roy',

        roll   :  1 ,

        class  : 'Five',

        bn     : 78,

        en     : 87,

        math   : 88,

        s     :  79,
        
        ss    :  83,

        rel   :  92

    },

    {
        name   : 'Hasan',

        roll   :  2 ,

        class  : 'Five',

        bn     : 78,

        en     : 87,

        math   : 88,

        s     :  79,
        
        ss    :  83,

        rel   :  92

    },

    {
        name   : 'Nipa Roy',

        roll   :  3 ,

        class  : 'Five',

        bn     : 78,

        en     : 87,

        math   : 88,

        s     :  79,
        
        ss    :  83,

        rel   :  92

    },

    {
        name   : 'Prottasha Biswas',

        roll   :  4 ,

        class  : 'Five',

        bn     : 78,

        en     : 87,

        math   : 88,

        s     :  79,
        
        ss    :  83,

        rel   :  92

    },

    {
        name   : 'Sharayan Biswas',

        roll   :  5 ,

        class  : 'Five',

        bn     : 78,

        en     : 87,

        math   : 88,

        s     :  79,
        
        ss    :  83,

        rel   :  92

    },

    {
        name   : 'Naimul Hasan',

        roll   :  6 ,

        class  : 'Five',

        bn     : 78,

        en     : 87,

        math   : 88,

        s     :  79,
        
        ss    :  83,

        rel   :  92

    },

    {
        name   : 'Rezwan Ahmed',

        roll   :  7 ,

        class  : 'Five',

        bn     : 88,

        en     : 83,

        math   : 58,

        s     :  79,
        
        ss    :  81,

        rel   :  82

    },

    {
        name   : 'Anamul Haque',

        roll   :  8 ,

        class  : 'Five',

        bn     : 79,

        en     : 87,

        math   : 90,

        s     :  77,
        
        ss    :  83,

        rel   :  91

    },

    {
        name   : 'Ridoy Biswas',

        roll   :  9 ,

        class  : 'Five',

        bn     : 68,

        en     : 87,

        math   : 30,

        s     :  59,
        
        ss    :  67,

        rel   :  88

    },

    {
        name   : 'Kabir Khan',

        roll   :  10 ,

        class  : 'Five',

        bn     : 68,

        en     : 97,

        math   : 98,

        s     :  79,
        
        ss    :  83,

        rel   :  95

    },
];


result.map(data => {
    let bn = data.bn 
    let en = data.en
    let math = data.math
    let s = data.s
    let ss = data.ss
    let rel = data.rel
    let totel = bn + en + math + s + ss + rel  ;

    




// Result calculation 

function Result() {

    this.gpa = function (markes) {

        let gpa;

        if (markes >= 0 && markes <= 32) {
            gpa = 0;
        } else if (markes >= 33 && markes <= 39) {
            gpa = 1;
        } else if (markes >= 40 && markes <= 49) {
            gpa = 2;
        } else if (markes >= 50 && markes <= 59) {
            gpa = 3;
        } else if (markes >= 60 && markes <= 69) {
            gpa = 3.5;
        } else if (markes >= 70 && markes <= 79) {
            gpa = 4;
        } else if (markes >= 80 && markes <= 100) {
            gpa = 5;

        }

        return gpa;
    }


    

    this.grade = function (markes) {

        let grade;
    
        if (markes >= 0 && markes <= 32) {
                grade = "F";
        } else if (markes >= 33 && markes <= 39) {
                grade = "D";
        } else if (markes >= 40 && markes <= 49) {
                grade = "C";
        } else if (markes >= 50 && markes <= 59) {
                grade = "B";
        } else if (markes >= 60 && markes <= 69) {
                grade = "A-";
        } else if (markes >= 70 && markes <= 79) {
                grade = "A";
        } else if (markes >= 80 && markes <= 100) {
                grade = "A+";
    
        }
    
            return grade;
    
    }


    this.cgpa = function (bn, en, math, s, ss, rel) {

        let totel_gpa = (bn + en + math + s + ss + rel);
        let cgpa = totel_gpa / 6;

        if (bn == 0 || en == 0 || math == 0 || s == 0 || ss == 0 || rel == 0) {
            return `You are faild . `
        } else {
            return ` ${cgpa.toFixed(2)}    Totel Grade  : ${ this.totel_grade(cgpa) }  `

        }




    }


    this.totel_grade = function (cgpa) {
        

        if (cgpa >= 0 && cgpa < 1) {
            return cgpa = "F"
        } else if (cgpa >= 1 && cgpa < 2) {
            return cgpa = "D"
        } else if (cgpa >= 2 && cgpa < 3) {
            return cgpa = "c"
        } else if (cgpa >= 3 && cgpa < 3.5) {
            return cgpa = "B"
        } else if (cgpa >= 3.5 && cgpa < 4) {
            return cgpa = "A-"
        } else if (cgpa >= 4 && cgpa < 5) {
            return cgpa = "A"
        } else if (cgpa == 5) {
            return cgpa = "A+"
        }
            
        



        




    }




    
}


let re = new Result() ;






console.log(`

Roll          : ${data.roll}

Student Name  :  ${data.name}

Subject           Markes          GPA                  GRADe   

Bangla           ${bn}            ${re.gpa(bn)}                     ${re.grade(bn)}

English          ${en}            ${re.gpa(en)}                     ${re.grade(en)}

Math             ${math}          ${re.gpa(math)}                  ${re.grade(math)}

Science          ${s}             ${re.gpa(s)}                      ${re.grade(s)}

S Science        ${ss}            ${re.gpa(ss)}                     ${re.grade(ss)}

Religion         ${rel}           ${re.gpa(rel)}                    ${re.grade(rel)}


Totel Markes  : ${totel}          CGPA  :  ${re.cgpa(re.gpa(bn),re.gpa(en),re.gpa(math),re.gpa(s),re.gpa(ss),re.gpa(rel))}  

`);





})