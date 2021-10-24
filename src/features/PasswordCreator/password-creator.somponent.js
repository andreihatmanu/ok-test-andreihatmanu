import React from 'react';
import { Form, Input, } from 'antd';
import { useIntl } from "react-intl";
import Title from "antd/es/typography/Title";

import './password-creator.style.css'


export const PasswordCreatorComponent = ({ formState, setFormState }) => {
  const { formatMessage } = useIntl()

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value })
  };

  return (
    <div className='password-creator'>
      <h1 className='title'>
        <Title className=''>{ formatMessage({ id: 'pages.step1.header.title' }) }</Title>
        <div className='title__underline'/>
      </h1>
      <div>
        <p>{ formatMessage({ id: 'pages.step2.body.howto1' }) }</p>
        <p>{ formatMessage({ id: 'pages.step2.body.howto2' }) }</p>
      </div>
      <Form className='form-container' size={ "large" } initialValues={ formState }>
        <Form.Item
          name="password"
          label={ formatMessage({ id: 'pages.step2.password.label' }) }
          rules={ [
            {
              required: true,
              message: formatMessage({ id: 'global.password.wrong' }),
              pattern: new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,24}$/gm),
            },
          ] }
          hasFeedback
          style={ { marginRight: '10px' } }
        >
          <Input.Password
            name="password"
            onChange={ handleChange }
            placeholder={ formatMessage({ id: 'pages.step2.password.placeholder' }) }
          />
        </Form.Item>

        <Form.Item
          name="confirmpassword"
          label={ formatMessage({ id: 'pages.step2.repeatpassword.label' }) }
          dependencies={ ['password'] }
          hasFeedback
          rules={ [
            {
              required: true,
              message: formatMessage({ id: 'global.password.wrong' }),
              pattern: new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,24}$/gm)
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error(formatMessage({ id: 'global.password.notconcording' })));
              },
            }),
          ] }
        >
          <Input.Password
            name="confirmpassword"
            onChange={ handleChange }
            placeholder={ formatMessage({ id: 'pages.step2.repeatpassword.placeholder' }) }
          />
        </Form.Item>
      </Form>
      <div>
        <p>{ formatMessage({ id: 'pages.step2.passwordreminder.title' }) }</p>
        <Form size={ "large" } initialValues={ formState }>
          <Form.Item
            name="reminder"
            label={ formatMessage({ id: 'pages.step2.passwordreminder.label' }) }
          >
            <Input
              name="reminder"
              value={ formState['reminder'] }
              style={ { width: '75vw' } }
              onChange={ handleChange }
              placeholder={ formatMessage({ id: 'pages.step2.passwordreminder.placeholder' }) }/>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default PasswordCreatorComponent