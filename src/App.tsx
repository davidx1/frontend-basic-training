import { Outlet } from "react-router-dom";

function App() {
  return (
    <div id="root">
      <aside id="sidebar">
        <h1>Frontend Basic Training</h1>
        <nav>
          <ul>
            <li>
              <a href={`/inline-type-q`}>1: Inline Type - question</a>
            </li>
            <li>
              <a href={`/inline-type-s`}>1: Inline Type - solution</a>
            </li>
            <li>
              <a href={`/interface-q`}>2: Interface - question</a>
            </li>
            <li>
              <a href={`/interface-s`}>2: Interface - solution</a>
            </li>
            <li>
              <a href={`/interfaception-q`}>3: Interfaception - question</a>
            </li>
            <li>
              <a href={`/interfaception-s`}>3: Interfaception - solution</a>
            </li>
            <li>
              <a href={`/omit-q`}>4: Omit - question</a>
            </li>
            <li>
              <a href={`/omit-s`}>4: Omit - solution</a>
            </li>
            <li>
              <a href={`/checkpoint-1-q`}>5: Checkpoint 1 - question</a>
            </li>
            <li>
              <a href={`/checkpoint-1-s`}>5: Checkpoint 1 - solution</a>
            </li>
            <li>
              <a href={`/on-click-q`}>6: On Click- question</a>
            </li>
            <li>
              <a href={`/on-click-s`}>6: On Click- solution</a>
            </li>
            <li>
              <a href={`/basic-hook-q`}>7: Basic Hook - question</a>
            </li>
            <li>
              <a href={`/basic-hook-s`}>7: Basic Hook - solution</a>
            </li>
            <li>
              <a href={`/custom-hook-q`}>8: Custom Hook - question</a>
            </li>
            <li>
              <a href={`/custom-hook-s`}>8: Custom Hook - solution</a>
            </li>
            <li>
              <a href={`/use-reducer-q`}>9: Use Reducer - question</a>
            </li>
            <li>
              <a href={`/use-reducer-s`}>9: Use Reducer - solution</a>
            </li>
            <li>
              <a href={`/on-submit-q`}>10: On Submit - question</a>
            </li>
            <li>
              <a href={`/on-submit-s`}>10: On Submit - solution</a>
            </li>
            <li>
              <a href={`/use-effect-q`}>11: Use Effect - question</a>
            </li>
            <li>
              <a href={`/use-effect-s`}>11: Use Effect - solution</a>
            </li>
            <li>
              <a href={`/use-ref-q`}>12: Use Ref - question</a>
            </li>
            <li>
              <a href={`/use-ref-s`}>12: Use Ref - solution</a>
            </li>
            <li>
              <a href={`/forward-ref-q`}>13: Forward Ref - question</a>
            </li>
            <li>
              <a href={`/forward-ref-s`}>13: Forward Ref - solution</a>
            </li>
            <li>
              <a href={`/checkpoint-2-q`}>14: Checkpoint 2 - question</a>
            </li>
            <li>
              <a href={`/checkpoint-2-s`}>14: Checkpoint 2 - solution</a>
            </li>
            <li>
              <a href={`/return-type-q`}>15: Return Type - question</a>
            </li>
            <li>
              <a href={`/return-type-s`}>15: Return Type - solution</a>
            </li>
            <li>
              <a href={`/children-q`}>16: Children - question</a>
            </li>
            <li>
              <a href={`/children-s`}>16: Children - solution</a>
            </li>
            <li>
              <a href={`/record-q`}>17: Record - question</a>
            </li>
            <li>
              <a href={`/record-s`}>17: Record - solution</a>
            </li>
            <li>
              <a href={`/optional-chaining-q`}>
                18: Optional Chaining - question
              </a>
            </li>
            <li>
              <a href={`/optional-chaining-s`}>
                18: Optional Chaining - solution
              </a>
            </li>
            <li>
              <a href={`/render-prop-q`}>19: Render Prop - question</a>
            </li>
            <li>
              <a href={`/render-prop-s`}>19: Render Prop - solution</a>
            </li>
            <li>
              <a href={`/checkpoint-3-q`}>20: Checkpoint 3 - question</a>
            </li>
            <li>
              <a href={`/checkpoint-3-s`}>20: Checkpoint 3 - solution</a>
            </li>
            <li>
              <a href={`/checkpoint-4-q`}>21: Checkpoint 4 - question</a>
            </li>
            <li>
              <a href={`/checkpoint-4-s`}>21: Checkpoint 4 - solution</a>
            </li>
            <li>
              <a href={`/context-q`}>22: Context - question</a>
            </li>
            <li>
              <a href={`/context-s`}>22: Context - solution</a>
            </li>
          </ul>
        </nav>
      </aside>
      <div id="detail">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
