import { proxy } from 'valtio';
import { Sections } from '../utilities/types';

export type State = {
    section: Sections;
    transition: {
        duration: number;
    }
}

const state = proxy<State>({
    section: "navbar",
    transition: {
        duration: 750,
    },
});

export default state;