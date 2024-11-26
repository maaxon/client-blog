import { Tags } from "@/constants/tags";
import { Blog, categories } from "@/types";

import { authors_mock } from "./authors-mock";

export const posts_mock: Blog[] = [
  {
    id: "1",
    category: categories.Startup,
    author: authors_mock[0],
    publish_date: new Date("2022-05-23"),
    title: "Step-by-step guide to choosing great font pairs",
    title_image:
      "https://fastly.picsum.photos/id/961/2000/1500.jpg?hmac=xnqH3hZembbq7kLFE8V0Lj-RVw_9MIaMX-XZppB42i8",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    content: [
      {
        type: "heading",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      },
      {
        type: "paragraph",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.",
      },
      {
        type: "heading",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      },
      {
        type: "paragraph",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.",
      },
      {
        type: "heading",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      },
      {
        type: "paragraph",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.",
      },
      {
        type: "heading",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      },
      {
        type: "paragraph",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.",
      },
    ],
    tags: [Tags.Business, Tags.Marketing, Tags.Screen],
  },
  {
    id: "2",
    category: categories.Business,
    author: authors_mock[1],
    publish_date: new Date("2023-04-21"),
    title: "Step-by-step guide to choosing great font pairs",
    title_image:
      "https://images.pexels.com/photos/1838640/pexels-photo-1838640.jpeg",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    content: [
      {
        type: "heading",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      },
      {
        type: "paragraph",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.",
      },
      {
        type: "heading",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      },
      {
        type: "paragraph",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.",
      },
      {
        type: "heading",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      },
      {
        type: "paragraph",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.",
      },
      {
        type: "heading",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      },
      {
        type: "paragraph",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.",
      },
    ],
    tags: [Tags.Technology, Tags.Business, Tags.Experience],
  },
  {
    id: "3",
    category: categories.Startup,
    author: authors_mock[2],
    publish_date: new Date("2023-05-1"),
    title: "8 Figma design systems that you can download for free today.",
    title_image:
      "https://fastly.picsum.photos/id/176/2000/1500.jpg?hmac=SjB0gQR3Khn2q56U-rwKyWynt_VdUq6kzv_FlJBtRwc",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    content: [
      {
        type: "heading",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      },
      {
        type: "paragraph",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.",
      },
      {
        type: "heading",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      },
      {
        type: "paragraph",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.",
      },
      {
        type: "heading",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      },
      {
        type: "paragraph",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.",
      },
      {
        type: "heading",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      },
      {
        type: "paragraph",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.",
      },
    ],
    tags: [Tags.Screen, Tags.Marketing, Tags.Life],
  },
  {
    id: "4",
    category: categories.Startup,
    author: authors_mock[3],
    publish_date: new Date("2023-05-1"),
    title: "8 Figma design systems that you can download for free today.",
    title_image:
      "https://fastly.picsum.photos/id/176/2000/1500.jpg?hmac=SjB0gQR3Khn2q56U-rwKyWynt_VdUq6kzv_FlJBtRwc",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    content: [
      {
        type: "heading",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      },
      {
        type: "paragraph",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.",
      },
      {
        type: "heading",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      },
      {
        type: "paragraph",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.",
      },
      {
        type: "heading",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      },
      {
        type: "paragraph",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.",
      },
      {
        type: "heading",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      },
      {
        type: "paragraph",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.",
      },
    ],
    tags: [Tags.Experience, Tags.Business, Tags.Life],
  },
  {
    id: "5",
    category: categories.Startup,
    author: authors_mock[0],
    publish_date: new Date("2022-05-23"),
    title: "Step-by-step guide to choosing great font pairs",
    title_image:
      "https://fastly.picsum.photos/id/961/2000/1500.jpg?hmac=xnqH3hZembbq7kLFE8V0Lj-RVw_9MIaMX-XZppB42i8",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    content: [
      {
        type: "heading",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      },
      {
        type: "paragraph",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.",
      },
      {
        type: "heading",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      },
      {
        type: "paragraph",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.",
      },
      {
        type: "heading",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      },
      {
        type: "paragraph",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.",
      },
      {
        type: "heading",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      },
      {
        type: "paragraph",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.",
      },
    ],
    tags: [Tags.Technology, Tags.Screen, Tags.Marketing],
  },
  {
    id: "6",
    category: categories.Startup,
    author: authors_mock[2],
    publish_date: new Date("2023-05-1"),
    title: "8 Figma design systems that you can download for free today.",
    title_image:
      "https://fastly.picsum.photos/id/176/2000/1500.jpg?hmac=SjB0gQR3Khn2q56U-rwKyWynt_VdUq6kzv_FlJBtRwc",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    content: [
      {
        type: "heading",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      },
      {
        type: "paragraph",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.",
      },
      {
        type: "heading",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      },
      {
        type: "paragraph",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.",
      },
      {
        type: "heading",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      },
      {
        type: "paragraph",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.",
      },
      {
        type: "heading",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      },
      {
        type: "paragraph",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.",
      },
    ],
    tags: [Tags.Marketing, Tags.Life, Tags.Experience],
  },
  {
    id: "7",
    category: categories.Startup,
    author: authors_mock[3],
    publish_date: new Date("2023-05-1"),
    title: "8 Figma design systems that you can download for free today.",
    title_image:
      "https://fastly.picsum.photos/id/176/2000/1500.jpg?hmac=SjB0gQR3Khn2q56U-rwKyWynt_VdUq6kzv_FlJBtRwc",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    content: [
      {
        type: "heading",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      },
      {
        type: "paragraph",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.",
      },
      {
        type: "heading",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      },
      {
        type: "paragraph",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.",
      },
      {
        type: "heading",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      },
      {
        type: "paragraph",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.",
      },
      {
        type: "heading",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      },
      {
        type: "paragraph",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.",
      },
    ],
    tags: [Tags.Business, Tags.Screen, Tags.Technology],
  },
  {
    id: "8",
    category: categories.Startup,
    author: authors_mock[0],
    publish_date: new Date("2022-05-23"),
    title: "Step-by-step guide to choosing great font pairs",
    title_image:
      "https://fastly.picsum.photos/id/961/2000/1500.jpg?hmac=xnqH3hZembbq7kLFE8V0Lj-RVw_9MIaMX-XZppB42i8",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    content: [
      {
        type: "heading",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      },
      {
        type: "paragraph",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.",
      },
      {
        type: "heading",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      },
      {
        type: "paragraph",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.",
      },
      {
        type: "heading",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      },
      {
        type: "paragraph",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.",
      },
      {
        type: "heading",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      },
      {
        type: "paragraph",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.",
      },
    ],
    tags: [Tags.Experience, Tags.Marketing, Tags.Screen],
  },
  {
    id: "9",
    category: categories.Startup,
    author: authors_mock[2],
    publish_date: new Date("2023-05-1"),
    title: "8 Figma design systems that you can download for free today.",
    title_image:
      "https://fastly.picsum.photos/id/176/2000/1500.jpg?hmac=SjB0gQR3Khn2q56U-rwKyWynt_VdUq6kzv_FlJBtRwc",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    content: [
      {
        type: "heading",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      },
      {
        type: "paragraph",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.",
      },
      {
        type: "heading",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      },
      {
        type: "paragraph",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.",
      },
      {
        type: "heading",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      },
      {
        type: "paragraph",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.",
      },
      {
        type: "heading",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      },
      {
        type: "paragraph",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.",
      },
    ],
    tags: [Tags.Technology, Tags.Life, Tags.Business],
  },
  {
    id: "10",
    category: categories.Startup,
    author: authors_mock[3],
    publish_date: new Date("2023-05-1"),
    title: "8 Figma design systems that you can download for free today.",
    title_image:
      "https://fastly.picsum.photos/id/176/2000/1500.jpg?hmac=SjB0gQR3Khn2q56U-rwKyWynt_VdUq6kzv_FlJBtRwc",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    content: [
      {
        type: "heading",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      },
      {
        type: "paragraph",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.",
      },
      {
        type: "heading",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      },
      {
        type: "paragraph",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.",
      },
      {
        type: "heading",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      },
      {
        type: "paragraph",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.",
      },
      {
        type: "heading",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      },
      {
        type: "paragraph",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.",
      },
    ],
    tags: [Tags.Screen, Tags.Business, Tags.Experience],
  },
  {
    id: "11",
    category: categories.Startup,
    author: authors_mock[0],
    publish_date: new Date("2022-05-23"),
    title: "Step-by-step guide to choosing great font pairs",
    title_image:
      "https://fastly.picsum.photos/id/961/2000/1500.jpg?hmac=xnqH3hZembbq7kLFE8V0Lj-RVw_9MIaMX-XZppB42i8",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    content: [
      {
        type: "heading",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      },
      {
        type: "paragraph",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.",
      },
      {
        type: "heading",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      },
      {
        type: "paragraph",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.",
      },
      {
        type: "heading",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      },
      {
        type: "paragraph",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.",
      },
      {
        type: "heading",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      },
      {
        type: "paragraph",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.",
      },
    ],
    tags: [Tags.Life, Tags.Marketing, Tags.Technology],
  },
  {
    id: "12",
    category: categories.Startup,
    author: authors_mock[0],
    publish_date: new Date("2022-05-23"),
    title: "Step-by-step guide to choosing great font pairs",
    title_image:
      "https://fastly.picsum.photos/id/961/2000/1500.jpg?hmac=xnqH3hZembbq7kLFE8V0Lj-RVw_9MIaMX-XZppB42i8",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    content: [
      {
        type: "heading",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      },
      {
        type: "paragraph",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.",
      },
      {
        type: "heading",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      },
      {
        type: "paragraph",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.",
      },
      {
        type: "heading",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      },
      {
        type: "paragraph",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.",
      },
      {
        type: "heading",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      },
      {
        type: "paragraph",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.",
      },
    ],
    tags: [Tags.Experience, Tags.Screen, Tags.Marketing],
  },
];

export const last_post = posts_mock[0];
export const featured_post = posts_mock[1];


