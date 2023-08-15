import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import App from "./App";
import { InlineTypeQ } from "./components/1 InlineType/question";
import { InlineTypeS } from "./components/1 InlineType/solution";
import { InterfaceptionS } from "./components/3 Interfaception/solution";
import { InterfaceptionQ } from "./components/3 Interfaception/question";
import { InterfaceQ } from "./components/2 Interface/question";
import { InterfaceS } from "./components/2 Interface/solution";
import { OnSubmitQ } from "./components/10 OnSubmit/question";
import { OnSubmitS } from "./components/10 OnSubmit/solution";
import { UseEffectQ } from "./components/11 UseEffect/question";
import { UseEffectS } from "./components/11 UseEffect/solution";
import { UseRefQ } from "./components/12 UseRef/question";
import { UseRefS } from "./components/12 UseRef/solution";
import { OmitQ } from "./components/4 Omit/question";
import { OmitS } from "./components/4 Omit/solution";
import { OnClickQ } from "./components/6 OnClick/question";
import { OnClickS } from "./components/6 OnClick/solution";
import { BasicHookQ } from "./components/7 BasicHook/question";
import { BasicHookS } from "./components/7 BasicHook/solution";
import { CustomHookQ } from "./components/8 CustomHook/question";
import { CustomHookS } from "./components/8 CustomHook/solution";
import { UseReducerQ } from "./components/9 UseReducer/question";
import { UseReducerS } from "./components/9 UseReducer/solution";
import { Checkpoint1Q } from "./components/5 Checkpoint1-Departure-Board/question";
import { Checkpoint1S } from "./components/5 Checkpoint1-Departure-Board/solution";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "inline-type-q",
        element: <InlineTypeQ />,
      },
      {
        path: "inline-type-s",
        element: <InlineTypeS />,
      },
      {
        path: "interface-s",
        element: <InterfaceS />,
      },
      {
        path: "interface-q",
        element: <InterfaceQ />,
      },
      {
        path: "interfaception-s",
        element: <InterfaceptionS />,
      },
      {
        path: "interfaception-q",
        element: <InterfaceptionQ />,
      },
      {
        path: "omit-s",
        element: <OmitS />,
      },
      {
        path: "omit-q",
        element: <OmitQ />,
      },
      {
        path: "checkpoint-1-s",
        element: <Checkpoint1S />,
      },
      {
        path: "checkpoint-1-q",
        element: <Checkpoint1Q />,
      },
      {
        path: "on-click-s",
        element: <OnClickS />,
      },
      {
        path: "on-click-q",
        element: <OnClickQ />,
      },
      {
        path: "basic-hook-s",
        element: <BasicHookS />,
      },
      {
        path: "basic-hook-q",
        element: <BasicHookQ />,
      },
      {
        path: "custom-hook-s",
        element: <CustomHookS />,
      },
      {
        path: "custom-hook-q",
        element: <CustomHookQ />,
      },
      {
        path: "use-reducer-s",
        element: <UseReducerS />,
      },
      {
        path: "use-reducer-q",
        element: <UseReducerQ />,
      },
      {
        path: "on-submit-s",
        element: <OnSubmitS />,
      },
      {
        path: "on-submit-q",
        element: <OnSubmitQ />,
      },
      {
        path: "use-effect-s",
        element: <UseEffectS />,
      },
      {
        path: "use-effect-q",
        element: <UseEffectQ />,
      },
      {
        path: "use-ref-s",
        element: <UseRefS />,
      },
      {
        path: "use-ref-q",
        element: <UseRefQ />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
