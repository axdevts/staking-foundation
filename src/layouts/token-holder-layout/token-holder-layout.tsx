import { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  SideBar,
  LinkContainer,
  ALinkContainer,
  Wrapper,
  ContentBox,
  ContentBoxHead,
  MenuItem,
  CloseBtn
} from './style';
import { useHistory, useLocation } from 'react-router-dom';
import { Paths } from '../../utils';
import { MenuIcon } from '../../images';

interface Props {
  children: React.ReactNode;
  pageTitle?: string;
  backgroundColor?: string;
}

const TokenHolderLayout = (props: Props) => {
  const { children } = props;

  const [show, setShow] = useState(false);

  const history = useHistory();

  const { pathname } = useLocation();

  const handleLinkClick = (path: string) => {
    history.push(path);
    setShow(false);
  };

  const { network } = useSelector((state: any) => state.user);

  return (
    <Wrapper>
      <SideBar show={show}>
        <CloseBtn onClick={() => setShow(false)}>&times;</CloseBtn>
        <MenuItem>
          <LinkContainer
            active={pathname === Paths.buy}
            onClick={() => handleLinkClick(Paths.buy)}
          >
            Buy
          </LinkContainer>
        </MenuItem>
        <MenuItem>
          <LinkContainer
            active={pathname === Paths.aboutUs}
            onClick={() => handleLinkClick(Paths.aboutUs)}
          >
            About Us
          </LinkContainer>
        </MenuItem>
        <MenuItem>
          <LinkContainer
            active={pathname === Paths.roadmap}
            onClick={() => handleLinkClick(Paths.roadmap)}
          >
            Roadmap
          </LinkContainer>
        </MenuItem>
        <MenuItem>
          <LinkContainer
            active={pathname === Paths.collection}
            onClick={() => handleLinkClick(Paths.collection)}
          >
            Collection
          </LinkContainer>
        </MenuItem>
        <MenuItem>
          <LinkContainer
            active={pathname === Paths.faq}
            onClick={() => handleLinkClick(Paths.faq)}
          >
            FAQ
          </LinkContainer>
        </MenuItem>
        <MenuItem>
          <ALinkContainer
            active={false}
            href={Paths.joinDiscord}
            target="_blank"
            rel="noopener noreferrer"
          >
            Join Discord
          </ALinkContainer>
        </MenuItem>
        <MenuItem>
          <ALinkContainer
            active={false}
            href={Paths.twitter}
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </ALinkContainer>
        </MenuItem>
      </SideBar>
      <ContentBox>
        <ContentBoxHead backgroundColor={'transparent'}>
          <img
            src={MenuIcon.default}
            alt="menu"
            onClick={() => setShow(true)}
          />
        </ContentBoxHead>
        {children}
      </ContentBox>
    </Wrapper>
  );
};

export default TokenHolderLayout;
