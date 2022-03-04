import { styled, Typography } from "@mui/material"
import { grey } from "@mui/material/colors";

interface HeadingProps {
    title: string
}

const HeadingText = styled(Typography)({
    color: grey[800],
});

const Heading = ({ title }: HeadingProps) => {
    return (
        <HeadingText variant="h3">{title}</HeadingText>
    );
}

export default Heading;