import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { setConfig } from 'react-hot-loader'
import TestApp from './TestApp'

setConfig({ logLevel: 'debug' })

const store = createStore((state = {}) => state)

render(
	<Provider store={store}>
		<TestApp />
	</Provider>,
	document.getElementById('root'),
)
