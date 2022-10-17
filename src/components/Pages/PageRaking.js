import { React, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getRanking } from "../../services/shortly";
import Header from "../Header/Header";
import trophy from "../../assets/images/trophy.svg";
import styled from "styled-components";

export default function PageRanking() {
  const [ranking, setRanking] = useState([]);

  useEffect(() => {
    getRanking()
      .catch((response) => console.log(response))
      .then((response) => {
        setRanking(response.data);
      });
  }, []);

  return (
    <>
      <Header login />

      <RankingContainer>
        <div>
          <img src={trophy} alt="trophy" />
          <span>Ranking</span>
        </div>

        <Ranking>
          {ranking.map((users) => (
            <RankingElements key={users.id} users={users} />
          ))}
        </Ranking>

        <span>Crie sua conta para usar nosso serviço!</span>
      </RankingContainer>
    </>
  );
}

function RankingElements({ users }) {
  const { name, linksCount, visitsCount } = users;

  return (
    <li>
      {name} - {linksCount} links - {visitsCount} visualizações
    </li>
  );
}

const RankingContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 80px;

  div {
    display: flex;
    justify-content: center;
  }

  span {
    font-size: 36px;
    font-weight: 700;
    margin-left: 8px;
  }
`;

const Ranking = styled.div`
  width: 60vw;
  height: auto;
  margin: 30px 0px;
  padding: 20px 35px;
  display: flex;
  flex-direction: column;
  font-size: 22px;
  line-height: 27.5px;
  border: 1px solid rgba(120, 177, 89, 0.25);
  border-radius: 24px 24px 0px 0px;
  box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);

  li {
    list-style-type: decimal;
  }
`;
