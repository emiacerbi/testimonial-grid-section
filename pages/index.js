import { Avatar, Box, Container, Heading, Stack, Text } from "@chakra-ui/react";


export default function Home() {
  return (
    <Container 
      bg='neutral.200'
      display='grid'
      fontFamily="'Barlow Semi Condensed', sans-serif"
      gap={5}
      paddingX={5}
      paddingY={16}
    >

      {/* First Box */}
      <Stack 
        bg='primary.100' 
        bgImage='bg-pattern-quotation.svg' 
        bgPos='90% 0' 
        bgRepeat='no-repeat'
        borderRadius={10}
        padding={8}
        spacing={5}
      >
        <Box alignItems='center' display='flex' flexDirection='row'  gap={3}>
          <Avatar border='3px solid #a57ed1' name="Daniel Clifford" src="image-daniel.jpg" />
          <Stack spacing={0}>
            <Text color='primary.400'>Daniel Clifford</Text>
            <Text color='neutral.100' opacity='.8'>Verified Graduate</Text>
          </Stack>
        </Box>

        <Heading color='primary.400' fontSize='xl'>
          I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every {`penny's`} worth.
        </Heading>

        <Text color='neutral.100' fontSize='sm' opacity='.8'>
          {`" I was an EMT for many years before I joined the bootcamp. I've been looking to make a transition and have heard some people who had and amazing experience here. I signed up for the free intro course and found it incredibly fun!. I enrolled shortyl thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I've succesfully switched careers, working as a Software Engineer at a VR startup. "`}
        </Text>
      </Stack>

      {/* Second Box */}
      <Stack 
        bg='primary.200' 
        borderRadius={10}
        padding={8}
        spacing={5}
      >
        <Box alignItems='center' display='flex' flexDirection='row'  gap={3}>
          <Avatar name="Jonathan Walters" src="image-jonathan.jpg" />
          <Stack spacing={0}>
            <Text color='primary.400'>Jonathan Walters</Text>
            <Text color='neutral.100' opacity='.8'>Verified Graduate</Text>
          </Stack>
        </Box>

        <Heading color='primary.400' fontSize='xl'>
          The team was very supportive and kept me motivated
        </Heading>

        <Text color='neutral.100' fontSize='sm' opacity='.8'>
          {`" I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I've made in myself. "`}
        </Text>
      </Stack>

      {/* Third Box */}
      <Stack 
        bg='primary.400' 
        borderRadius={10}
        padding={8}
        spacing={5}
      >
        <Box alignItems='center'  display='flex' flexDirection='row' gap={3}>
          <Avatar name="Jonathan Walters" src="image-jeanette.jpg" />
          <Stack spacing={0} >
            <Text color='primary.200'>Jeanette Harmon</Text>
            <Text color='primary.200' opacity='.5'>Verified Graduate</Text>
          </Stack>
        </Box>

        <Heading color='primary.200' fontSize='xl'>
          An overall wonderful and rewarding experience
        </Heading>

        <Text color='primary.200' fontSize='sm' opacity='.8'>
          {`" Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love. "`}
        </Text>
      </Stack>

      {/* Fourth Box */}
      <Stack 
        bg='primary.300' 
        borderRadius={10}
        padding={8}
        spacing={5}
      >
        <Box alignItems='center' display='flex' flexDirection='row'  gap={3}>
          <Avatar border='2px solid hsl(263, 55%, 52%)' name="Patrick Abrams" src="image-patrick.jpg" />
          <Stack spacing={0}>
            <Text color='primary.400'>Patrick Abrams</Text>
            <Text color='neutral.100' opacity='.8'>Verified Graduate</Text>
          </Stack>
        </Box>

        <Heading color='primary.400' fontSize='xl'>
          Awesome teaching support from TAs who did the bottcamp themselves. Getting guidance from them and learning from their experiences was easy.
        </Heading>

        <Text color='neutral.100' fontSize='sm' opacity='.8'>
          {`" The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the wolrd and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people. "`}
        </Text>
      </Stack>

      {/* Fifth Box */}
      <Stack 
        bg='primary.400' 
        borderRadius={10}
        padding={8}
        spacing={5}
      >
        <Box alignItems='center'  display='flex' flexDirection='row' gap={3}>
          <Avatar name="Jonathan Walters" src="image-kira.jpg" />
          <Stack spacing={0} >
            <Text color='primary.200'>Kira Whittle Harmon</Text>
            <Text color='primary.200' opacity='.5'>Verified Graduate</Text>
          </Stack>
        </Box>

        <Heading color='primary.200' fontSize='xl'>
          Such a life-changing experience. Highly recommended!
        </Heading>

        <Text color='primary.200' fontSize='sm' opacity='.8'>
          {`" Before joining the bootcamp, I’ve never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I’ve often referred to it during interviews as an example of my developent 
          experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend! "`}
        </Text>
      </Stack>

    </Container>

    
  )
}
