let showHidden = document.getElementsByClassName("showHidden");
let unHide = document.getElementsByClassName("unHide");
let toggle = document.getElementsByClassName("toggle")
for (let i = 0; i < showHidden.length; i++) {
  const maxHeightVal = "1200px"

  showHidden[i].addEventListener("click", (e) => {
    e.preventDefault();
    for (let j = 0; j < showHidden.length; j++) {
      // We have a condition where we are checking if the current element is in expanded state or not 
      // &&
      // We are excluding the clicked element
      if (unHide[j].style.maxHeight === maxHeightVal && unHide[i] !== unHide[j]) {
        unHide[j].style.maxHeight = "0"
        toggle[j].style.transform = "rotate(0)"
      }
    }

    const isShown = unHide[i].style.maxHeight === maxHeightVal

    if (!isShown) {
      unHide[i].style.maxHeight = maxHeightVal
      toggle[i].style.transform = "rotate(180deg)"
    } else {
      unHide[i].style.maxHeight = "0"
      toggle[i].style.transform = "rotate(0)"
    }
  })
}

    // let header = document.getElementsByTagName("header")[0]

    // SCROLL TO 

    let showBar = document.getElementsByClassName("showBar")[0]
    showBar.addEventListener("click",()=>{
        showBar.scrollTo()
    // showBar.scrollTo({
    //     top:10000,
    //     left:0,
    //     behavior:"smooth",

    // });

    // if(showBar.style.color = "")
    showBar.style.color="red"

})
