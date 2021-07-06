import styled from 'styled-components';
import React, {ChangeEventHandler, useRef} from 'react';
import {Input} from '../../components/Input';

type Props = {
    value: string,
    onChange: (value: string) => void
}

const NoteSection: React.FC<Props> = (props) => {
    const note = props.value
    const refInput = useRef<HTMLInputElement>(null);
    const onChange:ChangeEventHandler<HTMLInputElement> = (e) => {
        props.onChange(e.target.value)
    };
    console.log(note);
    return (
        <Wrapper>
            <Input label="备注" type="text"
                   value={note} onChange={onChange} placeholder="点击填写备注"
            />
        </Wrapper>
    );
};

const Wrapper = styled.section`
  background: #f5f5f5;
  padding: 14px 16px;
  font-size: 14px;
  
`;
export {NoteSection};