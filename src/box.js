import styled from 'styled-components';

const Container = styled.div`
        position: absolute;
        left: ${(props) => props.x}px;
        top: ${(props) => props.y}px;
        z-index: 100;
`


function BOX(props) {
    return (
        <Container x={props.x} y={props.y} >HELLO</Container>
    )
}

export default BOX