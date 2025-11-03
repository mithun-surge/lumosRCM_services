import React from "react";

const workflowNodes = [
  {
    id: "01",
    title: "Verification of\nBenefits",
    position: "top-[320px] left-[20px]",
    badgePosition: "-top-3 -left-3",
  },
  {
    id: "02",
    title: "Charge Entry &\nReview",
    position: "top-[120px] left-[55px]",
    badgePosition: "-top-3 -left-3",
  },
  {
    id: "03",
    title: "Billing &\nSubmission",
    position: "top-[20px] left-[230px]",
    badgePosition: "-top-8 left-[50px]",
  },
  {
    id: "04",
    title: "Rejections /\nFails\nResolution",
    position: "top-[40px] left-[430px]",
    badgePosition: "top-[20px] left-[138px]",
  },
  {
    id: "05",
    title: "Denial\nManagement",
    position: "top-[170px] left-[565px]",
    badgePosition: "top-[30px] left-[138px]",
  },
  {
    id: "06",
    title: "Payment\nand Denial\nPosting",
    position: "top-[360px] left-[585px]",
    badgePosition: "top-[120px] left-[105px]",
  },
  {
    id: "07",
    title: "A/R Follow\nups and\nAppeals",
    position: "top-[520px] left-[480px]",
    badgePosition: "top-[125px] left-[45px]",
  },
  {
    id: "08",
    title: "Write offs /\nAdjustments",
    position: "top-[580px] left-[280px]",
    badgePosition: "-bottom-3 left-[50%] -translate-x-1/2",
  },
  {
    id: "09",
    title: "Reporting",
    position: "top-[500px] left-[85px]",
    badgePosition: "top-[105px] -left-4",
  },
];

export const Box = (): JSX.Element => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-[#e8edf2] via-[#dde5ed] to-[#d4dce5] p-8">
      <div className="relative w-[760px] h-[720px]">
        <svg
          className="absolute inset-0 w-full h-full"
          style={{ zIndex: 0 }}
        >
          <line
            x1="380"
            y1="360"
            x2="100"
            y2="400"
            stroke="#c5d3e0"
            strokeWidth="2"
            opacity="0.6"
          />
          <line
            x1="380"
            y1="360"
            x2="130"
            y2="200"
            stroke="#c5d3e0"
            strokeWidth="2"
            opacity="0.6"
          />
          <line
            x1="380"
            y1="360"
            x2="310"
            y2="80"
            stroke="#c5d3e0"
            strokeWidth="2"
            opacity="0.6"
          />
          <line
            x1="380"
            y1="360"
            x2="515"
            y2="100"
            stroke="#c5d3e0"
            strokeWidth="2"
            opacity="0.6"
          />
          <line
            x1="380"
            y1="360"
            x2="665"
            y2="200"
            stroke="#c5d3e0"
            strokeWidth="2"
            opacity="0.6"
          />
          <line
            x1="380"
            y1="360"
            x2="720"
            y2="420"
            stroke="#c5d3e0"
            strokeWidth="2"
            opacity="0.6"
          />
          <line
            x1="380"
            y1="360"
            x2="650"
            y2="620"
            stroke="#c5d3e0"
            strokeWidth="2"
            opacity="0.6"
          />
          <line
            x1="380"
            y1="360"
            x2="410"
            y2="680"
            stroke="#c5d3e0"
            strokeWidth="2"
            opacity="0.6"
          />
          <line
            x1="380"
            y1="360"
            x2="140"
            y2="600"
            stroke="#c5d3e0"
            strokeWidth="2"
            opacity="0.6"
          />
        </svg>

        {workflowNodes.map((node) => (
          <div
            key={node.id}
            className={`${node.position} w-[160px] h-[160px] absolute flex items-center justify-center`}
            style={{ zIndex: 1 }}
          >
            <div className="w-full h-full rounded-full bg-white shadow-[0px_4px_12px_rgba(0,0,0,0.08)] flex flex-col items-center justify-center px-4 relative border border-gray-100">
              <div className="text-[#1e3a52] text-[15px] font-bold text-center leading-tight whitespace-pre-line [font-family:'Mulish',Helvetica]">
                {node.title}
              </div>
              <div
                className={`${node.badgePosition} w-12 h-12 absolute rounded-full bg-white shadow-[0px_2px_8px_rgba(0,0,0,0.12)] flex items-center justify-center border border-gray-100`}
              >
                <span className="text-[#1e3a52] text-base font-bold [font-family:'Mulish',Helvetica]">
                  {node.id}
                </span>
              </div>
            </div>
          </div>
        ))}

        <div
          className="absolute w-[200px] h-[200px] top-[260px] left-[280px] rounded-full bg-gradient-to-br from-[#2d4a5e] to-[#1a2e3f] shadow-[0px_8px_24px_rgba(0,0,0,0.15)] flex items-center justify-center"
          style={{ zIndex: 2 }}
        >
          <div className="text-white text-[18px] font-bold text-center leading-snug px-6 [font-family:'Mulish',Helvetica]">
            End-to-End<br />Visibility
          </div>
        </div>
      </div>
    </div>
  );
};
