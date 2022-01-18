import { useClamp } from '../hooks/useClamp'

interface ProgressBarProps {
  /**
   * The actual progress value as a percentage between 0 and 100
   */
  value: number
}

export const ProgressBar = ({ value }: ProgressBarProps) => {
  const clamped = useClamp(value, 0, 100)

  return (
    <div>
      <div className="text-sm mb-1">{clamped}%</div>
      <div className="relative min-w-[100px]">
        <div className="bg-gray-300 h-[4px] w-full"></div>
        <div
          className={[
            'absolute top-0 left-0 h-[4px] flex justify-end items-center',
            clamped === 0 ? 'bg-gray-300' : 'bg-teal-700',
            `w-[${clamped}%]`,
          ].join(' ')}
        >
          <span
            className={[
              'bg-teal-700 flex-shrink-0 inline-block h-2 w-2 rounded-full',
              clamped === 0 ? '' : '-mr-1 ',
            ].join(' ')}
            aria-hidden="true"
          ></span>
        </div>
      </div>
    </div>
  )
}
