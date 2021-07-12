import React, {useState} from 'react';
import {CategorySection} from './CategorySection';
import {useTags} from '../../hooks/useTags';
import {CategoryWrapper, defaultFormData} from '../Money';
import Icon from '../../components/Icon';


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
            <ul>
                {iconTags.map(t=>
                    <li key={t.id} className={getClass(t.id)}>
                        <Icon name={t.svg}/>
                        {t.name}
                    </li>
                )}
            </ul>
        </div>

    )
}

export {Setting}