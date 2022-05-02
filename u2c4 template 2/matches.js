// write js code here corresponding to matches.html


var formArr=JSON.parse(localStorage.getItem("scheduleList"));
 displayData=(formArr);

 var favouriteArr=JSON.parse(localStorage.getItem("favourites"))|| [];
  document.querySelector("#filterVenue").addEventListener("change",filterVenue);
   
  function filterVenue(){
      var selected=document.querySelector("#filterVenue").value;
      console.log(selected);

      var filteredList=formArr.filter(function (elem){
          return elem.venue==selected;
      });
      console.log(filteredList);
      displayData(filteredList);
  }

 function displayData(data){
     document.querySelector("tbody").innerHTML="";
     data.forEach(function(elem){
         var tr=document.createElement("tr")

         var td1=document.createElement("td")
         td1.innerText=elem.matchNum;

         var td2=document.createElement("td")
         td2.innerText=elem.teamA;

         var td3=document.createElement("td")
         td3.innerText=elem.teamB;

         var td4=document.createElement("td")
         td4.innerText=elem.date;

         var td5=document.createElement("td")
         td5.innerText=elem.venue;

         var td6=document.createElement("td")
         td6.innerText="Favourite";
         td6.style.color="pink";
         td6.style.cursor="pointer";
         td6.addEventListener("click",function(){
             favouritesFunction(elem);
         });
         tr.append(td1,td2,td3,td3,td4,td5,td6);
         document.querySelector("tbody").append(tr);


     });
    
 }

 function favouritesFunction(elem){
    console.log(elem);
    favouriteArr.push(elem);
    localStorage.setItem("favourites",JSON.stringify(favouriteArr));}
