import React, { useState, useEffect } from 'react';
import { db } from '../../firebase/firebase';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import styles from'../css/cocinapedidos.module.css'

const CocinaPedidos = () => {
    const [orden, setOrden] = useState([]);
    useEffect(() => {
        onSnapshot(
          query(collection(db, "Order"), orderBy("date", "asc")),
          (snapshot) => {
            const productos = snapshot.docs.map((doc) => {
              return { ...doc.data(), id: doc.id };
            });
            setOrden(productos);
          },
          (error) => {
            console.log(error);
          }
        );
      }, []);
}