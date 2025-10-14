import imgPoweringAfricasFuture from "figma:asset/64f272a4d2663220bc8bd3ec1a39ffca470b1dd5.png";
import imgTransmitterKonexaJpg from "figma:asset/f217b92ec79206d35ff9fb4765d55e1302a9e74e.png";
import imgWhoWeAreThumbJpg from "figma:asset/56535e665e823ca7feb4f893499d370c888ce163.png";
import imgDfidLogoPng from "figma:asset/83bc828a13f9ec661e8441943d8b70d0c2c27028.png";
import imgPowerAfricaLogoPng from "figma:asset/bd9e7a96b928a72023401ba161e9381bf04969a6.png";
import imgUsAidPng from "figma:asset/7f7df3b4dc618bd7e72297a9dc6209816ffd7c8e.png";
import imgShellFoundationPng from "figma:asset/d632ab1ee4977e43ba083d2c9b9ac8607787af59.png";
import imgKadunaLogo1Jpg from "figma:asset/cdf7ab2e5d96874f56766fb8cc7727fe47671226.png";
import imgTtaPng from "figma:asset/32a23822710338758074489652682c75ea9d1a1c.png";
import imgKedcoLogo002Png from "figma:asset/c909b67999d53b666b761a55721ad9b0c406e623.png";
import imgPfaRgbLogoHBlackPng from "figma:asset/6ccef206c01261af938b524f70f9f75122223e5f.png";
import imgFooter from "figma:asset/40398ac18eb51b2a0fcea7d4f487a82a919866fc.png";
import imgKonexaIEnergyCompanyOfTheFuture from "figma:asset/8a33ea5f03343ffc18982d4d3ad70cfc582df504.png";
import { imgContainer, imgContainer1, imgNav, imgNav1, imgComponent4, imgComponent5, imgNav2, imgNav3, imgComponent6, imgComponent7 } from "./svg-2zg44";

function PoweringAfricasFuture() {
  return <div className="absolute bg-no-repeat bg-size-[100%_100%] bg-top-left h-[686.56px] left-0 opacity-[0.65] top-[-56.28px] w-[1523px]" data-name="POWERING AFRICA’S FUTURE" style={{ backgroundImage: `url('${imgPoweringAfricasFuture}')` }} />;
}

function Figure() {
  return (
    <div className="absolute bg-black inset-[-1px] overflow-clip" data-name="Figure">
      <PoweringAfricasFuture />
    </div>
  );
}

function Heading2() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start pb-[17.4px] pt-0 px-0 relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[63.8px] not-italic relative shrink-0 text-[53.582px] text-nowrap text-white tracking-[2.9px] uppercase whitespace-pre">
        <p className="mb-0">POWERING AFRICA’S</p>
        <p>FUTURE</p>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex flex-col gap-[0.5px] items-start justify-start leading-[0] not-italic relative shrink-0 text-nowrap text-white tracking-[0.98px] w-full" data-name="Paragraph">
      <div className="flex flex-col font-['Inter:Black',_sans-serif] font-black justify-center relative shrink-0 text-[25.484px]">
        <p className="leading-[37.8px] text-nowrap whitespace-pre">Konexa is the Energy Company of the Future.</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[37.8px] relative shrink-0 text-[22.859px] whitespace-pre">
        <p className="mb-0">We are transforming energy systems across Africa. Our mission</p>
        <p>is to provide reliable, affordable, and sustainable energy for all.</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="bg-white box-border content-stretch flex items-start justify-start pb-[17.59px] pt-[17.61px] px-[41.6px] relative shrink-0" data-name="Link">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none" />
      <button className="[white-space-collapse:collapse] cursor-pointer flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#003494] text-[14.875px] text-nowrap tracking-[0.98px] uppercase">
        <p className="leading-[37.8px] whitespace-pre">Learn more</p>
      </button>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full" data-name="Container">
      <Link />
    </div>
  );
}

function Container1() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[55.39px] items-start justify-start pb-0 pt-[8.4px] px-0 relative shrink-0 w-full" data-name="Container">
      <Paragraph />
      <Container />
    </div>
  );
}

function Container2() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start max-w-[840.4px] min-w-[840.4px] pb-[92.41px] pt-[39.1px] px-10 relative shrink-0" data-name="Container">
      <Heading2 />
      <Container1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute bottom-[0.2px] box-border content-stretch flex flex-col items-start justify-start left-0 overflow-clip pb-2.5 pt-[33.8px] px-0 right-0 top-0" data-name="Container">
      <Figure />
      <Container2 />
    </div>
  );
}

