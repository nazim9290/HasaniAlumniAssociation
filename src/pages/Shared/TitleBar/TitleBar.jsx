import { Box } from "@mui/material";
import "./TitleBar.css";


export default function TitleBar({ titleText }) {
    return (
        <div className="title-bar"
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
        >
            <hr className="style-seven" />
            <Box component="h2" sx={{ textAlign: 'center' }}>{titleText}</Box>
            <hr className="style-seven" />
        </div>
    )
}
