import Hello from './hello.svelte';

new Hello({
  target: document.getElementById('content'),
  props: {
    name: 'Brian'
  }
});
