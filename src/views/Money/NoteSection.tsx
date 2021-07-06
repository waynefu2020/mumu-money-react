import styled from 'styled-components';
import React, {useRef} from 'react';

type Props = {
    value: string,
    onChange: (value: string) => void
}

const NoteSection: React.FC<Props> = (props) => {
    const note = props.value
    const refInput = useRef<HTMLInputElement>(null);
    const onBlur = () => {
        if (refInput.current !== null) {
            props.onChange(refInput.current.value);
        }
    };
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