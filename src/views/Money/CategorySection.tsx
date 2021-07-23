import styled from 'styled-components';
import React, {useState} from 'react';

const Wrapper = styled.section`
  font-size: 16px;
  > ul{
    display:flex;
    > li {
      width: 20%;
      left: 30%;
      text-align:center;
      padding: 16px 0;
      position:relative;
      font-weight: bold;
      transition: all linear 0.2s;
      &.selected{
        color: #ef8871;
      }
      &.selected::after{
        content: '';
        display:block; 
        height: 3px;
        background:#ef8871;
        position:absolute;
        bottom:0;
        width: 80%;
        left: 10%;
      }
    }
  }
`;

type Props = {
  value: '-' | '+',
  onChange: (value: '-' | '+') => void;
}

const CategorySection: React.FC<Props> = (props) => {
  const categoryMap = {'-': '支出', '+': '收入'};
  const [categoryList] = useState<('+' | '-')[]>(['-', '+']);
  const category = props.value;
  return (
    <Wrapper>
      <ul>
        {categoryList.map(c =>
          <li key={c}
              className={category === c ? 'selected' : ''}
              onClick={() => {props.onChange(c);}}
          >{categoryMap[c]}
          </li>
        )}
      </ul>
    </Wrapper>
  );
};

export {CategorySection};
