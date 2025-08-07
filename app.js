console.log("Let's get DAS CNAS web version done!");

const today = new Date();
document.getElementById("annee-reference").value = Number(today.getFullYear())-1;
document.getElementById("date-depot").value = String(today.getFullYear()) + "-"  + String((today.getMonth() + 1 )).padStart(2,"0") + "-" + String(today.getDate()).padStart(2,"0") ;
