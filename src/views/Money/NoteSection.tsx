import styled from 'styled-components';
import React, {useRef, useState} from 'react';

const NoteSection: React.FC = () => {
    const [note, setNote] = useState<string>('');
    const refInput = useRef<HTMLInputElement>(null)
    const onBlur = () =>{
        if(refInput.current!==null){
            setNote(refInput.current.value);
        }
    }
    console.log(note);
    return (
        <Wrapper>
            <label>
                <span>备注</span>
                <input type="text" placeholder="点击填写备注"
                       defaultValue={note} onBlur={onBlur} ref={refInput}
                />
            </label>
        </Wrapper>
    );
};

const Wrapper = styled.section`
  background: #f5f5f5;
  padding: 0 16px;
  font-size: 14px;

  > label {
    display: flex;
    align-items: center;

    > span {
      margin-right: 16px;
      white-space: nowrap;
    }

    > input {
      display: block;
      width: 100%;
      height: 72px;
      background: none;
      border: none;
    }
  }
`;
export {NoteSection};