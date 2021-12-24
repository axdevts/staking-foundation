export interface LayoutProps {
  margin?: string;
  marginTop?: string;
  marginRight?: string;
  marginBottom?: string;
  marginLeft?: string;
  padding?: string;
  paddingTop?: string;
  paddingRight?: string;
  paddingBottom?: string;
  paddingLeft?: string;
  fontWeight?: string;
  textAlign?: string;
  fontSize?: string;
  lineHeight?: string;
  letterSpacing?: string;
  color?: string;
  display?: string;
  flexDirection?: string;
  justifyContent?: string;
  alignItems?: string;
  maxWidth?: string;
  maxHeight?: string;
  minWidth?: string;
  minHeight?: string;
  width?: string;
  height?: string;
  bgColor?: string;
  borderRadius?: string;
  border?: string;
  borderTopLeft?: string;
  borderTopRight?: string;
  borderBottomRight?: string;
  borderBottomLeft?: string;
  bg?: string;
  textFillColor?: string;
  opacity?: string;
  btnType?: string;
}

export interface ItemsProps {
  items: ItemProps[];
}

export interface ImgCardProps {
  item: ItemProps;
}

export interface ItemProps {
  img?: any;
  title?: string;
  subTitle?: string;
  description?: string;
}

export interface RoadmapsProps {
  mapItems: RoadmapProps[];
}

export interface RoadmapProps {
  date?: any;
  desc1?: any;
  desc2?: any;
  desc3?: any;
  desc4?: any;
  desc5?: any;
}

export interface TableTiersProps {
  tableTiers: TableTierProps[];
}

export interface TableTierProps {
  name?: any;
  amount?: any;
  pool?: any;
  maxInvestment?: any;
  royaRoom?: any;
}

export interface SuccessModalProps {
  show?: any;
  closeModal?: any;
}

export interface TierProps {
  img?: any;
  name?: string;
  amount?: string;
  desc?: string;
  privillge1?: string;
  privillge2?: string;
  privillge3?: string;
  privillge4?: string;
}
