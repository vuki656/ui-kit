import { styled } from 'classname-variants/react'

import styles from './Button.module.css'

export const ButtonRoot = styled('button', {
    variants: {
        active: {
            true: styles.active,
        },
    },
})
