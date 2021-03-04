import "./Entete.scss";
export default function Entete() {
  return (
    <header className="Entete">
      <ul className="navPrincipale flex flex-row justify-between">
        <li className="bg-green-700 font-bold">Projets</li>
        <li className="bg-green-700 font-bold">Contact</li>
        <li className="bg-green-700 font-bold">À props</li>
      </ul>
    </header>
  );
}
