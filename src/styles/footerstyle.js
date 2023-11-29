import styled from "@emotion/styled";

export const BotBar = styled.footer`
  display: flex;
  width: 100%;
  height: 64px;
  padding: 0rem 1rem 0rem 0.25rem;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;
  justify-content: space-between;
  background: var(--m-3-sys-light-surface-container, #f8ebe9);

  span {
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 30%;
    background: var(--m-3-sys-light-secondary-container, #ffdad6);
  }
  button {
    display: flex;
    width: 48px;
    height: 48px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    cursor: pointer;
    border: none;
    background-color: transparent;
  }
`;
