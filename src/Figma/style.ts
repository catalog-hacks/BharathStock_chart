import styled from "@emotion/styled";
export const Graph = styled.div`
  box-sizing: border-box;
  margin: 2% 5%;
  width: 80%;
  height: auto;
  padding: 3%;
  .stockDashboard {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
  .stockValue {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  .currentStock {
    display: flex;
    width: 100px;
  }
  .number {
    font-size: 70px;
    font-weight: 400;
  }
  .subscript {
    margin-top: 8px;
    font-size: 24px;
    color: #bdbebf;
    font-weight: 400;
  }
  .profit {
    display: flex;
    font-family: Circular Std;
    font-weight: 400;
    font-size: 18px;
    color: #67bf6b;
  }
  .stocksNavigation {
    display: flex;
    width: 100%;
    gap: 3%;
    border-bottom: 2px solid #eff1f3;
  }
  p {
    font-size: 20px;
    font-weight: 400;
    color: #6f7177;
  }
  .active {
    border-bottom: 3px solid#4b40ee;
    color: #000;
  }
`;
