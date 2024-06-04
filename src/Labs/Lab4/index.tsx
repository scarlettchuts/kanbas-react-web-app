import ArrayStateVariable from "./ArrayStateVariable";
import BooleanStateVariables from "./BooleanStateVariables";
import ClickEvent from "./ClickEvent";
import Counter from "./Counter";
import DateStateVariable from "./DateStateVariable";
import EventObject from "./EventObject";
import ObjectStateVariable from "./ObjectStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import StringStateVariables from "./StringStateVariables";
import ReduxExamples from "./ReduxExamples";
import Todolist from "./ReduxExamples/todos/TodoList";

export default function Lab4() {
  function sayHello() {
    alert("Hello");
  }
  return (
    <div id="wd-lab4">
      <h1>Lab 4</h1>;
      <hr />
      <ClickEvent />;
      <PassingDataOnEvent />;
      <PassingFunctions theFunction={sayHello} />;
      <EventObject />;
      <Counter />;
      <BooleanStateVariables />;
      <StringStateVariables />;
      <DateStateVariable />;
      <ObjectStateVariable />;
      <ArrayStateVariable />;
      <ParentStateComponent />;
      <ReduxExamples />;
      <Todolist />;
    </div>
  );
}
