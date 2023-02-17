import Header from '@/components/common/@Layout/Header/Header'
import { TITLE_NAME } from '@/components/common/@Layout/Header/Header.data'
import {
  Button,
  HeaderContainer,
  TitleList,
} from '@/components/common/@Layout/Header/Header.style'
import React, { useState } from 'react'
import BoardList from './BoardList'

export interface BoardListProps {
  title: string
}

const Board = () => {
  return (
    <HeaderContainer>
      <Button>
        <button>before</button>
        <Header />
        <button>next</button>
      </Button>
      <TitleList>
        {TITLE_NAME.map((v: BoardListProps) => {
          return <BoardList key={v.title} title={v.title} />
        })}
      </TitleList>
      <input></input>
    </HeaderContainer>
  )
}

export default Board
