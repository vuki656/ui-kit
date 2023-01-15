import React from "react"

import { ButtonProps } from './Button.types'

export const Button = (props: ButtonProps) => {
    const {
        ...other
    } = props

    return (
        <button
            {...other}
            type="button"
        >
            Hi
        </button>
    )
}
