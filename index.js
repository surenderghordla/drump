let buttonList = document.querySelectorAll('.drum').length;
for(let i=0; i<buttonList; i++){
    document.querySelectorAll('.drum')[i].addEventListener('click',function(){
    let innerButton = this.innerHTML;

    makeSound(innerButton);

    document.addEventListener('keypress',function(event){
        makeSound(event.key);
    })

    function makeSound(key){
    switch (key){
        case "w":
            let tom = new Audio('sounds/tom-1.mp3');
            tom.play();
            break;
        case "a":
            let snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case "s":
            let tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case "d":
            let tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case "j":
            let tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case "k":
            let crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case "l":
            let bass = new Audio('sounds/kick-bass.mp3');
            bass.play();
            break;
        default:
    }}


    });
}