import styled from "styled-components";

export const Container = styled.div`   
position: absolute;
top: 20%;
left: 10%;

h1 {
    font-size: 2.5rem;
    padding-bottom: 1rem;
}

p {
    font-size: 1rem;
    width: 500px;
    padding-bottom: 1rem;
}

button {
    background-color: #fff;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    border: none;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    transition: transform 0.2s, box-shadow 0.2s;
    cursor: pointer;

    &:active {
        transform: translateY(2px);
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    }
}
`;