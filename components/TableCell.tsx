import { ReactNode } from 'react'

interface TableCellProps {
  children?: ReactNode
  className?: string
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
