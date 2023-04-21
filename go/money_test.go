package main

import (
	"testing"
)

func TestMultipiation(t *testing.T) {
	fiver := Dollar{
		amount: 5,
	}
	tenner := fiver.Times(2)
	if tenner != 10 {
		t.Errorf("Expected 10, got: [%d]", tenner.amount)
	}
}
