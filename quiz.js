var course;
var rollno;
var score = 0;
var attempt=0;
var displayname;

function saveLogin()
 { 
    course = document.getElementById("course").value;
    rollnum = document.getElementById("rollnum").value;
    localStorage.setItem("course", "course")
    localStorage.setItem("rollnum", "rollnum")
    localStorage.setItem("score", score)
    window.location.href = "quiz1.html"

}

function nextPage(qid, name, type, page)
{
    if(type == "radio" && qid == "q1"){
        ql = document.getElementsByName(name)
        for(let i = 0; i < ql.length; i++)
        {
            console.log(ql[i].value)
            if(ql[i].checked){attempt++}
            if(ql[i].checked && ql[i].value == 'PBKS')
            {
                score = Number(getScore()) + 1
                console.log(Score)
                setScore(score)
            }
        }
    }
   
    if(type == "radio" && qid == "q2"){
        ql = document.getElementsByName(name)
        for(let i = 0; i < ql.length; i++)
        {
            console.log(ql[i].value)
            if(ql[i].checked){attempt++}
            if(ql[i].checked && ql[i].value == 'DC')
            {
                score = Number(getScore()) + 1
                console.log(score)
                setScore(score)
            }
        }
    }

    if(type == "radio" && qid == "q3"){
        ql = document.getElementsByName(name)
        for(let i = 0; i < ql.length; i++)
        {
            console.log(ql[i].value)
            if(ql[i].checked){attempt++}
            if(ql[i].checked && ql[i].value == 'Rohit Sharma')
            {
                score = Number(getScore()) + 1
                console.log(score)
                setScore(score)

            }
        }
    }
   if(type == "radio" && qid == "q4"){
        ql = document.getElementsByName(name)
        for(let i = 0; i < ql.length; i++)
        {
            console.log(ql[i].value)
            if(ql[i].checked){attempt++}
            if(ql[i].checked && ql[i].value == '203')
            {
                score = Number(getScore()) + 1
                setScore(score)

            }
        }
    }
   if(type == "radio" && qid == "q5"){
        ql = document.getElementsByName(name)
        for(let i = 0; i < ql.length; i++)
        {
            console.log(ql[i].value)
            if(ql[i].checked){attempt++}
            if(ql[i].checked && ql[i].value == 'Shikar Dhawan')
            {
                score = Number(getScore()) + 1
                setScore(score)

            }
        }
    }
    
    window.location.href = page;
}

function getScore(){
    return localStorage.getItem("score", score)
}

function setScore(score){
    localStorage.setItem("score", score)
}


displayroll = localStorage.getItem("rollno")
displayname = localStorage.getItem("course")
displayscore = localStorage.getItem("score")
console.log(displayname, score, displayroll)

document.getElementById("result").innerHTML=  displayscore
document.getElementById("roll").innerHTML=  displayroll
document.getElementById("co").innerHTML=  displayname
 window.onunload = () =>{
            window.localStorage.clear();
        }