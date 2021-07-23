import styled from 'styled-components';
import React from 'react';
import {useTags} from 'hooks/useTags';
import Icon from '../../components/Icon';

type Props = {
  value: number[];
  onChange: (selected: number[]) => void;
}
const TagsSection: React.FC<Props> = (props) => {
  const {tags, addTag} = useTags();
  const selectedTagIds = props.value;
  const onToggleTag = (tagId: number) => {
    const index = selectedTagIds.indexOf(tagId);
    if (index >= 0) {
      props.onChange(selectedTagIds.filter(t => t !== tagId));
    } else {
      props.onChange([tagId]);
    }
  };
  const getClass = (tagId: number) => selectedTagIds.indexOf(tagId) >= 0 ? 'selected' : '';
  return (
    <Wrapper>
      <ol>
        {tags.map(tag =>
          <li key={tag.id} onClick={
            () => {onToggleTag(tag.id);}
          } className={getClass(tag.id)}
          >{tag.name}</li>
        )}
      </ol>
      <button onClick={addTag}>
        <Icon name="add"/>
        新增
      </button>
    </Wrapper>
  );
};


const Wrapper = styled.section`
  background: #FFFFFF; padding: 12px 16px;
  flex-grow: 1; display:flex; flex-direction: column;
  justify-content: flex-end; align-items: flex-start;
  > ol { margin: 0 -12px;
    > li{
       background: #f6f6f7; border-radius: 18px;
       display:inline-block; padding: 3px 18px; 
       font-size: 14px; margin: 8px 12px;
       &.selected{
         background: #ef8871;
         color: white;
       }
    }
  }
  > button{
    background:transparent; border: 1px solid #d9d9d9; padding: 4px 8px;
    font-size: 14px;
    border-radius: 18px;
    color: #666;
    margin-top: 8px;
    display: flex;
    align-items: center;
    > svg{
      margin-right: 4px;
      fill: #e66862;
    }
  }
`;
export {TagsSection};
