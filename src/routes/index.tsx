import { Title } from "@solidjs/meta";
import Counter from "~/components/Counter";
import { logHello } from "~/server/hello";
import { css } from "~/styled-system/css";

export default function Home() {
  return (
    <main>
      <Title>Hello World</Title>
      <h1>Hello world!</h1>
      <Counter />
      <p>
        Visit{" "}
        <a href="https://start.solidjs.com" target="_blank">
          start.solidjs.com
        </a>{" "}
        to learn how to build SolidStart apps.
      </p>

      <div class={css({ fontSize: "2xl", fontWeight: "bold" })}>Hello 🐼!</div>

      <button
        type="button"
        class="increment"
        on:click={() => {
          logHello("server action!!!");
        }}
      >
        server action
      </button>
    </main>
  );
}