function Article() {
  return (
    <div className="absolute h-[572.4px] left-0 right-0 top-0" data-name="Article">
      <Container3 />
    </div>
  );
}

function Section() {
  return (
    <div className="bg-black h-[572.4px] overflow-clip relative shrink-0 w-full" data-name="Section">
      <Article />
    </div>
  );
}

function TransmitterKonexaJpg() {
  return <div className="bg-[50.13%_0%] bg-no-repeat bg-size-[100%_100%] h-[542.41px] rounded-[5px] shadow-[0px_5px_20px_0px_rgba(41,67,119,0.1)] shrink-0 w-full" data-name="Transmitter_Konexa.jpg" style={{ backgroundImage: `url('${imgTransmitterKonexaJpg}')` }} />;
}

function MaskGroup() {
  return <div className="absolute inset-0" data-name="Mask Group" />;
}

function Container4() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%_0px] mask-size-[100%_542.41px] right-0 top-0" data-name="Container" style={{ maskImage: `url('${imgContainer}')` }}>
      <TransmitterKonexaJpg />
      <MaskGroup />
    </div>
  );
}

function MaskGroup1() {
  return (
    <div className="h-[542.41px] relative shrink-0 w-full" data-name="Mask Group">
      <Container4 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-[813.15px]" data-name="Container">
      <MaskGroup1 />
    </div>
  );
}

function Container6() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start mr-[-116.16px] relative self-stretch shrink-0 w-[580.83px]" data-name="Container">
      <Container5 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start min-w-[576.99px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] max-h-[58.06px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[41.405px] text-white tracking-[0.968px] w-full">
        <p className="leading-[58px]">Our Approach</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Light',_sans-serif] font-light justify-center leading-[31.68px] not-italic relative shrink-0 text-[20.754px] text-white w-full">
        <p className="mb-0">{`Konexa aspires to own and operate grid and off-grid power `}</p>
        <p className="mb-0">{`assets across Africa. We are pioneering an integrated utility `}</p>
        <p className="mb-0">{`model that accelerates access to reliable power for all by `}</p>
        <p>leveraging cost efficient and disruptive technologies.</p>
      </div>
    </div>
  );
}

function Component1() {
  return (
    <div className="box-border content-stretch flex items-start justify-start pb-[14.23px] pt-[14.21px] px-[35.36px] relative rounded-[2.76px] shrink-0" data-name="Component 1">
      <div aria-hidden="true" className="absolute border border-[#03a551] border-solid inset-0 pointer-events-none rounded-[2.76px]" />
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12.83px] text-nowrap text-white tracking-[3.456px] uppercase">
        <p className="leading-[15.21px] whitespace-pre">Learn more</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start pb-0 pt-[11.51px] px-0 relative shrink-0 w-full" data-name="Container">
      <Component1 />
    </div>
  );
}

function BackgroundShadow() {
  return (
    <div className="basis-0 bg-[#000e24] grow min-h-px min-w-px relative rounded-[5px] shadow-[0px_5px_20px_0px_rgba(41,67,119,0.13)] shrink-0" data-name="Background+Shadow">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[23.1px] items-start justify-start pb-[60px] pt-[58.9px] px-[60px] relative w-full">
          <Container7 />
          <Container8 />
          <Container9 />
        </div>
      </div>
    </div>
  );
}

function Figcaption() {
  return (
    <div className="box-border content-stretch flex items-start justify-start mr-[-116.16px] pb-[65.84px] pt-[69.68px] px-0 relative self-stretch shrink-0 w-[696.99px]" data-name="Figcaption">
      <BackgroundShadow />
    </div>
  );
}

