import { render } from '@testing-library/svelte';
import Hello from '../hello.svelte';

describe('Hello component', () => {
  test('should render component correctly with defaults', () => {
    const { container } = render(Hello);
    expect(container).toContainHTML('Hello Anonymous!');
  });

  test('should render component correctly with "name" prop', () => {
    const { container } = render(Hello, { props: { name: 'Brian' }});
    expect(container).toContainHTML('Hello Brian!');
  });
});
