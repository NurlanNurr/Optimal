import React, { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [letter, setLetter] = useState("");
  const [notification, setNotification] = useState("");
  const [notificationn, setNotificationn] = useState("");
  const [notificationnn, setNotificationnn] = useState("");
  const [notificationnnn, setNotificationnnn] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      setNotification("Adınız 3 ilə 32 simvol arasında olmalıdır!");
    }

    if (!email) {
      setNotificationn("E-mail ünvanı doğru deyil!");
    }
    if (!letter) {
      setNotificationnn("Məktub 10 ilə 3000 simvol arasında olmalıdır!");
    } else {
      setName("");
      setEmail("");
      setLetter("");
      setNotificationnnn("Form tesdiqlendi");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-[15px] text-right">
          <label htmlFor="name">* Adınız: </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border-[1px] w-[83%] h-[40px] focus:outline-none pl-[10px]"
          />
          {notification && (
            <p className="text-start ml-[195px] text-[#f15803] text-xs">
              {notification}
            </p>
          )}
        </div>
        <div className="mb-[15px] text-right">
          <label htmlFor="email">*E-mail ünvanı: </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-[1px] w-[83%] h-[40px] focus:outline-none"
          />
          {notificationn && (
            <p className="text-start ml-[195px] text-[#f15803] text-xs">
              {notificationn}
            </p>
          )}
        </div>
        <div className=" mb-[15px] text-right flex justify-end  flex-wrap">
          <div className="mr-[5px]">
            <label htmlFor="letter  ">*Mektup: </label>
          </div>
          <textarea
            id="letter"
            value={letter}
            onChange={(e) => setLetter(e.target.value)}
            className="w-[83%] h-[60px] border-[1px] focus:outline-none"
          ></textarea>
          {notificationnn && (
            <p className="text-start ml-[195px] text-[#f15803] text-xs pt-[10px] pr-[700px]   ">
              {notificationnn}
            </p>
          )}
        </div>
        <div className="w-[100%] flex justify-end">
          <button
            type="submit"
            className="border-[1px] p-[6px] bg-[#f15803] text-white mt-[-16px]"
          >
            Təstiqlə
          </button>
        </div>
      </form>
      {notificationnnn && <p className="text-center">{notificationnnn}</p>}
    </div>
  );
}

export default Form;