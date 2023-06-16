import tableStyles from "../../styles/TableStyle.module.css";
// Implement Pagination - Next, back, styled
// Custom CSS
// Make table pretty
// Make new repo
// Use the .next and .previous on the SWAPI object rather than messing with reqParams

export const TableData = ({ characters }) => {
  return (
    <>
      <table className={tableStyles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Height</th>
            <th>Mass</th>
            <th>Hair Color</th>
            <th>Skin Color</th>
          </tr>
        </thead>
        <tbody>
          {characters.map((character, index) => (
            <tr key={index}>
              <td>{character.name}</td>
              <td>{character.height}</td>
              <td>{character.mass}</td>
              <td>{character.hair_color}</td>
              <td>{character.skin_color}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
