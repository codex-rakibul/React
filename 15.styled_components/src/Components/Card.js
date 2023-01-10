import React from 'react';
// import nerdImage from '../assets/images/illustration.png';
import Button from './Button';
import Content from './Content';
import Image from './Image';
import Tag from './Tag';
import {CardContainer, ContentContainer} from './styles/Container.styles'
const Card = () => {
    return (
        <CardContainer>
            <ContentContainer>
                <Tag text="EXCLUSIVE"/>
                <h1>React Styled Components</h1>
                <p>
                    Lorem ipsum dolor, 
                    sit amet consectetur adipisicing elit.
                    Quos quisquam, odit quidem saepe.
                </p>
                <div>
                    <button/>
                    <button/>
                </div>
            </ContentContainer>
        {/* <Image imgSrc={nerdImage} alTag="Nerd" width="300px"/> */}
        </CardContainer>
    );
};

export default Card;