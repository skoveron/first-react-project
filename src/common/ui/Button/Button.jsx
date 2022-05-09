import { StyledButton } from './styled';
export const Button = (props) => {
    const { title } = props;
    return (
    <StyledButton>{title}</StyledButton>
    );
};
