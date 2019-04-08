const dodger = document.getElementById('dodger')

function onKeyDown(event) {
  if (event.keyCode === 37) {
    const currentPosition = parseInt(dodger.style.left)
    if (currentPosition - 5 >= 0){
       dodger.style.left = currentPosition - 5 + 'px'
    //currentPosition -> 180 ('180px' -> 180 from parseInt)
    }
   
  } else if (event.keyCode === 39) {
    moveDodgerRight()
  }
}

function moveDodgerRight(){
   const currentPosition = parseInt(dodger.style.left)
<<<<<<< HEAD
   if (currentPosition + 5 <= 360){
   dodger.style.left = currentPosition + 5 + 'px'
   }
   
=======
   if (currentPosition - 5 <= 360){
     
   }
    dodger.style.left = currentPosition + 5 + 'px'
>>>>>>> bf6be719f3f478a23817ba2f3ea040566cbcae23
  }

document.addEventListener('keydown',onKeyDown)
// add the event listener after you find the element 
