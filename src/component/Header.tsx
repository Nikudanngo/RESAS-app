import styled from "styled-components";

// center the header
const Headers = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  height: 50px;
  border-bottom: 2px solid #e0e0e0;
  padding: 0 20px;
  font-size: 20px;
`;

const ToggleButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  border-bottom: 2px solid #e0e0e0;
  padding: 0 20px;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    background-color: #fafafa;
  }

  &:active {
    background-color: #fafafa;
  }

  &:focus {
    background-color: #fafafa;
  }
`;

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  console.log(e.target.value);
};

const Header = () => {
  return (
    <div>
      <Headers>全国の人口推移グラフ</Headers>
    </div>
  );
};

export default Header;
