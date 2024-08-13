import { createSlice, PayloadAction } from "@reduxjs/toolkit";




interface BannerState {
    isLoading: boolean;
    data: any[]; // Use a more specific type if you have one
    error: string | null;
  }
  
  // Define the initial state using that type
  const initialState: BannerState = {
    isLoading: true,
    data: [],
    error: null,
  };
  
  // Create the slice
  export const bannerSlice = createSlice({
    name: "banner",
    initialState,
    reducers: {
      
      // Define any synchronous reducers if needed
      setLoading(state, action: PayloadAction<boolean>) {
        state.isLoading = action.payload;
        
      },
      setData: (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.data = action.payload;
      },

      setError(state, action: PayloadAction<string>) {
        state.error = action.payload;
      },
     
    },
   
  });
  
  // Export actions
  export const { setLoading, setError, setData } = bannerSlice.actions;
  
  // Export the reducer
  export default bannerSlice.reducer;

