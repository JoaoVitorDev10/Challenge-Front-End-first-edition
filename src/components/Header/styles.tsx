import styled from 'styled-components';

export const Container = styled.div`

  width: 1376px;

  height: 56px;
  margin-top: 32px;

  display: flex;

`;
export const Left = styled.div`

margin-top: 12px;
margin-left: 32px;
`;
export const Center = styled.div`
width: 752px;
height: 100%;
margin: 0 auto;

input{
  padding: 0px 14px;
  width: 100%;
  height: 100%;

  background: rgba(255, 255, 255, 0.16);
  border-radius: 8px;
  border-style: none;
  color: #FFFFFF;

}
`;
export const Right = styled.div`
display: flex;
margin-right: 32px ;
width: 106px;
height: 100%;
gap: 8px;
img{
  padding: 12px 0 12px 12px;
}
span{
  width: 42px;
  height: 24spx;
padding: 16px 12px 16px 0;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #FFFFFF;
  

}
`;
