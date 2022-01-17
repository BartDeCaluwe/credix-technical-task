import { FC } from 'react'
import { Icon } from './Icon'

interface TableMenuItem {
  label: string
  isInvisible?: boolean
  icon?: string
}
interface TableMenuProps {
  items: TableMenuItem[]
}

export const TableMenu = ({ items, ...props }: TableMenuProps) => {
  return (
    <thead className="bg-white" {...props}>
      {items.map((item) => (
        <th
          key={`table-menu-${item.label}`}
          className="px-6 py-4 text-md font-medium"
        >
          <div
            className={[
              'flex gap-1 items-center',
              item.isInvisible ? 'invisible' : 'visible',
            ].join(' ')}
          >
            {item.icon && <Icon name={item.icon} width={4} height={4} />}
            {item.label}
          </div>
        </th>
      ))}
    </thead>
  )
}
