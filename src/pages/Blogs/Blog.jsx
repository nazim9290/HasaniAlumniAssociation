import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Regex from "../Shared/Regex/Regex";
import BlogComment from "./BlogComment";
import axios from "axios";
import { apiBaseUrl } from "../../Utility/Constants";
import { Avatar, Box, CardMedia } from "@mui/material";
import TitleBar from "../Shared/TitleBar/TitleBar";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';



export default function Blog() {
    const [posts, setposts] = useState([]);
    const [open, setOpen] = React.useState(false);
    const [openComment, setOpenComment] = React.useState(false);
    let navigate = useNavigate();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleClickOpenComment = () => {
        setOpenComment(true);
    };

    const handleCloseComment = () => {
        setOpenComment(false);
    };
    const handleBlogDetails = (id) => {
        navigate(`/Blog/${id}`);
    };

    useEffect(() => {
        axios
            .get(`${apiBaseUrl}/blog`)
            .then(function (response) {
                // handle success
                setposts(response.data);
                // console.log(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }, []);
    return (
        <Box

        >
            <TitleBar titleText="Blog And News on Campus" />
            <Container maxWidth="xl">

                <Grid
                    container
                    sx={{ py: 5 }}
                    spacing={{ xs: 1, md: 1 }}
                    columns={{ xs: 4, sm: 8, md: 12 }}
                >
                    {posts.map((post, index) => (
                        <Grid
                            key={index}
                            size={{ xs: 4, sm: 4, md: 4 }}
                            data-aos="zoom-in-down"
                            data-aos-duration="1000"
                        >
                            <Card sx={{ height: "100%" }}>
                                <Box
                                    onClick={() => {
                                        handleBlogDetails(post._id);
                                    }}

                                >
                                    <CardMedia
                                        
                                        component="img"
                                        image="https://i.ibb.co/syvnGwG/260725833-2068174273330479-2675550629278720756-n.jpg"
                                        title="green iguana"
                                        sx={{objectFit: 'contain' }}
                                        height="200"
                                    />
                                    <CardContent>
                                        <Box
                                            elevation={3}
                                            className="post-category"
                                            sx={{
                                                bgcolor: `${post?.categoryColor}`,
                                            }}
                                        >
                                            {post?.category}
                                        </Box>
                                        <Typography
                                            className="post-title"
                                            gutterBottom
                                            variant="h6"
                                            component="div"
                                        >
                                            {post.title}
                                        </Typography>
                                        <Typography className="post-description" variant="body2">
                                            {Regex(post?.description)}

                                            <Typography
                                                component="span"
                                                color="blue"
                                                sx={{ cursor: "pointer" }}
                                                onClick={() => {
                                                    handleBlogDetails(post._id);
                                                }}
                                                size="medium"
                                            >
                                                ...See More
                                            </Typography>
                                        </Typography>

                                        <Stack direction="row" alignItems="start" gap={1}>
                                            <Avatar
                                                alt={post?.writer?.name}
                                                src={post?.writer?.img}
                                            />
                                            <Box sx={{ textalign: "left" }}>
                                                <Typography variant="body1">
                                                    {post?.writer?.name}
                                                </Typography>
                                                <Typography color="text.secondary">
                                                    {post.date}
                                                </Typography>
                                            </Box>
                                        </Stack>
                                    </CardContent>
                                </Box>
                                <CardActions>
                                    <IconButton aria-label="add to favorites">                                    
                                            <FavoriteIcon />
                                      
                                    </IconButton>
                                    <IconButton aria-label="RemoveRedEyeIcon">
                                        <RemoveRedEyeIcon />
                                    </IconButton>
                                    <IconButton onClick={handleClickOpen} aria-label="share">                                     
                                            <ShareIcon />                                      
                                    </IconButton>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
            {/* <LinkShare handleClose={handleClose} open={open} /> */}
            <BlogComment
                handleCloseComment={handleCloseComment}
                openComment={openComment}
            />
        </Box>
    );
}

