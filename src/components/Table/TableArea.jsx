import { Pagination } from "@mui/material";
import { TableData } from "./TableData";
import { useState } from "react";
import { useQuery } from "react-query";
import tableStyles from "../../styles/Table.module.css";
import loaderStyles from "../../styles/Loader.module.css";

export const TableArea = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchCharacters = async (page) => {
    return (await fetch(`https://swapi.dev/api/people/?page=${page}`)).json();
  };

  const { data, isLoading } = useQuery({
    queryKey: ["characters", currentPage],
    queryFn: () => fetchCharacters(currentPage),
  });

  if (isLoading) {
    return (
      <div class={loaderStyles["lds-roller"]}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  }

  console.log("data", data);
  const characters = data.results;

  return (
    <div className={tableStyles.tableArea}>
      <TableData characters={characters} />
      <Pagination
        count={Math.floor(data.count / 10)}
        size="small"
        page={currentPage}
        onChange={(e, value) => setCurrentPage(value)}
      />
    </div>
  );
};
