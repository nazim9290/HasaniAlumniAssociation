import { Stack, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid2";
import React, { useEffect, useState } from "react";
import Countdown from "../Shared/Countdwon/Countdwon";
import "../Home/Event/Event.css";
import axios from "axios";
import { apiBaseUrl } from "../../Utility/Constants";

export default function Events() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        
      axios
        .get(`${apiBaseUrl}/event`)
        .then(function (res) {
          setEvents(res.data);
        })
        .catch(function (err) {
          console.log(err);
        })
        .then(function () {});
    }, []);
  return (
    <div>
      {events.map((event) => (
        <Grid
          key={event._id}
          container
          spacing={1}
          sx={{ boxShadow: 3, my: 5, p: 4, bgcolor: "#e0f2f1" }}
        >
          <Grid xs={12} md={6}>
            <img src={event.image} alt="" width="100%" height="300px" />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 6 }}>
            <Grid container>
              <Grid size={{ xs: 9, sm: 6, md: 10 }}>
                <div className="event-title">
                  <h1>UPCOMING EVENT</h1>
                  <h2>{event.title}</h2>
                </div>
              </Grid>
              <Grid size={{ xs: 3, sm: 6, md: 2 }}>
                <div className="event-date">
                  <h1>{event.date.split(" ")[1]}</h1>

                  <h5>{event.date.split(" ")[0]}</h5>
                  <p>{event.date.split(" ")[2]}</p>
                </div>
              </Grid>

              {/*  */}
              <Grid container sx={{ my: 2 }}>
                <Stack
                  direction={{ xs: "row", sm: "row" }}
                  justifyContent="space-evenly"
                  alignItems="center"
                  spacing={2}
                >
                  <Typography component="div">
                    <Countdown date={event.date} time={event.time} />
                  </Typography>
                  <a
                    href="https://forms.gle/nJBpQpfizsq5YD5n9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="form-button-link"
                  >
                    <Button
                      className="join-btn"
                      color="warning"
                      variant="contained"
                    >
                      Join Now
                    </Button>
                  </a>
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      ))}
    </div>
  );
}
