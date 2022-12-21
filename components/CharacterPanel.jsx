import React from 'react';
import { useState, useEffect } from 'react';
import Base64 from '../utilities/Base64';
import Image from 'next/image';

function CharacterPanel() {
    
    const wizardBaseSvg = `<svg width="1238" height="1238" viewBox="0 0 1238 1238" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="12.5" y="12.5" width="1213" height="1213" rx="60.5" fill="#DAFF9D" stroke="#434343" stroke-width="25"/><circle cx="562.517" cy="425.772" r="105.434" fill="#FFDAAE"/><path d="M562.517 117L671.218 390H453.816L562.517 117Z" fill="#C29DFF"/><rect x="775.896" y="297.745" width="25.1034" height="532.193" fill="#7D350D"/><rect x="452.062" y="578.903" width="223.421" height="223.421" fill="#C29DFF"/></svg>`;


    const wizardBaseSvg2 = `<svg width="1238" height="1238" viewBox="0 0 1238 1238" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="12.5" y="12.5" width="1213" height="1213" rx="60.5" fill="#DAFF9D" stroke="#434343" stroke-width="25"/><circle cx="240.517" cy="367.772" r="105.434" fill="#FFDAAE"/><path d="M240.517 59L349.218 332H131.816L240.517 59Z" fill="#C29DFF"/><rect x="453.896" y="239.745" width="25.1034" height="532.193" fill="#7D350D"/><rect x="130.062" y="520.903" width="223.421" height="223.421" fill="#C29DFF"/></svg>`;
    
    const warriorBaseSvg = `<svg width="1238" height="1238" viewBox="0 0 1238 1238" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="12.5" y="12.5" width="1213" height="1213" rx="60.5" fill="#FAFC95" stroke="#434343" stroke-width="25"/><rect x="728.237" y="450.453" width="24.6043" height="349.381" fill="#7D350D"/><rect x="642.951" y="515.654" width="91.0359" height="91.0359" transform="rotate(-45 642.951 515.654)" fill="#D9D9D9"/><rect x="708.554" y="519.746" width="91.0359" height="91.0359" transform="rotate(-45 708.554 519.746)" fill="#D9D9D9"/><circle cx="519.101" cy="433.23" r="103.338" fill="#FFDAAE"/><rect x="401" y="261" width="236.201" height="137.784" fill="#595D6A"/><rect x="410.842" y="583.316" width="218.978" height="218.978" fill="#595D6A"/></svg>`;

    const elordBaseSvg = `<svg width="1238" height="1238" viewBox="0 0 1238 1238" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="12.5" y="12.5" width="1213" height="1213" rx="60.5" fill="#75FFFF" stroke="#434343" stroke-width="25"/><rect x="703.767" y="542.26" width="97.2329" height="162.055" rx="5" fill="#2B2B2B"/><rect x="711.247" y="549.74" width="82.274" height="147.096" rx="3" fill="white"/><rect x="444.479" y="579.658" width="221.89" height="221.89" fill="#FF7575"/><circle cx="555.877" cy="427.575" r="104.712" fill="#FFDAAE"/><path fill-rule="evenodd" clip-rule="evenodd" d="M676.342 392.671C676.342 326.579 622.764 273 556.671 273C490.579 273 437 326.579 437 392.671H676.342Z" fill="#535353"/><rect x="648.918" y="362.753" width="112.192" height="29.9178" rx="2" fill="#535353"/></svg>`;

    const [wizardImage, setWizardImage] = useState('');
    const [warriorImage, setWarriorImage] = useState('');
    const [elordImage, setElordImage] = useState('');

    useEffect(() => {
      setWizardImage(Base64.encode(wizardBaseSvg));
      setWarriorImage(Base64.encode(warriorBaseSvg));
      setElordImage(Base64.encode(elordBaseSvg));
    }, [wizardBaseSvg, warriorBaseSvg, elordBaseSvg])
    

  return (
    <>
        <div className="choose flex justify-center text-7xl m-10 ">
            Choose your character!
        </div>
        <div className='panel-wrapper grid grid-cols-3 grid-rows-1 justify-items-center m-10 p-6'>
            <div className="wizard hover:cursor-pointer hover:">
                <Image alt='A Wizard' src={`data:image/svg+xml;base64,${wizardImage}`} width={400} height={400}  />
            </div>
            <div className="warrior">
                <Image alt='A Wizard' src={`data:image/svg+xml;base64,${warriorImage}`} width={400} height={400}  />
            </div>
            <div className="edgelord">
                <Image alt='A Wizard' src={`data:image/svg+xml;base64,${elordImage}`} width={400} height={400}  />
            </div>
        </div>
    </>
  )
}

export default CharacterPanel


