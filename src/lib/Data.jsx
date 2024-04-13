// import git from '../../public/Icons/'

const SocialLinks = [
  {
    name: "GitHub",
    link: "https://github.com/Adityakamble8450",
    icon: "../../public/Icons/github-f.svg",
    leavesWebsite: true,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/aditya-kamble-651400248/",
    icon: "../../public/Icons/linkedin-f.svg",
    leavesWebsite: true,
  },
  {
    name: "Twitter",
    link: "https://twitter.com/Aditya4902",
    icon: "../../public/Icons/Twitter.svg",
    leavesWebsite: true,
  },
  {
    name: "Email",
    link: "adityakamble9245@gmail.com",
    icon: "../../public/Icons/mail-f.svg",
    leavesWebsite: true,
  },
];

export const footer = {
  columns: [
    {
      title: "Pages",
      links: [
        {
          name: "Home",
          link: "/",
          leavesWebsite: false,
        },
        {
          name: "Projects",
          link: "/projects",
          leavesWebsite: false,
        },
      ],
    },
    {
      title: "Social",
      links: SocialLinks,
    },
  ],
};

export const Links = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Projects",
    path: "/projects",
  },
  {
    title: "About me",
    path: "/about",
  },
];

export default function findLinkByName(name) {
  for (const socialLink of SocialLinks) {
    if (socialLink.name === name) {
      return socialLink.link;
    }
  }
  return "/";
}

export const sourceCodeLink = "https://github.com/Adityakamble8450";

export const Email = "adityakamble9245@gmail.com";

// export default {
//     SocialLinks,
//     footer,
//     Links,
//     findLinkByName,
//     sourceCodeLink,
//     Email
// };