function Figure1() {
  return (
    <div className="box-border content-stretch flex items-start justify-start pl-0 pr-[116.16px] py-0 relative shrink-0 w-full" data-name="Figure">
      <Container6 />
      <Figcaption />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start min-w-[576.99px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] max-h-[58.06px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[40.081px] text-white tracking-[0.968px] w-full">
        <p className="leading-[58px]">Our Team</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Light',_sans-serif] font-light justify-center leading-[31.68px] not-italic relative shrink-0 text-[19.963px] text-white w-full">
        <p className="mb-0">{`Konexa’s ability to source and execute large-scale `}</p>
        <p className="mb-0">{`infrastructure opportunities across Africa rests on the calibre `}</p>
        <p className="mb-0">{`of a small and growing, handpicked team. Bridging the `}</p>
        <p className="mb-0">{`public and private sectors to transform energy provision, our `}</p>
        <p>people have expertise across a range of relevant areas.</p>
      </div>
    </div>
  );
}

function Component9() {
  return (
    <div className="box-border content-stretch flex items-start justify-start pb-[14.23px] pt-[14.21px] px-[35.36px] relative rounded-[2.76px] shrink-0" data-name="Component 1">
      <div aria-hidden="true" className="absolute border border-[#03a551] border-solid inset-0 pointer-events-none rounded-[2.76px]" />
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12.83px] text-nowrap text-white tracking-[3.456px] uppercase">
        <p className="leading-[15.21px] whitespace-pre">Meet our team</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start pb-0 pt-[12.11px] px-0 relative shrink-0 w-full" data-name="Container">
      <Component9 />
    </div>
  );
}

function BackgroundShadow1() {
  return (
    <div className="basis-0 bg-[#000e24] grow min-h-px min-w-px relative rounded-[5px] shadow-[0px_5px_20px_0px_rgba(41,67,119,0.13)] shrink-0" data-name="Background+Shadow">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[22.5px] items-start justify-start pb-[60px] pt-[58.9px] px-[60px] relative w-full">
          <Container10 />
          <Container11 />
          <Container12 />
        </div>
      </div>
    </div>
  );
}

function Figcaption1() {
  return (
    <div className="box-border content-stretch flex items-start justify-start mr-[-348.49px] pb-[33.85px] pt-[69.69px] px-0 relative self-stretch shrink-0 w-[696.99px] z-[2]" data-name="Figcaption">
      <BackgroundShadow1 />
    </div>
  );
}

function WhoWeAreThumbJpg() {
  return <div className="bg-no-repeat bg-size-[100%_100%] bg-top-left h-[542.1px] rounded-[5px] shadow-[0px_5px_20px_0px_rgba(41,67,119,0.1)] shrink-0 w-full" data-name="Who_We_Are_Thumb.jpg" style={{ backgroundImage: `url('${imgWhoWeAreThumbJpg}')` }} />;
}

function MaskGroup2() {
  return <div className="absolute inset-0" data-name="Mask Group" />;
}

function Container13() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%_0px] mask-size-[100%_542.1px] right-0 top-0" data-name="Container" style={{ maskImage: `url('${imgContainer1}')` }}>
      <WhoWeAreThumbJpg />
      <MaskGroup2 />
    </div>
  );
}

function MaskGroup3() {
  return (
    <div className="h-[542.1px] relative shrink-0 w-full" data-name="Mask Group">
      <Container13 />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-[813.15px]" data-name="Container">
      <MaskGroup3 />
    </div>
  );
}

function Container15() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start mr-[-348.49px] relative self-stretch shrink-0 w-[813.16px] z-[1]" data-name="Container">
      <Container14 />
    </div>
  );
}

function Figure2() {
  return (
    <div className="box-border content-stretch flex isolate items-start justify-start pl-0 pr-[348.49px] py-0 relative shrink-0 w-full" data-name="Figure">
      <Figcaption1 />
      <Container15 />
    </div>
  );
}

function Container16() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[119.2px] items-start justify-start pb-[17px] pt-0 px-[17px] relative shrink-0 w-[1195.65px]" data-name="Container">
      <Figure1 />
      <Figure2 />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full" data-name="Container">
      <Container16 />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-[1315.22px]" data-name="Container">
      <Container17 />
    </div>
  );
}

function Container19() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start pl-[119.56px] pr-[0.02px] py-0 relative w-full">
          <Container18 />
        </div>
      </div>
    </div>
  );
}

function Section1() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Section">
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start px-[43px] py-[100px] relative w-full">
          <Container19 />
        </div>
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Inter:Light',_sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[#003494] text-[30.938px] text-center w-full">
        <p className="leading-[48px]">Our Partners</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start pb-[17px] pt-0 px-[17px] relative shrink-0 w-[836.84px]" data-name="Container">
      <Heading3 />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-center justify-start relative shrink-0 w-full" data-name="Container">
      <div className="h-[2.4px] relative rounded-[1px] shrink-0 w-[60px]" data-name="HorizontalBorder">
        <div aria-hidden="true" className="absolute border-[#dc9f13] border-[2.4px_0px_0px] border-solid inset-0 pointer-events-none rounded-[1px]" />
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start pb-[47px] pt-[17px] px-[17px] relative shrink-0 w-[836.84px]" data-name="Container">
      <Container21 />
    </div>
  );
}

