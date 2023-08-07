import { ReactNode } from "react";
import classnames from 'classnames';

type Props = {
    type?: 'button' | 'submit',
    variant: Variant,
    link?: string | null,
    children: ReactNode
    bg?: string | null
    className?: string
}

enum Variant {
    primary,
    secondary,
    text
}

const VARIANT_MAPS = {
    [Variant.primary]: 'rounded-full bg-gradient-to-r from-primary-dark to-primary hover:to-primary-dark w-full sm:w-fit sm:px-12 py-2 text-white text-center cursor-pointer',
    [Variant.secondary]: 'rounded-full w-full sm:w-fit px-8 sm:px-12 py-1.5 text-primary-dark font-semibold text-center cursor-pointer border-gradient',
    [Variant.text]: 'bg-black',
}


//backgroud color is set to white to hide the background gradient on secondary variant(border-gradient is setted on global.css)
export const Button = ({ type = 'button', variant, link, children, className, bg = 'bg-white'}: Props) => {

    //if link has been passed by props it will render anchor tag, otherwise a div button 
    return link ? (

        <a href={link} className={`${classnames(VARIANT_MAPS[variant], className)} ${bg}`}>
            {children}
        </a>

    ) : (

        <button className={`${classnames(VARIANT_MAPS[variant])} ${bg}`}>
            {children}
        </button>
    )
}

Button.variant = Variant;
