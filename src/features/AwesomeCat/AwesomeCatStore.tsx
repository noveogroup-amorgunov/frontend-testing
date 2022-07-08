import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { getGiphy } from '../../services/giphy'

interface CounterState {
  value: number;
  catImageUrl?: string;
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
}

export const fetchRandomCat = createAsyncThunk(
  'awesomeModule/fetchRandomCat',
  async () => {
    const [response] = await getGiphy('cat');
    return response;
  }
)

const initialState = {
  value: 0,
  loading: 'idle',
} as CounterState

const awesomeCatSlice = createSlice({
  name: 'awesomeCat',
  initialState,
  reducers: {
    increment(state) {
      state.value++
    },
    decrement(state) {
      state.value--
    },
    incrementByAmount(state, action: PayloadAction<number>) {
      state.value += action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRandomCat.fulfilled, (state, action) => {
      state.catImageUrl = action.payload;
      state.loading = 'succeeded';
    });
    builder.addCase(fetchRandomCat.pending, (state, action) => {
      state.loading = 'pending';
    });
  },
})

export const { increment, decrement, incrementByAmount } = awesomeCatSlice.actions;
export default awesomeCatSlice.reducer;
