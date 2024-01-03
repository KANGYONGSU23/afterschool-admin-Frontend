import styled from "@emotion/styled";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  width?: string;
  color?: string;
  backgroundColor: string;
}

const Button = ({ text, onClick, width, color, backgroundColor }: ButtonProps) => {
  return (
    <ButtonContainer onClick={onClick} width={width} color={color} backgroundColor={backgroundColor}>
      {text}
    </ButtonContainer>
  );
};

const ButtonContainer = styled.button<{color?: string, width?: string, backgroundColor?: string}>`
  background-color: ${(props) => props.backgroundColor || '#a2a2a2'};
  border-radius: 8px;
  border: 1px solid #000;
  height: 53px;
  width: ${(props) => props.width || '20px'};
  color: ${(props) => props.color || '#a2a2a2'};
  padding: 10px 40px;
  font-weight: bold;
  font-size: 15px;
  &:hover {
    background-color: gray;
  }
  cursor: pointer;
`;

export default Button;