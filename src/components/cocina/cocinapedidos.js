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

      return orden.length > 0 ? (
        orden.map((order) => (
          <section>
            <div>

            </div>
            <main>
              {orden.order.map((item)=> (
                <div key={item.id} className={styles.boxorder}>
                  <div >
              <p className={styles.nameitem}>{item.name}</p>
              <p> {item.count}</p>
            </div>
                </div>
              )

              )}
            </main>
          </section>
        )

        )
      ): (
    <section className={styles.title1}>
      <h1 className={styles.title2}> Sin pedidos pendientes</h1>
      <img
        src=""
        alt="good job"
        className={styles.goodJob}
      />
    </section>
  );
}

export default CocinaPedidos;