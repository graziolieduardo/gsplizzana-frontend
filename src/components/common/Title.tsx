import { ReactNode } from "react";
import { Rubik } from "next/font/google";
import classnames from 'classnames';

type Props = {
    variant: Variant,
    children: ReactNode,
    tag?: keyof JSX.IntrinsicElements
}

enum Variant {
    primary,
    secondary,
    tertiary
}

const VARIANT_MAPS = {
    [Variant.primary]: 'text-[2.5rem] sm:text-[3.5rem] leading-[61px]',
    [Variant.secondary]: 'text-[2rem] sm:text-[2.5rem] leading-[44px]',
    [Variant.tertiary]: 'text-[2rem] leading-[36px]',
}

const rubik = Rubik({ subsets: ['latin'] })

export const Title = ({ tag = 'h2', variant, children }: Props) => {
    const Tag = tag;

    return (
        <Tag className={`${classnames(VARIANT_MAPS[variant])} ${rubik.className} font-bold`}>{children}</Tag>
    )
}

Title.variant = Variant;