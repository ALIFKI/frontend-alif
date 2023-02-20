import React from 'react'

function BubbleEffect({colorOne,colorTwo,duration}) {
  return (
    <div id="react-bubbly-transitions__bubbles">
      <div
          style={{ animationDuration: `${duration}ms`, background: colorOne }}
          className="react-bubbly-transitions__first"
      />
      <div
          style={{ animationDuration: `${duration}ms`, background: colorTwo }}
          className="react-bubbly-transitions__second"
      />
    </div>
  )
}

export default BubbleEffect