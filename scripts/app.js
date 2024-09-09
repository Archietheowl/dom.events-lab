// * Read the instructions inside the readme file carefully

// * Remember to "go live" below. The browser will automatically reload when you save your code.

function init() {

    // Task 1
    // When the button with the id of "toggle" is ** clicked **, you should ** toggle ** a class of "pulse" 
    // on the circle div.
    // If you have added the class correctly, you should see the circle turn red, and it should pulse.
    // When you click the button again, it should go back to being an outline of a circle.
    
    const circleDiv = document.querySelector(".circle");
    const pulseBtn = document.querySelector("#toggle");
    const handlePulse = () => {
        circleDiv.classList.toggle("pulse");
    }

    pulseBtn.addEventListener('click', handlePulse);

    // Task 2
    // Add a ** 'change' ** event listener to the dropdown of cities, so that when a city is selected,
    //the value of that option is inserted into the span with the id of "city".

    const citySpan = document.querySelector("#city")
    const citySelect = document.querySelector('#cities')
    
    const handleChange = () =>{
        let cityValue = citySelect.value
        citySpan.innerText = cityValue
    }
    
    citySelect.addEventListener('change', handleChange)



    // Task 3

    // ** Part One:** Add event listeners to each of the divs with the class of "name",
    //so that when you hover over that div, the name inside that div appears inside the span with the
    //id of "current".

    // ** Part Two:** Add event listeners to each of the divs with the class of "name", so that when the
    //mouse leaves any of the divs, the span with the id of "current" is empty.


    const nameBoxes =  document.querySelectorAll(".name")
    const currName = document.querySelector("#current")
    
    nameBoxes.forEach(div => {
        div.addEventListener('mouseover', function() {
            currName.textContent = div.textContent;
        })
        div.addEventListener('mouseout', function() {
            currName.textContent = "";
        })
    });

    // Task 4
    // Add an event listener to the form with the id of "subscribe", so that when you ** submit ** the
    // form, you add a class of "submitted" to the button inside the form.You should also update the
    // inner HTML of the button to be "Submitted!".If you have added the class correctly, you should see
    // that the button has an opacity of 0.8.You will need to prevent the default behaviour of the form
    // in order to stop the page from refreshing before the changes are made. 

    const form = document.querySelector('#subscribe');
    const submitBtn = form.querySelector('button') 
    
    form.addEventListener('submit', function (event) {
        event.preventDefault()
        submitBtn.classList.add('sumitted')
        submitBtn.innerHTML = 'Submitted!';
        submitBtn.style.opacity = 0.8;
        console.log("anything")
    })


    // Task 5  BONUS
    // Add an event listener to the window, so that when the user scrolls, you check whether or not the 
    // `scrollY` property of the `window` is greater than 40. If it is greater than 40, add the class 
    // "fadeOutUp" to the `<h1>` tag. If it is less than 40, remove the class "fadeOutUp" from the `<h1>` 
    // tag. As you scroll, you should see the `<h1>` tag fade out. If you scroll back down, it will reappear.

    
    // const window = document.querySelector('html')

    window.addEventListener('scroll', function () {
        console.log('going up')
        const h1 = document.querySelector('h1')
        if (window.scrollY > 40) {
            h1.classList.add("fadeOutUp")
            }else{
                h1.classList.remove("fadOutUp");
            }
    })

}

window.addEventListener('DOMContentLoaded', init)
