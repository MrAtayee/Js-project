let redRange = document.querySelector('.redRange');
let greenRange = document.querySelector('.greenRange');
let blueRange = document.querySelector('.blueRange');
let bodyTag = document.querySelector('body');
let btn = document.querySelector('.btn');

            // range 1
redRange.addEventListener('input', function(){
   CallRander();
});
 
                // range  2
greenRange.addEventListener('input', function(){
  CallRander();
});

                    // range 3
blueRange.addEventListener('input', function(){
   CallRander();
});

          
function CallRander(){   
    let redRangeValue = redRange.value;
    let greenRangeValue = greenRange.value;
    let blueRangeValue = blueRange.value;

    bodyTag.style.backgroundColor = "rgb(" + redRangeValue + ",  " + greenRangeValue + ", " + blueRangeValue + ")";
}



            //  btn 
btn.addEventListener('click', function(){
    let randomcolorbtn1 =  Math.floor(Math.random() * 256);
    let randomcolorbtn2 =  Math.floor(Math.random() * 256);
    let randomcolorbtn3 =  Math.floor(Math.random() * 256);

    redRange.value = randomcolorbtn1;
    greenRange.value = randomcolorbtn2;
    blueRange.value = randomcolorbtn3;

    bodyTag.style.backgroundColor = "rgb(" + randomcolorbtn1 + ",  " + randomcolorbtn2 + ", " + randomcolorbtn3 + ")";

})