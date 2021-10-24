import React from "react";
import { useIntl } from "react-intl";
import Title from "antd/es/typography/Title";

import ko from '../../assets/img/ko.png'


export const FailureComponent = () => {
  const { formatMessage } = useIntl()
  return (
    <div>
      <h1 className='submit-page-title'>
        <img src={ ko } alt={ formatMessage({ id: 'global.submit.failure.title' }) }/>
        <Title className=''>{ formatMessage({ id: 'global.submit.failure.title' }) }</Title>
      </h1>
      <p>
        { formatMessage({ id: 'global.submit.failure.body' }) }
      </p>
    </div>
  )
}

export default FailureComponent