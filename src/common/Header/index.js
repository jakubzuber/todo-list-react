import { Title } from "./styled"

const Header = ({ titleHeader }) => {
  
  return (
      <Title>
        <h1>
          {titleHeader}
        </h1>
      </Title>
  )
};

export default Header;