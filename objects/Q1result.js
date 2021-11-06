const totalBtn = document.querySelector("#totalbtn")
const highestBtn = document.querySelector("#highestbtn")
const lowestBtn = document.querySelector("#lowestbtn")
const averageBtn = document.querySelector("#averagebtn")
const gradesBtn = document.querySelector("#gradesbtn")
const passResultBtn = document.querySelector("#passresultbtn")
const totalDiv = document.querySelector("#totaldiv")
const highestDiv = document.querySelector("#highestdiv")
const lowestDiv = document.querySelector("#lowestdiv")
const averageDiv = document.querySelector("#averagediv")
const gradesDiv = document.querySelector("#gradesdiv")
const passDiv = document.querySelector("#passdiv")

totalBtn.addEventListener("click", getTotalMarks);
highestBtn.addEventListener("click", printHighestMark);
lowestBtn.addEventListener("click", printLowestMark);
averageBtn.addEventListener("click", printAverageComp);
gradesBtn.addEventListener("click", getStudentGrades);
passResultBtn.addEventListener("click",totalPassedStudents  )


const studentDetails = [{
        roll: "1",
        name: "Rohan Singh",
        maths: 86,
        science: 90,
        english: 75,
        computer: 85
    },
    {
        roll: "2",
        name: "Ritvik Patel",
        maths: 27,
        science: 30,
        english: 35,
        computer: 30
    },
    {
        roll: "3",
        name: "Neha Maurya",
        maths: 75,
        science: 69,
        english: 40,
        computer: 75
    },
    {
        roll: "4",
        name: "Mohit Verma",
        maths: 21,
        science: 31,
        english: 45,
        computer: 40
    },
    {
        roll: "5",
        name: "Karan Trivedi",
        maths: 70,
        science: 80,
        english: 35,
        computer: 60
    }
];

function getTotalMarks() {
    let totalMark = 0;
    let outputTotalMark = [];
    for (let x of studentDetails) {
        totalMark = x.maths + x.science + x.english + x.computer;

        outputTotalMark.push(x.name + " " + totalMark)
        // console.log( x.name +" " + totalMark);
        document.getElementById("totalbtn").style.display = "none"; //hide.
    }
    totalDiv.innerHTML = outputTotalMark.join("<br>");
    // for(let i=0;i<studentDetails.length;i++){
    //    totalMark = studentDetails[i].maths + studentDetails[i].science
    //  }
    ///       console.log(totalMark);
    // studentTotal = studentDetails.map(total  => 
    //     total.maths + total.science + total.english + total.computer  
    //   )
    // console.log(studentTotal);
}

function printHighestMark() {
    highestDiv.innerText = studentDetails[0].name + " scored 336 ";
    document.getElementById("highestbtn").style.display = "none"; //hide.
}

function printLowestMark() {
    lowestDiv.innerText = studentDetails[1].name + " scored 122 ";
    document.getElementById("lowestbtn").style.display = "none"; //hide.
}

function printAverageComp() {
    let averageComp = studentDetails[0].computer + studentDetails[1].computer + studentDetails[2].computer + studentDetails[3].computer + studentDetails[4].computer / 5
    //  console.log(averageComp);
    averageDiv.innerText = "Average marks of the class in computer subject " + averageComp;
    document.getElementById("averagebtn").style.display = "none"; //hide.

}
const studentGradesDetails = [{
    name: "Rohan Singh",
    percentage: (336 / 400) * 100,
},{
    name: "Ritvik Patel",
    percentage: (122 / 400) * 100,
},{
    name: "Neha Maurya",
    percentage: (259 / 400) * 100,
},{
    name: "Mohit Verma",
    percentage: (137 / 400) * 100,
},{
    name: "Karan Trivedi",
    percentage: (245 / 400) * 100,
}
]

function getStudentGrades() {

    nameGradesOutput = [];
     for(let i=0;i<5;i++){
         if(studentGradesDetails[i].percentage > 75   ){
             nameGradesOutput.push( "GRADE A " + studentGradesDetails[i].name );
         }else if(studentGradesDetails[i].percentage > 60 ) {
            nameGradesOutput.push( "GRADE B " + studentGradesDetails[i].name );
         }else if (studentGradesDetails[i].percentage > 35  ){
            nameGradesOutput.push( "GRADE C " + studentGradesDetails[i].name );
         }else {
            nameGradesOutput.push( "GRADE D " + studentGradesDetails[i].name );
         }
     }
     gradesDiv.innerHTML = nameGradesOutput.join("<br>");    
    document.getElementById("gradesbtn").style.display = "none"; //hide.

}
function totalPassedStudents() {
    namePassedStudent = [];
    for(let i=0;i<studentGradesDetails.length;i++ ){
        if(studentGradesDetails[i].percentage > 35  ){
            namePassedStudent.push(studentGradesDetails[i].name)
        }
        passDiv.innerHTML = "<u>Total number of passed students 3</u>  " + "<br>" +   namePassedStudent.join("<br>")
    document.getElementById("passresultbtn").style.display = "none"; //hide.

    }
}