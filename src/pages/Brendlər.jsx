
import React, { useRef } from 'react';
import Pagecontainer from '../components/Pagecontainer/Pageontainer';

const Brendlər = () => {
  const aRef = useRef(null);
  const bRef = useRef(null);
  const cRef = useRef(null);
  const dRef = useRef(null);
  const eRef = useRef(null);
  const gRef = useRef(null);
  const hRef = useRef(null);
  const iRef = useRef(null);
  const jRef = useRef(null);
  const kRef = useRef(null);

  const handleClick = (letter) => {
    if (letter === 'A') {
      // c ilə başlayan məhsullar hissəsinə səhifəni yönləndir
      aRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    if (letter === 'B') {
      // c ilə başlayan məhsullar hissəsinə səhifəni yönləndir
      bRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    if (letter === 'C') {
      // c ilə başlayan məhsullar hissəsinə səhifəni yönləndir
      cRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    if (letter === 'D') {
      // c ilə başlayan məhsullar hissəsinə səhifəni yönləndir
      dRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    if (letter === 'E') {
      // c ilə başlayan məhsullar hissəsinə səhifəni yönləndir
      eRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    if (letter === 'G') {
      // c ilə başlayan məhsullar hissəsinə səhifəni yönləndir
      gRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    if (letter === 'H') {
      // c ilə başlayan məhsullar hissəsinə səhifəni yönləndir
      hRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    if (letter === 'I') {
      // c ilə başlayan məhsullar hissəsinə səhifəni yönləndir
      iRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    if (letter === 'J') {
      // c ilə başlayan məhsullar hissəsinə səhifəni yönləndir
      jRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    if (letter === 'K') {
      // c ilə başlayan məhsullar hissəsinə səhifəni yönləndir
      kRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (

    <Pagecontainer>
      <div>

        <div className='flex mb-[15px]'>
          <div className='mr-[15px]'>
            <p>Brend indeksi:</p>
          </div>
          <div className=' gap-[15px] flex'>
          <button onClick={() => handleClick('A')}>A</button>
          <button onClick={() => handleClick('B')}>B</button>
          <button onClick={() => handleClick('C')}>C</button>
          <button onClick={() => handleClick('D')}>D</button>
          <button onClick={() => handleClick('E')}>E</button>
          <button onClick={() => handleClick('G')}>G</button>
          <button onClick={() => handleClick('H')}>H</button>
          <button onClick={() => handleClick('I')}>I</button>
          <button onClick={() => handleClick('J')}>J</button>
          <button onClick={() => handleClick('K')}>K</button>
          </div>
        </div>


<div className='flex flex-col gap-[40px]'>
        <div  className='flex flex-col gap-[10px]' ref={aRef}>
          <p className='mb-[10px ] text-[#6B6A81] text-lg font-bold'>A</p>
          <span className='text-[#666666]'>Acer</span>
          <span className='text-[#666666]'>Asus</span>
        </div>
       
        <div className='flex flex-col gap-[10px]' ref={bRef}>
          <p className='mb-[10px ] text-[#6B6A81] text-lg font-bold'>B</p>
          <span className='text-[#666666]'>Baseus</span>
          <span className='text-[#666666]'>Bosch</span>
          <span className='text-[#666666]'>Braun</span>
        </div>
       

        <div className='flex flex-col gap-[10px]' ref={cRef}>
          <p className='mb-[10px ] text-[#6B6A81] text-lg font-bold'>C</p>
          <span className='text-[#666666]'>Canon</span>
          <span className='text-[#666666]'>Carrier</span>
        </div>
       


        <div className='flex flex-col gap-[10px]' ref={dRef}>
          <p className='mb-[10px ] text-[#6B6A81] text-lg font-bold'>D</p>
          <span className='text-[#666666]'>Dyson</span>
          <span className='text-[#666666]'>Duracell</span>
        </div>
       

        <div className='flex flex-col gap-[10px]' ref={eRef}>
          <p className='mb-[10px ] text-[#6B6A81] text-lg font-bold'>E</p>
          <span className='text-[#666666]'>Epson</span>
          <span className='text-[#666666]'>Electrotech</span>
        </div>


        <div className='flex flex-col gap-[10px]' ref={gRef}>
          <p className='mb-[10px ] text-[#6B6A81] text-lg font-bold'>G</p>
          <span className='text-[#666666]'>Gorenje</span>
          <span className='text-[#666666]'>Graus</span>
        </div>
      

        <div className='flex flex-col gap-[10px]' ref={hRef}>
          <p className='mb-[10px ] text-[#6B6A81] text-lg font-bold'>H</p>
          <span className='text-[#666666]' >Herman</span>
          <span className='text-[#666666]'>Hoco</span>
          <span className='text-[#666666]'>Huawei</span>
        </div>
       

        <div className='flex flex-col gap-[10px]' ref={iRef}>
          <p className='mb-[10px ] text-[#6B6A81] text-lg font-bold'>I</p>
          <span className='text-[#666666]'>Immergas</span>
        </div>
       

        <div className='flex flex-col gap-[10px]' ref={jRef}>
          <p className='mb-[10px ] text-[#6B6A81] text-lg font-bold'>J</p>
          <span className='text-[#666666]'>JBL</span>
        </div>
       

        <div className='flex flex-col gap-[10px]' ref={kRef}>
          <p className='mb-[10px ] text-[#6B6A81] text-lg font-bold'>K</p>
          <span className='text-[#666666]'>Kenwood</span>
        </div>
     
        </div>




      </div>
    </Pagecontainer>
  );
};

export default Brendlər;

