"use client";
import CountUp from "react-countup";

const stats = [
  { num: 250, text: "Variations" },
  { num: 500, text: "Shops" },
  { num: 300, text: "Customers" }
];

const Stats = () => {
  return (
    <div className='max-container flex justify-start max-sm:gap-10 items-start flex-wrap w-full mt-20 gap-14'>
      {stats.map((item, index) => {
        const suffix = item.num === 300 ? "k+" : "+";

        return (
          <div key={index} className='text-center mt-[-20px]'>
            <CountUp 
              end={item.num} 
              suffix={suffix} 
              duration={4} 
              delay={2} 
              className="text-3xl xl:text-5xl text-black font-extrabold" 
            />
            <p className="mt-2 text-lg">{item.text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Stats;
