import { useState } from "react";
import { useQuery } from "react-query";

// Implement Pagination - Next, back, styled
// Custom CSS
// Make table pretty
// Make new repo

export const DataTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchCharacters = async () => {
    return (await fetch("https://swapi.dev/api/people/")).json();
  };

  const { data, isLoading } = useQuery({
    queryKey: ["characters"],
    queryFn: fetchCharacters,
  });

  if (isLoading) {
    return <>Loading</>;
  }

  const characters = data.results;

  return (
    <table>
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
  );
};
