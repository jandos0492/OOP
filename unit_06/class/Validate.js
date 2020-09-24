class Validate {
    constructor(a) {
        this.a = a;
    }
    static isNumber(num) {
        if (typeof num == "number") {
            return true;
        }
        else {
            return false;
        }
    }

    static isInt(int) {
        if (Number.isInteger(int)) {
            return true;
        }
        else {
            return false;
        }
    }

    static isFloat(float) {
        if (float % 1 != 0) {
            return true;
        }
        else {
            return false;
        }
    }

    static isChar(char) {
        if (typeof char == "string" && char.length == 1) {
            return true;
        }
        else {
            return false;
        }
    }

    static isString(str) {
        if (typeof str == "string") {
            return true;
        }
        else {
            return false;
        }
    }

    static isBoolean(bool) {
        if (Boolean(bool)) {
            return true;
        }
        else {
            return false;
        }
    }

    static isArray(arr) {
        if (Array.isArray(arr)) {
            return true;
        }
        else {
            return false;
        }
    }

    static toMoney(money) {
        let str = "";
        let arr = Array.from(money.toString());
        for (let i = 0; i < arr.length; i++) {
            if (str.length % 4 == 0) {
                str += " ";
            }
            str += arr[i];
        }
        return str + ".00"
    }
}