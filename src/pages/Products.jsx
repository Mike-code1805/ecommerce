import { useEffect, useState } from 'react';
import { Card, Loading, Navbar, Search } from '../components';
import { useFilterProduct } from '../hooks/useProductAxios';
import '../styles/Products.css';

export const Products = () => {
  const { isFetching, products } = useFilterProduct();
  const [productsFiltered, setProductsFiltered] = useState([]);
  const [term, setTerm] = useState('');

  const dataInput = (e) => {
    setTerm(e.target.value);
  };

  useEffect(() => {
    if (term.length === 0) {
      return setProductsFiltered(products);
    }

    console.log(isNaN(Number(term)));

    if (isNaN(Number(term))) {
      setProductsFiltered(
        products.filter((prod) =>
          prod.title.toLowerCase().includes(term.toLowerCase())
        )
      );
    } else {
      const productsById = products.find((prod) => prod.id === parseInt(term));
      setProductsFiltered(productsById ? [productsById] : []);
    }
  }, [term, products]);

  console.log({ productsFiltered });
  return (
    <div className='main'>
      <Navbar />
      <Search title='BUSCA AQUÍ TUS PRODUCTOS' handleChange={dataInput} />
      {isFetching ? (
        <div className='containerFilter'>
          <Loading />
        </div>
      ) : (
        <div className='containerFilter'>
          {productsFiltered.map((prod, index) => (
            <Card key={index} product={prod} />
          ))}
        </div>
      )}
    </div>
  );
};
