import { createSlice } from "@reduxjs/toolkit";

 const yetkiSlice = createSlice({
  name: "yetkiSlice",

  initialState: {
    email: "",
    passwoed: "",
  },

  reducers: {
    kullaniciOlustur: () => {},

    kullaniciSil: () => {},
  },
});

export const {kullaniciOlustur,kullaniciSil}=yetkiSlice.actions

export default yetkiSlice.reducer