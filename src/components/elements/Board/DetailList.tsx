import React, { useState } from 'react'
import { Input } from 'antd'

import { DetailDiv } from '@/components/common/@Layout/Header/Header.style'

export interface detailProps {
  item: string
  i: number
}

const { TextArea } = Input

const DetailList = (props) => {
  const [drag, setDrag] = useState(null)
  console.log(drag)
  const _onDragStart = (e) => {
    setDrag(e.target)
    e.target.classList.add('grabbing')
    e.dataTransfer.effectAllowed = 'move'
    e.dataTransfer.setData('text/html', e.target)
  }

  const _onDragEnd = (e) => {
    e.target.classList.remove('grabbing')
    e.dataTransfer.dropEffect = 'move'
  }

  return (
    <DetailDiv>
      {props.countList &&
        props.countList.map((item, i) => (
          <div key={i}>
            <div draggable onDragStart={_onDragStart} onDragEnd={_onDragEnd}>
              <TextArea autoSize={{ minRows: 6, maxRows: 6 }} color={'green'} />
            </div>
          </div>
        ))}
    </DetailDiv>
  )
}

export default DetailList
