import styled from 'styled-components';
import React, {ChangeEventHandler} from 'react';
import {Input} from '../../components/Input';

const Wrapper = styled.section`
  background: white;
  padding: 2px 2px;
  font-size: 14px;
  width: 100%;
`;

type Props = {
  value: string;
  onChange: (value: string) => void;
}
const NoteSection: React.FC<Props> = (props) => {
  const note = props.value;
  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    props.onChange(e.target.value);
  };
  return (
    <Wrapper>
      <Input label="" type="text" value={note} onChange={onChange}
      placeholder="请输入备注信息"/>
    </Wrapper>
  );
};

export {NoteSection};

