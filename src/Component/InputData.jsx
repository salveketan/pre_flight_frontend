import React from 'react'
import { Box, Button, Heading, Image, Input, Spacer, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const InputData = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState({
        name: "", salary: "", email: "", phone: "", city: "", state: ""
    })

    let name, value
    const handle = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value })
    }

    const PostData = async () => {
        const { name, salary, email, phone, city, state } = user;
        if (phone.length !== 10) {
            alert("Phone number must be 10 digit")
        }
        else {
            const data =
                await fetch("https://preflightbackend.herokuapp.com/",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            name, salary, email, phone, city, state
                        })
                    })

            const res = await data.json();
            // console.log(data.status);

            if (data.status === 401 || !res) {
                window.alert("User is already exist, please use diffrent email")
            }
            else if (data.status === 301) {
                window.alert("Please fill all filled")
            }
            else if (data.status === 201) {
                window.alert("You have register successfully");
            }
        }
    }
    return (
        <div>

            <Box w='100%' p={4} color='white' >
                <form method='POST'>
                    <Box w='35%' h="1000px" color='black' margin={"auto"} textAlign="center">
                        <Box w='100%' p={4} color='black' margin={"auto"}>
                            <Heading as='h6' size='xs'>
                                Form to add new user
                            </Heading>
                        </Box>
                        <Box w='100%' p={4} color='black' margin={"auto"}>

                            <Heading as='h5' size='md'>
                                Please Fill All Neccesary Data!
                            </Heading>
                        </Box>
                        <Box w='100%' p={4} color='black' margin={"auto"}>
                            <Input name='name' value={user.name} variant='flushed' placeholder='Name*' onChange={handle} />
                            <Input name='salary' value={user.salary} variant='flushed' placeholder='Salary*' onChange={handle} />
                            <Input name='email' value={user.email} variant='flushed' placeholder='Email*' onChange={handle} />
                            <Input name='phone' value={user.phone} variant='flushed' placeholder='Phone Number*' onChange={handle} />
                            <Box display={"flex"}>
                                <Input name='city' value={user.city} variant='flushed' placeholder='City' onChange={handle} />
                                <Input name='state' value={user.state} variant='flushed' placeholder='State' onChange={handle} />
                            </Box>
                        </Box>
                        <Box w='100%' p={4} color='black' margin={"auto"}>
                            <Text fontSize='sm'>Before “Click Submitting”, you please look all the data filled.</Text>
                        </Box>
                        <Button onClick={PostData} marginTop={"10px"} borderRadius={"50px"} bg={"black"} color={"white"}>ADD USER</Button>
                    </Box>
                </form>
            </Box>
        </div>
    )
}

export default InputData