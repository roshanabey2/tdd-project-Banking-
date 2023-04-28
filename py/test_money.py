import unittest
class Money:
    def __init__(self, amount, currency):
        self.amount = amount
        self.currency = currency

    def times(self, multiplier):
        return Money(self.amount*multiplier, self.currency)
    
    def divide(self, divisor):
        return Money(self.amount/divisor, self.currency)



class TestMoney(unittest.TestCase):
    def testMultiplicationInDollars(self):
        fiveDollars = Money(5, "USD")
        tenDollars = fiveDollars.times(2)
        self.assertEqual(10, tenDollars.amount)
        self.assertEqual("USD", tenDollars.currency)

    def testMultiplicationInEuros(self):
        tenEuros = Money(10, "EUR")
        twentyEuros = tenEuros.times(2)
        self.assertEqual(20, twentyEuros.amount)
        self.assertEqual("EUR",twentyEuros.currency)

    def testDivision(self):
        originalMoney = Money(4002, "KRW")
        actualMoneyAfterDivison = originalMoney.divide(4)
        expectedMoneyAfterDivision = Money(1000.5, "KRW")
        self.assertEqual(expectedMoneyAfterDivision.amount,
                        actualMoneyAfterDivison.amount)
        self.assertEqual(actualMoneyAfterDivison.currency,
                         expectedMoneyAfterDivision.currency)
        
if __name__=='__main__':
    unittest.main()

