import { createContext, ReactNode, useMemo } from 'react';
import BurgerStore from './stores/BurgerStore';
import OrderStore from './stores/OrdersStore';
import RootStore from './stores/RootStore';

export const RootStoreContext = createContext<RootStore>(new RootStore());

interface Props {
    children: ReactNode
}

const BurgerApp = ({ children }: Props) => {
    const rootStore = useMemo(() => new RootStore(), []);
    return (
        <RootStoreContext.Provider value={rootStore}>
            {children}
        </RootStoreContext.Provider>
    )
}

export default BurgerApp;