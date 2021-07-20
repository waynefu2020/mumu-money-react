import React from 'react';
import {Input} from '../components/Input';
import styled from 'styled-components';
import {CategoryItemWrapper} from './Money/TagsSection';
import {customIcons} from '../constants/customIcons';
import Icon from '../components/Icon';
import {Button} from '../components/Button';
import {Center} from '../components/Center';
import {useParams} from 'react-router-dom';

type Params = {
    type: string
}

const CreateTag: React.FC = (props)=>{
    const customExpenseIcon = customIcons.filter(i=>i.type==='-');
    let {type: typeString} = useParams<Params>()

    return (
        <div>
            <Header>新标签</Header>
            <InputWrapper>
                <Input label="标签名" type="text"
                       placeholder="请输入标签名"
                />
            </InputWrapper>
            <CategoryItemWrapper>
                <span>图标</span>
                <ol>
                    {customExpenseIcon.map(i=>
                        <li key={i.svg}>
                            <Icon name={i.svg}/>
                        </li>
                    )}
                </ol>
            </CategoryItemWrapper>
            <Center>
                <Button>保存</Button>
            </Center>
        </div>
    )
}

const InputWrapper = styled.div`
  background: white;
  padding: 0 16px;
  margin-top: 16px;
`;

const Header = styled.header`
  display: flex;
  justify-content: center;
  text-align: center;
  padding: 12px 0;
  font-weight: bold;
  font-size: 18px;
  background: #fff0ec;
`

export {CreateTag}