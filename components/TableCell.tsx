import { ReactNode } from 'react'

interface TableCellProps {
  children?: ReactNode
}

export const TableCell = ({ children, ...props }: TableCellProps) => {
  return (
    <td className="px-6 py-4" {...props}>
      {children}
    </td>
  )
}
