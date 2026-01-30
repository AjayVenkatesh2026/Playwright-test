import { test, expect } from '@playwright/experimental-ct-react';
import React from 'react';
import { Button } from '../../../src/components/Button';

test('button mounts and is clickable', async ({ mount }) => {
  const component = await mount(<Button>Hi</Button>);
  const button = component.locator('button');
  await expect(button).toHaveText('Hi');
  await button.click();
});
