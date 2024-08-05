"use client";
import CountUp from "react-countup";

const stats = [
  { num: 250, text: "Variations" },
  { num: 500, text: "Shops" },
  { num: 300, text: "Customers" }
];

const Stats = () => {
  return (
    <div className='max-container mx-auto flex justify-start max-sm:gap-10 items-start flex-wrap w-full mt-20 gap-16'>
      {stats.map((item, index) => (
        <div key={index} className='text-center'>
          <CountUp end={item.num} suffix="+" duration={4} delay={2} className="text-xl xl:text-4xl text-black font-extrabold" />
          <p className="mt-2 text-lg">{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Stats;
