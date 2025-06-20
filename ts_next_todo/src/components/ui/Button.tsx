import { buttonProps } from '@/types'
import React from 'react'
import clsx from 'clsx'

const Button = ({type, text, actionButton, bgColor}:buttonProps) => {
  return (
    <div>
      <button type={type} className={clsx(
          actionButton &&
            'text-white hover:bg-blue-800 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 focus:outline-none',
          `${bgColor} hover:${bgColor} font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none text-white`
        )}>
        {text}
      </button>
    </div>
  )
}

export default Button
