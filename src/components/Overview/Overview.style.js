import styled from "styled-components";

export const OverviewLayout = styled.div`

`

export const OverviewBox = styled.div`
    width: ${props => props.width};
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
    font-weight: bold;
`