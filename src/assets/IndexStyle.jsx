import styled from 'styled-components';
 
const IndexStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  header {
    width: 100%;
    background-color: #564982;
    box-shadow: 1px 1px 5px rgba(0,0,0,0.1);
  }

  ul {
    display: flex;
    justify-content: center;
    list-style: none;
    padding: 0;
  }

  li {
    padding: 5px 15px;
    font-size: 1.3rem;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: white;
  }

  main {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 80vh;
    justify-content: center;
    align-items: center;
  }
`;
export default IndexStyle;