import React from 'react';
import { Button } from 'react-bootstrap';
import izaback from '../../assets/img/izaback.png';

const Home: React.FC = () => {
  return (
    <><div className='Iza__Home'>
      <h3>Home Page</h3>
    </div>
    <div className='Iza__Text__Header'>
        <h1>Seguradora 100%</h1>
        <br />
        <h1>para o brasileiro</h1>
        <br />
        <h1>que não pode parar</h1>
      </div>
          <Button size="lg" variant="light" style={{ color: "white", background: "#FF5148" }}> Quero uma cotação
          </Button>{' '}
      <div className='Img__Iza'>
        <img src={izaback} alt="" />
      </div>
      </>
  )
}

export default Home;
