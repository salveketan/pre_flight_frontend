import { Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr, Link, Button, Input, Box } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'


const UserList = () => {
    const [data, setData] = useState([])
    const [user, setUser] = useState("")
    const navigate = useNavigate();
    useEffect(() => {
        fetch("http://localhost:5000", {
            method: "get",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((r) => r.json())
            .then((d) => setData(d))

    }, [])

    // console.log(data);

    const handle = () => {
        navigate(`/userdetail/${user}`)
    }


    return (
        <div>
            <Box display={"flex"} m={"10px"} p={"10px"} gap={'10px'}>
                <Input
                    w={"300px"}
                    color='teal'
                    placeholder='Enter Employe No.'
                    _placeholder={{ color: 'inherit' }}
                    onChange={(e) => setUser(e.target.value)}
                />
                <Button colorScheme='teal' variant='outline' onClick={handle}>
                    Search User
                </Button>
            </Box>
            <TableContainer>
                <Table variant='simple'>
                    <TableCaption>Imperial Data table</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>#Employe ID</Th>
                            <Th>Name</Th>
                            <Th>Salary</Th>
                            {/* <Th>Email</Th>
                            <Th>Phone</Th>
                            <Th>City</Th>
                            <Th>State</Th> */}
                            {/* <Th isNumeric>multiply by</Th> */}
                        </Tr>
                    </Thead>
                    <Tbody>

                        {data.map((e) =>
                            <Tr>
                                <Td>
                                    <Link href={`/userdetail/${e._id}`}>
                                        {e._id}
                                    </Link>
                                </Td>
                                <Td>{e.name}</Td>
                                <Td>{e.salary}</Td>
                                {/* <Td>{e.email}</Td>
                                <Td>{e.phone}</Td>
                                <Td>{e.city}</Td>
                                <Td>{e.state}</Td> */}
                            </Tr>
                        )}
                    </Tbody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default UserList
