import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";
import SMRLOGO from "../assets/images/Store.png";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { MegaMenu } from "flowbite-react";
export default function Header() {
  return (
    <Navbar fluid rounded className="bg-blue-500 text-white">
      <Navbar.Brand href={"/"} >
        <img
          src={SMRLOGO}
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          SMR-STORE
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button className="mx-2 text-black font-black bg-white"   >
          login
        </Button>
        {/*    <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown> */}
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link className="text-white"  href={"/"}/*  active */>
          Home
        </Navbar.Link>
        <Navbar.Link>
          <MegaMenu.Dropdown    toggle={<p className="text-white" >categories</p>}>
            <ul className="grid grid-cols-3">
              <div className="space-y-4 p-4">
                <li>
                  <a
                    href="#"
                    className="hover:text-primary-600 dark:hover:text-primary-500"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-primary-600 dark:hover:text-primary-500"
                  >
                    Library
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-primary-600 dark:hover:text-primary-500"
                  >
                    Resources
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-primary-600 dark:hover:text-primary-500"
                  >
                    Pro Version
                  </a>
                </li>
              </div>
              <div className="space-y-4 p-4">
                <li>
                  <a
                    href="#"
                    className="hover:text-primary-600 dark:hover:text-primary-500"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-primary-600 dark:hover:text-primary-500"
                  >
                    Support Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-primary-600 dark:hover:text-primary-500"
                  >
                    Terms
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-primary-600 dark:hover:text-primary-500"
                  >
                    Blog
                  </a>
                </li>
              </div>
              <div className="space-y-4 p-4">
                <li>
                  <a
                    href="#"
                    className="hover:text-primary-600 dark:hover:text-primary-500"
                  >
                    Newsletter
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-primary-600 dark:hover:text-primary-500"
                  >
                    Playground
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-primary-600 dark:hover:text-primary-500"
                  >
                    License
                  </a>
                </li>
              </div>
            </ul>
          </MegaMenu.Dropdown>
        </Navbar.Link>
        <Navbar.Link className="text-white" href="about-us">products</Navbar.Link>
       
        <Navbar.Link className="text-white"  href="about-us">About</Navbar.Link>
        <Navbar.Link className="text-white"  href={"/contact-us"}>Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
