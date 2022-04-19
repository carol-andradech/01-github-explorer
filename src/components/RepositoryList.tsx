import { useState, useEffect } from "react";
import { RepositoryItem } from "./RepositoryItem";
import "../styles/repositories.scss";

//https://api.github.com/orgs/rocketseat/repos

interface Repository {
  name: string;
  description: string;
  html_url: string;
}

export function RepositoryList() {
  //Vou criar um estado para armazenar a listagem de repositórios
  const [repositories, setRepositories] = useState<Repository[]>([]);

  /*Vou buscar os repositórios, quando o fetch devolver essa resposta,
converto para json, e quando converter, eu vou ter os dados dos repositórios,
e setar os repositórios com os dados recebidos.
*/
  useEffect(() => {
    fetch("https://api.github.com/users/carol-andradec/repos")
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>
      <ul>
        {repositories.map((repository) => {
          return (
            <RepositoryItem key={repository.name} repository={repository} />
          );
        })}
      </ul>
    </section>
  );
}
