import ColumnContainer from "../common/ColumnContainer";
import BunBottom from "./ingredients/BunBottom";
import BunTop from "./ingredients/BunTop";
import Cheese from "./ingredients/Cheese";
import Lettuce from "./ingredients/Lettuce";
import Onion from "./ingredients/Onion";
import Patty from "./ingredients/Patty";
import Tomato from "./ingredients/Tomato";

const Burger = () => {
    return (
        <ColumnContainer style={{ marginTop: '50px' }}>
            <BunTop />
            <Onion />
            <Cheese />
            <Tomato />
            <Lettuce />
            <Patty />
            <BunBottom />
        </ColumnContainer>
    )
}

export default Burger;