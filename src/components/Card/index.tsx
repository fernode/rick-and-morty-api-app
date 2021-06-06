import React from 'react'
import * as S from './styles'
import { GoGlobe } from 'react-icons/go'

type CardProps = {
  name: string
  img: string
  origin: string
  gender: string
  status: string
}

function Card({ name, img, gender, status, origin }: CardProps) {
  return (
    <S.CardContainer>
      <div className="container">
        <div className="card__img">
          <img src={img} alt={name} />
        </div>

        <div className="card__infos">
          <div className="card__infos--title">
            <h2>{name}</h2>
            <div className="card__infos--icon">
              <GoGlobe />
              <p>{origin}</p>
            </div>
          </div>
          <p className="card__infos--text">
            {gender} | {status}
          </p>
        </div>
      </div>
    </S.CardContainer>
  )
}

export default Card
