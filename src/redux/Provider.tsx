'use client'
import React, { FC, PropsWithChildren } from 'react'
import { Provider } from 'react-redux'
// import { reduxStore } from './store'
import storeImport from './store'
import { PersistGate } from 'redux-persist/integration/react'
const { store, persistor } = storeImport
export const StoreProvider: FC<PropsWithChildren> = ({ children }) => {
	return <Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			{children}
		</PersistGate>
	</Provider>
}
