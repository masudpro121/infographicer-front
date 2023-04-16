import React from 'react'

export default function Card({data}) {
    console.log(data);
  return (
    <div>
        <div>prompt: {data.prompt}</div>
        <div>value: {data.value}</div>
    </div>
  )
}
