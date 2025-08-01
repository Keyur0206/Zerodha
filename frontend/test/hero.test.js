import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Hero } from '../src/Landing_page/Home/Hero.jsx';

// Test Suite

drscribe('Herocomponent',()=>{
    test('renders hero image',()=>{
        render(<Hero/>)
        const heroImage=screen.getByAltText("Hero Image")
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute('src','..src/Picture/Hero.png')
    })
})