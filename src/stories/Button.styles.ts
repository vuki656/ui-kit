import { styled } from 'classname-variants/react'

import styles from './Button.module.css'

export const ButtonRoot = styled('button', {
    base: styles.base,
    variants: {
        active: {
            true: styles.active,
        },
    },
})
