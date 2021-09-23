import { createStore, applyMiddleware } from "redux";
// logger is middleware that logs each and every activity that happens

// middleware is a function that takes the action that happenend
// do some thing to it and then pass it to our reducers
// Logger is a middleware because it takes the action and logg it to us before it pass it
// to our reducers
import logger from "redux-logger";
// persistStore allow our broswer to cach our data
import { persistStore } from "redux-persist";

import rootRoducer from "./root-roducer";

const middlewares = [logger];

// if (process.env.NODE_ENV === 'development') {
//     middlewares.push()
// }
export const store = createStore(rootRoducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store);

