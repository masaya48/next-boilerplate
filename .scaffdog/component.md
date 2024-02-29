---
name: 'component'
root: '.'
output: 'app/_components/'
ignore: ['.']
questions:
  name:
    message: 'Please enter the component name.'
---

# `{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.tsx`

```typescript
import { FC } from 'react';

type Props = {};

export const {{ inputs.name | pascal }}: FC<Props> = ({ ...props }) => {
  return (
    <div className="">
      {{ inputs.name | pascal }} was genetated.
    </div>
  );
};

```

# `{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.stories.tsx`

```typescript
import type { Meta, StoryObj } from '@storybook/react';
import { {{ inputs.name | pascal }} } from './{{ inputs.name | pascal }}';

const meta = {
  component: {{ inputs.name | pascal }},
  parameters: {},
} satisfies Meta<typeof {{ inputs.name | pascal }}>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  play: async () => {},
};

```

# `{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.test.tsx`

```typescript
import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import * as stories from './{{ inputs.name | pascal }}.stories';

const { Default } = composeStories(stories);

describe('==={{ inputs.name | pascal }}', () => {

  test('Default', async () => {
    const { container } = render(<Default {...Default.args} />);

    await Default.play({ canvasElement: container });

    expect(container).toBeInTheDocument();
  });
});

```

# `{{ inputs.name | pascal }}/index.ts`

```typescript
export * from './{{ inputs.name | pascal }}';
```
