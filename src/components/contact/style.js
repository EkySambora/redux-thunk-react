import Styled, {keyframes} from 'styled-components'

const rotatePlus = keyframes`
  from {
    top:-3px;
  }

  to {
    top:10px;
  }
`;

const rotate = keyframes`
  from {
    top:10px;
  }

  to {
    top:-3px;
  }
`;

export const Title = Styled.h2`
    color:palevioletred;
    font-size: 30px;
    text-align: center;
`;

export const Button = Styled.button`
    padding:20px 30px;
    border:none;
    outline:none;
    background-color: palevioletred;
    animation: ${props => props.plus ? rotatePlus : rotate} 1s linear 1s infinite alternate;
    color:#fff;
    border-radius: 5px;
    cursor:pointer;
    margin-right: ${props => props.plus ? "10px" : "0"};
    position: relative;
`;
export const WrapperButton = Styled.div`
    width: 185px;
    margin:auto;
`;