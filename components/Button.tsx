import React from 'react'

interface ButtonProps {
  /**
   * Button contents
   */
  label: string
  /**
   * Optional click handler
   */
  onClick?: () => void
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({ label, ...props }: ButtonProps) => {
  return (
    <button
      type="button"
      className="px-6 py-2 bg-teal-700 text-white"
      {...props}
    >
      {label}
    </button>
  )
}
