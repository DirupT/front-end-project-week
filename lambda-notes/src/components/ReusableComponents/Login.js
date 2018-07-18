import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LoginWrapper = styled.div`
    max-width: 100%;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const LoginForm = styled.form`
    max-width: 350px;
    width: 100%;
    padding: 22px 40px;
    border: 1px solid #e6e6e6;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        margin-top: 0;
    }
`

export const LoginInput = styled.input`
    font-size: 13px;
    min-height: 25px;
    width: 80%;
    margin-bottom: 15px;
    border-radius: 3px;
    text-align: center;
    border: 1px solid #efefef;
    background: #fafafa;
`

export const LoginButton = styled(Link)`
    min-height: 25px;
    width: 80%;
    background: #2BC1C4;
    border: #2BC1C4;
    border-radius: 3px;
    color: white;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    font-size: 13px;
`