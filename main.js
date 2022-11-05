console.log("script loaded")
const radioButtons=[...(document.querySelectorAll(".radio__input"))]
const submitButton=document.querySelector(".rating--submit")
for(let radioButton of radioButtons){
    radioButton.addEventListener("click",()=>{if(radioButton.checked)
        {submitButton.classList.replace("rating--submit","rating--submit--ready")}})
}
const scoreMessage=document.querySelector(".rating_confirmation")
scoreMessage.innerHTML=`You selected ${window.location.href[window.location.href.length-1]} out of 5`
const form=document.querySelector(".rating--form")
form.addEventListener('submit', event => {
    const data = Object.fromEntries(new FormData(event.target))
  
    console.log(data)
  })


// console.log(ratingItems)
// // ratingItems.forEach(e=>e.classList.replace("rating--item","rating--item--selected"))

// for(let count=0;count<ratingItems.length;count++){
//     ratingItems[count].addEventListener("click",()=>{
//         ratingItems.forEach(e=>e.classList.replace("rating--item--selected","rating--item"))
//         ratingItems[count].classList.replace("rating--item","rating--item--selected")
//         let selectedField=document.querySelector(".rating--item--selected")
//         return(selectedField.dataset.id)



        
//     })

// }
// // submitButton.addEventListener("click",()=>scoreMessage.innerHTML=`You selected ${score} out of 5`)
// scoreMessage.innerHTML=`You selected ${selectedField.dataset.id} out of 5`