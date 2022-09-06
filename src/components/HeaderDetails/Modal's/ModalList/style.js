import styled from 'styled-components/native'

export const Line = styled.View`
  position: absolute;
  border-color: rgba(255, 255, 255, 0.4);
  width: 100%;
  background-color: grey;
  top: 40px;
  border-bottom-width: 1px
`;

export const Conteiner = styled.View`
  width: 100%;
  background-color: white;
  height: 70%;
  border-radius: 20px;
  position: absolute;
  bottom: -10px;
`

export const InvisibleConteiner = styled.View`
  height: 50%;
  top: 390px
`

export const FlatlistConteiner = styled.View`
  margin-top: 25px;
  height: 135px
`

export const CloseButton = styled.TouchableOpacity`
  align-self: flex-end;
  right: 20px;
  position: absolute;
  top: 10px;
`

export const SelectListButton = styled.TouchableOpacity`
  width: 20px;
  height: 20px; 
  border-radius: 50px;
  position: absolute;
  border-width: 1px;
  left: -30px;
  justify-content: center;
  align-items: center;
`

export const SaveButton = styled.TouchableOpacity`
  align-self: center;
  background-color: black; 
  padding-left: 15px; 
  padding-right: 15px;
  padding-top: 2px; 
  padding-bottom: 2px; 
  border-radius: 5px;
  position: absolute;
  bottom: 50px;
`

export const ListConteiner = styled.View`
  justify-content: flex-start;
  width: 100%;
  left: 50px;
  top: 10px;
`