function DfidLogoPng() {
  return <div className="bg-no-repeat bg-size-[100%_100%] bg-top-left h-[114px] shrink-0 w-[103.64px]" data-name="DFID Logo.png" style={{ backgroundImage: `url('${imgDfidLogoPng}')` }} />;
}

function Link1() {
  return (
    <div className="box-border content-stretch flex flex-col h-[114.24px] items-start justify-start pb-[114.238px] pl-[85.17px] pr-[85.37px] pt-0 relative shrink-0 w-[274.18px]" data-name="Link">
      <DfidLogoPng />
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 pb-[50px] pt-0 px-0 right-[66.67%] top-0" data-name="Container">
      <Link1 />
    </div>
  );
}

function PowerAfricaLogoPng() {
  return <div className="bg-no-repeat bg-size-[100%_100%] bg-top-left h-[114px] shrink-0 w-[257.13px]" data-name="Power-Africa-Logo.png" style={{ backgroundImage: `url('${imgPowerAfricaLogoPng}')` }} />;
}

function Link2() {
  return (
    <div className="box-border content-stretch flex flex-col h-[114.24px] items-start justify-start pb-[114.238px] pl-[8.43px] pr-[8.62px] pt-0 relative shrink-0 w-[274.18px]" data-name="Link">
      <PowerAfricaLogoPng />
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start justify-start left-[33.33%] pb-[50px] pt-0 px-0 right-[33.33%] top-0" data-name="Container">
      <Link2 />
    </div>
  );
}

function UsAidPng() {
  return <div className="bg-no-repeat bg-size-[100%_100%] bg-top-left h-[114px] shrink-0 w-[170.14px]" data-name="USAid.png" style={{ backgroundImage: `url('${imgUsAidPng}')` }} />;
}

function Link3() {
  return (
    <div className="box-border content-stretch flex flex-col h-[114.24px] items-start justify-start pb-[114.238px] pl-[51.92px] pr-[52.12px] pt-0 relative shrink-0 w-[274.18px]" data-name="Link">
      <UsAidPng />
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start justify-start left-[66.67%] pb-[50px] pt-0 px-0 right-0 top-0" data-name="Container">
      <Link3 />
    </div>
  );
}

function ShellFoundationPng() {
  return <div className="bg-no-repeat bg-size-[100%_100%] bg-top-left h-[48.14px] shrink-0 w-[274px]" data-name="Shell_Foundation.png" style={{ backgroundImage: `url('${imgShellFoundationPng}')` }} />;
}

function Link4() {
  return (
    <div className="box-border content-stretch flex flex-col h-[114.24px] items-start justify-start pb-[33.18px] pt-[32.92px] px-0 relative shrink-0 w-[274.18px]" data-name="Link">
      <ShellFoundationPng />
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 pb-[50px] pt-0 px-0 right-[66.67%] top-[164.24px]" data-name="Container">
      <Link4 />
    </div>
  );
}

function KadunaLogo1Jpg() {
  return <div className="bg-no-repeat bg-size-[100%_100%] bg-top-left h-[114px] shrink-0 w-[204.79px]" data-name="Kaduna_Logo-1.jpg" style={{ backgroundImage: `url('${imgKadunaLogo1Jpg}')` }} />;
}

function Link5() {
  return (
    <div className="box-border content-stretch flex flex-col h-[114.24px] items-start justify-start pb-[114.238px] pl-[34.6px] pr-[34.79px] pt-0 relative shrink-0 w-[274.18px]" data-name="Link">
      <KadunaLogo1Jpg />
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start justify-start left-[33.33%] pb-[50px] pt-0 px-0 right-[33.33%] top-[164.24px]" data-name="Container">
      <Link5 />
    </div>
  );
}

function TtaPng() {
  return <div className="bg-no-repeat bg-size-[100%_100%] bg-top-left h-[111.79px] shrink-0 w-[274px]" data-name="TTA.png" style={{ backgroundImage: `url('${imgTtaPng}')` }} />;
}

