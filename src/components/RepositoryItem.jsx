export function RepositoryItem(props) {
  return (
    //caso o repository esteja vazio eu coloco o nome como Default
    <li>
      <strong>{props.repository?.name ?? "Default"}</strong>
      <p>{props.repository.description}</p>
      <a href={props.repository.html_url}>Acessar repositório</a>
    </li>
  );
}
