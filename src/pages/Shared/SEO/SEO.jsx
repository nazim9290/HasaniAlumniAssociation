import { Helmet } from "react-helmet";

const WebSEO = ({ seo }) => {
  return (
    <Helmet>
      <title>{seo.title}</title>
      {/* Open Graph for Facebook */}
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />

      {/* Twitter Card */}
      <meta name="twitter:title" content={seo.title} />

      <meta name="twitter:description" content={seo.description} />

      <meta property="twitter:url" content={seo.url} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
};

// Default props
WebSEO.defaultProps = {
  title: "Hasania Alumni Association",
  description:
    "হাজী মাদবর আলী হাসানিয়া দাখিল মাদ্রাসার  প্রাক্তন ও বর্তমান ছাত্র-ছাত্রীদের মাঝে সেতু বন্ধন সৃষ্টির মধ্য দিয়ে এ কমিউনিকেশন নেটওয়ার্ক-কে অসাধারণ এক উচ্চ মাত্রায় নিয়ে যাওয়ার লক্ষ্য নিয়ে গঠন করা হয়েছে “হাজী মাদবর আলী হাচানিয়া দাখিল মাদ্রাসা অ্যালামনাই অ্যাসোসিয়েশন”।",
  image:
    "https://res.cloudinary.com/nazim929/image/upload/v1743070406/purnomilonilogo_ivmnw4_-_Post_sj2vy2.png",
  url: "https://hasaniaalumni.org/",
  keywords: [
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
  ],
};

export default WebSEO;