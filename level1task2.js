
const button = document.getElementById('myButton');
button.addEventListener('click', () => {
    button.style.backgroundColor = 'blue';
});
function greet() {
    const now = new Date();  
    const hour = now.getHours();

    if (hour < 12) {
        alert("Good morning!");
    } else if (hour < 18) {
        alert("Good afternoon!");
    } else {
        alert("Good evening!");
    }
}
function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const result = num1 + num2;
    document.getElementById('result').textContent = `The sum is: ${result}`;
}
greet();
