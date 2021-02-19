import PropTypes from 'prop-types'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid'
import Button from '../Button/Button'


export default function ToggleButtons({onClickShowAll, onClickShowOpen }) {   
    return (
        <ToggleButtonContainer>
            <Button text="Show All" onClickFunction={onClickShowAll}></Button>
            <Button text="Show Open Items" onClickFunction={onClickShowOpen}></Button>
        </ToggleButtonContainer>
    )
}

const ToggleButtonContainer = styled.section`
display: flex;
gap: 10px;


`

