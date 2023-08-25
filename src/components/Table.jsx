import React from 'react';
import styled from 'styled-components';

const TableContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin-bottom: 50px;
  background-color: #f7f7f7;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
`;

const TableWrapper = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  background-color: #333;
  color: white;
  padding: 10px;
  text-align: center;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
`;

const TableCell = styled.td`
  padding: 10px;
  text-align: center;
`;

const Table = () => {
  return (
    <TableContainer>
      <TableWrapper>
        <thead>
          <tr>
            <TableHeader colSpan="2">Horários de Atendimento</TableHeader>
          </tr>
        </thead>
        <tbody>
          <tr>
            <TableCell>Segunda à Sexta</TableCell>
            <TableCell>07h00 às 22h18</TableCell>
          </tr>
          <tr style={{backgroundColor: '#ebebeb'}}>
            <TableCell>Sábados</TableCell>
            <TableCell>07h00 às 16h48</TableCell>
          </tr>
          <tr>
            <TableCell>Domingo</TableCell>
            <TableCell>07h00 às 16h48</TableCell>
          </tr>
        </tbody>
      </TableWrapper>
    </TableContainer>
  );
};

export default Table;
