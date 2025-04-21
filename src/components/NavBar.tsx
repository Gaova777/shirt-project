import { FC } from "react";
import { Sections } from "../utilities/types";
import { Stack } from "@mui/material";
import { useSnapshot } from "valtio";
import state from "../store";


type NavBarProps = {
    onChange: (section: Sections) => void;
}

const Navbar: FC<NavBarProps> = ({ onChange }) => {
    const {section: active} = useSnapshot(state)
    
    return (
        <Stack 
            component={"nav"}
            position={"fixed"}
            zIndex={1}
            top={0}
            bottom={0}
            left={0}
            right={0}
            justifyContent={"space-between"}
            sx={{
                opacity:0,
                ...(active==="about" || active==="clothes" || active==="ubication" || active==="contact") 
                ? {} : {animation:"fade 1s ease forwards 1s"}
            }}
        >
            

        </Stack>
    )
}