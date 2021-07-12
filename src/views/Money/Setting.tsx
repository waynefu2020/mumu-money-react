import React, {useState} from 'react';
import {CategorySection} from './CategorySection';
import {useTags} from '../../hooks/useTags';
import {CategoryWrapper, defaultFormData} from '../Money';
import Icon from '../../components/Icon';
import styled from 'styled-components';


const Setting:React.FC= (props) =>{
    const {iconTags} = useTags()
    const [selected, setSelected] = useState(defaultFormData);
    type Selected = typeof selected;
    const getClass = (tagId: number) => selectedTagIds.indexOf(tagId) >= 0 ? 'selected' : '';
    const selectedTagIds:number[] = [];
    const onChange = (obj: Partial<Selected>) => {
        setSelected({...selected, ...obj});
    };
    return (
        <div>
            <CategoryWrapper>
                <CategorySection value={selected.category}
                                 onChange={(category) => onChange({category})}
                />
            </CategoryWrapper>
            <ItemWrapper>
                <span>创建新的标签</span>
                {iconTags.map(t=>
                    <li key={t.id} className={getClass(t.id)}>
                        <Icon name={t.svg}/>
                        {t.name}
                        <Icon name="delete"/>
                    </li>
                )}
            </ItemWrapper>
        </div>

    )
}

const ItemWrapper = styled.ol`
  display: flex;
  flex-direction: column;
   > li{
     border-bottom: 1px solid black;
     padding: 10px 10px;
     > svg{
       margin: 4px 0;
       width: 20px;
       height: 20px;
     }
   }
`

export {Setting}