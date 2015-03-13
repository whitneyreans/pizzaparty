describe('Pizza', function() {
  describe('tellSlices', function() {
    it('tells the price if the pizza is a six inch cheese pizza', function() {
      var testPizza = Object.create(Pizza);
      testPizza.size = 6;
      testPizza.topping = "cheese";
      expect(testPizza.tellSlices()).to.equal(4);
    });

    it('tells the price if the pizza is a six inch pepperoni pizza', function() {
      var testPizza = Object.create(Pizza);
      testPizza.size = 6;
      testPizza.topping = "pepperoni";
      expect(testPizza.tellSlices()).to.equal(5);
    });

    it('tells the price if the pizza is a twelve inch cheese pizza', function() {
      var testPizza = Object.create(Pizza);
      testPizza.size = 12;
      testPizza.topping = "cheese";
      expect(testPizza.tellSlices()).to.equal(8);
    });

    it('tells the price if the pizza is a twelve inch pepperoni pizza', function() {
      var testPizza = Object.create(Pizza);
      testPizza.size = 12;
      testPizza.topping = "pepperoni";
      expect(testPizza.tellSlices()).to.equal(9);
    });

    it('tells the price if the pizza is a sixteen inch cheese pizza', function() {
      var testPizza = Object.create(Pizza);
      testPizza.size = 16;
      testPizza.topping = "cheese";
      expect(testPizza.tellSlices()).to.equal(12);
    });

    it('tells the price if the pizza is a sixteen inch pepperoni pizza', function() {
      var testPizza = Object.create(Pizza);
      testPizza.size = 16;
      testPizza.topping = "pepperoni";
      expect(testPizza.tellSlices()).to.equal(13);
    });
  });
});
