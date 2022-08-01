// from bootcamp.ux design.cc
import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Avatar,
  Typography,
  Grid,
} from "@mui/material";
import { css} from '@emotion/react';
import { green } from "@mui/material/colors";

const styles = {
    root: css`
        minWidth: 0;
        marginTop: 10px;
        marginBottom: 10px;
        display: flex;
    `,
    card: css`
        width: 100%;
        marginLeft: 15px;
        marginRight: 15px;
        margin: auto;
        transition: 0.3s;
        minHeight: 270px;
        borderRadius: .625rem !important;
        boxShadow: 0 8px 40px -12px rgba(0, 0, 0, 0.3);
        &:hover {
            boxShadow: 0 16px 70px -12.125px rgba(0, 0, 0, 0.3);
        };
    `,
    title: css`
        &:active {
            color: #00008E;
        },
    `,
    cardContent: css`
        minHeight: 120px;
    `,
    cardActions: css`
        padding: 16px;
    `,
    avatar: css`
        color: ${green[500]};
        backgroundColor: ${green[500]};
    `,
    dot: css`
        height: 12px;
        width: 12px;
        borderRadius: 50%;
        display: inline-block;
    `
};

const RepoCard = ({ repo, language }) => {
  return (
    <Grid xs={12} sm={6} lg={3} css={styles.root}>
      <Card css={styles.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" css={styles.avatar}>
              <span
                className="octicon octicon-repo"
                style={{ fontSize: "20px" }}
              ></span>
            </Avatar>
          }
          title={<>
            <Typography variant="h6">
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                css={styles.title}
                style={{ textDecoration: "none", color: "#551A8B" }}
              >
                {repo.name}
              </a>{" "}
            </Typography>
            <Typography variant="h6">
              <a
                href={`https://${repo.owner.login}.github.io/${repo.name}`}
                target="_blank"
                rel="noopener noreferrer"
                css={styles.title}
                style={{ textDecoration: "none", color: "#551A8B" }}
              >
                {repo.name}--Live
              </a>{" "}
            </Typography>
            </>
          }
        />

        <CardContent css={styles.cardContent}>
          <Typography variant="body1">{repo.description}</Typography>
        </CardContent>
        <CardActions css={styles.cardActions}>
          {repo.language ? (
            <React.Fragment>
              <span
                css={styles.dot}
                // style={{ backgroundColor: language[repo.language]["color"] }}
              ></span>
              <Typography style={{ marginRight: "10px" }}>
                {repo.language}
              </Typography>
            </React.Fragment>
          ) : null}
          {repo.stargazers_count >= 0 ? (
            <React.Fragment>
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                  marginRight: "10px",
                  color: "#551A8B",
                }}
              >
                <span className="octicon octicon-star">
                  {" "}
                  {repo.stargazers_count}
                </span>
              </a>
            </React.Fragment>
          ) : null}
          {repo.forks_count >= 0 ? (
            <React.Fragment>
              <a
                href={`${repo.html_url}/fork`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                  marginRight: "10px",
                  color: "#551A8B",
                }}
              >
                <span className="octicon octicon-repo-forked">
                  {repo.forks_count}
                </span>
              </a>
            </React.Fragment>
          ) : null}
        </CardActions>
      </Card>
    </Grid>
  );
};

export default RepoCard;