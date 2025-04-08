import { useRef } from 'react';
import { styled } from 'styled-components';
import { theme } from '@/styles/theme';
import Image from 'next/image';
import people from 'public/jpg/aboutUs.png';
import useMediaQuery from '@/shared/hooks/useMediaQuery';

export const InfoSection = () => {
    const isMobile = useMediaQuery('lg');
    const aboutUsRef = useRef<HTMLDivElement | null>(null);

   

    return (
        <div ref={aboutUsRef} id='aboutUs' >
            <Wrapper>


                <Container>
                    <HalfBlock>
                        {isMobile ? '' : <h1>About us</h1>}
                        {isMobile ? (
                            <Image src={people} width={300} height={330} alt='photo' />
                        ) : (
                            <Image src={people} width={430} height={430} alt='photo' style={{ objectFit: 'contain' }} />
                        )}
                    </HalfBlock>
                    <HalfBlock>
                      
                        <PText>
                            <strong>WHO WE ARE?</strong>
                            <br />
                     </PText>
                    </HalfBlock>
                </Container>
            </Wrapper>
        </div>

    );
};

const Wrapper = styled.div`
  color: white;
  background: #212b33;
  padding-top: 100px;
  height: auto;
  font-family: 'Plus Jakarta Sans', sans-serif;
  ${theme.mqMax('lg')} {
    height: auto;
    padding-bottom: 30px;
  }
`;

const Container = styled.div`
  display: flex;
  gap: 3rem;
  max-width: ${theme.containers.main};
  margin: 0 auto;
  width: 100%;
  ${theme.mqMax('lg')} {
    padding-left: 35px;
    padding-right: 35px;
    flex-direction: column-reverse;
  }
`;

const HalfBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 50%;
  h1 {
    font-size: 50px;
  }
  ${theme.mqMax('lg')} {
    width: 100%;
    margin: 0 auto;
  }
`;

const PText = styled.p`
  margin-top: 50px;
  line-height: 40px;
`;

const Button = styled.button`
  /* Button styles */
`;
