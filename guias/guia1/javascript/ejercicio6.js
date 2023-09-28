let object_list = [];

function addObject() {
  const nombre_entry = document.getElementById("nombre-entry").value;
  const codigo_entry = document.getElementById("codigo-entry").value;
  let precio_entry = document.getElementById("precio-entry").value;
  let stock_entry = document.getElementById("stock-entry").value;

  precio_entry === "" ? (precio_entry = NaN) : (precio_entry = precio_entry);
  stock_entry === "" ? (stock_entry = NaN) : (stock_entry = stock_entry);

  if (isNaN(Number(precio_entry))) {
    alert("El precio necesita ser un número.");
    return;
  }
  if (isNaN(Number(stock_entry))) {
    alert("El stock necesita ser un número entero.");
    return;
  }

  if (Number(precio_entry) <= 0) {
    alert("El precio necesita ser mayor a 0.");
    return;
  }

  if (Number(stock_entry) <= 0 || !Number.isInteger(Number(stock_entry))) {
    alert("El stock necesita ser un ENTERO mayor a 0.");
    return;
  }

  let objeto = {
    nombre: nombre_entry,
    codigo: codigo_entry,
    precio: Number(precio_entry),
    stock: Number(stock_entry),
  };

  let found = false;
  for (i = 0; i < object_list.length; i++) {
    if (object_list[i].codigo === objeto.codigo) {
      object_list[i].stock += objeto.stock;
      found = true;
    }
  }
  if (!found) {
    object_list.push(objeto);
  }
}

function check_inventory() {
  let critical_item_list = [];
  object_list.forEach((element) => {
    if (element.stock < 1000) {
      critical_item_list.push(element.codigo);
    }
  });
  if (critical_item_list.length === 0) {
    alert("El inventario se encuentra en buen estado.");
  } else {
    alert(
      "El stock se encuentra en mal estado, los siguientes productos tienen stock crítico\n\nCódigo: " +
        critical_item_list.join("\nCódigo: "),
    );
  }
}
