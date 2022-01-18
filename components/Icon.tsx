export type IconNames = 'bar' | 'calendar' | 'link'
interface IconProps {
  /**
   * Name of the icon to be rendered
   */
  name: IconNames

  /**
   * Optional width of the icon
   */
  width?: number

  /**
   * Optional height of the icon
   */
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
    case 'calendar':
      return (
        <svg
          className={`w-${width} h-${height}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g data-name="Layer 2">
            <g data-name="calendar">
              <rect width="24" height="24" opacity="0" />
              <path d="M18 4h-1V3a1 1 0 0 0-2 0v1H9V3a1 1 0 0 0-2 0v1H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zM6 6h1v1a1 1 0 0 0 2 0V6h6v1a1 1 0 0 0 2 0V6h1a1 1 0 0 1 1 1v4H5V7a1 1 0 0 1 1-1zm12 14H6a1 1 0 0 1-1-1v-6h14v6a1 1 0 0 1-1 1z" />
              <circle cx="8" cy="16" r="1" />
              <path d="M16 15h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2z" />
            </g>
          </g>
        </svg>
      )
    case 'link':
      return (
        <svg
          className={`w-${width} h-${height}`}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
      )

    default:
      return null
  }
}
