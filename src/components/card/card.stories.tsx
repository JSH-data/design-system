import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./card";

const meta = {
  title: "Example/Card",
  component: Card,
  tags: ["autodocs"],
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CardComponent: Story = {
  args: {
    title: "This is a Main Title",
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas faucibus, nisl sit amet rhoncus iaculis, sem justo tincidunt nunc, vitae malesuada mauris nunc sed magna. Sed pretium ac tortor a aliquet. Aenean ut ipsum tempor, mollis est et, tincidunt nibh. Nulla in pharetra nisl, at maximus lectus. Mauris id purus vitae ante bibendum aliquet nec sit amet nunc. Nulla eu fermentum justo. Curabitur eget auctor augue. Fusce scelerisque, purus id porta maximus, arcu nunc egestas mi, ut blandit ipsum lacus id lacus. Integer vulputate dui eget neque semper, eget aliquet odio sollicitudin.\n" +
      "\n",
    date: "2022-01-01",
    id: "12121",
  },
  render: (props) => <Card {...props} />,
};
