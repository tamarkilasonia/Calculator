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

