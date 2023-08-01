import { createAsyncThunk } from "@reduxjs/toolkit";
import { createApi } from "store/createApi";

export const fetchAircrafts = createAsyncThunk(
    'aircraft/fetchAll',
    async (_, thunkAPI) => {
      const api = await createApi();
      try {
          const response = await api.aircraft.getAllAircrafts();
          console.dir({ response })
          return response.result.value.aircrafts;
      } catch (e) {
          return thunkAPI.rejectWithValue("Not now")
      }
    } 
)