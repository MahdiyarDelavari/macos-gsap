import { immer } from 'zustand/middleware/immer'
import { create } from 'zustand'
import { INITIAL_Z_INDEX, WINDOW_CONFIG } from '@constants'

const useWindowStore = create(immer((set) => ({
    windows: WINDOW_CONFIG,
    nextZIndex: INITIAL_Z_INDEX + 1,

    openWindow: (WindowKey, data = null) => set(state => { 
        const windowState = state.windows[WindowKey];
        if(!windowState) return;
        windowState.isOpen = true;
        windowState.zIndex = state.nextZIndex;
        windowState.data = data ?? windowState.data;
        state.nextZIndex ++;

    }),
    closeWindow: (WindowKey) => set(state => {
        const windowState = state.windows[WindowKey];
        if (!windowState) return;
        windowState.isOpen = false;
        windowState.zIndex = INITIAL_Z_INDEX;
        windowState.data = null;

    }),
    focusWindow: (WindowKey) => set(state => { 
        const windowState = state.windows[WindowKey];
        windowState.zIndex = state.nextZIndex++;

    }),

})));

export default useWindowStore;