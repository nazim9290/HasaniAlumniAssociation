import { CardActionArea } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import "./MissionVission.css";
import TitleBar from "../../Shared/TitleBar/TitleBar";

const mission = [
    {
        title: "Communication",
        description: "কমিউনিকেশন বা ‘যোগাযোগ’ এর গুরুত্ব অপরিসীম। হাজী মাদবর আলী হাচানিয়া দাখিল মাদ্রাসার প্রাক্তন ও বর্তমান ছাত্র-ছাত্রীদের মাঝে সেতু বন্ধন সৃষ্টির মধ্য দিয়ে এ কমিউনিকেশন নেটওয়ার্ক-কে অসাধারণ এক উচ্চ মাত্রায় নিয়ে যাওয়ার লক্ষ্য নিয়ে গঠন করা হয়েছে “হাজী মাদবর আলী হাচানিয়া দাখিল মাদ্রাসা অ্যালামনাই অ্যাসোসিয়েশন”। ব্যক্তিগত, পারিবারিক, সামাজিক ও পেশাজীবনের বিভিন্ন প্রয়োজনে নেটওয়ার্ক তৈরি করা অত্যন্ত গুরুত্বপূর্ণ। অ্যালামনাইয়ের মধ্য দিয়ে প্রাক্তন শিক্ষার্থীদের সাথে সংযুক্ত হওয়ার মাধ্যমে  বর্তমান শিক্ষার্থীরা ক্যারিয়ার বিষয়ে উপযুক্ত দিকনির্দেশনার পাশাপাশি আরও বিভিন্নভাবে উপকৃত হতে পারে। বিভিন্ন ইভেন্টের মাধ্যমে প্রাক্তন ছাত্র পরিষদ-এর সম্পৃক্ত হওয়ার মধ্য দিয়ে নিজেকে আরও সমৃদ্ধশালী করতে পারেন",
        img: "https://i.ibb.co/ydHbVXv/communication.jpg"
    },
    {
        title: "Humanity",
        description: "অ্যালামনাই অ্যাসোসিয়েশন বর্তমান শিক্ষার্থী এবং প্রাক্তন শিক্ষার্থীদের মধ্যে সংযোগ তৈরি করতে বিশেষ ভূমিকা পালন করতে পারে। অ্যাসোসিয়েশনের বর্তমান, প্রাক্তন শিক্ষার্থী ও শিক্ষকদের নিয়ে অ্যালামনাই অ্যাসোসিয়েশন কর্তৃক বছরব্যাপী আয়োজিত বিভিন্ন অনুষ্ঠান যেমনঃ সম্মেলনী (GET-TOGETHER), বনভোজন (PICNIC), বৃত্তি প্রদান (SCHOLARSHIP), শিক্ষা উপকরণ বিতরন, ক্যারিয়ার কাউন্সিলিং, চাকুরী মেলা (JOB FAIR) মানবিক সহায়তা, সচেতনতা প্রচারাভিযান (AWERNESS CAMPIGN) ইত্যাদির মাধ্যমে গড়ে উঠবে সত্যিকারে এক মানবিক সমাজ ব্যবস্থা। এতে করে শুধু অ্যালামনাই সদস্যরাই নয় বরং সমাজের বিভিন্ন পর্যায়ের প্রায় সব মানুষ-ই উপকৃত হবে।",
        img: "https://i.ibb.co/qCBGDGs/556-5566187-client-special-habitat-for-humanity-svg-clipart.png"
    },
    {
        title: "Collaboration",
        description: "“অ্যালামনাই অ্যাসোসিয়েশন” প্লাটফর্মে প্রাক্তন-বর্তমান শিক্ষার্থীরা পারষ্পরিক-কে সহায়তা করতে পারবে। সবাই মিলে বিভিন্ন স্বেচ্ছাসেবী সামাজিক কার্যক্রমের সাথে নিজেকে যুক্ত করতে পারবে। তাছাড়া পুরানো দিনের বন্ধুদের খুঁজে নিয়ে স্কুলসহ ব্যক্তিজীবনের সুখঃদুখের স্মৃতি ভাগাভাগি করে নিতে পারবে। এক কথায় অ্যালামনাই সদস্যারা একে অন্যকে সহযোগীতার মাধ্যমে গড়ে তুলতে পারে সুখী-সমৃদ্ধ জীবন। সমাজের সু-প্রতিষ্ঠিত প্রাক্তন ছাত্রদের আরও কাছাকাছি নিয়ে যাবে এ অ্যালামনাই সংগঠন। সকলের অংশগ্রহণে যে কোন ধরণের সামাজিক ও উন্নয়ন কার্যক্রম সফলভাবে পরিচালনার পূর্ব শর্ত হচ্ছে প্রয়োজনীয় টাকার যোগান নিশ্চিত করা। অ্যাসোসিয়েশনের সদস্যদের চাঁদা ও সবার ডোনেশনের মাধ্যমে সদস্যদের একই বন্ধনে আবদ্ধ রেখে শক্তিশালী একটি আত্নীক সম্পর্ক গড়ে তোলার মধ্য দিয়ে সম্ভব এ প্রয়োজনীয় তহবিল।",
        img: "https://i.ibb.co/cDBcFB7/Collaboration.jpg"
    }
]



export default function MissionVission() {
    return (
        <Container>
            <TitleBar titleText={"Our Mission & Vision"}></TitleBar>
            <Grid container spacing={2}>
                {mission.map((ms, i) => (
                    <Grid
                        key={i}
                        size={{ xs: 12, sm: 6, md: 4 }}
                        data-aos="zoom-in-up"
                        data-aos-easing="linear"
                        data-aos-duration="1500"
                    >
                        <Card sx={{ height: "100%" }}>
                            <CardActionArea className="image-box">
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={ms.img}
                                    alt={ms.title}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h4" component="div">
                                        {ms.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {ms.description}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}
