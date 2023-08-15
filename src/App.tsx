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
