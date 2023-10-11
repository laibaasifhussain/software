import { IconButton } from "@mui/material";

function IAIconButton(props) {
    const { arialabel, size, icon, onClick, sx } = props

    return <>
        <IconButton aria-label={arialabel} size={size} onClick={onClick} sx={sx}>
            {icon}
        </IconButton>
    </>
}

export default IAIconButton;

// For pass Component

// <IAIconButton size="large" icon={<DeleteIcon />} />