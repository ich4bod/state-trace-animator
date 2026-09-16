# State Trace Animator

An offline, static browser tool for inspecting deterministic finite-state machines. Edit comma-separated states, `state, event, state` transitions, and an event list; then build and play the trace. Invalid events remain visible without changing state.

Run the core deterministic test with `node test/machine.test.js`. Run locally with `docker compose up --build`; the app is served through Traefik at `https://state-trace-animator.ichabod-crane.net`.
