import Katayuno from "./katayuno";

describe("Katayuno", () => {
  it("Calculate price when stock is 0", () => {
    const kat = new Katayuno();
    const priceTotal = kat.calculatePrice([]);
    expect(priceTotal).to.equal(0);
  });

  it("Calculate price when I buy a book", () => {
    const kat = new Katayuno();
    const priceTotal = kat.calculatePrice([
      {
        id: 0,
        units: 1,
      },
	]
    );
    expect(priceTotal).to.equal(8);
  });

  it("Calculate price when I buy 2 identical books ", () => {
    const kat = new Katayuno();
    const priceTotal = kat.calculatePrice([
      {
        id: 0,
        units: 2
      }
    ]);
    expect(priceTotal).to.equal(16);
  });

  it("Calculate price when I buy 2 different books ", () => {
    const kat = new Katayuno();
    const priceTotal = kat.calculatePrice(
		[
			{
				id: 0,
				units: 1
			},
			{
				id: 1,
				units: 1
			}
		]
	);
    expect(priceTotal).to.equal(15.2);
  });

	it("Calculate price when I buy 3 different books ", () => {
		const kat = new Katayuno();
		const priceTotal = kat.calculatePrice([
			{
				id: 0,
				units: 1
			},
			{
				id: 1,
				units: 1
			},
			{
				id: 2,
				units: 1,
			}
		]);
		expect(priceTotal).to.equal(21.6);
	});

	it("Calculate price when I buy 4 different books ", () => {
    const kat = new Katayuno();
    const priceTotal = kat.calculatePrice([
      {
        id: 0,
        units: 1
      },
      {
        id: 1,
        units: 1
      },
      {
        id: 2,
        units: 1
      },
      {
        id: 3,
        units: 1
      }
    ]);
    expect(priceTotal).to.equal(25.6);
  });

  it("Calculate price when I buy 5 different books ", () => {
    const kat = new Katayuno();
    const priceTotal = kat.calculatePrice([
      {
        id: 0,
        units: 1
      },
      {
        id: 1,
        units: 1
      },
      {
        id: 2,
        units: 1
      },
      {
        id: 3,
        units: 1
      },
      {
        id: 4,
        units: 1
      }
    ]);
    expect(priceTotal).to.equal(30);
  });

  it("Calculate price when I buy 3 different books (one 2x)", () => {
    const kat = new Katayuno();
    const priceTotal = kat.calculatePrice([
      {
        id: 0,
        units: 1,
      },
      {
        id: 1,
        units: 1,
      },
      {
        id: 2,
        units: 2,
      }
    ]);
    expect(priceTotal).to.equal(29.6);
  });

});
