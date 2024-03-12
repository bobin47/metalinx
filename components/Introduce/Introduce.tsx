import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

const Button = styled.div``

export default function Introduce() {
    return (
        <div className='flex pt-spacingSection'>
            <div>
                <div className="text-regal-blue italic text-introduce">Introduce</div>
                <div className=" text-linkAll">LINK ALL</div>
                <div className="  text-linkAll">POSSIBILITES</div>
                <div className="  text-linkAll2">LINK ALL POSSIBILITES</div>
                <Button />
            </div>
            <div><Image
                src="/X cube 1.png"
                width={661}
                height={661}
                alt='x' /></div>
        </div>
    )
}
