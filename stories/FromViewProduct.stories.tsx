import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import CFromViewroduct from "./FromViewProduct";

const product = {
  id: 20,
  title: "DANVOUY Womens T Shirt Casual Cotton Short",
  price: 12.99,
  description:
    "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
  category: "women's clothing",
  image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
  rating: {
    rate: 3.6,
    count: 145,
  },
};
export default {
  title: "Example/CFromViewroduct",
  component: CFromViewroduct,
} as ComponentMeta<typeof CFromViewroduct>;

const Template: ComponentStory<typeof CFromViewroduct> = (args: any) => (
  <CFromViewroduct {...args} />
);
export const Default = Template.bind({});
Default.args = {
  product: product,
};
