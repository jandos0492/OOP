class Test2 {
    set b(a) {
        if (a == '') {
            return false;
        }
        this._testProp = a;
        return a;
    }

    setTestProp(a) {
        if (a == '') {
            return false;
        }
        this._testProp = a;
        return a;
    }

    get testProp() {
        return this._testProp;
    }
}