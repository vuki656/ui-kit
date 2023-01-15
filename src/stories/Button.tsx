import React from 'react'

import type { ButtonProps } from './Button.types'

export const Button = (props: ButtonProps) => {
    const {
        ...other
    } = props

    return (
        <button {...other}>
            Hi
        </button>
    )
}
