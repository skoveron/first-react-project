import { UserName } from "../UserName/UserName";
import { StyledHeader } from "./styled";

export const Header = (props) => {
    //const { title } = props;
    return (
        <StyledHeader>
            <UserName  name = {'Ivan Ivanov'}/>

        </StyledHeader>
    );
}