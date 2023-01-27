import { Box, Card, CardBody, CardHeader, Center, Heading, Stack, StackDivider, Text } from '@chakra-ui/react'
import { Inertia } from '@inertiajs/inertia'
import { Link } from '@inertiajs/inertia-react'
import { router } from '@inertiajs/react'
import React, { useEffect, useState } from 'react'

export default function Discover({ users }) {

  return (
    <Center>

      <Card>
        <CardHeader>
          <Heading size='md'>Client Report</Heading>
          <Link href='/'>
            Go Back
          </Link>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing='4'>
            {users.map((user) => {
              return <Box>
                <Heading size='xs' textTransform='uppercase'>
                  {user.name}
                </Heading>
                <Text pt='2' fontSize='sm'>
                  {user.email}
                </Text>
              </Box>
            })}


          </Stack>
        </CardBody>
      </Card>

    </Center>
  )
}
