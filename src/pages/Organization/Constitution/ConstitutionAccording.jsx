import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ConstitutionData } from "./ConstitutionData";
import { Box, Container } from "@mui/material";

export default function ConstitutionAccording() {
  return (
    <Container>
      {ConstitutionData.map((d, i) => (
        <Box key={i}>
          <div>
            <h3>{d.headings}</h3>
            <h2>{d.title}</h2>
          </div>
          {d.subtitles.map((s, j) => (
            <Accordion key={j} defaultExpanded>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id={`panel${i}-${j}-header`}
              >
                <Typography variant="h6">{s.subtitle}</Typography>
              </AccordionSummary>
              {s.text.map((t, k) => {
                const splitText = t.split("(:)"); // Split text

                return (
                  <AccordionDetails key={k}>
                    {splitText.length < 2 ? (
                      <Typography>{t}</Typography>
                    ) : (
                      <>
                        {splitText.map((part, index) => (
                          <div key={index}>
                            {index % 2 === 0 ? (
                              <Typography fontWeight="bold">
                                {part} :
                              </Typography> // First part in bold
                            ) : (
                              <Typography sx={{ pl: 2 }}>{part}</Typography> // Second part as normal text
                            )}
                          </div>
                        ))}
                      </>
                    )}
                  </AccordionDetails>
                );
              })}
            </Accordion>
          ))}
        </Box>
      ))}
    </Container>
  );
}
