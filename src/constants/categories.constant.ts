import { Category } from "@interfaces/category.interface";
import BusinessIcon from "@public/icons/categories/business-icon.svg";
import EconomyIcon from "@public/icons/categories/economy-icon.svg";
import StartupIcon from "@public/icons/categories/startup-icon.svg";
import TechnologyIcon from "@public/icons/categories/technology-icon.svg";

export const categories: Record<
  Category,
  { icon: string; description: string }
> = {
  startup: {
    icon: StartupIcon,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
  },
  business: {
    icon: BusinessIcon,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
  },
  economy: {
    icon: EconomyIcon,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
  },
  technology: {
    icon: TechnologyIcon,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
  },
};
