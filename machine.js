(function (root) {
  function createMachine(states, transitions) {
    const known = new Set(states); const lookup = new Map();
    transitions.forEach(t => { if (!known.has(t.from) || !known.has(t.to)) throw new Error('Transition references an unknown state.'); lookup.set(`${t.from}\u0000${t.event}`, t.to); });
    return { states: [...states], transitions: transitions.map(t => ({...t})), initial: states[0], dispatch(state, event) { const to = lookup.get(`${state}\u0000${event}`); return to ? {state: to, valid: true} : {state, valid: false}; } };
  }
  root.StateMachine = { createMachine };
})(typeof module === 'undefined' ? window : module.exports);
