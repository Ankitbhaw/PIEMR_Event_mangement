import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Card(props) {
  return (
    <Container className="my-2">
      <div className="p-4 mb-6 card">
        <div className="rounded-lg h-64 overflow-hidden">
          <img
            alt="content"
            className=" object-cover object-center h-full w-full"
            src={props.url}
          />
        </div>
        <h2 className="text-2xl font-medium title-font text-sky-600 mt-5">
          {props.title}
        </h2>
        <p className="text-base leading-relaxed pl-1 mt-2">
          Swag shoivdigoitch literally meditation subway tile tumblr
          cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical
          XOXO lumbersexual.
        </p>
        <Link className="bg-sky-700 inline-flex items-center mt-3 p-2 rounded-xl">
          Learn More
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </Link>
      </div>
    </Container>
  );
}
const Container = styled.div`
  .card {
    width:24vw;
  }

`;
