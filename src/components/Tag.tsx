import React from 'react';
import {useTags} from '../useTags';
import {useParams} from 'react-router-dom';
import Layout from './Layout';
import Icon from './Icon';
import {Button} from './Button';
import styled from 'styled-components';
import {Input} from './Input';
import {Center} from './Center';
import {Space} from './Space';

type Params = {
    id: string
}

const TopBar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 20px;
  padding: 14px;
  background: white;
`

const InputWrapper = styled.div`
  background: white;
  padding: 0 16px;
  margin-top: 16px;
`

const Tag: React.FC = (props) => {
    const {findTag} = useTags();
    let {id} = useParams<Params>();
    const tag = findTag(parseInt(id))
    return (
        <Layout>
            <TopBar>
                <Icon name="left"/>
                <span>编辑标签</span>
                <Icon/>
            </TopBar>
            <InputWrapper>
                <Input label="标签名" type="text" placeholder="填写标签名"/>
            </InputWrapper>
            <Center>
                <Space/>
                <Space/>
                <Space/>
                <Button>删除标签</Button>
            </Center>
        </Layout>
    );
};

export {Tag};