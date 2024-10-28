const renderCategory = () => {
  const categoryCardOption = [
    { label: "Sell Card", value: "sell-card" },
    { label: "Buy Card", value: "buy-card" },
    { label: "Credit Card", value: "credit-card" },
    { label: "Bank Card", value: "bank-card" },
    { label: "Paypal Card", value: "paypal-card" },
    { label: "Momo Card", value: "momo-card" },
  ];

  const categoryRender = categoryCardOption.map((item) => {
    const stringHtml = `<option value="${item.value}">${item.label}</option>`;
    return stringHtml;
  });

  document.getElementById("category-card").innerHTML = categoryRender;
};

const renderTrending = () => {
  const groupTrending = [
    {
      id: 1,
      img: "/img/bmw-1.jpg",
      name: "BMW Version 1",
      price: "250.000 Vehical",
    },
    {
      id: 2,
      img: "/img/bmw-2.jpg",
      name: "BMW Version 2",
      price: "270.000 Vehical",
    },
    {
      id: 3,
      img: "/img/bmw-3.jpg",
      name: "BMW Version 3",
      price: "290.000 Vehical",
    },
    {
      id: 4,
      img: "/img/bmw-4.jpg",
      name: "BMW Version 4",
      price: "310.000 Vehical",
    },
  ];

  const renderResult = (result) => {
    const groupTrendingRender = result.map((item) => {
      const stringHtml = `
      <div class="box-trending">
        <div class="logo-trending">
          <img src="${item.img}" width="100%" height="auto" alt="BMW1" />
        </div>
        <div class="trending-main">${item.name}</div>
        <div class="trending-sub gray">${item.price}</div>
      </div>`;
      return stringHtml;
    });

    document.getElementById("group-trending").innerHTML =
      groupTrendingRender.join(" ");
  };

  renderResult(groupTrending);

  document.getElementById("search-trending").addEventListener("keyup", (e) => {
    const { value } = e.target;
    let resultTrending = [...groupTrending];
    if (value) {
      resultTrending = resultTrending.filter(
        (item) =>
          item.name.toUpperCase().indexOf(String(value).toUpperCase()) !== -1
      );
    }

    renderResult(resultTrending);
  });
};

renderCategory();
renderTrending();
