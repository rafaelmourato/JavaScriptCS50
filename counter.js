let counter = 0;
function count() {
    counter += 1; 
    document.querySelector('h1').innerHTML = counter; 

    if(counter % 10 === 0) {
        alert(`Divisible by 10 ${counter}`)
    }
}
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('button').onclick  = count;
});    