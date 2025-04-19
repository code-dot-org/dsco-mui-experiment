import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { MuiBreadcrumbs, MuiBreadcrumbsProps } from '../MuiBreadcrumbs'
import Link from '@mui/material/Link';

const meta: Meta<typeof MuiBreadcrumbs> = {
  title: 'DesignSystem/MUI/Breadcrumbs',
  component: MuiBreadcrumbs,
  subcomponents: { Link },
};
export default meta;

type Story = StoryObj<typeof MuiBreadcrumbs>;

export const Default: Story = {
  render: (args: MuiBreadcrumbsProps) => (
    <MuiBreadcrumbs
      {...args}
    >
      <Link href="https://studio.code.org/home" key="1">Breadcrumb 1</Link>,
      <Link href="https://studio.code.org/home" key="2">Breadcrumb 2</Link>,
      <Link href="https://studio.code.org/home" key="3">Breadcrumb 3</Link>,
      <Link href="https://studio.code.org/home" key="4">Breadcrumb 4</Link>,
      <Link href="https://studio.code.org/home" key="5">Breadcrumb 5</Link>,
    </MuiBreadcrumbs>
  ),
}

export const WithHomeIcon: Story = {
  render: (args: MuiBreadcrumbsProps) => (
    <MuiBreadcrumbs
      showHomeIcon
      {...args}
    >
      <Link href="https://studio.code.org/home" key="1">Breadcrumb 1</Link>,
      <Link href="https://studio.code.org/home" key="2">Breadcrumb 2</Link>,
      <Link href="https://studio.code.org/home" key="3">Breadcrumb 3</Link>,
      <Link href="https://studio.code.org/home" key="4">Breadcrumb 4</Link>,
      <Link href="https://studio.code.org/home" key="5">Breadcrumb 5</Link>,
    </MuiBreadcrumbs>
  ),
}
