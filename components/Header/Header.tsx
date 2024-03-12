import Image from 'next/image'
import styled from 'styled-components'


const Background = styled.div`
    background-color: rgba(255, 255, 255, 0.2);
    padding: 18.5px 186px;
    display: flex;
    align-items:center;
    justify-content: space-between;
    border-bottom: 1px solid rgba(241, 241, 241, 0.5)
`

export default function Header() {
    return (
        <Background>
            <Image
                className=''
                src="/logo.png"
                width={64}
                height={64}
                alt="Picture of the author"
            />

            <nav>
                <ul className='flex'>
                    <li className='mr-[17px]'><a href="#">About MLX</a></li>
                    <li className='mr-[17px]'><a href="#">MLX MemberShip</a></li>
                    <li className='mr-[17px]'><a href="#">Technology</a></li>
                    <li className='mr-[17px]'><a href="#">MLX Partners</a></li>
                    <li className='mr-[17px]'><a href="#">New</a></li>
                    <li className='mr-[17px]'><a href="#">Career</a></li>
                </ul>
            </nav>
        </Background>
    )
}
