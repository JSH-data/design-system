import type { Meta, StoryObj } from "@storybook/react";
import { Navigation } from "./navigation";

const meta = {
  title: "Example/Navigation",
  component: Navigation,
  tags: ["autodocs"],
} satisfies Meta<typeof Navigation>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Nav: Story = {
  args: {
    icon: "Icon",
    tabList: [
      {
        name: "Home",
        onClick: () => console.log("Home"),
      },
      {
        name: "Posts",
        onClick: () => console.log("Posts"),
      },
      {
        name: "Projects",
        onClick: () => console.log("Projects"),
      },
    ],
  },
  render: ({ icon, tabList }) => <Navigation icon={icon} tabList={tabList} />,
};
