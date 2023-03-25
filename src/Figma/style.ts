import styled from "@emotion/styled";
export const RectangularBox = styled.div`
  /* border: 1px solid #bdbebf; */
  margin: 50px auto;
  width: 50%;
  padding: 60px;
  /* display: flex; */
  .container {
    width: 100%;
   
  }
  .stockValue {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .currentStock {
    display: flex;
    gap: 8px;
  }
  .number {
    font-weight: 400;
    font-size: 4.37rem;
    line-height: 88.56px;
  }
  .subscript {
    font-style: normal;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 30px;
    color: #bdbebf;
    margin-top: 12px;
  }
  .profit {
    display: flex;
    font-weight: 400;
    font-size: 1.1rem;
    color: #67bf6b;
    line-height: 22.77px;
    font-family: "Circular Std";
  }
  .stocksNavigation {
    display: flex;
    padding: 10px 0;
    gap: 30px;
    margin-top: 25px;
    box-sizing: border-box;
    width: auto;
    border-bottom: 2px solid #eff1f3;
    /* 
    width: auto%;
    gap: 3%;
    border-bottom: 2px solid #eff1f3; */
  }
  .nav-btn {
    font-size: 1.1rem;
    font-weight: 400;
    line-height: 22.77px;
    color: #6f7177;
  }
  .active {
    border-bottom: 3px solid #4b40ee;
    color: #000;
    font-size: 1.1rem;
    font-weight: 400;
    line-height: 22.77px;
  }
`;
