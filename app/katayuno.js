export default class Katayuno {
  calculatePrice(booksToBuy) {
    let price = 0;
    booksToBuy.forEach(book => {
      price += book.units * 8;
    });
	price -= price * this.calculatePercentDiscount(booksToBuy.length);

    return price;
  }

  calculatePercentDiscount(size) {
    let discount = 0;
    if (size === 2) {
		discount = 5;
    } else if (size === 3) {
		discount = 10;
	} else if (size === 4) {
		discount = 20;
	} else if (size === 5) {
		discount = 25;
	}
	return discount / 100;
  }
}
