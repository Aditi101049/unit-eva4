// write js code here corresponding to index.html
// You should add submit event on the form

document.querySelector("#masaiForm").addEventListener("submit",myFunction);
 var formArr=JSON.parse(localStorage.getItem("Schedule")) || [];

 function myFunction(){
     event.preventDefault();
     var formObj={
        matchNum:document.querySelector("#matchNum").value,
        date:document.querySelector("#date").value,
        teamA:document.querySelector("#teamA").value,
        teamB:document.querySelector("#teamB").value,
        venue:document.querySelector("#venue").value,
        

     };
     formArr.push(formObj);
     console.log(formArr);
     localStorage.setItem("Schedule",JSON.stringify(formArr));

    //  document.querySelector("#matchNum").value="";
    //  document.querySelector("date").value="";

     window.location.href="matches.html"

 }
