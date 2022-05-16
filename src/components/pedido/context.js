// import { React, useState } from 'react';
import React, { useState } from 'react';
// import styles from '../css/orden.module.css';

const Context = React.createContext();

const Provider = ({ propvalue }) => {
  // estado para nombre cliente y mesa
  const [name, setName] = useState('');
  const [table, setTable] = useState('');

  // función para nombre cliente y mesa
  const dataclient = (e) => {
    if (e.target.name === 'name') {
      setName(e.target.value);
    } else if (e.target.name === 'table') {
      setTable(e.target.value);
    }
  };

  // estado para añadir productos a sección orden
  const [product, setProduct] = useState([]);

  //función para añadir productos
  const increase = (e) => {
    //se crea variable que representa un producto ya existente en el carro
    const productExist = product.find((item) => item.id === e.id); 
    if (productExist) {
      setProduct(
        product.map((item) =>
        // si ya existe un producto en el carro  verifico que este producto sea igual al elemento nuevo que quiero agregar
          item.id === e.id
          // si es verdadero se crea un nuevo array con el producto existente que contiene la propiedad quant
            ? { ...productExist, quant: productExist.quant + 1 }
            : item
        )
      );
    } else {  // si no existe un producto en el carro se agrega y defino que su cantidad es igual a 1
      setProduct([...product, { ...e, quant: 1 }]);
    }
  };
  
  // función para restar productos
  const decrease = (e) => {
    const productExist = product.find((item) => item.id === e.id);
    // si la cantidad de producto existente es igual a 1
    if (productExist.quant === 1) {
      // si existe un producto se elimina del carro
      setProduct(product.filter((item) => item.id !== e.id));
    } else {
      setProduct(
        product.map((item) =>
          item.id === e.id
            ? { ...productExist, quant: productExist.quant - 1 }
            : item
        )
      );
    }
  };

  //función para eliminar producto
  const remove = (e) => {
    const productExist = product.find((item) => item.id === e.id);
    if (productExist.quant) {
      setProduct(product.filter((item) => item.id !== e.id));
    }
  };

  // función para suma total productos
  const total = product.reduce(
    (total, item) => total + item.price * item.quant,
    0
  );

  const props = {
    name,
    setName,
    table,
    setTable,
    setProduct,
    dataclient,
    product,
    increase,
    decrease,
    remove,
    total,
  };

  return <Context.Provider value={props}>{propvalue}</Context.Provider>;
};

export { Context, Provider };
