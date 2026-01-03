import { locations } from "@constants/location";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer"

const DEFAULT_LOCATION = locations.work


const useLoacationStore = create(immer((set) => ({
    activelocation: DEFAULT_LOCATION,
    setActiveLocation: (location) => set(state => {
        state.activelocation = location;
    }),

    resetActiveLocation: () => set(state => {
        state.activelocation = DEFAULT_LOCATION;
    }),
    

})));
