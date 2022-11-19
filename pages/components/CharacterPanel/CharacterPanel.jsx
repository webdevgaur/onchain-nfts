import React from 'react';
import { useState, useEffect } from 'react';
import Base64 from '../../utilities/Base64';
import Image from 'next/image';

function CharacterPanel() {
    
    const wizardBaseSvg = `<svg width="1238" height="1238" viewBox="0 0 1238 1238" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="12.5" y="12.5" width="1213" height="1213" rx="60.5" fill="#DAFF9D" stroke="#434343" stroke-width="25"/><circle cx="562.517" cy="425.772" r="105.434" fill="#FFDAAE"/><path d="M562.517 117L671.218 390H453.816L562.517 117Z" fill="#C29DFF"/><rect x="775.896" y="297.745" width="25.1034" height="532.193" fill="#7D350D"/><rect x="452.062" y="578.903" width="223.421" height="223.421" fill="#C29DFF"/></svg>`;

    const [wizardImage, setWizardImage] = useState('');

    useEffect(() => {
      setWizardImage(Base64.encode(wizardBaseSvg));
    }, [wizardBaseSvg])
    

  return (
    <div className='panel-wrapper'>
        <div className="wizard">
            <Image alt='A Wizard' src={`data:image/svg+xml;base64,${wizardImage}`} width={200} height={200} />
        </div>
        <div className="warrior">

        </div>
        <div className="edgelord">

        </div>
    </div>
  )
}

export default CharacterPanel