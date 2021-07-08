import Layout from '../components/Layout';
import React, {useState} from 'react';
import styled from 'styled-components';
import {TagsSection} from './Money/TagsSection';
import {NumberPadSection} from './Money/NumberPadSection';
import {NoteSection} from './Money/NoteSection';
import {CategorySection} from './Money/CategorySection';
import {useRecords} from '../hooks/useRecords';


const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;

const CategoryWrapper = styled.div`
  background: white;
`

type Category = '-' | '+';

const defaultFormData = {
    tagIds: [] as number[],
    note: '',
    category: '-' as Category,
    amount: 0
}

function Money() {
    const [selected, setSelected] = useState(defaultFormData);
    type Selected = typeof selected;
    const {addRecord} = useRecords()

    const onChange = (obj: Partial<Selected>) => {
        setSelected({...selected, ...obj});
    };
    const submit = ()=>{
        if(addRecord(selected)){
            alert('保存成功！')
            setSelected(defaultFormData)
        }
    }
    return (
        <MyLayout scrollTop={9999}>
            <CategoryWrapper>
                <CategorySection value={selected.category}
                                 onChange={(category) => onChange({category})}
                />
            </CategoryWrapper>
            <TagsSection value={selected.tagIds}
                         onChange={(tagIds) => onChange({tagIds})}/>
            <NoteSection value={selected.note}
                         onChange={(note) => onChange({note})}
            />
            <NumberPadSection value={selected.amount}
                              onChange={(amount) => onChange({amount})}
                              onOk={submit}
            />
        </MyLayout>
    );
}

export default Money;