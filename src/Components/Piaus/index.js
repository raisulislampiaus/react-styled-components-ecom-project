import React, { useState } from 'react'
import Navbar from '../Navbar'
import Navigation from '../Navigation'

import { PiausContainer,
         PiausContent,
         PiausItems,
         PiausH1,
         PiausP,
         PiausBtn

} from './piausElement'

const Piaus = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () =>{
        setIsOpen(!isOpen)
    }
    return (
        <PiausContainer>
            <Navbar  toggle={toggle}/>
            <Navigation isOpen={isOpen} toggle={toggle} />
            <PiausContent>
                <PiausItems>
                    <PiausH1>Largest Burger Ever</PiausH1>
                    <PiausP>Ready in 1 min 60 sec</PiausP>
                    <PiausBtn>Place Order</PiausBtn>
                </PiausItems>
            </PiausContent>
        </PiausContainer>
    )
}

export default Piaus
