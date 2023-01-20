// import { useEffect, useState } from 'react';
import { useCarts } from '../../hooks/useCarts';
// import { useProducts } from '../../hooks/useProducts';
import { Loading } from '../loading/Loading';
import './style.css';

export const SingleCart = ({ idProduct }) => {
  //   console.log({ idProduct });
  //   const { actualProd, isFetching, getSingleProduct } = useProducts({
  //     id: idProduct,
  //   });

  // const [isFetching, setIsFetching] = useState(true);
  // const [actualProd, setActualProd] = useState({});
  const { isFetchingProduc, actualProd } = useCarts({ idProduct });
  // const getSingleProduct = async (idValue) => {
  //   try {
  //     await fetch(`https://fakestoreapi.com/products/${idValue || 2}`)
  //       .then((res) => res.json())
  //       .then((json) => setActualProd(json));
  //     setIsFetching(false);
  //   } catch (error) {}
  // };

  // useEffect(() => {
  //   console.log(idProduct);
  //   getSingleProduct(idProduct);
  // }, [idProduct]);

  if (isFetchingProduc) {
    return (
      <div className='containerLoading'>
        <Loading />
      </div>
    );
  }

  return (
    <div className='Cart-Items'>
      <div className='image-box'>
        <img
          alt=''
          src={actualProd.image || require('../../assets/NotProductFound.png')}
          className='image'
        />
      </div>
      <div className='about'>
        <h1 className='title'>{actualProd.title || 'No title'}</h1>
        <h3 className='subtitle'>{actualProd.description || 'No desc'}</h3>
      </div>
      <div className='counter'>
        <div className='btn'>+</div>
        <div className='count'>2</div>
        <div className='btn'>-</div>
      </div>
      <div className='prices'>
        <div className='amount'>S/ {actualProd.price || 'No price'}</div>
        <div className='save'>
          <u>Save for later</u>
        </div>
        <div className='remove'>
          <u>Remove</u>
        </div>
      </div>
    </div>
  );
};
