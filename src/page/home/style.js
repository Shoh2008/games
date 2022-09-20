import styled from "styled-components";

export const HomePageStyle = styled.div`
    height: 100vh;
    width: 100%;
`

export const Block = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
    background: linear-gradient(90deg, rgb(0, 0, 0, 0.9), rgb(0 ,0 ,0 ,0)), url(${props => props.backImg});
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-wrap: wrap;
    align-content: space-around;
    .infos{
        width: 90%;
        height: 30vh;
        margin: auto;
        button{
            height: 40px;
            width: 150px;
            border: none;
            outline: none;
            border-radius: 5px;
            background: #fff;
            color: black;
        }
        h1, h4 {
            color: white;
        }
    }
    &::before{
        content: "";
        transition: .5s;
        position: absolute;
        width: 100%;
        height: 60px;
        bottom: 0;
        left: 0;
        z-index: 2;
        background: linear-gradient( transparent, #21212180, #21212190, #212121 );
    }
    @media screen and (max-width: 550px){
        height: 150vh;
        align-items: none;
        .infos {
            width: 90%;
            position: absolute;
            top: 2%;
            left: 5%;
            height: 30vh;
            margin: auto;
            text-align: center;
        }
    }
`

export const BlockItem = styled.div`
    width: 90%;
    margin: 0 auto;
    position: absolute;
    bottom: 10%;
    left: 5%;
    display: flex;
    justify-content: space-between;
    span{
        opacity: 0;
        position: relative;
        top: -70%;
        left: -20px;
        font-size: 20px;
        color: white;
        transition: .5s;
    }
    .game-card {
        width: 230px;
        height: 125px;
        border-radius: 10px;
        overflow: hidden;
        transition: .5s;
        margin: 0 5px;
        position: relative;
        img {
            width: 100%;
            transform: scale(1.2);
            height: auto;
            transition: .5s;
            object-fit: cover;
        }
        &:hover{
            box-shadow: 0 0 0 3px blue;
        }
        &:hover span{
            opacity: 1;
            z-index: 3;
            left: 10px;
        }
        &:hover img{
            transform: scale(1);
        }
        &:hover::before{
            content: "";
            transition: .5s;
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            z-index: 2;
            background: linear-gradient(90deg,black,rgb(0 ,0 ,0 ,0.1));
        }
    }
    .active{   
        box-shadow: 0 0 0 3px blue;
    }
    @media screen and (max-width: 550px) {
        flex-wrap: wrap;
        justify-content: center;
        bottom: 3%;
        .game-card {
            margin: 10px 0;
        }
    }
`

export const GameBlock = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    background: #212121;
    color: white;
`

export const Loader = styled.div`
    background: #1e1e1e;
    height: 100vh;
    width: 100%;
    .spinner {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%); 
        margin: -37.5px -37.5px;
        width: 75px;
        height: 75px;
        border-radius: 50%;
        background-color: transparent;
        border: 4px solid #222;
        border-top-color: #009688;
        border-bottom-color: #009688;
        -webkit-animation: 1s spin linear infinite;
        animation: 1s spin linear infinite;
    }
    @-webkit-keyframes spin {
        from {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        to {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }
    @keyframes spin {
        from {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        to {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }
`

export const GameCard = styled.div`
    margin: 20px 0;
    height: 400px;
    width: 250px;
    border-radius: 5px;
    background: #212121;
    box-shadow: 15px 15px 30px #191919,
    -15px -15px 30px #292929;
    color: white;
    overflow: hidden;
    &:hover {
        transform: translateY(-20px) !important;
    }
    img{
        width: 100%;
    }
    .text{
        width: 100%;
        height: 400px;
        padding: 20px;
        p{
            height: 50px;
            margin: 10px 0;
        }
        button{
            position: relative;
            bottom: 0;
            outline: none;
            border: none;
            background: #313131;
            border-radius: 5px;
            height: 40px;
            color: white;
            width: 150px;
        }
        h4 {
            height: 70px;
            color: white;
        }
    }
`

export const Category = styled.div`
    display: flex;
    padding: 10px 30px;
    overflow: scroll;
    z-index: 5;
    background: #1e1e1e;
    &::-webkit-scrollbar {
        height: 10px;
        width: 0;
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background: #000;
    }
    h2 {
        text-align: center;
    }
    button {
        position: relative;
        bottom: 0;
        outline: none;
        border: none;
        background: #313131;
        border-radius: 5px;
        height: 40px;
        color: white;
        padding: 0 10px;
        margin: 5px;
    }
`

export const Search = styled.div`
    width: 100%;
    background: #111111;
    display: flex;
    padding: 20px 30px;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;
    h2 { color: white; }
    input {
        outline: none;
        border: none;
        border-radius: 5px;
        height: 40px;
        width: 250px;
        padding: 0 10px;
    }
    @media screen and (max-width: 550px){
        flex-wrap: wrap !important;
        text-align: center !important;
        h2 { margin: 5px auto; }
        input {
            margin: auto;
        }
    }
`