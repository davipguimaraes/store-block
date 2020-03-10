import React, { useState } from 'react'
import { TimeSplit } from './typings/global'
import { tick } from './utils/time'
import { useCssHandles } from 'vtex.css-handles'

const DEFAULT_TARGET_DATE = (new Date('2020-03-11')).toISOString()
// react/Countdown.tsx
const CSS_HANDLES = ['countdown']

interface CountdownProps {
  titulo:string,
  targetDate: string
}
const Countdown: StorefrontFunctionComponent<CountdownProps> = ({ titulo, targetDate = DEFAULT_TARGET_DATE}) => {

  const [timeRemaining, setTime] = useState<TimeSplit>({
    hours: '00', 
    minutes: '00', 
    seconds: '00'
  })
  tick(targetDate, setTime)
  const handles = useCssHandles(CSS_HANDLES)


  return (<div className={`${handles.countdown} t-heading-2 fw3 w-100 c-muted-1 db tc`}>
    <h2>{titulo}</h2>
    <div className="contador">{ `${timeRemaining.hours}:${timeRemaining.minutes}:${timeRemaining.seconds}`}</div>
  </div>)
}

Countdown.schema = {
  title: 'editor.countdown.title',
  description: 'editor.countdown.description',
  type: 'object',
  properties: {
    titulo: {
      title: 'Título',
      description: 'Titulo do contador',
      type: 'string',
      default: null,
    },
    targetDate: {
      title: 'Título',
      description: 'Data de termino do contador',
      type: 'string',
      default: null,
    }
  }
}

export default Countdown
