import React from "react";
import { Heart, InstagramLogo, PaperPlaneTilt } from "phosphor-react";

export const Nav = () => {
  return (
    <div className="nav-root">
      <div className="nav-container">
        <div className="nav-header">
          <div>
            <h1 className="nav-title">paige mclaughlin</h1>
            <h2 className="nav-desc">film photographer</h2>
          </div>
          <div className="nav-socials">
            <a href="https://www.instagram.com/portrapaige/">
              <InstagramLogo size={32} weight="fill" />
            </a>
            <a href="mailto:Mspaigelyric@gmail.com">
              <PaperPlaneTilt size={32} weight="fill" />
            </a>
          </div>
        </div>
        <div className="nav-body">
          <p>
            Hey there, I'm Paige. I'm a film photographer with an eye for the
            candid shot.
          </p>
          <p>
            Have a new studio you want to show off? Or you’re just really proud
            of your ceramics?
          </p>
          <p>
            I’m all about authenticity, attention to detail, and personal touch,
            so lemme get cozy with ya and we’ll see what we can make.{" "}
          </p>
          <p>
            <Heart />
          </p>
        </div>
      </div>
    </div>
  );
};

export const MobileNav = () => {
  return (
    <div className="mobile-nav-root">
      <div className="nav-container">
        <div className="nav-header">
          <div>
            <h1 className="nav-title">paige mclaughlin</h1>
            <h2 className="nav-desc">film photographer</h2>
          </div>
          <div className="nav-socials">
            <a href="https://www.instagram.com/portrapaige/">
              <InstagramLogo size={32} weight="fill" />
            </a>
            <a href="mailto:Mspaigelyric@gmail.com">
              <PaperPlaneTilt size={32} weight="fill" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export const MobileDesc = () => {
  return (
    <div className="mobile-nav-desc">
      <p>
        Hey there, I'm Paige. I'm a film photographer with an eye for the candid
        shot.
      </p>
      <p>
        Have a new studio you want to show off? Or you’re just really proud of
        your ceramics?
      </p>
      <p>
        I’m all about authenticity, attention to detail, and personal touch, so
        lemme get cozy with ya and we’ll see what we can make.{" "}
      </p>
      <p>
        <Heart />
      </p>
    </div>
  );
};
