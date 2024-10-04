import joker from "/joker.jpg";

export default function TeacherProfile() {
  const examData = [
    {
      label: "First Name:",
      theData: "Ding",
      label2: "Last Name:",
      theData2: "Liren",
    },
    {
      label: "Email:",
      theData: "ding@email.com",
      label2: "Birthday:",
      theData2: "2015-07-10",
    },
    {
      label: "Nationality:",
      theData: "Ethiopia",
      label2: "Religion:",
      theData2: "Catholic",
    },
    {
      label: "Address:",
      theData: "Hosaena/hexo",
      label2: "Address 2:",
      theData2: "N/A",
    },
    {
      label: "City:",
      theData: "hossana",
      label2: "Phone Number:",
      theData2: "+25190787890",
    },
  ];
  return (
    <div className="p-3 flex gap-4">
      <div className="rounded-md border border-primary shadow self-start">
        <div className="px-2 pt-2">
          <img src={joker} alt="profile picture" width={300} height={300} />
        </div>
        <p className="text-primary px-2 text-lg font-bold">The Joker</p>
        <p className="text-primary px-2 text-sm font-medium">
          ID: 2020-7808-8897-88
        </p>
        <p className="border border-y-primary text-primary px-2 text-sm font-medium">
          Gender: Male
        </p>
        <p className="text-primary px-2 text-sm font-medium">
          Phone Number: +2519070989
        </p>
      </div>
      <div className="flex-1">
        <div className="rounded-md border border-[#e4e4e7] shadow px-6 py-4">
          <table className="border-collapse w-full text-left text-sm">
            <caption className="text-left text-primary font-semibold my-2 text-lg">
              Teacher Information
            </caption>
            <tbody>
              {examData.map((exam, index) => (
                <tr
                  key={index}
                  className="after:bg-gray-400 last:after:content-none after:content-[''] after:w-full after:absolute after:left-0 after:bottom-0 after:h-[1px] relative"
                >
                  <td>
                    <span className="py-2 font-semibold px-2 block">
                      {exam.label}
                    </span>
                  </td>
                  <td>
                    <span className="py-2 font-semibold px-2 block">
                      {exam.theData}
                    </span>
                  </td>
                  <td>
                    <span className="py-2 font-semibold px-2 block">
                      {exam.label2}
                    </span>
                  </td>
                  <td>
                    <span className="py-2 font-semibold px-2 block">
                      {exam.theData2}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="rounded-md border border-[#e4e4e7] shadow px-6 py-4 mt-2">
          <table className="border-collapse w-full text-left text-sm">
            <caption className="text-left text-primary font-semibold my-2 text-lg ">
              Parent Information
            </caption>
            <tbody>
              {examData.map((exam, index) => (
                <tr
                  key={index}
                  className="after:bg-gray-400 last:after:content-none after:content-[''] after:w-full after:absolute after:left-0 after:bottom-0 after:h-[1px] relative"
                >
                  <td>
                    <span className="py-2 font-semibold px-2 block">
                      {exam.label}
                    </span>
                  </td>
                  <td>
                    <span className="py-2 font-semibold px-2 block">
                      {exam.theData}
                    </span>
                  </td>
                  <td>
                    <span className="py-2 font-semibold px-2 block">
                      {exam.label2}
                    </span>
                  </td>
                  <td>
                    <span className="py-2 font-semibold px-2 block">
                      {exam.theData2}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
