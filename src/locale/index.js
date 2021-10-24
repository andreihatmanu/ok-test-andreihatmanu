import React from 'react'
import { IntlProvider } from 'react-intl'


// TODO: make custom hook that returns simplified use of formatMessage
// to use inside component like this:
// const { fn } = useSimplifyIntl
// <span>{fm('pages.login.button.label')}</span>
// in front of current use:
// const intl = useIntl;
// <span>{intl.formatMessage({ id: 'pages.login.button.label })}</span>
import es_ES from './es_ES.json'

const LOCALE_DEFAULT = 'es-ES'

const availableMessages = {
  'es-ES': es_ES,
  // 'en-US': en_US,
  // 'en-GB': en_US,
}

const locale = availableMessages[navigator.language] ? navigator.language : LOCALE_DEFAULT

const messages = availableMessages[locale]


export default ({ children }) => (
  <IntlProvider locale={ locale } messages={ messages }>
    { children }
  </IntlProvider>
)
