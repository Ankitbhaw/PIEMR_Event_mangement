import React from "react";
import styled from "styled-components";

export default function RightSide() {
  return (
    <Container>
      <div className="position vh-100">
        <div className="h-50">
          <h3 className="text-center text-white mb-3">Important Notice</h3>

          <div className="text-white">
            <ul>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                </li>
                <li>
                Iste magnam deserunt labore placeat voluptate incidunt quam reprehenderit, 
                </li>
                <li> quasi, dicta ab cum in consectetur ipsa non animi nulla distinctio quaerat. Porro.</li>
                <li>quasi, dicta ab cum in consectetur ipsa non animi nulla distinctio quaerat. Porro.</li>
            </ul>
          </div>
        </div>

        <div className="">
          <h3 className="text-center text-white mb-3"> Important Links
          </h3>
          <div className="text-white">
            <ul>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                </li>
                <li>
                Iste magnam deserunt labore placeat voluptate incidunt quam reprehenderit, 
                </li>
                <li> quasi, dicta ab cum in consectetur ipsa non animi nulla distinctio quaerat. Porro.</li>
                <li>quasi, dicta ab cum in consectetur ipsa non animi nulla distinctio quaerat. Porro.</li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
}
const Container = styled.div`
  .position {
    position: fixed;
    width: 25rem;
  }
  ul li{
    list-style: none;
    padding: 4px 2px;
    border-radius:4px;
    margin-bottom:10px;
  }

  ul li:nth-child(even){
    background-color:blue;
  }
  ul li:nth-child(odd){
    background-color:gray;
  }
  ul li:hover{
    background-color:black;
  }
  
`;
