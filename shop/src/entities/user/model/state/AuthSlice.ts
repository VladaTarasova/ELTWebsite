import { IUserState } from 'entities/user/lib';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: IUserState = {
    user: null,
    isLogout: false,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logIn: (state: IUserState, action: PayloadAction<IUserState>) => {
            const { user } = action.payload;
            state.user = user;
            state.isLogout = false;
        },
        logOut: (state: IUserState) => {
            state.user = null;
            state.isLogout = true;
        },
    },
});

export const { logIn, logOut } = authSlice.actions;
