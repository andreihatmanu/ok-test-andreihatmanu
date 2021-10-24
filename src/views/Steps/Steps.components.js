import React, { useEffect, useState } from "react";
import { Button, Checkbox, Steps } from 'antd';
import { useIntl } from "react-intl";

import { ProductInformationComponent } from "../../features/ProductInformation";
import { PasswordCreator } from "../../features/PasswordCreator";
import { Successful } from "../../features/Successful";
import { Failure } from "../../features/Failure";
import feedback from "../../feedback/feedback";
import { submitForm } from "../../services/api";

import './steps.styles.css'


const { Step } = Steps;

export const StepsComponent = () => {
  const { formatMessage } = useIntl()
  const [current, setCurrent] = useState(0);
  const [acceptRgpd, setRgpd] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [formState, setFormState] = useState({});

  useEffect(() => {
    feedback('info', formatMessage({ id: 'global.button.welcome' }), formatMessage({ id: 'global.button.welcome.content' }))
  }, [])

  useEffect(() => {
  }, [formState])

  const handleRgpd = (event) => {
    const { checked } = event.target;
    setRgpd(checked)
  }

  const handleSubmitForm = () => {
    setSubmitting(true)
    submitForm(formState['password'], formState['confirmpassword']).then(r => {
      console.log(r);
      setCurrent(current + 1);
      setSubmitting(false)
      setIsSuccessful(true)
    }).catch(error => {
      setCurrent(current + 1);
      setSubmitting(false)
      setIsSuccessful(false)
    })
  }

  const next = () => {
    if (current === 1) {
      if (!!formState.password && !!formState.confirmpassword) {
        handleSubmitForm()
      } else {
        feedback('warning', formatMessage({ id: 'global.required.inputs.title' }), formatMessage({ id: 'global.required.inputs.message' }))
      }
    } else {
      setCurrent(current + 1);
    }
  };

  const reset = () => {
    setCurrent(0)
    setRgpd(false)
    setSubmitting(false)
    setIsSuccessful(false)
    setFormState({})
  }

  const prev = () => {
    setCurrent(current - 1);
  };

  const steps = [
    {
      title: 'First',
      content: <ProductInformationComponent/>,
    },
    {
      title: 'Second',
      content: <PasswordCreator { ...{ formState, setFormState } }/>,
    },
    {
      title: 'Last',
      content: isSuccessful ? <Successful/> : <Failure/>,
    },
  ];

  return (
    <>
      <Steps className="steps-wizard" current={ current }>
        { steps.map(item => (
          <Step key={ item.title }/>
        )) }
      </Steps>
      <div className="steps-content">
        { steps[current].content }
        { current === 0 && (
          <Checkbox checked={ acceptRgpd } onClick={ handleRgpd }>
            { formatMessage({ id: 'global.gdpr.acceptance' }) }
          </Checkbox>
        ) }
      </div>
      <div className="steps-action">

        { current < steps.length - 1 && (
          <Button type="primary" loading={ submitting } disabled={ !acceptRgpd } onClick={ () => next() }>
            { formatMessage({ id: 'global.button.next' }) }
          </Button>
        ) }
        { current === steps.length - 1 && (
          <Button type="primary" onClick={ reset }>
            { isSuccessful ? formatMessage({ id: 'global.button.access' }) : formatMessage({ id: 'global.button.return' }) }
          </Button>
        ) }
        { current > 0 && current !== steps.length - 1 && (
          <Button style={ { margin: '0 8px' } } onClick={ () => prev() }>
            { formatMessage({ id: 'global.button.previous' }) }
          </Button>
        ) }
      </div>
    </>
  );
}


export default StepsComponent