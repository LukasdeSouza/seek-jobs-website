import React from 'react';
import './style.css';

import BgImage from '../../../../assets/img-sec-cadastro.png'

const RegisterBackground = () => {

  return (
    <div className="background-container">
      <span className="background-text">
        Tenha acesso as melhores <br /> Vagas Tech
      </span>
      <img className="background-img" src={BgImage} alt="Imagem de fundo" />
    </div>
  );
};

export default RegisterBackground;
