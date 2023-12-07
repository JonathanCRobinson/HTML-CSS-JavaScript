"use strict";

const $ = selector => document.querySelector(selector);

const focus = selector => {
	const element = $(selector);
	element.focus();
	element.select();
}

const calculateTax = income => {
	let tax;

	if(income > 0 && income < 9875) {
		tax = income * .10;
	} else if (income > 9875 && income <= 40125) {
		tax = 987.5 + (income - 9875) * .12;
	} else if (income > 40125 && income <= 85525) {
		tax = 4617.5 + (income - 40125) * .22;
	} else if (income > 85525 && income <= 163300) {
		tax = 14605.5 + (income - 85525) * .24;
	} else if (income > 163300 && income <= 207350) {
		tax = 33271.5 + (income - 163300) * .32;
	} else if (income > 207350 && income <= 518400) {
		tax = 47367.5 + (income - 207350) * .35;
	} else {
		tax = 156235 + (income - 518400) * .37;
	}
	return tax;
}

const processEntry = ()  => {
	const input = parseFloat($("#income").value);

	if(isNaN(input) || input <= 0) {
		alert ("Please input a number greater than 0");
		$("#tax").value = "";
	}
	else {
		$("#tax").value = (calculateTax(input)).toFixed(2);
	}
	focus("#income");
}

document.addEventListener("DOMContentLoaded", () => {
	// add event handlers
	$("#calculate").addEventListener("click", processEntry);

}); 



