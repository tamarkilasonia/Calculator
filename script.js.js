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

appendToDisplay(value) {
        this.display += value;
        this.updateDisplay();
    }

function calculate() {
    let expression = document.getElementById("display").value;
    try {
        document.getElementById("display").value = eval(expression);
    } catch (error) {
        document.getElementById("display").value = 'Error';
    }
}
