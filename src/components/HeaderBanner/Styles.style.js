import styled from 'styled-components'

export const HeaderBannerLayout = styled.div`
  padding: 20px 30px 20px 20px;
  display: flex;
  justify-content: space-between;
`

export const MapRoute = styled.div`
  width: 50%;
  display: flex;
  align-items: center;

  svg{
    font-size: 0.7rem;
    margin: 0 5px;
  }

  p:nth-child(1){
    color: #615F5F;
  }
`

export const DateNotifications = styled.div`
  width: 50%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  font-size: 0.9rem;

  div{
    display: flex;
    align-items: center;
    padding: 10px;
    border: 1px solid #EFEFEF;
    width: fit-content;
    border-radius: 5px;
    line-height: 0;

    p{
      margin-left: 10px;
    }
  }

  div:nth-child(2){
    margin-left: 5px;
  }
`