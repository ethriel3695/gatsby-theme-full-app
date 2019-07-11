import React, { Component } from "react";
import Layout from "../components/layout";
import LoadingProgress from "../components/Progress/LoadingProgress";
import { handleAuthentication } from "../components/Auth/Auth";

class Callback extends Component {
  render() {
    handleAuthentication();
    return (
      <Layout>
        <div>
          <LoadingProgress />
        </div>
      </Layout>
    );
  }
}

export default Callback;
