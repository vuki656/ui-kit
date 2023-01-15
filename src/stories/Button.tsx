import React from 'react'

import { ButtonRoot } from './Button.styles'
import type { ButtonProps } from './Button.types'

export const Button = (props: ButtonProps) => {
    const {
        children,
        ...other
    } = props

    return (
        <ButtonRoot {...other}>
            {children}
        </ButtonRoot>
    )
}
