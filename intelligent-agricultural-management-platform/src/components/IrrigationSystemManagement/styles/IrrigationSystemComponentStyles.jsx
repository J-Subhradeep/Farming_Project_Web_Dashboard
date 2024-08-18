import styled from "@emotion/styled";
export const NavigateList = styled.ul`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 15px;
  background-color: #f5f6fa;
  border-radius:10%;
  z-index: 1000;
  width: calc(100% - 360px);
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
  max-height: 100vh;
  /* background-color: #253c95; */
  /* background-color: #0033ff; */
  /* contain: content; */
  /* overflow-y: scroll; */
  background-color: #f5f6fa;

`;

export const Zonecontainer = styled.div`
  width: 90%;
  /* padding: 10px; */
  box-sizing:border-box;
  /* background-color: green; */
  &::-webkit-scrollbar{
      width:5px;
      background-color:white;
  }
  &::-webkit-scrollbar-thumb{
    background-color: #c0c0c0;
  }
overflow-y: scroll;
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

  .task-analytics{
    position: relative;
    left: 50%;
    margin-top: 70px;
    /* padding-top: 300px; */
    padding: 50px;
    /* top: 50%; */
    width: 100%;
    transform: translate(-50%);
    /* background-color: green; */
    display: flex;
    align-items: center;
    justify-content: center;
    /* flex-direction: column; */
    overflow-y: scroll;
    max-height: calc(100% - 70px);
    /* contain: content; */
    /* height: auto; */
    box-sizing: border-box;

    &::-webkit-scrollbar{
      width:5px;
      background-color:white;
  }
  &::-webkit-scrollbar-thumb{
    background-color: #c0c0c0;
  }
  }

  .task-analytics-docs {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content : center;
    flex-direction: column;
    /* overflow-y: scroll; */
  }
`;

export const TaskListProviderStyles = styled.div`

  display:flex;
  align-items: center;
  position: relative;
  .submit-button{

    margin-left: 15px;
    height: 55px;
  }



`