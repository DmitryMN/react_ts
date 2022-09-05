import React from 'react'

export enum CardVariant {
    outlined = "outlined",
    primary = "primary"
}

type CardProps = {
    width: string
    height: string
    variant: CardVariant
}

export const Card: React.FC<React.PropsWithChildren<CardProps>> = ({width, height, variant, children}) => {
  return (
    <div style={{width, height, 
    border: variant === CardVariant.outlined ? '1px solid #131313' : 'none',
    background: variant === CardVariant.primary ? 'lightgrey' : ''}}>
        {children}
    </div>
  )
}
