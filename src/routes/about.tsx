import { Title } from "@solidjs/meta";
import type { Component } from "solid-js";
import { css } from "~/styled-system/css";

export default function Home() {
  return (
    <main>
      <Title>About</Title>
      <h1>About</h1>

      <div class={css({ fontSize: "2xl", fontWeight: "bold" })}>Hello 🐼!</div>
    </main>
  );
}
