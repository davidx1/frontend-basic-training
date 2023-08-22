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
import { ForwardRefS } from "./components/13 ForwardRef/solution";
import { ForwardRefQ } from "./components/13 ForwardRef/question";
import { Checkpoint2Q } from "./components/14 Checkpoint2-Departure-Search/question";
import { Checkpoint2S } from "./components/14 Checkpoint2-Departure-Search/solution";
import { ReturnTypeQ } from "./components/15 ReturnType/question";
import { ReturnTypeS } from "./components/15 ReturnType/solution";
import { ChildrenQ } from "./components/16 Children/question";
import { ChildrenS } from "./components/16 Children/solution";
import { RecordQ } from "./components/17 Record/question";
import { RecordS } from "./components/17 Record/solution";
import { OptionalChainingQ } from "./components/18 OptionalChaining/question";
import { RenderPropQ } from "./components/19 RenderProp/question";
import { RenderPropS } from "./components/19 RenderProp/solution";
import { Checkpoint3Q } from "./components/20 Checkpoint3-Departure-Control/question";
import { Checkpoint3S } from "./components/20 Checkpoint3-Departure-Control/soltuion";
import { Checkpoint4Q } from "./components/21 Checkpoint4-Departure-Booking/question";
import { Checkpoint4S } from "./components/21 Checkpoint4-Departure-Booking/solution";
import { ContextQ } from "./components/22 Context/question";
import { ContextS } from "./components/22 Context/solution";
import { OptionalChainingS } from "./components/18 OptionalChaining/solution";
import { FlexBoxQ } from "./components/23 FlexBox/question";
import { FlexBoxS } from "./components/23 FlexBox/solution";
import { NestedFlexQ } from "./components/24 NestedFlex/question";
import { NestedFlexS } from "./components/24 NestedFlex/solution";
import { Checkpoint5Q } from "./components/25 Checkpoint5-Dynamic-Input/question";
import { Checkpoint5S } from "./components/25 Checkpoint5-Dynamic-Input/solution";

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
      {
        path: "forward-ref-s",
        element: <ForwardRefS />,
      },
      {
        path: "forward-ref-q",
        element: <ForwardRefQ />,
      },
      {
        path: "checkpoint-2-s",
        element: <Checkpoint2S />,
      },
      {
        path: "checkpoint-2-q",
        element: <Checkpoint2Q />,
      },
      {
        path: "return-type-s",
        element: <ReturnTypeS />,
      },
      {
        path: "return-type-q",
        element: <ReturnTypeQ />,
      },
      {
        path: "children-s",
        element: <ChildrenS />,
      },
      {
        path: "children-q",
        element: <ChildrenQ />,
      },
      {
        path: "record-s",
        element: <RecordS />,
      },
      {
        path: "record-q",
        element: <RecordQ />,
      },
      {
        path: "optional-chaining-s",
        element: <OptionalChainingS />,
      },
      {
        path: "optional-chaining-q",
        element: <OptionalChainingQ />,
      },
      {
        path: "render-prop-s",
        element: <RenderPropS />,
      },
      {
        path: "render-prop-q",
        element: <RenderPropQ />,
      },
      {
        path: "checkpoint3-s",
        element: <Checkpoint3S />,
      },
      {
        path: "checkpoint3-q",
        element: <Checkpoint3Q />,
      },
      {
        path: "checkpoint-4-s",
        element: <Checkpoint4S />,
      },
      {
        path: "checkpoint-4-q",
        element: <Checkpoint4Q />,
      },
      {
        path: "context-s",
        element: <ContextS />,
      },
      {
        path: "context-q",
        element: <ContextQ />,
      },
      {
        path: "flexbox-s",
        element: <FlexBoxS />,
      },
      {
        path: "flexbox-q",
        element: <FlexBoxQ />,
      },
      {
        path: "nested-flex-s",
        element: <NestedFlexS />,
      },
      {
        path: "nested-flex-q",
        element: <NestedFlexQ />,
      },
      {
        path: "checkpoint-5-s",
        element: <Checkpoint5S />,
      },
      {
        path: "checkpoint-5-q",
        element: <Checkpoint5Q />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
