import React from "react";
import { Link } from "react-router-dom";
import { AiFillCaretRight } from "react-icons/ai";
// import Swiperss from "../components/Swiper3";
const Filiallar = () => {
    return (
        <>
            <div className="lg:w-[1170px] lg:my-0 lg:mx-auto  lg:pr-[15px] lg:pl-[15px] border-t w-full">
                <ul className="flex gap-4 mt-[20px] mr-[0px] mb-[20px] ml-[0px] text-sm">
                    <li className="flex items-center gap-2">
                        <Link to="/home" className="hover:text-[#f15803]">
                            Ana səhifə
                        </Link>
                        <AiFillCaretRight />
                    </li>
                    <li>
                        <Link to="/" className="text-[#6b6a81]">
                            Filiallar
                        </Link>
                    </li>
                </ul>
                <div className="w-[100%] flex justify-center mt-[20px] mb-[20px]">
                    <h1 className="text-3xl text-red-600">Filiallar</h1>
                </div>
                <div className="lg:w-[100%] flex justify-center ">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97231.94346839706!2d49.8233948570924!3d40.39781210090822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x403064b3b79ae7f9%3A0xd591f230de2f06f2!2sOptimal!5e0!3m2!1saz!2saz!4v1688391892605!5m2!1saz!2saz"
                        width="600"
                        height="450"
                        style={{ border: "0" }}
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                        className="w-[1200px]"
                    >
                    </iframe>
                   
                </div>
                <div className="mt-[10px] lg:w-[1170px] w-full flex justify-center">
                    <h1 className="text-3xl">Filiallar</h1>
                </div>
                <div className="mt-[20px] lg:flex lg:flex-wrap flex flex-wrap justify-center">
                    <div className="min-h-[253px] w-[277px]">
                        <div className="mb-[50px]">
                            <span className="font-semibold">Bakıxanov filialı</span>
                            <p className="text-[#4d4d4d] text-sm">
                                <span>
                                Sabunçu ray., Bakıxanov qəs., S.Mehmandarov küç. 1B <br />{" "}
                                    <br />
                                    İş saatı: 10:00-20:00
                                </span>
                            </p>
                            <br />
                            <p className=" text-[#4d4d4d] text-sm">
                                <span>
                                    Tel: <span>(+994 12) 499 67 58/43/60</span>
                                    <br />
                                    Mob: <span>(+994 51) 206 45 89/06</span>
                                    <br />
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="min-h-[253px] w-[277px]">
                        <div className="mb-[50px]">
                            <span className="font-semibold">Binə filialı</span>
                            <p className="text-[#4d4d4d] text-sm">
                                <span>
                                Xəzər ray., Binə qəs., C. Cabbarlı küç. 1 (Kitay evi ilə üzbəüz)
                                    <br /> <br />
                                    İş saatı: 10:00-20:00
                                </span>
                            </p>
                            <br />
                            <p className=" text-[#4d4d4d] text-sm">
                                <span>
                                    Tel: <span>(+994 12) 499 67 58/59/60</span>
                                    <br />
                                    Mob: <span>(+994 51) 206 12 76/06</span>
                                    <br />
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="min-h-[253px] w-[277px]">
                        <div className="mb-[50px]">
                            <span className="font-semibold">Hızi Aslanov filialı</span>
                            <p className="text-[#4d4d4d] text-sm">
                                <span>
                                Xətai ray., M.Hadi küç. 73 (H.Aslanov M/S yanı)
                                    <br /> <br />
                                    İş saatı: 10:00-20:00
                                </span>
                            </p>
                            <br />
                            <p className=" text-[#4d4d4d] text-sm">
                                <span>
                                    Tel: <span>(+994 12) 499 23 58/59/60</span>
                                    <br />
                                    Mob: <span>(+994 51) 206 54 05/06</span>
                                    <br />
                                </span>
                            </p>
                        </div>
                    </div>

                    <div className="min-h-[253px] w-[277px]">
                        <div className="mb-[50px]">
                            <span className="font-semibold">Hövsan filialı</span>
                            <p className="text-[#4d4d4d] text-sm">
                                <span>
                                Suraxanı ray., Hövsan qəs. O. Şabanov küç. (Yeni Məscidin qarşısı)
                                    <br /> <br />
                                    İş saatı: 10:00-20:00
                                </span>
                            </p>
                            <br />
                            <p className=" text-[#4d4d4d] text-sm">
                                <span>
                                    Tel: <span>(+994 12) 499 43 32/59/60</span>
                                    <br />
                                    Mob: <span>(+994 51) 204 34 05/06</span>
                                    <br />
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="min-h-[253px] w-[277px]">
                        <div className="mb-[50px]">
                            <span className="font-semibold">Nərimanov Filialı</span>
                            <p className="text-[#4d4d4d] text-sm">
                                <span>
                                Nərimanov ray., Təbriz küç. 79 (H.Əliyev Mərkəzinin yanı) <br /> <br />
                                    İş saatı: 10:00-20:00
                                </span>
                            </p>
                            <br />
                            <p className=" text-[#4d4d4d] text-sm">
                                <span>
                                    Tel: <span>(+994 12) 499 87 58/59/60</span>
                                    <br />
                                    Mob: <span>(+994 51) 206 89 05/06</span>
                                    <br />
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="min-h-[253px] w-[277px]">
                        <div className="mb-[50px]">
                            <span className="font-semibold">Sədərək filialı</span>
                            <p className="text-[#4d4d4d] text-sm">
                                <span>
                                Qaradağ ray., Sədərək T.M. Şirniyyat bölməsi 2-ci sıra{" "}
                                    <br /> <br />
                                    İş saatı: 10:00-20:00
                                </span>
                            </p>
                            <br />
                            <p className=" text-[#4d4d4d] text-sm">
                                <span>
                                    Tel: <span>(+994 12) 567 32 58/59/60</span>
                                    <br />
                                    Mob: <span>(+994 51) 895 89 34/06</span>
                                    <br />
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="min-h-[253px] w-[277px]">
                        <div className="mb-[50px]">
                            <span className="font-semibold">Maştağa filialı</span>
                            <p className="text-[#4d4d4d] text-sm">
                                <span>
                                Sabunçu ray., Seyid İbad Ağa küç. 93A

                                    <br /> <br />
                                    İş saatı: 10:00-20:00
                                </span>
                            </p>
                            <br />
                            <p className=" text-[#4d4d4d] text-sm">
                                <span>
                                    Tel: <span>(+994 12) 544 78 84/59/60</span>
                                    <br />
                                    Mob: <span>(+994 51) 589 45 34/06</span>
                                    <br />
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="min-h-[253px] w-[277px]">
                        <div className="mb-[50px]">
                            <span className="font-semibold">Xırdalan filialı</span>
                            <p className="text-[#4d4d4d] text-sm">
                                <span>
                                Abşeron ray., H.Əliyev pr. 457 (H.Əliyev parkı ilə üzbəüz)

                                    <br /> <br />
                                    İş saatı: 10:00-20:00
                                </span>
                            </p>
                            <br />
                            <p className=" text-[#4d4d4d] text-sm">
                                <span>
                                    Tel: <span>(+994 12) 754 78 84/59/60</span>
                                    <br />
                                    Mob: <span>(+994 51) 348 45 34/06</span>
                                    <br />
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-[1px] mt-[50px] mb-[40px] swiper lg:w-[1170px] my-0 mx-auto  pr-[15px] pl-[15px] flex lg:justify-between  w-full  justify-center items-center">
                {/* <Swiperss /> */}
            </div>
        </>
    );
};

export default Filiallar;