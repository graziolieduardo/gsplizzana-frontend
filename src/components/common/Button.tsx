import { ReactNode } from "react";
import classnames from 'classnames';

type Props = {
    type?: 'button' | 'submit',
    variant: Variant,
    children: ReactNode
}

enum Variant {
    primary,
    secondary,
    text
}

const VARIANT_MAPS = {
    [Variant.primary]: 'bg-green-200',
    [Variant.secondary]: 'bg-gray-200',
    [Variant.text]: 'bg-black',
}

export const Button = ({ type = 'button', variant, children }: Props) => {
    return (
        <div className={classnames(VARIANT_MAPS[variant])}>
            {children}
        </div>
    )
}

Button.variant = Variant;
