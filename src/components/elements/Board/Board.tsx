import React, { useState } from 'react'
import axios from 'axios'
import useQuery from 'react-query'
import Calendar from '@/components/common/Calendar'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import BoardList from './BoardList'
import { useRecoilValue } from 'recoil'
import { kanbanListState } from '@/recoil'
import Card from './Card'
import styled from 'styled-components'

export interface IPost {
  userId: number
  id: number
  title: string
  body: string
}

const Board = () => {
  const KanbanList = useRecoilValue(kanbanListState)
  const { TO_DO, IN_PROGRESS, DONE, NOTE } = TITLE_NAME

  const cardDataHandler = (cardTitle: string) => {
    console.log(cardTitle)
    return KanbanList.filter(
      (data) => data.category === cardTitle,
    ).map((item, index) => <Card key={item.id} item={item} />)
  }

  return (
    <>
      <Header>
        <span>TODO</span>
      </Header>

      <KanbanListContainer>
        <DndProvider backend={HTML5Backend}>
          <BoardList title={TO_DO}>{cardDataHandler(TO_DO)}</BoardList>
          <BoardList title={IN_PROGRESS}>
            {cardDataHandler(IN_PROGRESS)}
          </BoardList>
          <BoardList title={DONE}>{cardDataHandler(DONE)}</BoardList>
          <BoardList title={NOTE}>{cardDataHandler(NOTE)}</BoardList>
        </DndProvider>
      </KanbanListContainer>
    </>
  )
}

export default Board

export const TITLE_NAME = {
  TO_DO: 'To do',
  IN_PROGRESS: 'In progress',
  DONE: 'Done',
  NOTE: 'Notes & Reference',
}
const Header = styled.div`
  display: flex;
  justify-content: center;
`
const KanbanListContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`
