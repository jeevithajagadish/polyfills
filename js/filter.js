function runPolyfill() {

    if (typeof Array.prototype.myFilter !== 'function') {
        Array.prototype.myFilter = function(fn, context) {
            if (typeof fn !== 'function') {
                throw new Error('invalid filter function');
            }
            let filteredArr = []
            for( let i = 0; i < this.length; i++) {
                if (fn.call(context, this[i], i, this)) {
                    filteredArr.push(this[i]);
                }
            }
            return filteredArr;
        }
    }

    console.log([1, 2, 3].myFilter((elem) => {
        return elem%2 === 0;

    }));

    const context = {
        var: 1
    }

    console.log([1, 2, 3].myFilter(function(elem) {
        return elem > this.var;
    }, context));
}