import Link from 'next/link'

export const Menu: React.FC = () => {
    return (
        <aside className="column is-1 is-narrow-mobile is-fullheight section is-hidden-mobile">
             <p className="menu-label is-hidden-touch">
                My Sales
             </p>
             <ul className="menu-list">
                <MenuItem href="/" label="Home"/>
                <MenuItem href="/" label="Registry"/>
                <MenuItem href="/" label="Settings"/>
                <MenuItem href="/" label="Placeholder"/>
                <MenuItem href="/" label="Placeholder"/>
                <MenuItem href="/" label="Placeholder"/>
                <MenuItem href="/" label="Holder of Place"/>
                <MenuItem href="/" label="Logout"/>
             </ul>
        </aside>
    )
}

interface MenuItemProps {
    href?: string;
    label: string;
}

const MenuItem: React.FC<MenuItemProps> = (props: MenuItemProps) => {
    return (
        <li>
            <Link href={props.href} legacyBehavior>
            <a>
                <span className="icon"></span> {props.label}
            </a>
            </Link>
        </li>
    )
}