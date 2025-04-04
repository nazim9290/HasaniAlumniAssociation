import { SeoDescription } from "./SeoDataDescription";
const title = "Hasania Alumni Association";
const imageUrl = "https://hasaniaalumni.org/images";
const baseUrl = "https://hasaniaalumni.org/";
const keywords = [
  "Hasania Alumni Association",
  "Hazi Madbor Ali Hasania Dakhil Madrasha",
  "Alumni Association Bangladesh",
  "Madrasha Alumni Network",
  "Bangladeshi Alumni Communities",
  "Educational Institutions in Dhaka",
  "Hasania Madrasha Graduates",
  "Vatara Dhaka Education",
  "Dhaka Educational Organizations",
  "Bangladesh Madrasha Education",
];

const seoData = {
  home: {
    title: `${title} - Home`,
    description: SeoDescription.home,
    keywords: keywords,
    url: baseUrl,
    image: `${imageUrl}/oghome.png`,
  },
  about: {
    title: `${title} - About`,
    description: SeoDescription.aboutUs,
    keywords: keywords,
    url: baseUrl,
    image: `${imageUrl}/ogabout.png`,
  },
  ourHistory: {
    title: `${title} - Our History`,
    description: SeoDescription.outHistory,
    keywords: keywords,
    url: baseUrl,
    image: `${imageUrl}/og-home.jpg`,
  },
  conveningCommittee: {
    title: `${title} - Our Convening Committee`,
    description: SeoDescription.conveningCommittee,
    keywords: keywords,
    url: baseUrl,
    image: `${imageUrl}/committe.jpg`,
  },
  constitution: {
    title: `${title} - Alumni Constitution`,
    description: SeoDescription.constitution,
    keywords: keywords,
    url: baseUrl,
    image: `${imageUrl}/punormiloniLogo.jpg`,
  },
  madrasahInfo: {
    title: `${title} - About Madrasah`,
    description: SeoDescription.madrasahInfo,
    keywords: keywords,
    url: baseUrl,
    image: `${imageUrl}/punormiloniLogo.jpg`,
  },
  madrasahTeacher: {
    title: `${title} - About Madrasah`,
    description: SeoDescription.madrasahTeacher,
    keywords: keywords,
    url: baseUrl,
    image: `${imageUrl}/punormiloniLogo.jpg`,
  },
  madrasahCommittee: {
    title: `${title} - Madrasah Committee`,
    description: SeoDescription.madrasahCommittee,
    keywords: keywords,
    url: baseUrl,
    image: `${imageUrl}/punormiloniLogo.jpg`,
  },
  event: {
    title: `${title} - Madrasah Event`,
    description: SeoDescription.event,
    keywords: keywords,
    url: baseUrl,
    image: `${imageUrl}/punormiloniLogo.jpg`,
  },
  alumniMember: {
    title: `${title} - Alumni Members`,
    description: SeoDescription.alumniMember,
    keywords: keywords,
    url: baseUrl,
    image: `${imageUrl}/punormiloniLogo.jpg`,
  },
  membership: {
    title: `${title} - Alumni Registration`,
    description: SeoDescription.membership,
    keywords: keywords,
    url: baseUrl,
    image: `${imageUrl}/punormiloniLogo.jpg`,
  },
  blog: {
    title: `${title} - Alumni Blog`,
    description: SeoDescription.blog,
    keywords: keywords,
    url: baseUrl,
    image: `${imageUrl}/punormiloniLogo.jpg`,
  },
  notice: {
    title: `${title} - Alumni Notice`,
    description: SeoDescription.notice,
    keywords: keywords,
    url: baseUrl,
    image: `${imageUrl}/punormiloniLogo.jpg`,
  },
};

export default seoData;
