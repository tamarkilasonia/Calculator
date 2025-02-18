class Calculator {
    constructor(displayElement) {
        this.displayElement = displayElement;
        this.clear();
    }
    
 clear() {
        this.display = '';
        this.updateDisplay();
    }

deleteLast() {
        this.display = this.display.slice(0, -1);
        this.updateDisplay();
    }

function deleteLast() {
    let currentDisplay = document.getElementById("display").value;
    document.getElementById("display").value = currentDisplay.slice(0, -1);
}

function calculate() {
    let expression = document.getElementById("display").value;
    try {
        document.getElementById("display").value = eval(expression);
    } catch (error) {
        document.getElementById("display").value = 'Error';
    }
}
