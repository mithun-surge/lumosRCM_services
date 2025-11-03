import React from "react";
import { Badge } from "../../components/ui/badge";

const workflowNodes = [
  {
    id: "01",
    title: "Verification of Benefits",
    containerClasses: "w-[169px] h-[169px] p-[58px] top-[322px] left-0",
    badgeClasses: "w-16 h-16 -top-3 left-[-9px]",
  },
  {
    id: "02",
    title: "Charge Entry & Review",
    containerClasses: "w-[169px] h-[169px] p-[58px] top-[115px] left-14",
    badgeClasses: "w-16 h-16 -top-3 left-[-9px]",
  },
  {
    id: "03",
    title: "Billing & Submission",
    containerClasses: "w-[169px] h-[169px] px-3.5 py-[58px] top-0 left-[229px]",
    badgeClasses: "w-16 h-16 -top-8 left-[52px]",
  },
  {
    id: "04",
    title: "Rejections / Fails\nResolution",
    containerClasses: "w-[169px] h-[169px] px-3.5 py-[58px] top-6 left-[431px]",
    badgeClasses: "w-16 h-16 top-[21px] left-[137px]",
  },
  {
    id: "05",
    title: "Denial Management",
    containerClasses:
      "w-[169px] h-[169px] px-3.5 py-[58px] top-[163px] left-[567px]",
    badgeClasses: "w-16 h-16 top-[30px] left-[137px]",
  },
  {
    id: "06",
    title: "Payment\nand Denial Posting",
    containerClasses: "w-[169px] h-[169px] top-[359px] left-[589px]",
    badgeClasses: "w-16 h-16 top-[119px] left-[105px]",
  },
  {
    id: "07",
    title: "A/R Follow\nups and Appeals",
    containerClasses:
      "w-[169px] h-[169px] px-3.5 py-[58px] top-[527px] left-[482px]",
    badgeClasses: "w-16 h-16 px-3.5 py-[58px] top-[124px] left-[99px]",
  },
  {
    id: "08",
    title: "Write offs / Adjustments",
    containerClasses:
      "w-[169px] h-[169px] px-3.5 py-[58px] top-[590px] left-[286px]",
    badgeClasses: "w-16 h-16 px-3.5 py-[58px] top-[124px] left-[99px]",
  },
  {
    id: "09",
    title: "Reporting",
    containerClasses:
      "w-[169px] h-[169px] px-3.5 py-[58px] top-[506px] left-[89px]",
    badgeClasses: "w-16 h-16 top-[105px] left-[-18px]",
  },
];

const connectionLines = [
  {
    src: "/line-14.svg",
    alt: "Line",
    classes: "top-[460px] left-[369px] w-[7px] h-[130px]",
  },
  {
    src: "/line-17.svg",
    alt: "Line",
    classes: "top-[428px] left-[231px] w-[85px] h-[100px]",
  },
  {
    src: "/line-18.svg",
    alt: "Line",
    classes: "top-[375px] left-[169px] w-32 h-6",
  },
  {
    src: "/line-19.svg",
    alt: "Line",
    classes: "top-[247px] left-[211px] w-[103px] h-20",
  },
  {
    src: "/line-20.svg",
    alt: "Line",
    classes: "top-[167px] left-[333px] w-[30px] h-[127px]",
  },
  {
    src: "/line-21.svg",
    alt: "Line",
    classes: "top-[183px] left-[417px] w-[60px] h-[117px]",
  },
  {
    src: "/line-22.svg",
    alt: "Line",
    classes: "top-[281px] left-[459px] w-[116px] h-16",
  },
  {
    src: "/line-15.svg",
    alt: "Line",
    classes: "top-[443px] left-[431px] w-[82px] h-[104px]",
  },
  {
    src: "/line-16.svg",
    alt: "Line",
    classes: "top-[390px] left-[465px] w-[127px] h-[34px]",
  },
];

export const Box = (): JSX.Element => {
  return (
    <div className="relative w-[758px] h-[759px]">
      <div className="fixed top-[296px] left-[33px] w-[758px] h-[759px]">
        {workflowNodes.map((node) => (
          <div
            key={node.id}
            className={`${node.containerClasses} border-[#e6e6e6] shadow-[0px_2px_6px_#e6e6e640,inset_0px_1px_4px_#e6e6e680] bg-[linear-gradient(161deg,rgba(255,255,255,1)_0%,rgba(230,230,230,1)_100%)] flex flex-col items-center justify-center gap-2.5 absolute rounded-[84.5px] border border-solid`}
          >
            <div className="relative w-[141px] [font-family:'Mulish',Helvetica] font-bold text-[#092b44] text-lg text-center tracking-[0] leading-[normal] whitespace-pre-line">
              {node.title}
            </div>

            <Badge
              className={`${node.badgeClasses} shadow-[0px_8px_24px_#0000001f,inset_0px_1px_4px_#e6e6e680] bg-[linear-gradient(161deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)] flex flex-col items-center justify-center gap-2.5 absolute rounded-[84.5px] border border-solid border-[#e6e6e6] h-auto`}
            >
              <span className="relative w-fit [font-family:'Mulish',Helvetica] font-bold text-[#092b44] text-lg text-center tracking-[0] leading-[normal]">
                {node.id}
              </span>
            </Badge>
          </div>
        ))}

        {connectionLines.map((line, index) => (
          <img
            key={`line-${index}`}
            className={`${line.classes} absolute object-cover`}
            alt={line.alt}
            src={line.src}
          />
        ))}

        <div className="w-[169px] h-[169px] px-3.5 py-[58px] top-[291px] left-[calc(50.00%_-_82px)] border-[#8e9da9] shadow-[0px_2px_6px_#e1ce4740,inset_0px_1px_4px_#fefced80] bg-[linear-gradient(161deg,rgba(58,85,105,1)_0%,rgba(9,43,68,1)_100%)] flex flex-col items-center justify-center gap-2.5 absolute rounded-[84.5px] border border-solid">
          <div className="relative w-[141px] [font-family:'Mulish',Helvetica] font-bold text-white text-xl text-center tracking-[0] leading-[normal]">
            End-to-End Visibility
          </div>
        </div>
      </div>
    </div>
  );
};