function Link6() {
  return (
    <div className="box-border content-stretch flex flex-col h-[114.24px] items-start justify-start pb-[1.35px] pt-[1.1px] px-0 relative shrink-0 w-[274.18px]" data-name="Link">
      <TtaPng />
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start justify-start left-[66.67%] pb-[50px] pt-0 px-0 right-0 top-[164.24px]" data-name="Container">
      <Link6 />
    </div>
  );
}

function KedcoLogo002Png() {
  return <div className="bg-no-repeat bg-size-[100%_100%] bg-top-left h-[114px] shrink-0 w-[103.74px]" data-name="KEDCO Logo (002).png" style={{ backgroundImage: `url('${imgKedcoLogo002Png}')` }} />;
}

function Link7() {
  return (
    <div className="box-border content-stretch flex flex-col h-[114.24px] items-start justify-start pb-[114.238px] pl-[85.12px] pr-[85.32px] pt-0 relative shrink-0 w-[274.18px]" data-name="Link">
      <KedcoLogo002Png />
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 pb-[50px] pt-0 px-0 right-[66.67%] top-[328.47px]" data-name="Container">
      <Link7 />
    </div>
  );
}

function PfaRgbLogoHBlackPng() {
  return <div className="bg-no-repeat bg-size-[100%_100%] bg-top-left h-[114px] shrink-0 w-[242.25px]" data-name="PFA_RGB_logo_H_black.png" style={{ backgroundImage: `url('${imgPfaRgbLogoHBlackPng}')` }} />;
}

function Link8() {
  return (
    <div className="box-border content-stretch flex flex-col h-[114.24px] items-start justify-start pb-[114.238px] pl-[15.87px] pr-[16.06px] pt-0 relative shrink-0 w-[274.18px]" data-name="Link">
      <PfaRgbLogoHBlackPng />
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start justify-start left-[33.33%] pb-[50px] pt-0 px-0 right-[33.33%] top-[328.47px]" data-name="Container">
      <Link8 />
    </div>
  );
}

function Container31() {
  return (
    <div className="h-[0.01px] relative shrink-0 w-[972.53px]" data-name="Container">
      <Container23 />
      <Container24 />
      <Container25 />
      <Container26 />
      <Container27 />
      <Container28 />
      <Container29 />
      <Container30 />
    </div>
  );
}

function Container32() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start overflow-clip pb-[492.71px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <Container31 />
    </div>
  );
}

function Container33() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start p-[17px] relative shrink-0 w-[956.53px]" data-name="Container">
      <Container32 />
    </div>
  );
}

function Container34() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start pl-[239.13px] pr-[239.14px] py-0 relative w-full">
          <Container33 />
        </div>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col items-center justify-start relative shrink-0 w-full" data-name="Container">
      <Container20 />
      <Container22 />
      <Container34 />
    </div>
  );
}

function Section2() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Section">
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start px-[43px] py-[100px] relative w-full">
          <Container35 />
        </div>
      </div>
    </div>
  );
}

function Main() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-start left-0 right-0 top-[117.88px]" data-name="Main">
      <Section />
      <Section1 />
      <Section2 />
    </div>
  );
}

function Component2() {
  return (
    <div className="box-border content-stretch flex items-start justify-center pl-0 pr-3 py-0 relative shrink-0" data-name="Component 2">
      <div className="flex flex-col font-['Inter:Black',_sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-nowrap text-white tracking-[2.4px] uppercase">
        <p className="leading-[12px] whitespace-pre">Home</p>
      </div>
    </div>
  );
}

function Component10() {
  return (
    <div className="box-border content-stretch flex items-start justify-center pl-0 pr-3 py-0 relative shrink-0" data-name="Component 2">
      <div className="flex flex-col font-['Inter:Black',_sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-nowrap text-white tracking-[2.4px] uppercase">
        <p className="leading-[12px] whitespace-pre">Approach</p>
      </div>
    </div>
  );
}

function Component11() {
  return (
    <div className="box-border content-stretch flex items-start justify-center pl-0 pr-3 py-0 relative shrink-0" data-name="Component 2">
      <div className="flex flex-col font-['Inter:Black',_sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-nowrap text-white tracking-[2.4px] uppercase">
        <p className="leading-[12px] whitespace-pre">Team</p>
      </div>
    </div>
  );
}

