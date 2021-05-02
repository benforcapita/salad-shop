import styled from "styled-components";


export const Wrapper = styled.div`
  display:grid;
  z-index:10;
  font-family:Arial, Helvetica, sans-serif;
  grid-template-columns:1fr;
  text-align:center;
 h1
 {
   color:white;
 }
a {
  position: relative;
  margin: 0 auto;
  text-align:center;
  height: 60px;
  width: 300px;
  outline: none;
  line-height:50px;
  text-decoration: none;
  cursor: pointer;
  text-transform: uppercase;
  background-color: green;
  border: 1px solid rgba(22, 76, 167, 0.6);
  border-radius: 10px;
  color: white;
  font-weight: 400;
  font-size: 20px;
  font-family: inherit;
  z-index: 0;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.02, 0.01, 0.47, 1);
  &:hover {
    animation: rotate 0.7s ease-in-out both;
    span {
      animation: storm 0.7s ease-in-out both;
      animation-delay: 0.06s;
    }
  }
}

@keyframes rotate {
  0% {
    transform: rotate(0deg) translate3d(0, 0, 0);
  }
  25% {
    transform: rotate(3deg) translate3d(0, 0, 0);
  }
  50% {
    transform: rotate(-3deg) translate3d(0, 0, 0);
  }
  75% {
    transform: rotate(1deg) translate3d(0, 0, 0);
  }
  100% {
    transform: rotate(0deg) translate3d(0, 0, 0);
  }
}
@keyframes storm {
  0% {
    transform: translate3d(0, 0, 0) translateZ(0);
  }
  25% {
    transform: translate3d(4px, 0, 0) translateZ(0);
  }
  50% {
    transform: translate3d(-3px, 0, 0) translateZ(0);
  }
  75% {
    transform: translate3d(2px, 0, 0) translateZ(0);
  }
  100% {
    transform: translate3d(0, 0, 0) translateZ(0);
  }
}

.btn-pill {
  &:before, &:after {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: #1d89ff;
    content: '';
    opacity: 0;
    transition: transform 0.15s cubic-bezier(0.02, 0.01, 0.47, 1), opacity 0.15s cubic-bezier(0.02, 0.01, 0.47, 1);
    z-index: -1;
    transform: translate(100%, -25%) translate3d(0, 0, 0);
  }
  &:hover {
    &:before, &:after {
      opacity: 0.15;
      transition: transform 0.2s cubic-bezier(0.02, 0.01, 0.47, 1), opacity 0.2s cubic-bezier(0.02, 0.01, 0.47, 1);
    }
    &:before {
      transform: translate3d(50%, 0, 0) scale(0.9);
    }
    &:after {
      transform: translate(50%, 0) scale(1.1);
    } 
  }
}

.btn-shine {
  border: 1px solid;
  overflow: hidden;
  position: relative;
  span {
    z-index: 20;
  }
  &:after {
    background: #38ef7d;
    content: "";
    height: 155px;
    left: -75px;
    opacity: .4;
    position: absolute;
    top: -50px;
    transform: rotate(35deg);
    transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
    width: 50px;
    z-index: -10;
  }
  &:hover {
    &:after {
      left: 120%;
      transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
    }
  }
}

.btn-slide-line {
  &.center {
    &:after {
      left: 50%;
    }
  }
  &:after {
    position: absolute;
    right: 0;
    left: auto;
    transition: .3s;
    content: '';
    width: 0;
    bottom: 0;
    height: 3px;
    background: #164ca7;
  }
  &:hover {
    cursor: pointer;
    &:after {
      width: 100%;
      left: 0;
    }
  }
}
`;