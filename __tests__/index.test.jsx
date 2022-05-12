import { render, screen } from '@testing-library/react'
import Home from '../pages/index'
import '@testing-library/jest-dom'
import Navbar3 from "../components/website/Navbar3";
import ServiceCard from "../components/website/ServiceCard";


describe('Nav', () => {
    it('renders a heading', () => {
        render(<Navbar3 />)

        const heading = screen.getAllByRole('listitems')

        expect(listItems).toHaveLength(7)
    })
})
