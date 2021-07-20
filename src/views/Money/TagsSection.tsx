import React, {useState} from 'react';
import styled from 'styled-components';
import {useTags} from '../../hooks/useTags';
import Icon from '../../components/Icon';
import {NavLink} from 'react-router-dom';
import {CategorySection} from './CategorySection';

export type Props = {
    value: number[];
    onChange: (selected: number[]) => void;
}

const TagsSection: React.FC<Props> = (props) => {
    const {tags, iconTags, addTag} = useTags();
    const [category, setCategory] = useState<'-'|'+'>('-')
    const categoryTagItem = iconTags.filter(i=>i.type===category)
    const selectedTagIds = props.value;
    const onToggleTag = (tagId: number) => {
        const index = selectedTagIds.indexOf(tagId);
        if (index >= 0) {
            props.onChange(selectedTagIds.filter(t => t !== tagId));
        } else {
            props.onChange([...selectedTagIds, tagId]);
        }
    };

    const selectTag = (tagId: number)=>{
        const index = selectedTagIds.indexOf(tagId);
        if (index >= 0) {
            props.onChange(selectedTagIds.filter(t => t !== tagId));
        } else {
            props.onChange([tagId]);
        }
    }

    const getClass = (tagId: number) => selectedTagIds.indexOf(tagId) >= 0 ? 'selected' : '';
    return (
        <div>
            <CategorySection value={category} onChange={(value)=>{setCategory(value)}}/>
            <CategoryItemWrapper>
                <ol>
                    {categoryTagItem.map(t=>
                        <li key={t.id} onClick={() => {selectTag(t.id);}}
                            className={getClass(t.id)}>
                            <Icon name={t.svg}/>
                            {t.name}
                        </li>
                    )}
                    <li>
                        <NavLink to="/setting">
                            <Icon name="setting"/>
                            管理
                        </NavLink>
                    </li>
                </ol>
                <button onClick={addTag}>新增标签</button>
            </CategoryItemWrapper>
        </div>

    );
};

export const CategoryItemWrapper = styled.section`
  background: #FFFFFF;
  padding: 12px 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  > ol {
    margin: 0 -12px;
    display: flex;
    flex-wrap: wrap;
    
    > li {
      background: #f6f6f7;
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 3px 18px;
      font-size: 14px;
      margin: 8px 12px;
        > a{
          color: black;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          font-size: 14px;
          background: transparent;
          > svg{
            margin: 4px 0;
            width: 20px;
            height: 20px;
          }
        }
        
      > svg{
        margin: 4px 0;
        width: 20px;
        height: 20px;
      }
      &.selected {
        background: #ef8871;
        color: white;
        > svg{
          fill: white;
        }
      }
    }
  }

  > button {
    background: none;
    border: none;
    padding: 2px 4px;
    border-bottom: 1px solid #333;
    color: #666;
    margin-top: 8px;
  }
`;
export {TagsSection};