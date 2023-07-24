import React from "react";
import { useState } from "react";
import Pagecontainer from "./Pagecontainer/Pageontainer";

const QeydiyyatForm = () => {
  const [name, setName] = useState("");
  const [surname, setsurName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [location, setLocation] = useState("");
  const [notification, setNotification] = useState("");
  const [notificationn, setNotificationn] = useState("");
  const [notificationnn, setNotificationnn] = useState("");
  const [notificationnnn, setNotificationnnn] = useState("");
  const [notificationnnnn, setNotificationnnnn] = useState("");
  const [notificationnnnnn, setNotificationnnnnn] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      setNotification("Adınız 3 ilə 32 simvol arasında olmalıdır!");
    }
    if (!surname) {
      setNotificationn("Soyad 3 ilə 32 simvol arasında olmalıdır!");
    }

    if (!email) {
      setNotificationnn("E-mail ünvanı doğru deyil!");
    }
    if (!number) {
      setNotificationnnn("Telefon 10 ilə 32 simvol arası olmalıdır!");
    }
    if (!location) {
      setNotificationnnnn("Ünvan 3 ilə 128 simvol arası olmalıdır!");
    } else {
      setName("");
      setsurName("");
      setEmail("");
      setNumber("");
      setLocation("");
      setNotificationnnnnn("Form tesdiqlendi");
    }
  };
  return (
    <Pagecontainer>
    <div>
      <form onSubmit={handleSubmit} className="pt-[30px]">
        <h1 className="pb-[20px] ">Şəxsi məlumatlar</h1>
        <hr />
        <div className="mb-[15px] text-right mt-[20px]">
          <label htmlFor="name">* Ad </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border-[1px] w-[83%] h-[40px] focus:outline-none pl-[10px]"
            placeholder="Ad"
          />
          {notification && (
            <p className="text-start ml-[195px] text-[#f15803] text-xs">
              {notification}
            </p>
          )}
        </div>
        <div className="mb-[15px] text-right">
          <label htmlFor="name">* Soyad </label>
          <input
            type="text"
            id="name"
            value={surname}
            onChange={(e) => setName(e.target.value)}
            className="border-[1px] w-[83%] h-[40px] focus:outline-none pl-[10px]"
            placeholder="Soyad"
          />
          {notificationn && (
            <p className="text-start ml-[195px] text-[#f15803] text-xs">
              {notificationn}
            </p>
          )}
        </div>
        <div className="mb-[15px] text-right">
          <label htmlFor="email">*E-mail </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-[1px] w-[83%] h-[40px] focus:outline-none p-[10px]"
            placeholder="E-mail"
          />
          {notificationnn && (
            <p className="text-start ml-[195px] text-[#f15803] text-xs">
              {notificationnn}
            </p>
          )}
        </div>
        <div className="mb-[15px] text-right">
          <label htmlFor="number">*Telefon </label>
          <input
            type="number"
            id="number"
            value={number}
            onChange={(e) => setEmail(e.target.value)}
            className="border-[1px] w-[83%] h-[40px] focus:outline-none p-[10px]"
            placeholder="Telefon"
          />
          {notificationnnn && (
            <p className="text-start ml-[195px] text-[#f15803] text-xs">
              {notificationnnn}
            </p>
          )}
        </div>
      </form>
      {notificationnnnnn && <p className="text-center">{notificationnnnnn}</p>}
      <form onSubmit={handleSubmit}>
        <h1 className="pb-[20px]">Ünvan</h1>
        <hr />
        <div className="mb-[15px] text-right mt-[20px]">
          <label htmlFor="text">* Ünvan </label>
          <input
            type="text"
            id="text"
            value={location}
            onChange={(e) => setName(e.target.value)}
            className="border-[1px] w-[83%] h-[40px] focus:outline-none pl-[10px]"
            placeholder="Ünvan"
          />
          {notificationnnnn && (
            <p className="text-start ml-[195px] text-[#f15803] text-xs">
              {notificationnnnn}
            </p>
          )}
        </div>
        <div className="mb-[15px] text-right mt-[20px]">
          <label htmlFor="text">* Şəhər </label>
          <input
            type="text"
            id="text"
            onChange={(e) => setName(e.target.value)}
            className="border-[1px] w-[83%] h-[40px] focus:outline-none pl-[10px]"
            placeholder="Şəhər"
          />
        </div>
        <div className="mb-[15px] text-right mt-[20px]">
          <label htmlFor="text">* Ölkə </label>
          <select
            id="country"
            name="country"
            className="border-[1px] w-[83%] h-[40px] focus:outline-none text-[#7d7d8d] p-[10px]"
          >
            <option value="Azerbaijan">Azerbaijan</option>
            <option value="Afghanistan">Afghanistan</option>
            <option value="Åland Islands">Åland Islands</option>
            <option value="Albania">Albania</option>
            <option value="Algeria">Algeria</option>
            <option value="American Samoa">American Samoa</option>
            <option value="Andorra">Andorra</option>
            <option value="Angola">Angola</option>
            <option value="Anguilla">Anguilla</option>
            <option value="Antarctica">Antarctica</option>
            <option value="Antigua and Barbuda">Antigua and Barbuda</option>
            <option value="Argentina">Argentina</option>
            <option value="Armenia">Armenia</option>
            <option value="Aruba">Aruba</option>
            <option value="Australia">Australia</option>
            <option value="Austria">Austria</option>
            <option value="Bahamas">Bahamas</option>
            <option value="Bahrain">Bahrain</option>
            <option value="Bangladesh">Bangladesh</option>
            <option value="Barbados">Barbados</option>
            <option value="Belarus">Belarus</option>
            <option value="Belgium">Belgium</option>
            <option value="Belize">Belize</option>
          </select>
        </div>
        <div className="w-[100%] flex justify-end mt-[20px]">
          <button
            type="submit"
            className="border-[1px] p-[6px] bg-red-600 text-white mt-[-16px]"
          >
            Təstiqlə
          </button>
        </div>
      </form>
    </div>
    </Pagecontainer>
  );
};

export default QeydiyyatForm;