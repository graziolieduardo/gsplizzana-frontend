import { ReactNode } from "react";
import classnames from 'classnames';

type Props = {
    type?: 'button' | 'submit',
    variant: Variant,
    link?: string | null,
    children: ReactNode
}

enum Variant {
    primary,
    secondary,
    text
}

const VARIANT_MAPS = {
    [Variant.primary]: 'rounded-full bg-gradient-to-r from-primary-dark to-primary hover:to-primary-dark w-full sm:w-[140px] py-2 text-white text-center cursor-pointer',
    [Variant.secondary]: 'rounded-full bg-white w-full sm:w-[140px] py-1.5 text-primary-dark font-semibold text-center cursor-pointer border-gradient',
    [Variant.text]: 'bg-black',
}

export const Button = ({ type = 'button', variant, link, children }: Props) => {

    //if link has been passed by props it will render anchor tag, otherwise a div button 
    return link ? (

        <a href={link} className={classnames(VARIANT_MAPS[variant])}>
            {children}
        </a>

    ) : (

        <div className={classnames(VARIANT_MAPS[variant])}>
            {children}
        </div>
    )
}

Button.variant = Variant;
