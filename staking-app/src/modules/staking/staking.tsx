import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
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
import { baseURL } from '../../utils';

const Staking = () => {
  const [showModal, setShowModal] = useState(false);
  const [value, setValue] = useState(0);
  const [tokenList, setTokenList] = useState([]);
  const { walletConnected, errMessage, userAddress } = useSelector(
    (state: any) => state.user
  );

  const handleMinus = () => {
    setValue(1 * value - 1);
  };

  const handlePlus = () => {
    setValue(1 * value + 1);
  };

  const handleStaking = () => {
    setShowModal(true);
  };

  const handleWithdraw = () => {
    setShowModal(true);
  };

  const handleClaim = () => {};

  useEffect(() => {
    async function getTokens() {
      const response = await axios.post(`${baseURL}/get-tokens`, {
        userAddress: userAddress
      });

      setTokenList(response?.data?.data);

      console.log('res >>>>>', tokenList);
    }

    getTokens();
  }, [walletConnected]);

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
              <SubmitBtn onClick={() => handleStaking()}>Stake Now</SubmitBtn>
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
              <SubmitBtn onClick={() => handleWithdraw()}>
                Confirm Withdraw
              </SubmitBtn>
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
              <SubmitBtn onClick={() => handleClaim()}>
                Claim Earnings
              </SubmitBtn>
              <DesText>Claim your rewarded Celium for staking</DesText>
            </Container>
          </ContainerGrp>
          <Modal show={showModal} closeModal={() => setShowModal(false)}>
            <WarningText>{tokenList}</WarningText>
          </Modal>
        </MainContainer>
      </HomeWrapper>
    </TokenHolderLayout>
  );
};

export default Staking;
