import styled from "styled-components";

export const OverviewLayout = styled.div`

`

export const OverviewBox = styled.div`
    width: ${props => props.width};
    height: ${props => props.height || "auto"};
    background-color: white;
    border: 1px solid hsla(220, 20%, 80%, 0.4);
    padding: 16px;
    border-radius: 8px;
`

export const BoxContainer = styled.div`
    margin-top: 16px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
`

export const SectionTitle = styled.p`
    font-size: 1.25rem;
    margin: 16px 0;
    font-weight: bold;
`

export const DataSection = styled.div`
  display: flex;

`

export const CustomerDetails = styled.div`
width: 75%;
`

export const TreeDetails = styled.div`
width: 25%;
margin-left: 16px;
`