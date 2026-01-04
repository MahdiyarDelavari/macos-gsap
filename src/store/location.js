import { locations } from "@constants/location";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer"

const DEFAULT_LOCATION = locations.work


export const useLocationStore = create(immer((set) => ({
    activeLocation: DEFAULT_LOCATION,
    setActiveLocation: (location) => set(state => {
        state.activeLocation = location;
    }),

    resetActiveLocation: () => set(state => {
        state.activeLocation = DEFAULT_LOCATION;
    }),


})));
