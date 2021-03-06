import { FC } from 'react'
import { Icon, IconNames } from './Icon'

export interface TableMenuItem {
  /**
   * Table menu item contents
   */
  label: string

  /**
   * Optional boolean to make the label invisible but still accessible for screen readers
   */
  isInvisible?: boolean

  /**
   * Optional icon
   */
  icon?: IconNames

  /**
   * Optional alignment specifier
   */
  align?: 'start' | 'end' | 'center'
}
interface TableMenuProps {
  /**
   * Collection of menu items
   */
  items: TableMenuItem[]
}

export const TableMenu = ({ items, ...props }: TableMenuProps) => {
  return (
    <thead className="bg-white" {...props}>
      <tr>
        {items.map(({ label, icon, isInvisible, align, ...itemProps }) => (
          <th
            key={`table-menu-${label}`}
            className="px-6 py-4 text-md font-medium"
            {...itemProps}
          >
            <div
              className={[
                'flex gap-1 items-center',
                isInvisible ? 'invisible' : 'visible',
                `justify-${align}`,
              ].join(' ')}
            >
              {icon && <Icon name={icon} width={4} height={4} />}
              {label}
            </div>
          </th>
        ))}
      </tr>
    </thead>
  )
}
