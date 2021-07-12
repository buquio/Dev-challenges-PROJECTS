import styled from "@emotion/styled";
import device from "../../../utils/breakpoints";

export const HightLightCardContainer = styled.div`
  width: 100%;
  padding: 2rem;
  background-color: #1E213A;
  margin-bottom: 2rem;

  @media ${device.tablet}{
    width: 45%;
  }
  @media ${device.laptop}{
    width: 48%;
  }

  & .card-title {
    font-size: 16px;
    font-weight: 500;
    text-align: center;
    color: #E7E7EB;
    margin-bottom: 1rem;
    margin-top: 0;
  }
  & .card-information {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    font-size: 64px;
    font-weight: 700;
    text-align: center;
    color: #E7E7EB;
    margin: 0 0 1.5rem;

    & span {
      font-size: 36px;
      font-weight: 500;
    }
  }
`

export const CardFooter = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 1rem;

  & .card-footer-text {
    font-size: 14px;
    font-weight: 500;
    text-align: center;
    color: #E7E7EB;
    margin-left: 1rem;
  }
  & .card-footer-image {
    width: 17px;
    margin-right: .5rem;
    transition: transform 1s ease;
    transform: rotate(-45deg);

    &.N {
      transform: rotate(-45deg);
    }
    &.NNE {
      transform: rotate(-20deg);
    }
    &.NE {
      transform: rotate(0deg);
    }
    &.ENE {
      transform: rotate(20deg);
    }
    &.E {
      transform: rotate(45deg);
    }
    &.ESE {
      transform: rotate(65deg);
    }
    &.SE {
      transform: rotate(85deg);
    }
    &.SSE {
      transform: rotate(105deg);
    }
    &.S {
      transform: rotate(135deg);
    }
    &.SSW {
      transform: rotate(155deg);
    }
    &.SW {
      transform: rotate(175deg);
    }
    &.WSW {
      transform: rotate(195deg);
    }
    &.W {
      transform: rotate(225deg);
    }
    &.WNW {
      transform: rotate(245deg);
    }
    &.NW {
      transform: rotate(265deg);
    }
    &.NNW {
      transform: rotate(285deg);
    }



  }
`