/*  AppView
 *
 *  The view of the app, using JSX with React and MUI components
 *
 *  This app uses the Material UI framework for UI purposes, such as:
 *  Responsive mobile-first layout, elevation state (lifting vid papers on hover),
 *  the Modal popup, Tooltips, etc
 */

import React, { useState } from "react";

import {
  Container,
  Grid,
  Modal,
  Typography,
  Tooltip,
  Zoom,
  Paper,
  Button,
} from "@material-ui/core";

export default function AppView(props) {
  const [curVid, setCurVid] = useState();

  const [curHover, setCurHover] = useState(); //For rollover UX

  return (
    <Container className="App" maxWidth="xl">
      <Typography variant="h4">Video playlist</Typography>
      <Grid container spacing={3} direction="row">
        {props.videos &&
          props.videos.map((v, i) => (
            <Grid item key={i}>
              <Tooltip
                title={v.title}
                placement="top"
                arrow
                TransitionComponent={Zoom}
                enterDelay={300}
              >
                <Paper
                  onMouseEnter={() => setCurHover(i)}
                  onMouseLeave={() => setCurHover()}
                  elevation={curHover === i ? 5 : 1}
                  style={{
                    padding: 2,
                    paddingBottom: 0,
                    opacity: curHover === i ? 1 : 0.95,
                  }}
                >
                  <img
                    src={v.image}
                    alt={v.title}
                    className="poster"
                    onClick={() => setCurVid(i)}
                  />
                </Paper>
              </Tooltip>
            </Grid>
          ))}
      </Grid>
      <Modal open={curVid > -1}>
        <div className="popover">
          <div className="vidcontainer">
            <Button className="closeBtn" onClick={() => setCurVid()}>
              x
            </Button>
            {curVid > -1 && (
              <video
                src={props.videos[curVid].sources[6].file}
                className="vid"
                controls
                autoPlay
              />
            )}
          </div>
        </div>
      </Modal>
    </Container>
  );
}
