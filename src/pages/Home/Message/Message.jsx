
import Grid from "@mui/material/Grid2";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import "./Message.css";
import TitleBar from "../../Shared/TitleBar/TitleBar";

export default function () {
    return (
        <div className="massage">
            <Container>
                <TitleBar titleText={"সভাপতি এবং সদস্য সচিবের বার্তা "}></TitleBar>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid
                        item
                        size={{ xs: 12, sm: 6, md: 6 }}
                    >
                        <Card sx={{ height: "100%" }}>
                            <CardHeader sx={{ heighttextAlign: 'center' }} title="সভাপতির বার্তা" subheader="" />
                            <CardMedia
                                component="img"
                                sx={{ objectFit: 'contain' }}
                                height="200"
                                image="https://scontent-nrt1-1.xx.fbcdn.net/v/t39.30808-6/473423388_3925049827736391_7914792448350370642_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=s0_b-tiO1JgQ7kNvgF6e4R4&_nc_oc=AdmC1v6um007HY_kSawOO1RL-NknvgyXYxp6vJK087Fpi__OyFqUFfeQjdDvc1qEBJ2X_2jwlQCTuvBRl517LzxU&_nc_zt=23&_nc_ht=scontent-nrt1-1.xx&_nc_gid=agnxwY6bRxK8s5WDG0q76w&oh=00_AYHqba_vMS37ojp_pbGOF8UODkdNLS2hbpIxpOLUIyppHw&oe=67E96604"
                                alt="Zakir Hossain"
                            />
                            <CardContent>
                                <Typography
                                    className="massage-title"
                                    sx={{ textAlign: "left" }}
                                >
                                    ২৫ বছর পূর্তি ও রজতজয়ন্তী উপলক্ষ্যে আয়োজিত প্রথম পূনর্মিলনীর মাধ্যমে গঠিত হওয়া হাজী মাদবর আলী হাচানিয়া দাখিল মাদ্রাসা অ্যালামনাই অ্যাসোসিয়েশন-এর সভাপতি হিসেবে দায়িত্ব পালনের সুযোগ পাওয়া সত্যিই আমার জন্য গর্ব ও সম্মানের বিষয়। আমাদের এই প্রতিষ্ঠান থেকে শিক্ষা গ্রহণ করে অনেক ছাত্র-ছাত্রী আজ দেশে ও প্রবাসে কৃতিত্বের সঙ্গে বিভিন্ন ক্ষেত্রে অবদান রাখছেন। তাদের সবাইকে একসঙ্গে যুক্ত করা, সহযোগিতার হাত বাড়ানো এবং প্রাক্তন ও বর্তমান শিক্ষার্থীদের মধ্যে একটি দৃঢ় বন্ধন গড়ে তোলাই আমাদের সংগঠনের অন্যতম লক্ষ্য।
                                    আমাদের এই অ্যালামনাই অ্যাসোসিয়েশন কেবলমাত্র একটি সামাজিক সংগঠন নয়, এটি একে অপরের পাশে থাকার, সহমর্মিতা প্রকাশের এবং মাদ্রাসার সার্বিক উন্নয়নে ভূমিকা রাখার একটি প্ল্যাটফর্ম। আমরা যদি সবাই একসঙ্গে কাজ করি, তবে এই সংগঠন ভবিষ্যতে আরও সুসংগঠিত ও কার্যকর হয়ে উঠবে।
                                    সময় পরিবর্তনের সাথে সাথে জীবনের ব্যস্ততায় আমরা প্রিয় প্রতিষ্ঠান, শিক্ষক এবং বন্ধুদের থেকে অনেক দূরে সরে যাই। কিন্তু আমাদের এই অ্যালামনাই অ্যাসোসিয়েশন সেই পুরনো সম্পর্কগুলোকে নতুন করে জাগিয়ে তুলতে সহায়তা করবে। বিভিন্ন অনুষ্ঠান, পুনর্মিলনী, শিক্ষা উন্নয়ন কার্যক্রম এবং সমাজসেবামূলক উদ্যোগের মাধ্যমে আমরা একে অপরের পাশে থাকতে চাই।
                                    আমি বিশ্বাস করি, আমাদের সম্মিলিত প্রচেষ্টায় হাজী মাদবর আলী হাচানিয়া দাখিল মাদ্রাসা অ্যালামনাই অ্যাসোসিয়েশন একটি শক্তিশালী ও গঠনমূলক সংগঠন হিসেবে আত্মপ্রকাশ করবে। এই সংগঠনকে এগিয়ে নিতে সবার সহযোগিতা একান্তভাবে কাম্য।

                                </Typography>

                                <Typography variant="h6" sx={{ mt: 3 }}>
                                হাজী জাকির হোসেন, ২০০০
                                </Typography>
                                <Typography variant="pragraph">
                                সভাপতি, হাজী মাদবর আলী হাচানিয়া দাখিল মাদ্রাসা অ্যালামনাই অ্যাসোসিয়েশন
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid
                        item
                        size={{ xs: 12, sm: 6, md: 6 }}
                    >
                        <Card sx={{ height: "100%" }}>
                            <CardHeader title="সদস্য সচিবের বার্তা" subheader="" />
                            <CardMedia
                                component="img"
                                sx={{ objectFit: 'contain' }}
                                height="200"
                                image="https://scontent-nrt1-2.xx.fbcdn.net/v/t39.30808-6/402913408_3433949216845561_8995240434838521797_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=kHM0HrKNE5gQ7kNvgEvSAAF&_nc_oc=AdkShbvQ4WdlNtA-frWqJ7ust8ylwhHhtxnEe0xvex2ibZsFQgSOB1Um1zzWp9Wkq6UJRUisDl43wHTyq_ftoqfT&_nc_zt=23&_nc_ht=scontent-nrt1-2.xx&_nc_gid=wPoBZUaEWRXlrzDLUxlpDg&oh=00_AYFdfhjT640HD0XGTo9veq5vFhJuTEr_oviRzDMRqKY-8Q&oe=67E95621"
                                alt="MD NAZIM UDDIN"
                            />
                            <CardContent>
                                <Typography
                                    className="massage-title"
                                    sx={{ textAlign: "left" }}
                                >
                                    ঢাকা জেলার ভাটারা থানার ঐতিহ্যবাহী শিক্ষা প্রতিষ্ঠান “হাজী মাদবর আলী হাচানিয়া দাখিল মাদ্রাসা”। ২৫ বছর পূর্তি ও রজতজয়ন্তী উপলক্ষ্যে আয়োজিত প্রথম পূনর্মিলনীর মাধ্যমে গঠিত হওয়া হাজী মাদবর আলী হাচানিয়া দাখিল মাদ্রাসা অ্যালামনাই অ্যাসোসিয়েশন-এর পরিচালক ও সদস্য সচিব হিসাবে আমি সত্যিই গর্বিত ও সম্মানিত বোধ করছি। সংগঠনের দায়িত্ব গ্রহণ করা আমার জন্য এক বিশাল চ্যালেঞ্জ, তবে আমি বিশ্বাস করি, সকলের সহযোগিতায় আমরা এই সংগঠনকে সফলতার পথে এগিয়ে নিতে পারবো।
এই অ্যালামনাই অ্যাসোসিয়েশন শুধুমাত্র একটি সামাজিক সংগঠন নয়, এটি আমাদের প্রিয় মাদ্রাসার গৌরবময় অতীতকে ধরে রেখে ভবিষ্যতের সম্ভাবনাকে উজ্জ্বল করার একটি গুরুত্বপূর্ণ মাধ্যম। আমাদের লক্ষ্য হবে অ্যালামনাইদের মধ্যে একতা, সৌহার্দ্য ও ভ্রাতৃত্ববোধ সৃষ্টি করা, একে অপরকে যথাসম্ভব সহায়তা করা এবং বর্তমান ও ভবিষ্যৎ শিক্ষার্থীদের কল্যাণে কাজ করা।
আমাদের মাদ্রাসার ভাবমূর্তি উন্নত করতে এবং শিক্ষার পরিবেশকে আরও সমৃদ্ধ করতে সবাইকে একসাথে কাজ করতে হবে। দেশ এবং দেশের বাইরে অবস্থানরত প্রাক্তন শিক্ষার্থীদের একত্রিত করে এই সংগঠনকে কার্যকর করা এবং প্রবাসী অ্যালামনাইদের সংযোগ স্থাপনের মাধ্যমে তাদের অভিজ্ঞতা ও সহায়তা শিক্ষার্থীদের ভবিষ্যৎ গঠনে কাজে লাগানোই হবে আমাদের অন্যতম লক্ষ্য।
আমি বিশ্বাস করি, যদি আমরা সবাই আন্তরিকতা ও নিষ্ঠার সাথে কাজ করি, তাহলে হাজী মাদবর আলী হাচানিয়া দাখিল মাদ্রাসা অ্যালামনাই অ্যাসোসিয়েশন ভবিষ্যতে একটি শক্তিশালী ও সুসংগঠিত প্ল্যাটফর্ম হিসেবে আত্মপ্রকাশ করবে। এজন্য সকলের দোয়া ও সহযোগিতা একান্তভাবে কাম্য।
                                </Typography>

                                <Typography variant="h6" sx={{ mt: 3 }}>
                                মোঃ নাজিম উদ্দিন, ২০১৩
                                </Typography>
                                <Typography variant="pragraph">
                                সদস্য সচিব, হাজী মাদবর আলী হাচানিয়া দাখিল মাদ্রাসা অ্যালামনাই অ্যাসোসিয়েশন
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};
