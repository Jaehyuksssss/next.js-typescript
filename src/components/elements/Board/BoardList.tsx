import React, { useState } from 'react'
import { BoardListProps } from './Board'
import DetailList from './DetailList'
import { Button } from 'antd'
import { PlusCircleOutlined } from '@ant-design/icons'
import { HeaderContainer } from '@/components/common/@Layout/Header/Header.style'

const BoardList = ({ title }: BoardListProps) => {
  const [countList, setCountList] = useState([0])

  const onAddDetailDiv = () => {
    let countArr = [...countList]
    let counter = countArr.slice(-1)[0]
    counter += 1
    countArr.push(counter) // index 사용 X
    // countArr[counter] = counter	// index 사용 시 윗줄 대신 사용
    setCountList(countArr)
  }
  return (
    <>
      <HeaderContainer>
        <div>{title}</div>
        <DetailList countList={countList} />
        <Button onClick={onAddDetailDiv}>
          <PlusCircleOutlined />
          추가
        </Button>
      </HeaderContainer>
    </>
  )
}

export default BoardList
