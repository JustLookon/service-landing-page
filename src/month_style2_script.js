let monthContent = document.querySelectorAll(".monthContent");
let roadMap_button = document.querySelectorAll(".roadMap_button");
let downSvg = document.querySelectorAll(".downSvg");

for (let i = 0; i < roadMap_button.length; i++) {
    const maxHeightVal = "1000px"
  
    roadMap_button[i].addEventListener("click", (e) => {
      e.preventDefault();
      for (let j = 0; j < roadMap_button.length; j++) {
        // We have a condition where we are checking if the current element is in expanded state or not 
        // &&
        // We are excluding the clicked element
        if (monthContent[j].style.maxHeight === maxHeightVal && monthContent[i] !== monthContent[j]) {
          monthContent[j].style.maxHeight = "0"
          monthContent[j].style.padding = "0"
          // downSvg[j].style.display = "none"
        }
      }
  
      const isShown = monthContent[i].style.maxHeight === maxHeightVal
  
      if (!isShown) {
        monthContent[i].style.maxHeight = maxHeightVal
        monthContent[i].style.padding = "0.75rem";
        // downSvg[i].style.display = "block";
        
      } else {
        monthContent[i].style.maxHeight = "0"
        monthContent[i].style.padding = "0"
        // downSvg[i].style.display = "none";

      }
    })
  }


// const max_height = "500px";
// roadMap_button[0].addEventListener("click",(e)=>{
//     if(monthContent[0].style.maxHeight !== max_height){
//         monthContent[0].style.maxHeight = max_height
//         // monthContent[0].style.transition = "all 2s"
        
//     monthContent[0].style.height = "fit-content";
//     monthContent[0].style.padding = "0.75rem"
// }
// else{
//     monthContent[0].style.maxHeight = "0";
//     monthContent[0].style.height = "0";
//     // monthContent[0].style.transition = "all 2s";
//     monthContent[0].style.padding = "0rem"
    

//     }
// })