let inputSlider = document.getElementById('inputSlider');
let sliderValue = document.getElementById('sliderValue');
let passBox = document.getElementById('passBox');
let lowercase = document.getElementById('lowercase');
let uppercase = document.getElementById('uppercase');
let numbers = document.getElementById('numbers');
let symbols = document.getElementById('symbols');
let genBtn = document.getElementById('genBtn');
let copyIcon = document.getElementById('copyIcon');



//Showing input slider value
sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener('input', () => {
    sliderValue.textContent = inputSlider.value;
});

genBtn.addEventListener('click', () =>{
    passBox.value = generatePassword();
})

let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allNumbers = "0123456789";
let allSymbols = "~!@#$%^&*";

//Function to generate password
function generatePassword(){
    let genPassword = "";
    let allChars = "";

    allChars += lowercase.checked ? lowerChars : "";
    allChars += uppercase.checked ? upperChars : "";
    allChars += numbers.checked ? allNumbers : "";
    allChars += symbols.checked ? allSymbols : "";

    if(allChars == "" || allChars.length == 0){
        return genPassword;
    }


    let i = 1;
    while(i <= inputSlider.value){
        genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
        i++;
    }
    return genPassword;
}

copyIcon.addEventListener('click', () => {
    if (passBox.value !== "" || passBox.value.length >= 1) {
        navigator.clipboard.writeText(passBox.value);
        
        // Fade out before changing text
        copyIcon.style.opacity = '0';
        copyIcon.style.transform = "scale(1.2)";  // Optional scale-up effect
        copyIcon.style.color = '#4CBB17';
        copyIcon.title = "Password Copied";

        setTimeout(() => {
            copyIcon.innerText = "check";  // Change text when faded out
            copyIcon.style.opacity = '1';  // Fade back in
        }, 300);

        // Reset after 3 seconds
        setTimeout(() => {
            copyIcon.style.opacity = '0';  // Fade out before changing back
            setTimeout(() => {
                copyIcon.innerText = "content_copy";  // Change back to "copy"
                copyIcon.style.color = '#b6b5b4';
                copyIcon.style.opacity = '1';  // Fade back in
                copyIcon.style.transform = "scale(1)";  // Reset the scale
                copyIcon.title = "";
            }, 300);  // Wait for the fade-out before changing text
        }, 3000);
    }
});
