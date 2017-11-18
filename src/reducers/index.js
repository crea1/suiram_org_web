export const types = {
    INIT_APP: 'INIT_APP',
    INIT_APP_SUCCESS: 'INIT_APP_SUCCESS',
    SAVE_APP_CONTEXT: 'SAVE_APP_CONTEXT',

    OPEN_MENU: 'OPEN_MENU',
};

export const actions = {
    initApp: () => ({ type: types.INIT_APP }),
    initAppSuccess: () => ({ type: types.INIT_APP_SUCCESS }),
    saveAppContext: (context) => ({ type: types.SAVE_APP_CONTEXT, context}),

    openMenu: () => ({ type: types.OPEN_MENU}),
};

const initialState = {
    initialized: false,
    menuOpen: false,
};

const behaviours = {
    [ types.INIT_APP_SUCCESS ](state, action) {
        return { ...state, initialized: true };
    },
    [ types.SAVE_APP_CONTEXT ](state, action) {
        return { ...state, context: action.context };
    },
    [ types.OPEN_MENU](state) {
        return {
            ...state,
            menuOpen: !state.menuOpen,
        };
    },
};

const reducers = (state = initialState, action = {}) => {
    const behaviour = behaviours[action.type];
    return behaviour ? behaviour(state, action) : state;
};

export default reducers;