function Component12() {
  return (
    <div className="box-border content-stretch flex items-start justify-center pl-0 pr-3 py-0 relative shrink-0" data-name="Component 2">
      <div className="flex flex-col font-['Inter:Black',_sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-nowrap text-white tracking-[2.4px] uppercase">
        <p className="leading-[12px] whitespace-pre">Contact</p>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <div className="absolute box-border content-stretch flex items-start justify-center left-[60px] px-0 py-5 right-12 top-[30px]" data-name="Nav">
      <Component2 />
      <Component10 />
      <Component11 />
      <Component12 />
    </div>
  );
}

function TwitterUnauthIcon() {
  return <img className="block max-w-none size-full" src={imgNav} />;
}

function TwitterUnauthMask() {
  return <img className="block max-w-none size-full" src={imgNav1} />;
}

function Component3() {
  return (
    <div className="absolute left-0 size-8 top-0" data-name="Component 3">
      <TwitterUnauthIcon />
      <TwitterUnauthMask />
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute inset-0" data-name="Container">
      <Component3 />
    </div>
  );
}

function Component4() {
  return (
    <div className="overflow-clip relative rounded-[16px] shrink-0 size-8" data-name="Component 4">
      <Container36 />
    </div>
  );
}

function FacebookUnauthIcon() {
  return <img className="block max-w-none size-full" src={imgComponent4} />;
}

function FacebookUnauthMask() {
  return <img className="block max-w-none size-full" src={imgNav1} />;
}

function Component13() {
  return (
    <div className="absolute left-0 size-8 top-0" data-name="Component 3">
      <FacebookUnauthIcon />
      <FacebookUnauthMask />
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute inset-0" data-name="Container">
      <Component13 />
    </div>
  );
}

function Component14() {
  return (
    <div className="overflow-clip relative rounded-[16px] shrink-0 size-8" data-name="Component 4">
      <Container37 />
    </div>
  );
}

function LinkedinUnauthIcon() {
  return <img className="block max-w-none size-full" src={imgComponent5} />;
}

function LinkedinUnauthMask() {
  return <img className="block max-w-none size-full" src={imgNav1} />;
}

function Component15() {
  return (
    <div className="absolute left-0 size-8 top-0" data-name="Component 3">
      <LinkedinUnauthIcon />
      <LinkedinUnauthMask />
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute inset-0" data-name="Container">
      <Component15 />
    </div>
  );
}

function Component16() {
  return (
    <div className="overflow-clip relative rounded-[16px] shrink-0 size-8" data-name="Component 4">
      <Container38 />
    </div>
  );
}

function Component5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Component 5">
      <div className="relative size-full">
        <div className="box-border content-stretch flex gap-2 items-start justify-start pb-[8.8px] pl-[345.41px] pr-[345.43px] pt-0 relative w-full">
          <Component4 />
          <Component14 />
          <Component16 />
        </div>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start pb-[17px] pt-0 px-[17px] relative shrink-0 w-[836.84px]" data-name="Container">
      <Component5 />
    </div>
  );
}

function Component6() {
  return (
    <div className="absolute h-[24.15px] top-1 translate-x-[-50%] w-[106.13px]" data-name="Component 6" style={{ left: "calc(50% + 79.055px)" }}>
      <div aria-hidden="true" className="absolute border-[0px_0px_0.8px] border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none" />
      <div className="absolute flex flex-col font-['Inter:Medium',_sans-serif] font-medium h-[31px] justify-center leading-[0] not-italic text-[15.734px] text-center text-white top-[11.2px] tracking-[0.38px] translate-x-[-50%] translate-y-[-50%] w-[106.33px]" style={{ left: "calc(50% + 0.1px)" }}>
        <p className="leading-[30.4px]">Cookie Policy</p>
      </div>
    </div>
  );
}

