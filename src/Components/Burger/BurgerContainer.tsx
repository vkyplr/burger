import ColumnContainer from "../common/ColumnContainer";
import Heading from "../Heading";
import Burger from "./Burger";



const BurgerContainer = () => {
    return (
        <ColumnContainer>
            <Heading title="Burger" />
            <Burger />
        </ColumnContainer>
    );
}

export default BurgerContainer;