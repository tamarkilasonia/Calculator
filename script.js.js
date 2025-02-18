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
updateDisplay() {
        this.displayElement.value = this.display;
    }

appendToDisplay(value) {
        this.display += value;
        this.updateDisplay();
    }
 calculate() {
        try {
            this.display = new Function('return ' + this.display)();
        } catch {
            this.display = 'Error';
        }
        this.updateDisplay();
    }
}
document.addEventListener("DOMContentLoaded", () => {
    const displayElement = document.getElementById("display");
    const calculator = new Calculator(displayElement);
