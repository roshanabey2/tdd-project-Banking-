const assert = require('assert');
class Money {
    constructor(amount, currency) {
        this.amount = amount,
        this.currency = currency,
    }

    times(multiplier) {
        return new Money(this.amount*multiplier, this.currency);
    }
    divide(divisor) {
        return new Money(this.amount / divisor, this.currency);
    }
}

let fiveDollars = new Money (5, "USD")
let tenDollars = fiveDollars.times(2)
let tenEuros = new Money(10, "EUR")
let twentyEuros = tenEuros.times(2);
let originalMoney = new Money(4002, "KRW")
let actualMoneyAfterDivision = originalMoney.divide(4)
let expectedMoneyAfterDivision = new Money(1000.5, "KRW")
assert.strictEqual(tenDollars.amount, 10);
assert.strictEqual(tenDollars.currency, "USD")
assert.strictEqual(twentyEuros.amount, 20)
assert.strictEqual(twentyEuros.currency, "EUR")
assert.deepStrictEqual(actualMoneyAfterDivision, expectedMoneyAfterDivision)


