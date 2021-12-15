import { Field } from 'formik';
import styled from 'styled-components';
import { string } from 'yup';
import { Theme, Color } from './theme';
import { LayoutProps } from '.';

export const MarginPadding = styled.div<LayoutProps>`
  margin-top: ${(props) => props.marginTop && props.marginTop};
  margin-right: ${(props) => props.marginRight && props.marginRight};
  margin-bottom: ${(props) => props.marginBottom && props.marginBottom};
  margin-left: ${(props) => props.marginLeft && props.marginLeft};
  padding-top: ${(props) => props.paddingTop && props.paddingTop};
  padding-right: ${(props) => props.paddingRight && props.paddingRight};
  padding-bottom: ${(props) => props.paddingBottom && props.paddingBottom};
  padding-left: ${(props) => props.paddingLeft && props.paddingLeft};
  padding: ${(props) => props.padding && props.padding + '!important'};
`;

export const CustomText = styled.div<LayoutProps>`
  font-weight: ${(props) => props.fontWeight && props.fontWeight};
  text-align: ${(props) => props.textAlign && props.textAlign};
  font-size: ${(props) => props.fontSize && props.fontSize};
  line-height: ${(props) => props.lineHeight && props.lineHeight};
  letter-spacing: ${(props) =>
    props.letterSpacing ? props.letterSpacing : '0.01em'};
  color: ${(props) => (props.color ? props.color : Theme.whiteText)};
`;

export const CustomFlex = styled(MarginPadding)<LayoutProps>`
  display: ${(props) => props.display && props.display};
  flex-direction: ${(props) => props.flexDirection && props.flexDirection};
  justify-content: ${(props) => props.justifyContent && props.justifyContent};
  align-items: ${(props) => props.alignItems && props.alignItems};
`;

export const FlexStyle = styled(MarginPadding)<LayoutProps>`
  max-width: ${(props) => props.maxWidth && props.maxWidth};
  max-height: ${(props) => props.maxHeight && props.maxHeight};
  min-width: ${(props) => props.minWidth && props.minWidth};
  min-height: ${(props) => props.minHeight && props.minHeight};
  width: ${(props) => (props.width ? props.width : '100%')};
  height: ${(props) => (props.height ? props.height : 'auto')};
`;

export const FlexRowCenter = styled(FlexStyle)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FlexRowSpace = styled(FlexStyle)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FlexColumn = styled(FlexStyle)`
  display: flex;
  flex-direction: column;
`;

export const FlexColumnCenter = styled(FlexStyle)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FlexColumnSpace = styled(FlexStyle)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const CustomStyle = styled.div<LayoutProps>`
  background: ${(props) => props.bgColor && props.bgColor};
  height: ${(props) => props.height && props.height};
  width: ${(props) => props.width && props.width};
  display: flex;
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : 'column'};
  justify-content: ${(props) => props.justifyContent && props.justifyContent};
  align-items: center;
  border-radius: ${(props) => props.borderRadius && props.borderRadius};
  border: ${(props) => props.border && props.border};
  border-top-left-radius: ${(props) =>
    props.borderTopLeft && props.borderTopLeft};
  border-top-right-radius: ${(props) =>
    props.borderTopRight && props.borderTopRight};
  border-bottom-left-radius: ${(props) =>
    props.borderBottomLeft && props.borderBottomLeft};
  border-bottom-left-radius: ${(props) =>
    props.borderBottomLeft && props.borderBottomLeft};
  padding: ${(props) => props.padding && props.padding};
`;

export const PrimaryButton = styled.button<LayoutProps>`
  height: ${(props) => props.height && props.height};
  width: ${(props) => props.width && props.width};
  background: ${(props) =>
    (props.btnType = 'primary'
      ? `${Color.blackPrimary}`
      : `${Color.whitePrimary}`)};
  color: ${Theme.whiteText};
  border-radius: ${Theme.btnBorRadius};
  border: 0;
  font-weight: 600;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 300ms;

  :disabled {
    cursor: not-allowed;
    background: ${Color.darkGrey};
    box-shadow: 0px 0px;
  }
`;
