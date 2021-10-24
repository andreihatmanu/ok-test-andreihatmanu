import React from "react";
import { useIntl } from "react-intl";
import Title from "antd/es/typography/Title";
import ok from "../../assets/img/ok.png";


export const SuccessfulComponent = () => {
  const { formatMessage } = useIntl()
  return (
    <div>
      <h1 className='submit-page-title'>
        <img src={ ok } alt={ formatMessage({ id: 'global.submit.succesfull.title' }) }/>
        <Title className=''>{ formatMessage({ id: 'global.submit.succesfull.title' }) }</Title>
      </h1>
      <p>
        { formatMessage({ id: 'global.submit.succesfull.body' }) }
      </p>
    </div>
  )
}

export default SuccessfulComponent