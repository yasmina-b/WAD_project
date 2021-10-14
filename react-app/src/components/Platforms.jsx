import styled from 'styled-components';
import { platforms } from "../data";
import PlatformsItems from "./PlatformsItems";

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
`

function Platforms() {
    return (
        <Container>
            {platforms.map(item=>(
                <PlatformsItems item={item} key={item.id} />
            ))}
        </Container>
    );
};

export default Platforms;
