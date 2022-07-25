import styled from "styled-components";
import axios from "axios";

import { Header } from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import Modal from "react-modal";

const MainWrapper = styled.div`
  width: 80%;
  margin: auto;
  margin-bottom: 40px;
`;

Modal.setAppElement("#root");

function App() {
  const [data, setData] = React.useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = React.useState(0);
  const [selectedSortStatus, setSelectedSortStatus] = React.useState("rating");
  const [rollsId, setRollsId] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("http://localhost:3001/api/rolls/")
      .then(({ data }) => setData(data.rolls));
  }, []);

  return (
    <Router>
      <MainWrapper>
        <Header rollsId={rollsId} data={data} />
        <Switch>
          <Route path="/cart">
            <Cart rollsId={rollsId} data={data}></Cart>
          </Route>
          <Route path="/">
            <Home
              data={data}
              selectedCategoryId={selectedCategoryId}
              selectedSortStatus={selectedSortStatus}
              setSelectedCategoryId={setSelectedCategoryId}
              setSelectedSortStatus={setSelectedSortStatus}
              setRollsId={setRollsId}
            ></Home>
          </Route>
        </Switch>
      </MainWrapper>
    </Router>
  );
}

export default App;
