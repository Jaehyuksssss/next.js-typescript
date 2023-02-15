import React from 'react'
import { useDrop } from 'react-dnd'

const BoardList = ({ title, children }: { title: string; children: any }) => {
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: 'card',
    drop: () => ({ name: title }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  })
  return (
    <>
      <div ref={drop}>
        <div>{title}</div>
        {children}
        {/* <KanbanCreator title={title} /> */}
      </div>
    </>
  )
}

export default BoardList
