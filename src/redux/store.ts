import { combineReducers, configureStore, createStore } from '@reduxjs/toolkit'
import { userSlice } from './slices/userSlice'
import storage from './store-config'
import persistReducer from 'redux-persist/es/persistReducer'
import { create } from 'domain'
import persistStore from 'redux-persist/es/persistStore'
const persistConfig = {
	key: 'root',
	storage
}
const rootReducer = combineReducers({
	user: userSlice.reducer
})
const reduxStore = configureStore({
	reducer: {
		user: userSlice.reducer
	}
})
const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(persistedReducer)
const persistor = persistStore(store)
export default {
	reduxStore,
	store,
	persistor
}
