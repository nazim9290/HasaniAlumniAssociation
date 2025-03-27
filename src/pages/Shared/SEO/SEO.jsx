import { Helmet } from "react-helmet";

const SEO = ({ title, description,image }) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />

            {/* Open Graph for Facebook */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description}  />
            {image &&<meta property="og:image" content={image} />}
            <meta property="og:url" content="https://hasaniaalumni.org/" />
            <meta property="og:type" content="website" />

            {/* Twitter Card */}
            <meta name="twitter:title" content={title}  />
            <meta name="twitter:description" content={description}  />
            <meta property="twitter:url" content="https://hasaniaalumni.org/" />
            {image &&<meta name="twitter:image" content={image}/>}
            <meta name="twitter:card" content="summary_large_image" />
        </Helmet>
    );
};

// Default props
SEO.defaultProps = {
    title: "Hasania Alumni Association",
    description: "হাজী মাদবর আলী হাসানিয়া দাখিল মাদ্রাসার  প্রাক্তন ও বর্তমান ছাত্র-ছাত্রীদের মাঝে সেতু বন্ধন সৃষ্টির মধ্য দিয়ে এ কমিউনিকেশন নেটওয়ার্ক-কে অসাধারণ এক উচ্চ মাত্রায় নিয়ে যাওয়ার লক্ষ্য নিয়ে গঠন করা হয়েছে “হাজী মাদবর আলী হাচানিয়া দাখিল মাদ্রাসা অ্যালামনাই অ্যাসোসিয়েশন”।",
    image: "https://i.ibb.co/Kzm5MQZz/punormiloni.jpg" 
  };

export default SEO;