package main

import (
	"testing"
)

func TestMultipiationinSDollars(t *testing.T) {
	fiveDollars := Money{
		amount:   5,
		currency: "USD",
	}
	tenDollars := fiveDollars.Times(2)
	if tenDollars.amount != 10 {
		t.Errorf("Expected 10, got: [%d]", tenDollars.amount)
	}
	if tenDollars.currency != "USD" {
		t.Errorf("Expected USD, got [%s]", tenDollars.currency)
	}
}

func TestMultiplicationInEuros(t *testing.T) {
	tenEuros := Money{amount: 10, currency: "EUR"}
	twentyEuros := tenEuros.Times(2)
	if twentyEuros.amount != 20 {
		t.Errorf("Expected 20, got: [%d]", twentyEuros.amount)
	}
	if twentyEuros.currency != "EUR" {
		t.Errorf("Expected EUR, got: [%s]", twentyEuros.currency)
	}
}

type Money struct {
	amount   int
	currency string
}

func (m Money) Times(multiplier int) Money {
	return Money{amount: m.amount * multiplier, currency: m.currency}
}
