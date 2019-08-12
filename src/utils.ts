
export function makeCurrency(num: number): string {
    if (isNaN(num)) {
        return '$0';
    }
    else {
        return '$' + `${num.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`;
    }
}

export function formatAsPercent(dec: string): string {
    return `${Math.round(parseFloat(dec) * 100)}%`;
}

export function validateInput(that: HTMLInputElement): number {
    // check if a negative is attempted
    if (that.value.indexOf('-') > -1) {
        that.classList.add('alert-danger');
        return 0;
    }
    else {
        that.classList.remove("alert-danger");
        return parseFloat(that.value);
    }
}