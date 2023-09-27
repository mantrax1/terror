 //const p1=document.getElementById("p1");

 const bton = document.getElementById("btn");

 const div = [];
 
 for (let i = 1; i <= 24; i++) {
   const element = document.getElementById(`p${i}`);
   if (element) {
     div.push(element);
   }
 }
 //-------------------todoss los div-------
let i=0;

bton.addEventListener("click", () => {
        div[i].style.opacity = 0;
        div[i].style.transition = "1s";
        div[i + 1].style.opacity = 1;
        div[i + 1].style.transition = "1s";
        i++;
      });
     








 
 
