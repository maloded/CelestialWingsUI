import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAircraft } from "store/models/IAircraft";
import { fetchAircrafts } from "./ActionCreators";



interface AircraftState {
  aircrafts: IAircraft[];
  isLoading: boolean;
  error: string;
}

const initialState: AircraftState = {
  aircrafts: [],
  isLoading: false,
  error: '',
};

export const aircraftSlice = createSlice({
  name: 'aircrafts',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAircrafts.fulfilled.type]: (state, action: PayloadAction<IAircraft[]>) => {
      state.isLoading = false;
      state.error = ''
      state.aircrafts = action.payload;
    },
    [fetchAircrafts.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchAircrafts.rejected.type]: (state,  action: PayloadAction<string>) => {
        state.isLoading = false;
        state.error = action.payload
    }
  }
});

export default aircraftSlice.reducer;