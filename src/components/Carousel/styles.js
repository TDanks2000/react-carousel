import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  position: relative;
`;

export const ContentWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  display: flex;
  transition: all 250ms linear;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar,
  &::-webkit-scrollbar {
    display: none;
  }
  & > * {
    width: 100%;
    flex-shrink: 0;
    flex-grow: 1;
  }
  &.show-2 > * {
    width: 50%;
  }
  &.show-3 > * {
    width: calc(100% / 3);
  }
  &.show-4 > * {
    width: calc(100% / 4);
  }
`;

const Arrow = styled.button`
  position: absolute;
  z-index: 1;
  top: 50%;
  transform: translateY(-50%);
  width: 48px;
  height: 48px;
  border-radius: 24px;
  background-color: transparent;
  border-color: transparent;
  cursor: pointer;
  transition: all 0.25s ease-in-out;
  transform: translateX(0px);
  &:hover,
  &:focus {
    background-color: rgba(0, 0, 0, 0.2);
    color: #fff;
  }
  @media (hover: none) and (pointer: coarse) {
    display: none;
  }
`;

const transformAmount = `6px`;

export const LeftArrow = styled(Arrow)`
  left: 24px;
  &:hover,
  &:focus {
    transform: translateX(-${transformAmount});
  }
`;

export const RightArrow = styled(Arrow)`
  right: 24px;
  &:hover,
  &:focus {
    transform: translateX(${transformAmount});
  }
`;
