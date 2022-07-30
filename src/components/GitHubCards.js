// from bootcamp.ux design.cc
import React, { Component } from "react";
import Axios from "axios";
import RepoCard from "./RepoCard";
import { Grid } from "@material-ui/core";

class GitHubCards extends Component {
  Title = [];
  state = {
    repo: [],
    language: [],
  };

  async componentDidMount() {
    const api_key = process.env.REACT_APP_API_KEY;

    let repo = [
      'Progressive-Web-App-Text-Editor',
      'trailblazers',
      'The-Var-TechBlog',
      'Scheduling-Assistant',
      'Team-Profile-Generator',
      'Password-Generator',
      'Maps---The-Fingerprint-of-the-Past',
      'Business-Manager-Database',
    ];

    // await Axios.get("https://github-lang-deploy.herokuapp.com/").then(
    //   async (res) => await this.setState({ language: res.data })
    // );

    const {data} = await Axios.get('https://api.github.com/users/hreichgelt/repos');
    const repoData = data.filter(item => repo.includes(item.name));
    console.log(repoData);
    

    this.setState({
      repo: repoData
    });
  }
  render() { console.log(this.state);
    const { repo, language } = this.state;
    repo.sort((a, b) =>
      a.stargazers_count > b.stargazers_count
        ? -1
        : b.stargazers_count > a.stargazers_count
        ? 1
        : 0
    );
    return (
      <Grid container spacing={1}>
        {repo.map((data, i) => (
          <RepoCard repo={data} key={i} language={language} />
        ))}
      </Grid>
    );
  }
}
export default GitHubCards;