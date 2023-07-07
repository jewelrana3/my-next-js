'use client'

import ClassNames from '@/utilies/ClassNames';
import Link from 'next/link';
import {usePathname} from 'next/navigation'

const NavLink = ({children,exjact,href,activeClassName,...props}) => {
    const path = usePathname();
    const active = exjact ? path === href : path.startsWith(href)
    const classes = ClassNames(props.className,active && activeClassName);
    if(classes){
        props.className = classes
    }
    return (
        <Link href={href} {...props} >
            {children}
        </Link>
    );
};

export default NavLink;