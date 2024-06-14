import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

export default function TableComp({ data }) {
  console.log("data aaya", data);
  return (
    <div className="mt-12">
      <TableContainer>
        <Table variant="striped" colorScheme="gray">
          <Thead>
            <Tr>
              <Th>Application No</Th>
              <Th>Candidate Name</Th>
              <Th>Fathers Name</Th>
              <Th>Marks Secured </Th>
              <Th>Programme</Th>
              <Th>Rank </Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((e) => {
              return (
                <Tr key={e._id}>
                  <Td>{e.applicationNo}</Td>
                  <Td>{e.candidateName}</Td>
                  <Td>{e.fathersName}</Td>
                  <Td>{e.marksSecured}</Td>
                  <Td>{e.programme}</Td>
                  <Td>{e.rank}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
}
