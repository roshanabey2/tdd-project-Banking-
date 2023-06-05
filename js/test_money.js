const assert = require('assert');
const Money = require('./money');
const Portfolio = require('./portfolio');
const { test } = require('node:test');


class MoneyTest {
    testMultiplication() {
        let tenEuros = new Money(10, "EUR")
        let twentyEuros = new Money(20, "EUR")
        assert.deepStrictEqual(tenEuros.times(2), twentyEuros);
    }

    testDvision() {
    let originalMoney = new Money(4002, "KRW")
    let actualMoneyAfterDivision = originalMoney.divide(4)
    let expectedMoneyAfterDivision = new Money(1000.5, "KRW")
    assert.deepStrictEqual(actualMoneyAfterDivision, expectedMoneyAfterDivision)
    }

    testAddition() {
        let fiveDollars = new Money (5, "USD")
        let tenDollars = new Money(10, "USD")
        let fifteenDollars = new Money(15, "USD");
        let portfolio = new Portfolio();
        portfolio.add(fiveDollars, tenDollars)
        assert.deepStrictEqual(fifteenDollars, portfolio.evaluate("USD"))
    }

    testAdditionOfDollarsAndEuros() {
        let fiveDollars = new Money(5, "USD");
        let tenEuros = new Money(10, "EUR");
        let portfolio = new Portfolio();
    
        portfolio.add(fiveDollars, tenEuros);
    
        let expectedValue =  new Money(17, "USD");
        assert.deepStrictEqual(portfolio.evaluate("USD"), expectedValue);
    }

    getAllTestMethods() {
        let moneyProtype = MoneyTest.prototype;
        let allProps = Object.getOwnPropertyNames(moneyProtype)
        let testMethods = allProps.filter(p => {
            return typeof moneyProtype[p] === 'function' && p.startsWith("test");
        });
        return testMethods
    } 

    runAllTests() {
       let testMethods = this.getAllTestMethods()
        testMethods.forEach( m => {
            console.log("Running: %s()", m);
           let method = Reflect.get(this, m);
           try {
            Reflect.apply(method, this, []);
           } catch (e) {
            if (e instanceof assert.AssertionError) {
                console.log(e);
            } else {
                throw e;
            }
            }
        });
    }

}

new MoneyTest().runAllTests();
