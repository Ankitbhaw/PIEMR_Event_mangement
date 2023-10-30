import React from "react";

import styled from "styled-components";

import news1 from "../Assets/news1.jpg";

export default function Sports() {
  return (
    <Container>
      <section className="text-white body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src={news1}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h1 className="text-sky-400 text-3xl title-font font-medium mb-3">
                Memorandum of Understanding (MoU)
              </h1>
              <h2 className="text-sm title-font text-sky-600 tracking-widest mb-8 mx-2">
                Memorandum of Understanding (MoU) Signed between PIEMR and
                Virtual Cyber Labs to Foster Collaboration in Cybersecurity
                Education
              </h2>

              <p className="leading-relaxed my-3">
                Prestige Institute of Engineering Management & Research (PIEMR)
                Indore, Madhya Pradesh,a leading educational institution, and
                Virtual Cyber Labs, a renowned cybersecurity company, have
                signed a Memorandum of Understanding (MoU) to establish a
                collaborative partnership in the field of cybersecurity
                education.
              </p>
              <p className="leading-relaxed">
                Under this MoU, PIEMR and Virtual Cyber Labs will work together
                to enhance students’ cybersecurity learning experience. The
                collaboration aims to provide access to state-of-the-art virtual
                labs and cutting-edge cybersecurity tools to strengthen
                practical skills and knowledge.
              </p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5"></div>
              <div className="flex">
                <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}
const Container = styled.div``;
