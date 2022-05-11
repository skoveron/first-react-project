import { StyledUserName } from "./styled";

export const UserName = (props) => {
    const { name } = props;
    return (
        <StyledUserName>
            {name}
        </StyledUserName>
    );
}