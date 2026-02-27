import type { NavigationItem } from '../types/navigation'
import { NAV_ITEMS } from '../constants/navigation'
import { NavItem } from './NavItem'

export const NavigationBar = () => {
  return (
    <div className='flex flex-row items-center gap-8'>
      {NAV_ITEMS.map((item: NavigationItem) => {
        return (
          <NavItem key={item.name} {...item} />
        )
      })}
    </div>
  )
}