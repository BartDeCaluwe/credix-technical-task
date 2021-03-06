interface TableSwitchProps {
  /**
   * Indicates that the current switch is the active one
   */
  isActive: boolean

  /**
   * TableSwitch contents
   */
  label: string

  /**
   * Optional onClick handler to control the actual switching
   */
  onClick?: () => void
}

export const TableSwitch = ({
  isActive,
  label,
  ...props
}: TableSwitchProps) => {
  const borderColor = isActive ? 'border-teal-800' : 'border-white'

  return (
    <button
      type="button"
      className={[
        'bg-white px-6 py-4 w-32 min-w-min border-b-4 flex justify-center hover:cursor-pointer hover:bg-gray-50',
        borderColor,
      ].join(' ')}
      {...props}
    >
      {label}
    </button>
  )
}
