import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TokenHolderLayout } from '../../layouts';
import {
  ConnectBtn,
  HomeWrapper,
  MainContainer,
  SectionTitle,
  TopContainer,
  ViewMore,
  ViewMoreContainer,
  Success,
  CloseBtn,
  ContainerGrp,
  Container,
  Title,
  SubTitle,
  Amount,
  SubmitBtn,
  DesText,
  InputerContainer,
  MinusBtn,
  PlusBtn,
  MyNumberInput
} from './style';
import { Loader, Modal, CustomNumberInput } from '../../components';
import { WarningText } from '../../components/style';

const Staking = () => {
  const [showModal, setShowModal] = useState(false);
  const [value, setValue] = useState(0);
  const { userRegistered, errMessage, duplicatedMessage } = useSelector(
    (state: any) => state.user
  );

  const handleMinus = () => {
    setValue(1 * value - 1);
  };

  const handlePlus = () => {
    setValue(1 * value + 1);
  };
  return (
    <TokenHolderLayout pageTitle="Homepage">
      <HomeWrapper>
        <MainContainer>
          <TopContainer>
            <SectionTitle>
              <h2>Stake Your Mushroom</h2>
            </SectionTitle>
            <ConnectBtn>Connect Wallet</ConnectBtn>
          </TopContainer>
          <ViewMore>
            <ViewMoreContainer>
              <Success>SUCCESS</Success>
              <strong>
                Congrats, you've successfully staked. <span>View More</span>
              </strong>
              <CloseBtn>&times;</CloseBtn>
            </ViewMoreContainer>
          </ViewMore>
          <ContainerGrp>
            <Container>
              <Title color={'red'}>
                MUSHROOMS UNSTAKED: <span>XXX</span>
              </Title>
              <SubTitle>Staking</SubTitle>
              <Amount>
                TOTAL STAKED: <span>XXX</span>
              </Amount>
              <SubmitBtn>Stake Now</SubmitBtn>
              <DesText>Stake Magic Mushrooms for Celium</DesText>
            </Container>
            <Container>
              <Title color={'blue'}>
                TOTAL STAKED: <span>XXX</span>
              </Title>
              <SubTitle>Withdraw</SubTitle>
              <InputerContainer>
                <MinusBtn onClick={handleMinus}>-</MinusBtn>
                <MyNumberInput
                  value={value}
                  onValueChange={(vals: any) => setValue(vals.value)}
                />
                <PlusBtn onClick={handlePlus}>+</PlusBtn>
              </InputerContainer>
              <SubmitBtn>Confirm Withdraw</SubmitBtn>
              <DesText>Withdraw your Staked Shroom(s)</DesText>
            </Container>
            <Container>
              <Title color={'red'}>
                MUSHROOMS UNSTAKED: <span>XXX</span>
              </Title>
              <SubTitle>Claim</SubTitle>
              <Amount>
                TOTAL REWARDS: <span>XXX</span>
              </Amount>
              <SubmitBtn>Claim Earnings</SubmitBtn>
              <DesText>Claim your rewarded Celium for staking</DesText>
            </Container>
          </ContainerGrp>
          {errMessage && errMessage.length > 0 && (
            <Modal show={showModal} closeModal={() => setShowModal(false)}>
              <WarningText>{errMessage}</WarningText>
            </Modal>
          )}
        </MainContainer>
      </HomeWrapper>
    </TokenHolderLayout>
  );
};

export default Staking;
