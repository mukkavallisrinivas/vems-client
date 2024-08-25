import GaugeChart from "react-gauge-chart";

const RealTimePowerMeter = ({ kva }) => {
  const minEnergy = 0;
  const maxEnergy = 1600;

  const normalizedPower = (kva - minEnergy) / (maxEnergy - minEnergy);
  const gaugeColors =
    ["#00ff00", "#ff0000"]
  return (
    <div
      className={`bg-white py-1 rounded-lg w-full flex items-center justify-center shadow font-OpenSans dark:bg-[#2c2c2c] dark:text-[#ffffff]`}
    >
      <GaugeChart
        id="gauge-chart"
        nrOfLevels={10}
        colors={gaugeColors}
        percent={normalizedPower}
        textColor="#000"
        formatTextValue={() => `${kva} KVA`}
        className="min-[2000px]:text-3xl xl:text-xl text-lg max-[500px]:text-base font-medium"
        /* needleColor={theme === 'light' ? '#000' : '#fff'} */
      />
    </div>
  );
};

export default RealTimePowerMeter;