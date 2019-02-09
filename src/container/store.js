import { createStore, applyMiddleware, compose } from "redux"
import { createLogger } from 'redux-logger'
import createSagaMiddleware from "redux-saga"
import reducers from "./reducer/index"
import rootSaga from "./saga"

const sagaMiddleware = createSagaMiddleware()
const logger = createLogger({
  level: "info",
  collapsed: true,
});

const middleware = [sagaMiddleware, logger]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(...middleware),
  )
)
sagaMiddleware.run(rootSaga)

export default store