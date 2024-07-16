import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from "./typography";

const meta = {
  title: "Example/Typography",
  component: Typography,
  tags: ["autodocs"],
} satisfies Meta<typeof Typography>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Typo: Story = {
  args: {
    variant: "titlePage",
    children: "Awesome FONT!!!",
  },
  render: ({ children }) => (
    <>
      <Typography variant="titleHero">{children}</Typography>
      <br />
      <Typography variant="titlePage">{children}</Typography>
      <br />
      <Typography variant="subtitle">{children}</Typography>
      <br />
      <Typography variant="heading">{children}</Typography>
      <br />
      <Typography variant="subHeading">{children}</Typography>
      <br />
      <Typography variant="body">{children}</Typography>
    </>
  ),
};
