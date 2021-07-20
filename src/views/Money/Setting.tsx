import React, {useState} from 'react';
import {CategorySection} from './CategorySection';
import {useTags} from '../../hooks/useTags';
import {CategoryWrapper, defaultFormData} from '../Money';
import Icon from '../../components/Icon';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

const Setting: React.FC = (props) => {
    const {iconTags} = useTags();
    const [selected, setSelected] = useState(defaultFormData);
    const [category, setCategory] = useState<'-' | '+'>('-');
    const categoryTagItem = iconTags.filter(i => i.type === category);
    type Selected = typeof selected;
    const getClass = (tagId: number) => selectedTagIds.indexOf(tagId) >= 0 ? 'selected' : '';
    const selectedTagIds: number[] = [];
    const onChange = (obj: Partial<Selected>) => {
        setSelected({...selected, ...obj});
    };
    return (
        <div>
            <CategoryWrapper>
                <CategorySection value={category}
                                 onChange={(category) => {setCategory(category);}}
                />
            </CategoryWrapper>
            <ItemWrapper>
                <NavLink to="/setting/create">
                    创建标签
                    <Icon name="right"/>
                </NavLink>
                {categoryTagItem.map(t =>
                    <li key={t.id} className={getClass(t.id)}>
                        <Icon name={t.svg}/>
                        <span className="name">{t.name}</span>
                        <Icon name="delete" className="trash"/>
                    </li>
                )}
            </ItemWrapper>
        </div>

    );
};

const ItemWrapper = styled.ol`
  display: flex;
  flex-direction: column;
  >a{
    color: black;
    padding: 10px 0;
    margin: 0 16px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #f0f0f0;
  }

  > li {
    border-bottom: 1px solid #f0f0f0;
    padding: 10px 0;
    margin: 0 16px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    >.name{
      margin-right: auto;
    }
    > svg {
      margin: 4px 4px;
      width: 20px;
      height: 20px;
    }
    > .trash{
      fill: #ef8871;
      
    }
  }
`;

export {Setting};