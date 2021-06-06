import styled from 'styled-components'

export const CardContainer = styled.div`
  background: #ffffff;
  height: 12rem;
  border-radius: 2.4rem;
  margin-bottom: 1.2rem;
  display: flex;
  align-items: center;

  .container {
    display: flex;
    width: 90%;
    margin: 0 auto;
  }

  .card {
    &__img {
      margin-right: 1rem;

      img {
        width: 5rem;
        height: 5rem;
        border-radius: 50%;
      }
    }

    &__infos {
      &--title {
        display: flex;
        flex-direction: column;

        h2 {
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 0.7rem;
        }
      }

      &--icon {
        display: flex;

        p {
          margin-left: 0.5rem;
          font-size: 1.6rem;
          font-weight: 300;
        }
      }

      &--text {
        font-size: 1.6rem;
        font-weight: 300;
        color: #707070;
        margin-top: 1.5rem;
      }
    }
  }
`