function Component17() {
  return (
    <div className="absolute h-[24.15px] top-1 translate-x-[-50%] w-[106.56px]" data-name="Component 6" style={{ left: "calc(50% + 204.89px)" }}>
      <div aria-hidden="true" className="absolute border-[0px_0px_0.8px] border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none" />
      <div className="absolute flex flex-col font-['Inter:Medium',_sans-serif] font-medium h-[31px] justify-center leading-[0] not-italic text-[15.734px] text-center text-white top-[11.2px] tracking-[0.38px] translate-x-[-50%] translate-y-[-50%] w-[106.33px]" style={{ left: "calc(50% - 0.115px)" }}>
        <p className="leading-[30.4px]">Privacy Policy</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="h-[30.4px] relative shrink-0 w-full" data-name="Container">
      <div className="absolute flex flex-col font-['Inter:Medium',_sans-serif] font-medium h-[31px] justify-center leading-[0] not-italic text-[15.883px] text-center text-white top-[15.2px] tracking-[0.38px] translate-x-[-50%] translate-y-[-50%] w-[284.39px]" style={{ left: "calc(50% - 116.005px)" }}>
        <p className="leading-[30.4px]">{`© 2020 Konexa. All rights reserved. `}</p>
      </div>
      <Component6 />
      <div className="absolute flex flex-col font-['Inter:Medium',_sans-serif] font-medium h-[31px] justify-center leading-[0] not-italic text-[19px] text-center text-white top-[15.2px] tracking-[0.38px] translate-x-[-50%] translate-y-[-50%] w-[19.7px]" style={{ left: "calc(50% + 141.96px)" }}>
        <p className="leading-[30.4px]">{` | `}</p>
      </div>
      <Component17 />
    </div>
  );
}

function Container41() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start p-[17px] relative shrink-0 w-[836.84px]" data-name="Container">
      <Container40 />
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start justify-start left-[43px] px-[298.98px] py-0 right-[43px] top-[102px]" data-name="Container" style={{ gap: "1.84741e-13px" }}>
      <Container39 />
      <Container41 />
    </div>
  );
}

function Container43() {
  return (
    <div className="h-[254.2px] max-w-[1600px] relative shrink-0 w-full" data-name="Container">
      <Nav />
      <Container42 />
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute bg-[#000e24] bg-repeat bg-size-[1520.8px_855.45px,auto] bg-top-left box-border content-stretch flex flex-col items-start justify-start left-0 pb-3 pt-0 px-0 right-0 top-[2969.1px]" data-name="Footer" style={{ backgroundImage: `url('${imgFooter}')` }}>
      <div aria-hidden="true" className="absolute border-[#003595] border-[0px_0px_12px] border-solid inset-0 pointer-events-none" />
      <Container43 />
    </div>
  );
}

function KonexaIEnergyCompanyOfTheFuture() {
  return <div className="bg-no-repeat bg-size-[100%_100%] bg-top-left h-[77.88px] max-w-[220px] shrink-0 w-[220px]" data-name="Konexa I Energy Company of the Future" style={{ backgroundImage: `url('${imgKonexaIEnergyCompanyOfTheFuture}')` }} />;
}

function Link9() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start p-[10px] relative shrink-0" data-name="Link">
      <KonexaIEnergyCompanyOfTheFuture />
    </div>
  );
}

function Container44() {
  return (
    <div className="basis-0 box-border content-stretch flex grow items-center justify-start max-w-[1520.8px] min-h-px min-w-px mr-[-8.6px] relative shrink-0" data-name="Container">
      <Link9 />
    </div>
  );
}

function Component7() {
  return (
    <div className="box-border content-stretch flex items-start justify-center pb-[15.47px] pt-[9.18px] px-0 relative shrink-0" data-name="Component 7">
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[15.137px] text-center text-neutral-700 text-nowrap tracking-[2.17px] uppercase">
        <p className="leading-[15.5px] whitespace-pre">Home</p>
      </div>
    </div>
  );
}

function Component18() {
  return (
    <div className="box-border content-stretch flex items-start justify-center pb-[15.47px] pt-[9.18px] px-0 relative shrink-0" data-name="Component 7">
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[15.137px] text-center text-neutral-700 text-nowrap tracking-[2.17px] uppercase">
        <p className="leading-[15.5px] whitespace-pre">Approach</p>
      </div>
    </div>
  );
}

function Component19() {
  return (
    <div className="box-border content-stretch flex items-start justify-center pb-[15.47px] pt-[9.18px] px-0 relative shrink-0" data-name="Component 7">
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[15.137px] text-center text-neutral-700 text-nowrap tracking-[2.17px] uppercase">
        <p className="leading-[15.5px] whitespace-pre">Team</p>
      </div>
    </div>
  );
}

