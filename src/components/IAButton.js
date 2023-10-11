import { Button } from "@mui/material";

function IAButton (props) {
    const { variant, title, color, onClick, size, align, type } = props;

    return <>
    <Button variant={variant} color={color} onClick={onClick} size={size} align={align} type={type}>{title}</Button>
    </>
}

export default IAButton;

// For pass component

// <IAButton title="Open" variant="outlined" size="small" />