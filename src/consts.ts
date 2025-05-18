import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Anurag's Dev Blog",
  EMAIL: "anuragdeore125@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION:
    "Explore the insights and technical expertise of a software engineer through articles, tutorials, and projects focused on coding, development, and technology trends.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const SOCIALS: Socials = [
  {
    NAME: "Portfolio",
    HREF: "https://anruagdeore.com",
  },
  {
    NAME: "Github",
    HREF: "https://github.com/anurag-deore",
  },
  {
    NAME: "Linkedin",
    HREF: "https://www.linkedin.com/in/anuragdeore",
  },
];
