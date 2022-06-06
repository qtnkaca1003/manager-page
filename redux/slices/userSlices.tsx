import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAccount, IToken, IUser } from "../../types/interface";

type initialStateType = {
  propsUsers: IUser[];
  createUser: IAccount[];
  User: IUser;
  UserEdit: IUser;
  token: IToken;
};
const createUser: IAccount[] = [];
const propsUsers: IUser[] = [];
const User: IUser = {
  avatar: "",
  email: "",
  first_name: "",
  id: 0,
  last_name: "",
};
const UserEdit: IUser = {
  avatar: "",
  email: "",
  first_name: "",
  id: 0,
  last_name: "",
};

const token: IToken = {
  token: "",
};
const initialState: initialStateType = {
  propsUsers,
  User,
  token,
  UserEdit,
  createUser,
};

export const userSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    addToken: (state, action: PayloadAction<IToken>) => {
      state.token.token = action.payload.token;
    },
    deleteToken: (state, action: PayloadAction<IToken>) => {
      state.token.token = action.payload.token;
    },
    addUsers: (state, action: PayloadAction<IUser[]>) => {
      state.propsUsers = [...action.payload];
    },
    addUser: (state, action: PayloadAction<IUser>) => {
      state.User.id = action.payload.id;
      state.User.email = action.payload.email;
      state.User.first_name = action.payload.first_name;
      state.User.last_name = action.payload.last_name;
      state.User.avatar = action.payload.avatar;
    },
    addUserEdit: (state, action: PayloadAction<IUser>) => {
      state.UserEdit.id = action.payload.id;
      state.UserEdit.email = action.payload.email;
      state.UserEdit.first_name = action.payload.first_name;
      state.UserEdit.last_name = action.payload.last_name;
      state.UserEdit.avatar = action.payload.avatar;
      state.UserEdit.updatedAt = action.payload.updatedAt;
    },
    deleteUser: (state, action) => {
      const index = action.payload;
      const indexUserOfObject = state.propsUsers.findIndex((object) => {
        return object.id == action.payload;
      });
      if (index > -1) {
        state.propsUsers.splice(indexUserOfObject, 1);
      }
    },
    addCreateUser: (state, action: PayloadAction<IAccount>) => {
      state.createUser.push(action.payload)
    },
  },
});
export const {
  addUsers,
  addUser,
  addToken,
  deleteToken,
  addUserEdit,
  deleteUser,
  addCreateUser
} = userSlice.actions;
export default userSlice.reducer;
