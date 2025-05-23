import Link from 'next/link'
import { PagesNav } from '@/utils/types'
import {
    StyledHeader,
    StyledHeaderItems
} from '../Header/styles'

type HeaderProps = {
    links: PagesNav[]
}

const Header = ({links}:HeaderProps) => {
    return(
        <StyledHeader>
            <StyledHeaderItems>
                {links.map(item => (
                    <Link key={item.name} href={item.link}>{item.name}</Link>
                ))}
            </StyledHeaderItems>
        </StyledHeader>
    )
}

export default Header