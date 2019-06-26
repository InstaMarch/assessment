import { run } from "@cycle/run";
import { div, label, input, hr, h1, makeDOMDriver } from "@cycle/dom";

function main(sources) {
  const input$ = sources.DOM.select(".input-class").events("change");
  const name$ = input$.map(ev => ev.target.checked).startWith("");
  const vdom$ = name$.map(toggled =>
    div([
      label("Name:"),
      input(".input-class", { attrs: { type: "checkbox" } }),
      hr(),
      h1(`Hello ${toggled ? "Rob" : "n/a"}`)
    ])
  );

  return {
    DOM: vdom$
  };
}

run(main, {
  DOM: makeDOMDriver("#main-container")
});
