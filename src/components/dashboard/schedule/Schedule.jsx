import { useState } from "react";

import { Link } from "react-router-dom";
import { AiOutlineHistory } from "react-icons/ai";
function DashboardSchedule() {
  const [data, setData] = useState([
    {
      title: "Some Text",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae impedit suscipit consectetur asperiores? Ea optio facilis eos laboremaxime voluptates ad vel, deleniti veritatis odit voluptatibusdolorem deserunt dolor distinctio quidem! Veniam, facilis vel aliasrerum excepturi, laborum suscipit officia placeat doloremque ametimpedit cum ut perferendis quaerat non quae ducimus iure namquisquam ipsa repudiandae itaque. Minus fuga temporibus perspiciatistenetur esse, doloremque in exercitationem deleniti? Ex aliaslaboriosam excepturi ratione non a id facilis, expedita repellat adrepudiandae, quam saepe soluta eos placeat sapiente quibusdam oditillo perspiciatis mollitia distinctio quasi natus doloremque fugit?Cupiditate quo dignissimos perferendis.",
      date: "28-09-1004",
    },
    {
      title: "Some Text",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae impedit suscipit consectetur asperiores? Ea optio facilis eos laboremaxime voluptates ad vel, deleniti veritatis odit voluptatibusdolorem deserunt dolor distinctio quidem! Veniam, facilis vel aliasrerum excepturi, laborum suscipit officia placeat doloremque ametimpedit cum ut perferendis quaerat non quae ducimus iure namquisquam ipsa repudiandae itaque. Minus fuga temporibus perspiciatistenetur esse, doloremque in exercitationem deleniti? Ex aliaslaboriosam excepturi ratione non a id facilis, expedita repellat adrepudiandae, quam saepe soluta eos placeat sapiente quibusdam oditillo perspiciatis mollitia distinctio quasi natus doloremque fugit?Cupiditate quo dignissimos perferendis.",
      date: "28-09-1004",
    },
    {
      title: "Some Text",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae impedit suscipit consectetur asperiores? Ea optio facilis eos laboremaxime voluptates ad vel, deleniti veritatis odit voluptatibusdolorem deserunt dolor distinctio quidem! Veniam, facilis vel aliasrerum excepturi, laborum suscipit officia placeat doloremque ametimpedit cum ut perferendis quaerat non quae ducimus iure namquisquam ipsa repudiandae itaque. Minus fuga temporibus perspiciatistenetur esse, doloremque in exercitationem deleniti? Ex aliaslaboriosam excepturi ratione non a id facilis, expedita repellat adrepudiandae, quam saepe soluta eos placeat sapiente quibusdam oditillo perspiciatis mollitia distinctio quasi natus doloremque fugit?Cupiditate quo dignissimos perferendis.",
      date: "28-09-1004",
    },
  ]);
  return (
    <div className="h-full p-3">
      <div className="flex justify-between">
        <span>date</span>
        <span>date</span>
        <Link to="new">
          <button type="button" className="btn">
            Make
          </button>
        </Link>
      </div>

      <div>
        {data.map((data, i) => (
          <div
            className="border border-white border-solid my-1 rounded-md py-3 px-4 glass"
            key={i}
          >
            <span className="block text-2xl my-2">{data.title}</span>
            <p className="">{data.description}</p>
            <div className="text-right flex justify-end my-2 items-center">
              <span className="h-5">
                <AiOutlineHistory />
              </span>
              <time className="text-sm font-semibold ms-1" dateTime={data.date}>
                {data.date}
              </time>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DashboardSchedule;
