import NavLink from "@/components/NavLink";
import Link from "next/link";

const navLinks = [
    {
        path:'/dashboard',
        title:'Dashboard'
    },
    {
        path:'/dashboard/add-product',
        title:'Add Product'
    },
    {
        path:'/dashboard/manage-product',
        title:'Manage Product'
    },
    {
        path:'/dashboard/AllProducts',
        title:'All Product'
    },
    {
        path:'/',
        title:'Home'
    },
]

const Sidebar = () => {
    return (
        <nav>
            <ul>
                {
                    navLinks.map(({path,title})=><li key={path}>
                        <NavLink exjact activeClassName={'text-blue-500'} href={path}>{title}</NavLink>
                    </li>)
                }
            </ul>
        </nav>
    );
};

export default Sidebar;