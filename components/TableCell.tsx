import { ReactNode } from 'react'

interface TableCellProps {
  children?: ReactNode
  align?: 'left' | 'right' | 'center'
}

export const TableCell = ({ children, ...props }: TableCellProps) => {
  return (
    <td className="px-6 py-4" {...props}>
      {children}
    </td>
  )
}
