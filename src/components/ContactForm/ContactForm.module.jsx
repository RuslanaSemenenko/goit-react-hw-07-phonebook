import styled from '@emotion/styled';

export const TaskEditor = styled.form`
  display: flex;
  flex-direction: column;
  padding: 12px;
  width: 400px;
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  margin-bottom: 16px;
`;

export const TaskEditorLabel = styled.label`
  display: inline-block;
  margin-bottom: 16px;
  font-size: 20px;
  color: #171718;
  cursor: pointer;
`;

export const TaskEditorInput = styled.input`
  color: #171718;
  font: inherit;
  font-size: 1.2rem;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #bdbdbd;
  width: 350px;
  outline: 0;
`;

export const TaskEditorButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  background-color: #60b821;
  border: 0;
  outline: 0;
  padding: 8px 24px;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 0px 2px 1px 1px rgba(0, 0, 0, 0.05);
  font: inherit;
  text-transform: uppercase;
  user-select: none;
  transition: background-color 200ms ease-in-out;

  &:hover {
    box-shadow: 0px 2px 1px 1px rgba(0, 0, 0, 0.15);
    background-color: #303f9f;
  }
`;

export const TaskEditorInputFocus = styled(TaskEditorInput)`
  border: 1px solid #2b32b2;
`;
