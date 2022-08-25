import React from "react";
import {  Wrapper } from "./style";
import './style.css'

const PageNotFound = () => {
    const isInside = localStorage.getItem("token");
  return (
    <div
      className={isInside? "section" : "section_public"}
    >
      <Wrapper>
      <div class="notfound">
			<div class="notfound-404">
				<h3>Oops! Page not found</h3>
				<h1><span>4</span><span>0</span><span>4</span></h1>
			</div>
			<h2>we are sorry, but the page you requested was not found</h2>
		</div>
      </Wrapper>
    </div>
  );
};

PageNotFound.propTypes = {};

export default PageNotFound;
