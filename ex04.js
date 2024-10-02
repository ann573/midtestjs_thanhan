const products = [
    {
      id: 1,
      name: "Iphone 12",
      price: 1000,
      brand: "Apple",
    },
    {
      id: 2,
      name: "Galaxy S21",
      price: 900,
      brand: "Samsung",
    },
    {
      id: 3,
      name: "Xperia 1",
      price: 800,
      brand: "Sony",
    },
  ];

function createTable(products)
{
    let code = `<table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Price</th>
        <th>Brand</th>
      </tr>
    </thead>
    <tbody>`
    products.forEach(element => {
        code +=`<tr>
            <td>${element.id}</td>
            <td>${element.name}</td>
            <td>${element.price}</td>
            <td>${element.brand}</td>
        </tr>`
    });

    code += `</tbody>
    </table>`

    return code
}
document.write(createTable(products))