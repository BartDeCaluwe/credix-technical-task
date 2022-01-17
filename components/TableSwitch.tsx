interface TableSwitchProps {
  isActive: boolean
  label: string
  onClick?: () => void
}

export const TableSwitch = ({
  isActive,
  label,
  ...props
}: TableSwitchProps) => {
  const borderColor = isActive ? 'border-green-800' : 'border-white'

  return (
    <div
      className={[
        'bg-white px-6 py-4 w-32 min-w-min border-b-4 flex justify-center hover:cursor-pointer hover:bg-gray-50',
        borderColor,
      ].join(' ')}
      {...props}
    >
      {label}
    </div>
  )
}
