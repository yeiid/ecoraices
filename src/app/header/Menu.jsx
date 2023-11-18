import Link from "next/link";

import "./menu.css"

export default function Header() {
  return (
    <>
      <section>
        <nav>
          <div className="mobile-link">
            <div>
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
