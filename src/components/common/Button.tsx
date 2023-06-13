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
    [Variant.primary]: 'rounded-full bg-gradient-to-r from-primary-dark to-primary hover:to-primary-dark w-full sm:w-[140px] py-2 text-white text-center',
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
