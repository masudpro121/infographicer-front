import React from 'react'

export default function Card({data}) {
  return (
    <div>
     {
      data.value &&  <div>
      <div>prompt: {data.prompt}</div>
      <div>value: {data.value}</div>
    </div>
     }
    </div>
  )
}
