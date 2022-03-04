import { Container, styled } from "@mui/material";
import { ReactNode } from "react";

const MainContainer = styled(Container)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
})

interface Props {
    children: ReactNode,
    style?: { 
        marginTop?: string | number, 
        marginRight?: string | number, 
        marginBottom?: string | number, 
        marginLeft?: string | number 
    } 
}

const ColumnContainer = ({ children, style }: Props) => {
    return (
        <MainContainer sx={style}>
            {children}
        </MainContainer>
    )
}

export default ColumnContainer;