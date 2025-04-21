import { PUBLIC_PATH, SECTIONS } from "../utilities/constants";

const contents = {
    navbar: {
        logo: {
            src: `${PUBLIC_PATH}/assets/logo.png`,
            alt: "logo",
        },
        sections : [
            {
                title: "Home",
                key: SECTIONS[0],
            },
            {
                title: "About",
                key: SECTIONS[1],
            },
            {
                title: "Clothes",
                key: SECTIONS[2],
            },
            {
                title: "Ubication",
                key: SECTIONS[3],
            },
            {
                title: "Contact",
                key: SECTIONS[4],
            },
        ]
    }


}

