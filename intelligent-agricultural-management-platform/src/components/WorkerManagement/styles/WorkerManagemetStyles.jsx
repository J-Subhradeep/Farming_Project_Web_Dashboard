import styled from "@emotion/styled";
export const NavigateList = styled.ul`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 15px;
  /* background-color: white; */
  /* width: 100%; */
  li {
    list-style: none;
    font-size: 1.2rem;
    font-weight: 500;
    color: #333;
  }
  svg {
    font-size: 1.2rem;
    color: #333;
  }

  li:not(:last-child) {
    color: gray;
  }
  position: absolute;
`;

export const Contianer = styled.div`
  display: flex;
  flex-direction: row;
  //   justify-content: space-between;
  gap: 10px;
  width: 100%;
  height: 100vh;
  /* background-color: #253c95; */
  background-color: #f5f6fa;

`;

export const Zonecontainer = styled.div`
  width: 90%;
  /* padding: 10px; */
  box-sizing:border-box;
  /* background-color: green; */

  .button-container{
    padding: 60px;
    /* background-color: blue; */
    height: calc(100% - 160px);
    width: 100%;
    display: flex;
    align-items:center;
    justify-content:center;
    overflow-y: scroll;
    position: relative;
    top: 80px;
  /* background-color: green; */
  &::-webkit-scrollbar{
      width:5px;
      background-color:white;
  }
  &::-webkit-scrollbar-thumb{
    background-color: #c0c0c0;
  }
    @media screen and (max-width: 900px) {
      margin-top: 100px
    }
  }
`;