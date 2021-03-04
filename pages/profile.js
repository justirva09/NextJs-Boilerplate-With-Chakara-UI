import { React } from 'libraries';
import { Box, Heading, Text } from 'components';


const Profile = () => {
  return(
    <Box display="flex" flexWrap="wrap" justifyContent="center" alignContent="center" h="100vh">
        <Box textAlign="center" boxShadow="xs" px={5} py={5} borderRadius="md">
          <Heading as="h2" fontSize="25px" mb={1} textTransform="uppercase">Profile Pages</Heading>
          <Text fontSize="18px">This page is using chakra-ui components</Text>
        </Box>
    </Box>
  )
};

export default Profile;
