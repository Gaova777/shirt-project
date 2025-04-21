import React, {FC} from "react";
import { Sections } from "../utilities/types";
import { Stack } from "@mui/material";
import { type StackProps } from "@mui/material/Stack";

type SectionProps = StackProps & {
    dataSection: Sections;
    children: React.ReactNode;
    sx?:StackProps["sx"];
}

const Section: FC<SectionProps> = ({ children, dataSection, sx = {},...props}) => {
    return (
        <Stack
            className="section"
            component="section"
            width="100%"
            height="100vh"
            data-section={dataSection}
            sx={{
                "& .fp-watermark": {
                    display: "none",
                },
                ...sx,
            }}
            {...props}
        >
            <Stack>
                {children}
            </Stack>
        </Stack>
    );
}

export default Section;