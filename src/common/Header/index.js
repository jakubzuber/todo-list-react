import { Title, Container } from "./styled"

const Header = ({ titleHeader }) => {
  
  return (
    <Container>
      <Title>
        <h1>
          {titleHeader}
        </h1>
        
      </Title>
    </Container>
  )
};

export default Header;