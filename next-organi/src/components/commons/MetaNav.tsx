import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LanguageMenu from "./LanguageMenu";
import { faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faLinkedinIn, faPinterestP, faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function MetaNav() {
  return (
    <div className="flex items-center bg-slate-50 h-10">
      <div className="flex justify-between w-full px-[7rem]">
        <div>
          <ul className="flex divide-x">
            <li className="flex pr-5">
              <FontAwesomeIcon icon={faEnvelope} className="w-4" />
              <a href="mailto:hello@colorlib.com" className="pl-2">hello@colorlib.com</a>
            </li>
            <li className="pl-5">
              Free Shipping for all Order of $99
            </li>
          </ul>
        </div>

        <div className="flex">
          <ul className="flex divide-x">
            <li className="pt-1">
              <ul className="flex justify-between items-center w-32 pr-5">
                <li>
                  <FontAwesomeIcon icon={faFacebookF} className="w-2" />
                </li>
                <li>
                  <FontAwesomeIcon icon={faTwitter} className="w-3" />
                </li>
                <li>
                  <FontAwesomeIcon icon={faLinkedinIn} className="w-3" />
                </li>
                <li>
                  <FontAwesomeIcon icon={faPinterestP} className="w-3" />
                </li>
              </ul>
            </li>
            <li className="px-5">
              <LanguageMenu />
            </li>
            <li className="flex pl-5">
              <FontAwesomeIcon icon={faUser} className="w-3" />
              <a href="/" className="pl-2">Login</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
