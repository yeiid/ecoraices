"use client"

import Link from "next/link";
import Menu from "./Menu";
import "./header.css";
import { useState } from 'react';

export default function Header() {
  const [Active , setActive] = useState(false)

  return (
    <>
      <section>
        <nav>
          <img
            src="https://cdn-icons-png.flaticon.com/512/2976/2976215.png"
            alt=""
            className="menu navbar-shopin-cart"
            onClick={() => setActive(!Active)}
          />

          <div className={`display ${Active ? '' : 'hiden'}`}>
                <Menu
                    Active={Active}
                    setActive={setActive}
                    />
                </div>

          <div>
            <div className="navbar-header">
              <ul>
                <li>
                  <Link href={"/"}>HOME</Link>
                </li>
                <li>
                  <Link href={"/formulario"}>FORMULARIO</Link>
                </li>
                <li>
                  <Link href={"/nosotros"}>NOSOTROS</Link>
                </li>
                <li>
                  <Link href={"/ayuda"}>AYUDA</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
}
