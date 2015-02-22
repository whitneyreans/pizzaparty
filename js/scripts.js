var Pizza = {
	size: 0,
	topping: "",
	tellSlices: function() {
		if (this.size === 6 && this.topping === "cheese") {
			return 4
		} else if (this.size === 6 && this.topping === "pepperoni") {
			return 5
		} else if (this.size === 12 && this.topping === "cheese") {
			return 8 
		} else if (this.size === 12 && this.topping === "pepperoni") {
			return 9
		} else if (this.size === 16 && this.topping === "cheese") {
			return 12
		} else if (this.size === 16 && this.topping === "pepperoni") {
			return 13
		};
	}
};

$(document).ready(function() {
	$("form#new-order").submit(function(event) {
		event.preventDefault();

		var newPizza = Object.create(Pizza)

		var inputtedSize = parseInt($("#new-size").val());
		var inputtedTopping = $("#new-type").val();

		newPizza.size = inputtedSize;
		newPizza.topping = inputtedTopping;
		var results = newPizza.tellSlices();
		$(".slices").text(results);
		debugger

	});
});