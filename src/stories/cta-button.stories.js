import CtaButton from "./cta-button.vue";

export default {
  title: "Common/cta-button",
  component: CtaButton,
  parameters: {
    componentSubtitle: "common button component",
  },
  argTypes: {
    inputText: { control: "text" },
    specType: {
      control: { type: "select" },
      options: [
        "P-CTA",
        "Save-CTA",
        "Reject-CTA",
        "Select-CTA",
        "ICON-CTA",
        "Cancle-CTA",
      ],
    },
    active: { control: "boolean" },
    disabled: { control: "boolean" },
    colorType: {
      control: { type: "select" },
      options: [
        "blue (default)",
        "blue-fill",
        "red",
        "red-fill",
        "green",
        "green-fill",
        "white",
      ],
    },
    buttonType: {
      control: { type: "select" },
      options: [
        "default",
        "dropdown",
        "date-picker",
        "upload",
        "export",
        "text",
        "text dropdown",
      ],
    },
    size: {
      control: { type: "radio" },
      options: ["default", "small"],
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { CtaButton },
  template:
    '<cta-button v-bind="$props" @click="clickHandler">{{ inputText }}</cta-button>',
});

export const Button = Template.bind({});
Button.args = {
  inputText: "button",
  styleProps: "",
  colorType: "",
  buttonType: "",
  size: "",
  clickHandler: () => console.log("testing..."),
};

export const Primary = Template.bind({});
Primary.args = {
  inputText: "Primary",
  styleProps: "",
  colorType: "blue-fill",
  buttonType: "",
  size: "",
  clickHandler: () => console.log("testing..."),
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...Primary.args,
  inputText: "Secondary",
  colorType: "blue",
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  ...Primary.args,
  inputText: "Tertiary",
  colorType: "text",
};
