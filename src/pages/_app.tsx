import React, { FC, useEffect, useCallback, useState, ReactNode } from "react";
import { Provider as ReduxProvider } from "react-redux";
import { Store } from "redux";

import { createStore } from "../store/index";

let store = createStore();

export interface AppProps {
  Component: FC<any>;
  pageProps: ReactNode;
}

let rerender = () => undefined;

const App: FC<AppProps> = ({ Component, pageProps }) => {
  const [, updateState] = useState(0);
  const forceRerender = useCallback(
    () => updateState((state: number) => ++state) as undefined,
    []
  );

  useEffect(() => {
    rerender = () => forceRerender();
  }, [rerender, forceRerender]);

  // function renderReduxProvider(children: ReactNode) {
  //   if (!store) return children;
  //   return <ReduxProvider store={store}>{children}</ReduxProvider>;
  // }
  // if (!store) return <Component {...pageProps} />;
  if (!store) return <Component {...pageProps} />;

  return (
    <ReduxProvider store={store}>
      <Component {...pageProps} />
    </ReduxProvider>
  );
};

App.defaultProps = {
  Component: (f) => f,
  pageProps: {},
};

export default App;

(async () => {
  if (typeof window === "undefined") return;
  store = createStore();
  rerender();
})();
