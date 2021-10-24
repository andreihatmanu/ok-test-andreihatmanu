import React from 'react'
import { notification } from 'antd';

const duration = 4;
export const feedback = (type, title, message) => {
  switch (type) {
    case 'error':
      return notification[type]({
        message: title,
        description: message,
        duration: duration
      });
    case 'success':
      return notification[type]({
        message: title,
        description: message,
        duration: duration
      });
    case 'warning':
      return notification[type]({
        message: title,
        description: message,
        duration: duration
      });
    case 'info':
      return notification[type]({
        message: title,
        description: message,
        duration: duration
      });
  }
}

export default feedback
