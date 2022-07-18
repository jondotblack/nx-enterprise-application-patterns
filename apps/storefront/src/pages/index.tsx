import { Button, Container, Heading } from '@enterprise-application/design-system';

const Index = () => {
  return (
    <Container as="main" maxW="lg" centerContent>
      <Heading as="h1" mb={6}>NX enterprise application application patterns</Heading>
      <Button as="a" href="https://jon.black/blog">View blog post</Button>
    </Container>
  );
}

export default Index;
