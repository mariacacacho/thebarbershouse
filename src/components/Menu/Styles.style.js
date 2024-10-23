import styled from 'styled-components'

export const MenuLayout = styled.div`
  border-right: 1px solid #EFEFEF;
  height: 99.9vh;
  background-color: #FAFAFA;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const AppTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;

  p{
    width: 100%;
    line-height: normal;
  }
  p:nth-child(1){
    font-weight: bold;
  }

  p:nth-child(2){
    font-size: 0.9rem;
    color: #615F5F;
  }
`

export const MenuSections = styled.div`
  border-top: 1px solid #EFEFEF;
  padding-top: 10px;
  font-size: 0.9rem;
  margin-top: 15px;
`

export const UserAvatar = styled.div`
  display: flex;
  border-top: 1px solid #EFEFEF;
  margin-top: 10px;
  padding-top: 20px;
  padding-left: 10px;
  padding-bottom:20px;
`

export const UserInfo = styled.div`
  margin-left: 10px;
  line-height: 1.2;
  p:nth-child(2){
    font-size: 0.8rem;
  }
`

export const boxTitleMenu = {
  height: 65,
  borderRadius: 2,
  bgcolor: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "1px solid #EFEFEF",
  marginLeft: 1,
  marginTop: 1.5,
  marginRight: 1,
  marginBottom: 1,
}

export const menuSection = {
  borderRadius: 1.7,
  paddingTop: 1,
  paddingBottom: 1,
  paddingLeft: 1,
  display: "flex",
  alignItems: "center",
  "&:hover": {
    bgcolor: "#EFEFEF",
  },
  marginLeft: 1,
  marginTop: 0.3,
  marginRight: 1,
  "p:nth-child(2)": {
    marginLeft: '10px'
  }
}

export const menuSectionSelected = {
  borderRadius: 1.7,
  bgcolor: "#EFEFEF",
  paddingTop: 1,
  paddingBottom: 1,
  paddingLeft: 1,
  display: "flex",
  alignItems: "center",
  marginLeft: 1,
  marginTop: 0.3,
  marginRight: 1,
  "p:nth-child(2)": {
    marginLeft: '10px'
  },
  fontWeight: 'bold'
}