function Component20() {
  return (
    <div className="box-border content-stretch flex items-start justify-center pb-[15.47px] pt-[9.18px] px-0 relative shrink-0" data-name="Component 7">
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[15.137px] text-center text-neutral-700 text-nowrap tracking-[2.17px] uppercase">
        <p className="leading-[15.5px] whitespace-pre">Contact</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="box-border content-stretch flex gap-[37.2px] items-start justify-start pl-[18.6px] pr-[18.61px] py-0 relative shrink-0" data-name="Container">
      <Component7 />
      <Component18 />
      <Component19 />
      <Component20 />
    </div>
  );
}

function Nav1() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start mr-[-8.6px] pb-[0.43px] pt-[0.42px] px-0 relative shrink-0" data-name="Nav">
      <Container45 />
    </div>
  );
}

function TwitterUnauthIcon1() {
  return <img className="block max-w-none size-full" src={imgNav2} />;
}

function TwitterUnauthMask1() {
  return <img className="block max-w-none size-full" src={imgNav3} />;
}

function Component21() {
  return (
    <div className="absolute left-0 size-8 top-0" data-name="Component 3">
      <TwitterUnauthIcon1 />
      <TwitterUnauthMask1 />
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute inset-0" data-name="Container">
      <Component21 />
    </div>
  );
}

function Component22() {
  return (
    <div className="bg-[#003494] overflow-clip relative rounded-[16px] shrink-0 size-8" data-name="Component 4">
      <Container46 />
    </div>
  );
}

function FacebookUnauthIcon1() {
  return <img className="block max-w-none size-full" src={imgComponent6} />;
}

function FacebookUnauthMask1() {
  return <img className="block max-w-none size-full" src={imgNav3} />;
}

function Component23() {
  return (
    <div className="absolute left-0 size-8 top-0" data-name="Component 3">
      <FacebookUnauthIcon1 />
      <FacebookUnauthMask1 />
    </div>
  );
}

function Container47() {
  return (
    <div className="absolute inset-0" data-name="Container">
      <Component23 />
    </div>
  );
}

function Component24() {
  return (
    <div className="bg-[#003494] overflow-clip relative rounded-[16px] shrink-0 size-8" data-name="Component 4">
      <Container47 />
    </div>
  );
}

function LinkedinUnauthIcon1() {
  return <img className="block max-w-none size-full" src={imgComponent7} />;
}

function LinkedinUnauthMask1() {
  return <img className="block max-w-none size-full" src={imgNav3} />;
}

function Component25() {
  return (
    <div className="absolute left-0 size-8 top-0" data-name="Component 3">
      <LinkedinUnauthIcon1 />
      <LinkedinUnauthMask1 />
    </div>
  );
}

function Container48() {
  return (
    <div className="absolute inset-0" data-name="Container">
      <Component25 />
    </div>
  );
}

function Component26() {
  return (
    <div className="bg-[#003494] overflow-clip relative rounded-[16px] shrink-0 size-8" data-name="Component 4">
      <Container48 />
    </div>
  );
}

function Container49() {
  return (
    <div className="box-border content-stretch flex gap-[8.3px] items-start justify-start p-[4.15px] relative shrink-0" data-name="Container">
      <Component22 />
      <Component24 />
      <Component26 />
    </div>
  );
}

function Component8() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start overflow-clip relative shrink-0" data-name="Component 8">
      <Container49 />
    </div>
  );
}

function Container50() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start p-[10px] relative shrink-0" data-name="Container">
      <Component8 />
    </div>
  );
}

function Container51() {
  return (
    <div className="basis-0 box-border content-stretch flex grow items-center justify-end max-w-[1520.8px] min-h-px min-w-px mr-[-8.6px] relative shrink-0" data-name="Container">
      <div className="shrink-0 size-5" data-name="Nav" />
      <Container50 />
    </div>
  );
}

function Container52() {
  return (
    <div className="max-w-[1600px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center max-w-inherit relative size-full">
        <div className="box-border content-stretch flex items-center justify-center max-w-inherit pl-[50px] pr-[58.6px] py-2.5 relative w-full">
          <Container44 />
          <Nav1 />
          <Container51 />
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col items-start justify-start pointer-events-auto shadow-[0px_5px_20px_0px_rgba(41,67,119,0.1)] sticky top-0" data-name="Header">
      <Container52 />
    </div>
  );
}

export default function Component1536WDefault() {
  return (
    <div className="bg-white relative size-full" data-name="1536w default">
      <Main />
      <Footer />
      <div className="absolute inset-0 pointer-events-none">
        <Header />
      </div>
    </div>
  );
}