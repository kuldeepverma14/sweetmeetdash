/* eslint-disable react/prop-types */

function ProgressBar({ stats }) {
    return (
        <>
            {stats?.map((item, i) => {
                return (
                    <div className="mt-5 border border-slate-300 px-5 py-3 bg-white rounded-md sm:mt-0" key={i}>
                        <div className="flex justify-between">
                            <div className="flex flex-col justify-center items-start">
                                <p className="font-bold">{item.title}</p>
                                <p className="text-text text-2xl flex items-end justify-end">{item.count}</p>
                            </div>
                            <div className="flex items-center justify-end">
                               {item.icon}
                            </div>
                        </div>
                        {/* <div className="text-sm">This month</div>
                        <div className="w-full h-2 bg-slate-300 ">
                            <div
                                className="h-full w-[70%] bg-bg1"
                                style={{ width: `${item.score}%` }}
                            ></div>
                        </div>
                        <div className="text-sm flex justify-between">
                            <p>Last month</p>
                            <p>{item.percentage}%</p>
                        </div> */}
                    </div>
                );
            })}
        </>
    );
}

export default ProgressBar;
