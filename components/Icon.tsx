interface IconProps {
  name: string
  width?: number
  height?: number
}

export const Icon = ({ name, width, height }: IconProps) => {
  switch (name) {
    case 'bar':
      return (
        <svg
          className={`w-${width} h-${height}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M12 8a1 1 0 0 0-1 1v11a1 1 0 0 0 2 0V9a1 1 0 0 0-1-1z" />
          <path d="M19 4a1 1 0 0 0-1 1v15a1 1 0 0 0 2 0V5a1 1 0 0 0-1-1z" />
          <path d="M5 12a1 1 0 0 0-1 1v7a1 1 0 0 0 2 0v-7a1 1 0 0 0-1-1z" />
        </svg>
      )

    default:
      return null
  }
}