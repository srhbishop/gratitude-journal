var items = document.querySelectorAll('.item');
var listItems = document.querySelector('.list-items');
var flowersDiv = document.querySelector('.flowers');
var flowerImages = document.querySelectorAll('.flower');

// for counting the number of items
let count = 0;

// makes an array from our inputs
for(let i = 0; i < items.length; i++) {
    document.addEventListener('keyup', function(event) {
        if(event.keyCode === 13) {
            if(items[i].value !== '') {
                // create new element with what was input
                var newPara = document.createElement('p');
                newPara.classList.remove('item');
                newPara.textContent = items[i].value;
                // replace that input with the new element
                listItems.replaceChild(newPara, items[i]);

                // loop through the flower imgs
                for(let x = 0; x <flowerImages.length; x++) 
                console.log(flowerImages[x]);

               
                // add a counter
                count += 1;
                if(count === 1) {
                flowerImages[0].classList.add('flower-active');
                } else if (count === 2) {
                flowerImages[1].classList.add('flower-active');
                 } else {
                 flowerImages[2].classList.add('flower-active');
                 }
            }
        }
    })
}
