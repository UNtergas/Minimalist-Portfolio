'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"


interface NavLinkProps {
    href: string
    children: React.ReactNode
    callback?: () => void
}
export default function NavLink({ href, children,callback }: NavLinkProps) {
    const path = usePathname()

    return (

        <Link onClick={callback} href={href} className={path.startsWith(href) ? 'active' : undefined}>{children}</Link>

    )
}