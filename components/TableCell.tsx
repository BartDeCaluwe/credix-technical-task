import { ReactNode } from 'react'

interface TableCellProps {
  /**
   * Optional children to be rendered inside the component
   */
  children?: ReactNode

  /**
   * Optional className to add or override classes
   */
  className?: string

  /**
   * Optional table cell alignment specifier
   */
  align?: 'left' | 'right' | 'center'
}

export const TableCell = ({
  children,
  className,
  ...props
}: TableCellProps) => {
  return (
    <td className={['px-6 py-4', className].join(' ')} {...props}>
      {children}
    </td>
  )
}
