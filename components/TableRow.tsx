import { ReactNode } from 'react'

interface TableRowProps {
  /**
   * Optional children to be rendered inside the component
   */
  children?: ReactNode
}

export const TableRow = ({ children }: TableRowProps) => {
  return <tr className="bg-white">{children}</tr>
}
