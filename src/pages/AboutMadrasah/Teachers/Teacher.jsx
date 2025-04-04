import { useEffect, useState } from "react";
import { apiBaseUrl } from "../../Utility/Constants";
import axios from "axios";
import Loading from "../../Component/Loading/Loading";
import { Container, Grid2 as Grid, Typography } from "@mui/material";
import Teachers from "./Teachers";
import WebSEO from "../../Shared/SEO/SEO";
import seoData from "../../Shared/SEO/SeoData";

const Teacher = () => {
  const [teachers, setTeachers] = useState([]);
  useEffect(() => {
    axios
      .get(`${apiBaseUrl}/teacher`)
      .then(function (response) {
        // handle success
        setTeachers(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, []);

  const activeteachers = teachers
    .filter(
      (teacher) => teacher.status === "active" && teacher.section === "dakhil"
    )
    .sort((a, b) => a.designation - b.designation);

  const bordingTeachers = teachers
    .filter(
      (teacher) => teacher.status === "active" && teacher.section === "bording"
    )
    .sort((a, b) => a.designation - b.designation);

  const formerTeacher = teachers
    .filter((teacher) => teacher.status === "former")
    .sort((a, b) => a.designation - b.designation);

  console.log(activeteachers.length);
  console.log(bordingTeachers.length);
  // console.log(formerTeacher);

  return (
    <div>
      <WebSEO seo={seoData.madrasahTeacher}></WebSEO>
      {teachers.length ? "" : <Loading></Loading>}
      <Container maxWidth="xl" sx={{ my: 5 }}>
        {/* {"madrasha teachers grid"} */}
        <TitleBar
          titleText={"দাখিল শাখার শিক্ষক-শিক্ষিকা ও কর্মচারী মন্ডলীবৃন্দ "}
        ></TitleBar>

        <Grid
          container
          spacing={{ xs: 0.5, md: 2 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          sx={{ mb: 3 }}
        >
          {activeteachers.map((teacher, index) => (
            <>
              <Grid
                key={index}
                size={{ xs: 6, sm: 6, md: 3 }}
                direction="row"
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                  mt: 2,
                }}
              >
                <Teachers teacher={teacher}></Teachers>
              </Grid>
            </>
          ))}
        </Grid>

        {/* {"bording and hefz shakha grid"} */}
        <TitleBar
          titleText={"এতিমখানা ও হিফজ খানা শিক্ষক-কর্মচারীবৃন্দ"}
        ></TitleBar>

        <Grid
          container
          spacing={{ xs: 0.5, md: 2 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          sx={{ mb: 3 }}
        >
          {bordingTeachers.map((teacher, index) => (
            <>
              <Grid
                key={index}
                size={{ xs: 6, sm: 6, md: 3 }}
                direction="row"
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                  mt: 2,
                }}
              >
                <Teachers teacher={teacher}></Teachers>
              </Grid>
            </>
          ))}
        </Grid>

        {/* {former teacher} */}
        <TitleBar
          titleText={"সাবেক শিক্ষক-শিক্ষিকা ও কর্মচারী মন্ডলীবৃন্দ"}
        ></TitleBar>

        <Grid
          container
          spacing={{ xs: 0.5, md: 2 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          sx={{ mb: 3 }}
        >
          {formerTeacher.map((teacher, index) => (
            <>
              <Grid
                key={index}
                size={{ xs: 6, sm: 6, md: 3 }}
                direction="row"
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                  mt: 2,
                }}
              >
                <Teachers teacher={teacher}></Teachers>
              </Grid>
            </>
          ))}
        </Grid>
      </Container>
    </div>
  );
};
export default Teacher;
