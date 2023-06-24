import React, { useState } from "react";

const Student = () => {
  const [formData, setFormData] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newFormData = {
      name: e.target.name.value,
      rollnumber: e.target.rollnumber.value,
      age: e.target.age.value,
      marks: e.target.marks.value,
    };
    setFormData([...formData, newFormData]);
  };
  console.log(formData);
  return (
    <div>
      <div className="flex gap-4 justify-center p-10 items-center ">
        <form onSubmit={handleSubmit} action="">
          <div className="bg-yellow-100 shadow-sky-500 w-auto pb-8 pt-8 px-8 flex flex-col">
            <div>
              <label className="p-2 block" htmlFor="">
                Enter Student Name
              </label>
              <input
                type="text"
                name="name"
                className="bg-yellow-300 p-1 block mx-2 w-80"
              />
            </div>
            <div>
              <label className="p-2 block" htmlFor="rollnumber">
                Enter Roll Number
              </label>
              <input
                type="number"
                id="rollnumber"
                name="rollnumber"
                className="bg-yellow-300 p-1  block mx-2 w-80"
              />
            </div>
            <div>
              <label className="p-2 block" htmlFor="age">
                Enter Age
              </label>
              <input
                id="age"
                type="number"
                className="bg-yellow-300 p-1 mx-2 w-80"
                name="age"
              />
            </div>
            <div>
              <label className="p-2 block" htmlFor="">
                Enter Marks
              </label>
              <input
                type="number"
                name="marks"
                className="bg-yellow-300 p-1 mx-2 w-80"
              />
            </div>

            <div className="p-2">
              <button
                type="submit"
                className="px-2 py-1 rounded-md bg-blue-700 text-white block"
              >
                Addme
              </button>
            </div>
          </div>
        </form>

        <div className="scroll-py-10 snap-y h-72 overflow-scroll table-fixed ">
          <table className="">
            <thead>
              <tr>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Roll Number
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Age
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Marks
                </th>
              </tr>
            </thead>
            {formData.map((item, index) => {
              return (
                <tbody key={index}>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {item.rollnumber}years
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">{item.age}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{item.marks}</td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Student;