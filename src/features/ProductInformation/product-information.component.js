import React from "react";
import { useIntl } from "react-intl";
import Title from "antd/es/typography/Title";
import './product-information.style.css'

import headset from '../../assets/img/headset.png'
import vault from '../../assets/img/vault.png'


export const ProductInformationComponent = () => {
  const { formatMessage } = useIntl()
  return (
    <div>
      <h1 className='title'>
        <Title className=''>{ formatMessage({ id: 'pages.step1.header.title' }) }</Title>
        <div className='title__underline'/>
      </h1>
      <div className="cards-container">
        <div className="cards-container__card">
          <img src={ headset } alt='Headset' title='Headset'/>
          <p>
            { formatMessage({ id: 'pages.step1.body.image1.text' }) }
          </p>
        </div>
        <div className="cards-container__card">
          <img src={ vault } alt='Headset' title='Headset'/>
          <p>
            { formatMessage({ id: 'pages.step1.body.image2.text' }) }
          </p>
        </div>
      </div>
      <div className='howto-container'>
        <div>
          <Title level={ 2 }>{ formatMessage({ id: 'pages.step1.body.text1.title' }) }</Title>
          <p>
            { formatMessage({ id: 'pages.step1.body.text1.content' }) }
          </p>
        </div>
        <div>
          <Title level={ 2 }>{ formatMessage({ id: 'pages.step1.body.text2.title' }) }</Title>
          <p>
            { formatMessage({ id: 'pages.step1.body.text2.content' }) }
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProductInformationComponent