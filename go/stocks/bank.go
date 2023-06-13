package stocks

import "errors"

type Bank struct {
	exchangeRates map[string]float64
}

func (b Bank) AddExchangeRate(currencyFrom string, currencyTo string, rate float64) {
	key := currencyFrom + "->" + currencyTo
	b.exchangeRates[key] = rate
}

func (b Bank) Convert(money Money, currencyTo string) (convertedMoney Money, err error) {
	if money.currency == currencyTo {
		return NewMoney(money.amount, money.currency), nil
	}
	key := money.currency + "->" + currencyTo
	rate, ok := b.exchangeRates[key]
	if ok {
		return NewMoney(money.amount*rate, currencyTo), nil
	}
	return NewMoney(0, ""), errors.New("Failed")

}
func NewBank() Bank {
	return Bank{exchangeRates: make(map[string]float64)}
}
