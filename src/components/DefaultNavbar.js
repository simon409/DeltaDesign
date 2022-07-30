import { useState } from "react";
import Navbar from "@material-tailwind/react/Navbar";
import { Link } from "react-router-dom";
import { Dropdown, DropdownItem } from "@material-tailwind/react";
import { useTranslation } from "react-i18next";
import NavbarContainer from "@material-tailwind/react/NavbarContainer";
import cookies from "cookies/cookie";
import { Icon } from "@material-tailwind/react";
import NavbarWrapper from "@material-tailwind/react/NavbarWrapper";
import NavbarBrand from "@material-tailwind/react/NavbarBrand";
import NavbarToggler from "@material-tailwind/react/NavbarToggler";
import "../assets/styles/index.css";
import NavbarCollapse from "@material-tailwind/react/NavbarCollapse";
import Nav from "@material-tailwind/react/Nav";
import NavLink from "@material-tailwind/react/NavLink";
import logo from "../assets/img/logo_delta.png";

export default function DefaultNavbar() {
  const [t, i18n] = useTranslation();
  const [openNavbar, setOpenNavbar] = useState(false);
  return (
    <Navbar color="transparent" navbar>
      <NavbarContainer>
        <NavbarWrapper>
          <a href="/" rel="noreferrer">
            <NavbarBrand>
              <img className="w-52" src={logo} alt="delta logo" />
            </NavbarBrand>
          </a>
          <NavbarToggler
            onClick={() => setOpenNavbar(!openNavbar)}
            color="white"
          />
        </NavbarWrapper>

        <NavbarCollapse className="navbar-collapse " open={openNavbar}>
          <Nav>
            <div className="rounded-xl flex flex-col z-50 lg:flex-row lg:items-center ">
              <NavLink href="/" rel="noreferrer" ripple="light">
                <Icon name="home" size="xl" />
                &nbsp;
                {t("home")}
              </NavLink>
              <NavLink href="/profile" rel="noreferrer" ripple="light">
                <Icon name="groups" size="xl" />
                &nbsp;
                {t("about")}
              </NavLink>
              <NavLink href="/services" rel="noreferrer" ripple="light">
                <Icon name="work" size="xl" />
                &nbsp;
                {t("portfolio")}
              </NavLink>
              <div className="text-white">
                <Dropdown
                  color="transparent"
                  size="sm"
                  buttonType="link"
                  buttonText={
                    <div className="py-2.5 font-medium flex items-center">
                      <Icon name="translate" size="xl" />
                      &nbsp;
                      <span className="ml-2">{t("lang")}</span>
                    </div>
                  }
                  ripple="light"
                >
                  <Link
                    to="/"
                    onClick={() => {
                      cookies.remove("lang");
                      cookies.set("lang", "fr", { path: "/" });
                      i18n.changeLanguage("fr");
                    }}
                  >
                    <DropdownItem color="lightBlue">Français</DropdownItem>
                  </Link>
                  <Link
                    to="/"
                    onClick={() => {
                      cookies.remove("lang");
                      cookies.set("lang", "en", { path: "/" });
                      i18n.changeLanguage("en");
                    }}
                  >
                    <DropdownItem color="lightBlue">English</DropdownItem>
                  </Link>
                </Dropdown>
              </div>
            </div>
          </Nav>
        </NavbarCollapse>
      </NavbarContainer>
    </Navbar>
  );
}
